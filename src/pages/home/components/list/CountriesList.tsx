import { CountryCard } from 'src/components/country-card'
import { ICountry } from 'src/models/ICountry'

interface IProps {
  countries: ICountry[]
}

export default ({ countries }: IProps) => {
  return (
    <>
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </>
  )
}
