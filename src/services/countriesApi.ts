import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { transformCountryResponse } from 'src/helpers/transformResponse'
import { ICountry } from 'src/models/ICountry'

const API_URL = 'https://restcountries.com/v3.1'

const FIELDS =
  'fields=languages,capital,name,currencies,borders,region,subregion,population,flags,maps,tId'

export const countriesApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<ICountry[], undefined>({
      query: () => `/independent?status=true&${FIELDS}`,
      transformResponse: (response: any) => {
        return response.map((e: any) => transformCountryResponse(e))
      },
    }),
    getCountryByName: builder.query<ICountry, string>({
      query: (name) => `/name/${name}`,
      transformResponse: (response: any) => transformCountryResponse(response[0]),
    }),
  }),
})

export const { useGetAllCountriesQuery, useGetCountryByNameQuery } =
  countriesApi
