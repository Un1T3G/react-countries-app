import { BackButton } from 'src/components/back-button'
import { Button } from 'src/ui/button'
import { Container } from 'src/ui/container'
import { FiMapPin } from 'react-icons/fi'
import { ICountry } from 'src/models/ICountry'
import { getCountryName } from 'src/helpers/getCountryName'

interface IProps {
  country: ICountry
}

export default ({ country }: IProps) => {
  return (
    <section className="py-8 w-full">
      <Container>
        <BackButton className="mb-6" />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="h-64 sm:h-72 w-full md:w-1/2 md:pr-8 lg:h-80">
            <img
              src={country.imageUrl}
              alt={country.alt}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="py-6 w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-lg font-extrabold text-very-dark-blue dark:text-white mb-4">
              {country.name}
            </h2>
            <div className="flex flex-col justify-between x-sm:flex-row mb-2">
              <ul className="list-none text-sm mb-3 x-sm:mb-0">
                {[
                  { label: 'Native name:', value: country.nativeName },
                  {
                    label: 'Population:',
                    value: country.population
                      .toLocaleString()
                      .replace(/,/g, ' '),
                  },
                  { label: 'Region:', value: country.region },
                  { label: 'Sub region:', value: country.subRegion },
                  { label: 'Capital:', value: country.capital.join(' ') },
                ].map(({ label, value }) => (
                  <li
                    key={label}
                    className="dark:text-very-light-gray text-dark-blue py-1"
                  >
                    <span className="dark:text-white text-very-dark-blue font-semibold mr-1">
                      {label}
                    </span>
                    {value}
                  </li>
                ))}
              </ul>
              <ul className="list-none text-sm">
                {[
                  { label: 'Top level domain:', value: country.topLevelDomain },
                  { label: 'Currencies:', value: country.currencies.join(' ') },
                  { label: 'Languages:', value: country.languages.join(' ') },
                ].map(({ label, value }) => (
                  <li
                    key={label}
                    className="dark:text-very-light-gray text-dark-blue py-1"
                  >
                    <span className="dark:text-white text-very-dark-blue font-semibold mr-1">
                      {label}
                    </span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            <ol className="flex-wrap list-none gap-3 inline-flex items-center mb-5">
              <span className="dark:text-white text-very-dark-blue font-semibold mr-1">
                Border countries:
              </span>
              {country.borders.map((e) => (
                <li
                  key={e}
                  className="bg-white dark:bg-dark-blue p-2 rounded-md shadow-md dark:text-very-light-gray text-dark-blue"
                >
                  {getCountryName(e)}
                </li>
              ))}
            </ol>
            <div>
              <a target="_blank" href={country.location}>
                <Button className="flex items-center w-full md:w-auto shadow-md">
                  <FiMapPin />
                  <span className="ml-1 py-3 text-md font-semibold">
                    Open in map
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
