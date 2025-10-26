from flashscore import converter
from flashscore.base import Base
from flashscore.exceptions import LeagueNotFoundError
from flashscore.league import League


class Country(Base):
    def __init__(self, id: int, name: str, url: str, locale: str | None = "en"):
        self.locale = locale
        super().__init__(self.locale)

        self.id = id
        self.name = name
        self.url = url
        self.leagues: list[League] = []

    def __repr__(self) -> str:
        return "%s(id=%s, name='%s', url='%s')" % (
            self.__class__.__name__,
            self.id,
            self.name,
            self.url,
        )

    def get_leagues(self):
        flashscore_api_gzip = self.make_request(self._league_url + str(self.id))
        flashscore_api_json = converter.gzip_to_json(flashscore_api_gzip.text)

        return sorted(
            [
                League(
                    id=league["MTI"],
                    name=league["MN"],
                    url=f"{self.url}{league['MU']}/",
                    country_id=self.id,
                    api_endpoint=league["MT"],
                    country_name=self.name,
                )
                for league in flashscore_api_json
                if "MN" in league.keys()
            ],
            key=lambda league: league.name,
        )

    def get_league_by_name(self, league_name: str) -> League:
        league_name_items = set()
        target_league_name = league_name.lower().strip()

        for league in self.get_leagues():
            if league.name.lower() == target_league_name:
                return league

            league_name_items.add(league.name)

        raise LeagueNotFoundError(
            league_name_items,
            f'There\'s no league matching the name "{league_name}". '
            f"Choose from {league_name_items}",
        )
