import { CountriesCard } from 'src/components/countries-card'
import { ICountry } from 'src/models/ICountry'

interface IProps {
  countries: ICountry[]
}

export default ({ countries }: IProps) => {
  return (
    <>
      {countries.map((country) => (
        <CountriesCard key={country.name} country={country} />
      ))}
    </>
  )
}
