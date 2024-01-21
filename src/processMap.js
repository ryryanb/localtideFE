/* global google */

import configuration from "./configuration";

/** Hides a DOM element and optionally focuses on focusEl. */
function hideElement(el, focusEl) {
  el.style.display = "none";
  if (focusEl) focusEl.focus();
}

/** Shows a DOM element that has been hidden and optionally focuses on focusEl. */
function showElement(el, focusEl) {
  el.style.display = "block";
  if (focusEl) focusEl.focus();
}

/** Determines if a DOM element contains content that cannot be scrolled into view. */
function hasHiddenContent(el) {
  const noscroll = window.getComputedStyle(el).overflowY.includes("hidden");
  return noscroll && el.scrollHeight > el.clientHeight;
}

/** Format a Place Type string by capitalizing and replacing underscores with spaces. */
function formatPlaceType(str) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized.replace(/_/g, " ");
}

/** Initializes an array of zeros with the given size. */
function initArray(arraySize) {
  const array = [];
  while (array.length < arraySize) {
    array.push(0);
  }
  return array;
}

/** Assigns star icons to an object given its rating (out of 5). */
function addStarIcons(obj) {
  if (!obj.rating) return;
  const starsOutOfTen = Math.round(2 * obj.rating);
  const fullStars = Math.floor(starsOutOfTen / 2);
  const halfStars = fullStars !== starsOutOfTen / 2 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  // Express stars as arrays to make iterating in Handlebars easy.
  obj.fullStarIcons = initArray(fullStars);
  obj.halfStarIcons = initArray(halfStars);
  obj.emptyStarIcons = initArray(emptyStars);
}

/**
 * Constructs an array of opening hours by day from a PlaceOpeningHours object,
 * where adjacent days of week with the same hours are collapsed into one element.
 */
function parseDaysHours(openingHours) {
  const daysHours = openingHours.weekday_text
    .map((e) => e.split(/\:\s+/))
    .map((e) => ({ days: e[0].substr(0, 3), hours: e[1] }));

  for (let i = 1; i < daysHours.length; i++) {
    if (daysHours[i - 1].hours === daysHours[i].hours) {
      if (daysHours[i - 1].days.indexOf("-") !== -1) {
        daysHours[i - 1].days = daysHours[i - 1].days.replace(
          /\w+$/,
          daysHours[i].days,
        );
      } else {
        daysHours[i - 1].days += " - " + daysHours[i].days;
      }
      daysHours.splice(i--, 1);
    }
  }
  return daysHours;
}
const ND_NUM_PLACES_INITIAL = 5;

/** Number of additional POIs to show when 'Show More' button is clicked. */
const ND_NUM_PLACES_SHOW_MORE = 5;

/** Maximum number of place photos to show on the details panel. */
const ND_NUM_PLACE_PHOTOS_MAX = 6;

/** Minimum zoom level at which the default map POI pins will be shown. */
const ND_DEFAULT_POI_MIN_ZOOM = 18;

/** Mapping of Place Types to Material Icons used to render custom map markers. */
const ND_MARKER_ICONS_BY_TYPE = {
  // Full list of icons can be found at https://fonts.google.com/icons
  _default: "circle",
  restaurant: "restaurant",
  cafe: "local_cafe",
  bar: "local_bar",
  park: "park",
  museum: "museum",
  supermarket: "local_grocery_store",
  electronics_store: "local_mall",
  home_goods_store: "local_mall",
  shopping_mall: "local_mall",
  primary_school: "school",
  secondary_school: "school",
  bank: "money",
  atm: "atm",
  tourist_attraction: "local_see",
  laundry: "local_laundry_service",
  post_office: "local_post_office",
  library: "local_library",
  hospital: "local_hospital",
  police: "local_police",
  fire_station: "local_fire_department",
};

