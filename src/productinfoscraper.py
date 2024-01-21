import requests

def scrape_product_information(url, proxy=None):
    # Define headers with a user agent string mimicking the latest version of Chrome
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.99 Safari/537.36',
    }

    # Define proxies if provided
    proxies = {
        'http': proxy,
        'https': proxy,
    } if proxy else None

    # Send a GET request to the URL using the specified proxy and headers
    response = requests.get(url, headers=headers, proxies=proxies)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        print(response.text)
    else:
        print("Error:", response.status_code)

# Replace 'https://example.com/product' with the actual URL of the product page
# If you have a proxy, replace 'http://your-proxy-url' with the actual proxy URL
# If you don't have a proxy, you can omit the proxy parameter
#scrape_product_information('https://example.com/product', proxy='http://your-proxy-url')
scrape_product_information('https://www.bedbathandbeyond.com/c/appliances/large-kitchen-appliances?t=31164')
