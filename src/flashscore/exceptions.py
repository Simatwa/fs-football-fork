class FlashScoreException(Exception):
    """Base exception class"""


class LeagueNotFoundError(FlashScoreException):
    def __init__(self, available_leagues: set[str], *args, **kwargs):
        self.available_leagues = available_leagues

        super().__init__(*args, **kwargs)


class CountryNotFoundError(FlashScoreException):
    def __init__(self, available_countries: set[str], *args, **kwargs):
        self.available_countries = available_countries

        super().__init__(*args, **kwargs)
