import { CountriesCardSkeleton } from 'src/components/countries-card'

const COUNT = 6

export default () => {
  return (
    <>
      {Array.from({ length: COUNT }, (_, i) => i).map((e) => (
        <CountriesCardSkeleton key={e} />
      ))}
    </>
  )
}
