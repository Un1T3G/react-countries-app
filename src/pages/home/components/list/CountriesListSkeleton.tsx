import { CountryCardSkeleton } from 'src/components/country-card'

const COUNT = 6

export default () => {
  return (
    <>
      {Array.from({ length: COUNT }, (_, i) => i).map((e) => (
        <CountryCardSkeleton key={e} />
      ))}
    </>
  )
}
