import { useState } from 'react'
import Home from './Home'
import { useGetAllCountriesQuery } from 'src/services/countriesApi'

export default () => {
  const [searchBar, setSearchBar] = useState('')
  const [region, setRegion] = useState<string | undefined>()

  const handleOnChangeSearchBarValue = (e: string) => {
    setSearchBar(e)
  }

  const handleOnChangeRegion = (e: string) => {
    setRegion(e === '' ? undefined : e)
  }

  const { data, isLoading } = useGetAllCountriesQuery(undefined)

  const filteredCountries = data?.filter((country) => {
    const nameMatch =
      searchBar === '' ||
      country.name.toLowerCase().includes(searchBar.toLowerCase())

    const regionMatch =
      !region || country.region.toLowerCase() === region.toLowerCase()

    return nameMatch && regionMatch
  })

  return (
    <Home
      data={filteredCountries}
      isLoading={isLoading}
      region={region}
      onChangeRegion={handleOnChangeRegion}
      searchBar={searchBar}
      onChangeSearchBar={handleOnChangeSearchBarValue}
    />
  )
}
