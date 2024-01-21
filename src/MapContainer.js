
window.initMap = function() {
  // Initialize and set up your map here
  const configuration = {
        "capabilities": {"search":true,"distances":false,"directions":false,"contacts":true,"atmospheres":true,"thumbnails":true},
        "pois": [
          {"placeId": "ChIJSdMpEMUpljMR-CxiYAUsnls"},
          {"placeId": "ChIJW4kgycYpljMRWkm_oRNqmX8"},
          {"placeId": "ChIJF7C6MkEpljMRWO4Oiff21kA"},
          {"placeId": "ChIJ0bHn7mUpljMRgZe-pizwZaQ"},
          {"placeId": "ChIJGS7YnpYpljMRtS1C79t03bs"},
          {"placeId": "ChIJi3PAxqeAvTMRHmwUMIFE7SM"},
          {"placeId": "ChIJNagT8c8pljMRGRdf4Y1FHRg"},
          {"placeId": "ChIJJ4tOMoGHvTMRKQqetMqbGyM"},
          {"placeId": "ChIJlxSdF9EpljMRIRBZmJ5E5I4"},
          {"placeId": "ChIJT6U2_M8pljMRT0ayCd7kCWg"},
          {"placeId": "ChIJ2e--YgYpljMRH3y8ZnkrwIM"},
          {"placeId": "ChIJI-L6vG_VlzMRGDL4E9_I3sg"},
          {"placeId": "ChIJhVVQHNIpljMRWINUBvVybdE"},
          {"placeId": "ChIJt5YV_NcpljMRH8PyC86YcPI"},
          {"placeId": "ChIJO7UJ4lOHvTMRMmkB7m-F0xY"},
          {"placeId": "ChIJpRckTdopljMRy0luwjlo8no"},
          {"placeId": "ChIJKdzWrMcpljMRBiwsQBwVqLM"},
          {"placeId": "ChIJVyTSb8UpljMRBHt05DXhm4Y"},
          {"placeId": "ChIJ0WYmta0pljMRo5FZJomJesI"},
          {"placeId": "ChIJv8JgGgEpljMRIOiaoEGM8u8"},
          {"placeId": "ChIJxfvIH2CHvTMR4inFQx_cAL8"},
          {"placeId": "ChIJ844IUZ-AvTMRATYxUjrOPVI"},
          {"placeId": "ChIJla1H4OKBvTMRj5wkueXIieo"},
          {"placeId": "ChIJ6bOEJLkpljMRfwFgmPEVBNA"},
          {"placeId": "ChIJS_6HJD2HvTMR76Bi6mzvm-U"},
          {"placeId": "ChIJM5DBIc4pljMRpGzak4zqknk"},
          {"placeId": "ChIJt0F6cQ0pljMRPzrtWlEjJYM"},
          {"placeId": "ChIJnQCdocUpljMR0HR_eLtjovE"},
          {"placeId": "ChIJeckshdEpljMRwRgnTs-QAhM"},
          {"placeId": "ChIJzc5-6nuHvTMRF-KnPytKDTQ"},
          {"placeId": "ChIJ76ySfneHvTMR2zwbRI_0f3o"},
          {"placeId": "ChIJXbw-CcUpljMRBhoUwBRZOlU"},
          {"placeId": "ChIJh9XtAP0rljMRFH94otgSvqU"},
          {"placeId": "ChIJfcaccPEpljMRsuDvDufgzKo"},
          {"placeId": "ChIJB6gthQcpljMRPeqWPfswLP8"},
          {"placeId": "ChIJ74wnkbKBvTMRmJQqxg6Acbo"},
          {"placeId": "ChIJhfeECMUpljMRbDVqsXPLKCE"},
          {"placeId": "ChIJxYrYLMUpljMR8hGMP27oduQ"},
          {"placeId": "ChIJ2cr8LeopljMR37KPxUuBaiA"},
          {"placeId": "ChIJwz8IfTEpljMRuHb6aYZEnEA"},
          {"placeId": "ChIJy-1Xb5SHvTMRlYJ-GImdIhU"},
          {"placeId": "ChIJrW8gi9GHvTMRW1L6rNnwGzI"},
          {"placeId": "ChIJeyVjitEpljMR3NFguQb0dgg"}
        ],
        "mapRadius": 5000,
        "mapOptions": {"center":{"lat":14.2964865,"lng":120.792458},"fullscreenControl":true,"mapTypeControl":true,"streetViewControl":false,"zoom":16,"zoomControl":true,"maxZoom":20,"mapId":""},
      };
  const widget = {};
  const widgetEl = document.querySelector('.neighborhood-discovery');

  widget.center = configuration.mapOptions.center;
  widget.places = configuration.pois || [];
  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
};


