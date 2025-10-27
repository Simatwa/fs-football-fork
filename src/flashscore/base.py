import asyncio

import grequests
import requests
from aiohttp import ClientSession
from flashscore.converter import gzip_to_json


class Base:
    def __init__(self, locale: str = "en"):
        self._locales = {
            "en": {
                "code": "x",  # '2',
                "url": "https://www.flashscore.com/",
                "ninja": "https://local-global.flashscore.ninja/",
            },
            "ua": {
                "code": "x",  # '35',
                "url": "https://www.flashscore.ua/",
                "ninja": "https://local-ruua.flashscore.ninja/",
            },
            "ru": {
                "code": "x",  # '32',
                "url": "https://www.flashscore.ua/",
                "ninja": "https://local-ruua.flashscore.ninja/",
            },
        }

        # TODO: Consider reevaluating locale codes

        self._locale_code, self._main_url, self._ninja_url = self._locales[
            locale
        ].values()

        self._league_url = f"{self._main_url}{self._locale_code}/req/m_1_"
        self._matches_url = (
            self._ninja_url
            + self._locale_code
            + "/x/feed/tr_{endpoint}_{season}_{page}_3_"
            + locale
            + "_1"
        )
        self._today_matches_url = (
            self._ninja_url
            + self._locale_code
            + "/x/feed/f_1_{day}_3_"
            + locale
            + "_1"
        )

        self._flashscore_endpoint: str = f"{self._main_url}match/"
        self._general_endpoint: str = (
            f"{self._ninja_url}{self._locale_code}/x/feed/dc_1_"
        )
        self._stats_endpoint: str = (
            f"{self._ninja_url}{self._locale_code}/x/feed/df_st_1_"
        )
        self._events_endpoint: str = (
            f"{self._ninja_url}{self._locale_code}/x/feed/df_sui_1_"
        )
        self._odds_endpoint: str = "https://2.ds.lsapp.eu/pq_graphql"
        self._head2heads_endpoint: str = (
            f"{self._ninja_url}{self._locale_code}/x/feed/df_hh_1_"
        )
        self._matches_url = f"{self._ninja_url}{self._locale_code}/x/feed/"

        self._headers = {
            "User-Agent": (
                "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 "
                "Firefox/117.0"
            ),
            "Accept": "*/*",
            "Accept-Language": locale,
            "Referer": self._main_url,
            "x-fsign": "SW9D1eZo",
            "Origin": self._main_url,
            "Connection": "keep-alive",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "cross-site",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache",
        }

    def make_request(self, url: str) -> requests.Response:
        resp = requests.get(url, headers=self._headers)
        resp.raise_for_status()
        return resp

    def make_request_and_decode(self, url: str) -> dict:
        response = self.make_request(url)
        return gzip_to_json(response.text)

    def make_grequest(self, urls: list[str]) -> list[requests.models.Response]:
        result = grequests.map(
            [grequests.get(url, headers=self._headers) for url in urls], gtimeout=20
        )

        if None in result:
            return self.make_grequest(urls)
        return result

    async def async_requests(self, urls: list[str]) -> list[str]:
        async def async_request(url: str) -> str:
            async with ClientSession() as session:
                try:
                    async with session.get(
                        url, headers=self._headers, timeout=20
                    ) as response:
                        return await response.text()
                except asyncio.TimeoutError:
                    async with session.get(
                        url, headers=self._headers, timeout=20
                    ) as response:
                        return await response.text()

        tasks_result = []
        async with asyncio.TaskGroup() as tg:
            for url in urls:
                tasks_result.append(tg.create_task(async_request(url)))

        return [r.result() for r in tasks_result]

    def make_async_requests(self, urls: list[str]) -> list[str]:
        loop = asyncio.get_event_loop()
        return loop.run_until_complete(self.async_requests(urls))

    def split_list_to_chinks(self, lst, chunk_size):
        for i in range(0, len(lst), chunk_size):
            yield lst[i : i + chunk_size]