const processMap = () => {
  const widget = {};
  // Example of data fetching (using a hypothetical fetchData function)
  const widgetEl = document.querySelector(".neighborhood-discovery");
  widget.center = configuration.mapOptions.center;
  widget.places = configuration.pois || [];
  initializeMap(widgetEl);
  initializePlaceDetails();

  /** Initializes Search Input for the widget. */

  function initializeMap(widgetEl) {
    const mapOptions = configuration.mapOptions;
    widget.mapBounds = new google.maps.Circle({
      center: widget.center,
      radius: configuration.mapRadius,
    }).getBounds();
    mapOptions.restriction = { latLngBounds: widget.mapBounds };
    mapOptions.mapTypeControlOptions = {
      position: google.maps.ControlPosition.TOP_RIGHT,
    };
    widget.map = new google.maps.Map(
      widgetEl.querySelector(".map"),
      mapOptions,
    );
    widget.map.fitBounds(widget.mapBounds, /* padding= */ 0);
    widget.map.addListener("click", (e) => {
      // Check if user clicks on a POI pin from the base map.
      if (e.placeId) {
        e.stop();
        widget.selectPlaceById(e.placeId);
      }
    });
    widget.map.addListener("zoom_changed", () => {
      // Customize map styling to show/hide default POI pins or text based on zoom level.
      const hideDefaultPoiPins = widget.map.getZoom() < ND_DEFAULT_POI_MIN_ZOOM;
      widget.map.setOptions({
        styles: [
          {
            featureType: "poi",
            elementType: hideDefaultPoiPins ? "labels" : "labels.text",
            stylers: [{ visibility: "off" }],
          },
        ],
      });
    });

    const markerPath = widgetEl
      .querySelector(".marker-pin path")
      .getAttribute("d");
    const drawMarker = function (
      title,
      position,
      fillColor,
      strokeColor,
      labelText,
    ) {
      return new google.maps.Marker({
        title: title,
        position: position,
        map: widget.map,
        icon: {
          path: markerPath,
          fillColor: fillColor,
          fillOpacity: 1,
          strokeColor: strokeColor,
          anchor: new google.maps.Point(13, 35),
          labelOrigin: new google.maps.Point(13, 13),
        },
        label: {
          text: labelText,
          color: "white",
          fontSize: "16px",
          fontFamily: "Material Icons",
        },
      });
    };

    // Add marker for the specified Place object.
    widget.addPlaceMarker = function (place) {
      place.marker = drawMarker(
        place.name,
        place.coords,
        "#EA4335",
        "#C5221F",
        place.icon,
      );
      place.marker.addListener(
        "click",
        () => void widget.selectPlaceById(place.placeId),
      );
    };

    // Fit map to bounds that contain all markers of the specified Place objects.
    widget.updateBounds = function (places) {
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(widget.center);
      for (let place of places) {
        bounds.extend(place.marker.getPosition());
      }
      widget.map.fitBounds(bounds, /* padding= */ 100);
    };

    // Marker used to highlight a place from Autocomplete search.
    widget.selectedPlaceMarker = new google.maps.Marker({
      title: "Point of Interest",
    });
  } //initializeMap

  function initializePlaceDetails() {
//const detailsService = new google.maps.places.PlacesService(widget.map);
    const placeIdsToDetails = new Map(); // Create object to hold Place results.

    for (let place of widget.places) {
      placeIdsToDetails.set(place.placeId, place);
      place.fetchedFields = new Set(["place_id"]);
    }

    widget.fetchPlaceDetails = function (placeId, fields, callback) {
      if (!placeId || !fields) return;

      // Check for field existence in Place object.
      let place = placeIdsToDetails.get(placeId);
      if (!place) {
        place = { placeId: placeId, fetchedFields: new Set(["place_id"]) };
        placeIdsToDetails.set(placeId, place);
      }
      const missingFields = fields.filter(
        (field) => !place.fetchedFields.has(field),
      );
      if (missingFields.length === 0) {
        callback(place);
        return;
      }

      const request = { placeId: placeId, fields: missingFields };
      let retryCount = 0;

      const processResult = function (result, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          // If query limit has been reached, wait before making another call;
          // Increase wait time of each successive retry with exponential backoff
          // and terminate after five failed attempts.
          if (
            status ===
              google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT &&
            retryCount < 5
          ) {
            const delay = (Math.pow(2, retryCount) + Math.random()) * 500;
          //  setTimeout(
           //   () => void detailsService.getDetails(request, processResult),
            //  delay,
         //   );
            retryCount++;
          }
          return;
        }

        // Basic details.
        if (result.name) place.name = result.name;
        if (result.geometry) place.coords = result.geometry.location;
        if (result.formatted_address) place.address = result.formatted_address;
        if (result.photos) {
          place.photos = result.photos
            .map((photo) => ({
              urlSmall: photo.getUrl({ maxWidth: 200, maxHeight: 200 }),
              urlLarge: photo.getUrl({ maxWidth: 1200, maxHeight: 1200 }),
              attrs: photo.html_attributions,
            }))
            .slice(0, ND_NUM_PLACE_PHOTOS_MAX);
        }
        if (result.types) {
          place.type = formatPlaceType(result.types[0]);
          place.icon = ND_MARKER_ICONS_BY_TYPE["_default"];
          for (let type of result.types) {
            if (type in ND_MARKER_ICONS_BY_TYPE) {
              place.type = formatPlaceType(type);
              place.icon = ND_MARKER_ICONS_BY_TYPE[type];
              break;
            }
          }
        }
        if (result.url) place.url = result.url;

        // Contact details.
        if (result.website) {
          place.website = result.website;
          const url = new URL(place.website);
          place.websiteDomain = url.hostname;
        }
        if (result.formatted_phone_number)
          place.phoneNumber = result.formatted_phone_number;
        if (result.opening_hours)
          place.openingHours = parseDaysHours(result.opening_hours);

        // Review details.
        if (result.rating) {
          place.rating = result.rating;
          addStarIcons(place);
        }
        if (result.user_ratings_total)
          place.numReviews = result.user_ratings_total;
        if (result.price_level) {
          place.priceLevel = result.price_level;
          place.dollarSigns = initArray(result.price_level);
        }
        if (result.reviews) {
          place.reviews = result.reviews;
          for (let review of place.reviews) {
            addStarIcons(review);
          }
        }

        for (let field of missingFields) {
          place.fetchedFields.add(field);
        }
        callback(place);
      };

      // Use result from Place Autocomplete if available.
      if (widget.placeIdsToAutocompleteResults) {
        const autoCompleteResult =
          widget.placeIdsToAutocompleteResults.get(placeId);
        if (autoCompleteResult) {
          processResult(
            autoCompleteResult,
            google.maps.places.PlacesServiceStatus.OK,
          );
          return;
        }
      }
    //  detailsService.getDetails(request, processResult);
    };
  }
};

export default processMap;
