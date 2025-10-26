import json

from flashscore import converter
from flashscore.base import Base
from flashscore.country import Country
from flashscore.exceptions import CountryNotFoundError
from flashscore.match import Match


class FlashscoreApi(Base):
    def __init__(self, locale: str = "en"):
        self.locale = locale
        super().__init__(self.locale)

    def get_countries(self) -> list[Country]:
        response = self.make_request(self._main_url)
        flashscore_html = response.text
        raw_data_start = flashscore_html.find("rawData: ") + len("rawData: ")
        raw_data_end = (
            raw_data_start + flashscore_html[raw_data_start:].find("\n") - 1
        )

        json_data = json.loads(flashscore_html[raw_data_start:raw_data_end])
        countries = []
        for data in json_data:
            for country in data["SCC"]:
                countries.append(
                    Country(
                        id=country["MC"],
                        name=country["MCN"],
                        url=f"{self._main_url}{country['ML'][1:]}",
                    )
                )

        return sorted(countries, key=lambda country: country.id)

    def get_country_by_name(self, country_name: str) -> Country:
        target_country_name = country_name.lower()

        country_name_items = set()

        for country in self.get_countries():
            if country.name.lower() == target_country_name:
                return country

            country_name_items.add(country.name)

        raise CountryNotFoundError(
            country_name_items,
            f'Country matching the name "{country_name}" does not exist. '
            f"Choose from {country_name_items}",
        )

    def get_today_matches(self, day: int | None = 0) -> list[Match]:
        today_matches_gzip = self.make_request(
            self._today_matches_url.replace("{day}", str(day))
        )
        today_matches_json = converter.gzip_to_json(today_matches_gzip.text)
        return [
            Match(id=today_match["AA"], locale=self.locale)
            for today_match in today_matches_json
            if today_match.get("AA") is not None
        ]

    def get_live_matches(self) -> list[Match]:
        today_matches_gzip = self.make_request(
            self._today_matches_url.replace("{day}", "0")
        )
        today_matches_json = converter.gzip_to_json(today_matches_gzip.text)

        return [
            Match(id=today_match["AA"], locale=self.locale)
            for today_match in today_matches_json
            if today_match.get("AA") is not None and today_match.get("AB") == "2"
        ]

    def get_matches_with_already_loaded_content(
        self, matches_ids: list[str]
    ) -> list[Match]:
        matches = [Match(id=id, locale=self.locale) for id in matches_ids]
        urls = []
        for match in matches:
            urls += [
                match._flashscore_url,
                match._general_url,
                match._stats_url,
                match._events_url,
                match._odds_url,
                match._head2heads_url,
            ]
        for match, responses in zip(
            matches, self.split_list_to_chinks(self.make_grequest(urls), 6)
        ):
            match.load_content(*[response.text for response in responses])
        return matches
