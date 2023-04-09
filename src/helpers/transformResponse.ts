import { ICountry } from 'src/models/ICountry'

export const transformCountryResponse = (e: any) => {
  const nativeNameKeys = Object.keys(e.name.nativeName)
  const languagesKeys = Object.keys(e.languages)
  const currenciesKeys = Object.keys(e.currencies)

  return {
    name: e.name.common,
    nativeName: e.name.nativeName[nativeNameKeys[0]].official,
    population: e.population,
    region: e.region,
    subRegion: e.subregion,
    location: e.maps.googleMaps,
    imageUrl: e.flags.png,
    alt: e.flags.alt,
    capital: e.capital ?? [],
    topLevelDomain: e.tld,
    currencies: currenciesKeys.map((x: any) => e.currencies[x].name) ?? [],
    languages: languagesKeys.map((x: any) => e.languages[x]) ?? [],
    borders: e.borders ?? [],
  } as ICountry
}
