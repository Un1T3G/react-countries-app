import { Container } from 'src/ui/container'
import { SearchBar } from './components/search-bar'
import { DropDown } from './components/drop-down'

import { CountriesList, CountriesListSkeleton } from './components/list'
import { ICountry } from 'src/models/ICountry'

interface IProps {
  data?: ICountry[]
  isLoading: boolean
  region: string | undefined
  onChangeRegion: (value: string) => void
  searchBar: string
  onChangeSearchBar: (value: string) => void
}

export default ({
  data,
  isLoading,
  region,
  onChangeRegion,
  searchBar,
  onChangeSearchBar,
}: IProps) => {
  return (
    <section className="py-8 w-full">
      <Container>
        <div className="flex justify-between mb-8 flex-col md:flex-row">
          <SearchBar value={searchBar} onChange={onChangeSearchBar} />
          <DropDown value={region} onChange={onChangeRegion} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {isLoading ? (
            <CountriesListSkeleton />
          ) : (
            <CountriesList countries={data ?? []} />
          )}
        </div>
      </Container>
    </section>
  )
}
