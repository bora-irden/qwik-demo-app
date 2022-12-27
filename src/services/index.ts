import { qGet } from "./serviceBase";
import { servicePaths } from "./servicePaths";

export enum CONTINENTS {
    AFRICA = 'Africa',
    ASIA = 'Asia',
    EUROPE = 'Europe',
    OCEANIA = 'Oceania',
    NORTH_AMERICA = 'North America',
    SOUTH_AMERICA = 'South America'
}

export const getContinents = () => {
    return [
        CONTINENTS.AFRICA,
        CONTINENTS.ASIA,
        CONTINENTS.EUROPE,
        CONTINENTS.OCEANIA,
        CONTINENTS.NORTH_AMERICA,
        CONTINENTS.SOUTH_AMERICA
    ]
}

export const getCountries = async (continent?: CONTINENTS) => {
    return await qGet(servicePaths.countries, { continent });
}

export const getTeams = async (countryId?: string | number) => {
    return await qGet(servicePaths.teams, { country_id: countryId });
}

export const getPlayers = async (countryId?: string | number, maxAge?: number, minAge?: number) => {
    let params:any = {};

    if (countryId) params.country_id = countryId;
    if (maxAge) params.max_age = maxAge;
    if (minAge) params.min_age = minAge;

    return await qGet(servicePaths.players, params);
}

export const getStadiums = async (countryId: string | number) => {
    return await qGet(servicePaths.stadiums, { country_id: countryId });
}

export const getLeagues = async (countryId: string | number) => {
    return await qGet(servicePaths.leagues, { country_id: countryId });
}

export const getSeasons = async (leagueId: string | number) => {
    return await qGet(servicePaths.seasons, { league_id: leagueId });
}

export const getStatistics = async (seasonId: string | number) => {
    return await qGet(servicePaths.seasons, { season_id: seasonId });
}