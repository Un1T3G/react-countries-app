import { Navigate, useParams } from 'react-router-dom'
import CountriesDetail from './CountriesDetail'
import { useGetCountryByNameQuery } from 'src/services/countriesApi'
import CountriesDetailSkeleton from './CountriesDetailSkeleton'

export default () => {
  const { name } = useParams()

  const { isError, isLoading, data } = useGetCountryByNameQuery(name ?? '')

  if (isError) {
    return <Navigate to="/404" replace />
  }

  if (isLoading && !data) {
    return <CountriesDetailSkeleton />
  }

  return <CountriesDetail country={data!} />
}
