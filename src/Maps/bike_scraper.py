# Credit: https://scrapfly.io/blog/web-scraping-graphql-with-python/

import json
import random
import string
import httpx
import asyncio

query = """
query GetSystemSupply {
  supply {
    stations {
      stationId
      stationName
      location {
        lat
        lng
        __typename
      }
      bikesAvailable
      bikeDocksAvailable
      totalBikesAvailable
      totalRideablesAvailable
      isOffline
      notices {
        ...NoticeFields
        __typename
      }
      siteId
      lastUpdatedMs
      __typename
    }
    notices {
      ...NoticeFields
      __typename
    }
    requestErrors {
      ...NoticeFields
      __typename
    }
    __typename
  }
}

fragment NoticeFields on Notice {
  localizedTitle
  localizedDescription
  url
  __typename
}
"""
json_data = {
    'query': query,
    'operationName': 'GetSystemSupply',
}

async def get_bikeshare_stations(client: httpx.AsyncClient):
    async with httpx.AsyncClient() as client:
        headers = {
            **client.headers,
            # we need to generate a random request ID for this request to succeed
            "x-requested-by": "".join(random.choice(string.ascii_lowercase + string.digits) for i in range(64)),
        }
        response = await client.post(
            'https://account.capitalbikeshare.com/bikesharefe-gql', data=json_data)
        return response.json()

# To avoid being instantly blocked we'll be using request headers that
# mimic Chrome browser on Windows
BASE_HEADERS = {
    "authority": "www.tripadvisor.com",
    "accept-language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "accept-language": "en-US;en;q=0.9",
    "accept-encoding": "gzip, deflate, br",
}

async def main():
    limits = httpx.Limits(max_connections=5)
    async with httpx.AsyncClient(limits=limits, timeout=httpx.Timeout(15.0), headers=BASE_HEADERS) as client:
        result = await get_bikeshare_stations(client)
        with open('bike_json_data.json', 'w') as outfile:
            json.dump(result, outfile, indent=2)

if __name__ == '__main__':
    asyncio.run(main())
