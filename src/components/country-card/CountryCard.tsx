import { HTMLAttributes } from 'react'
import { ICountry } from 'src/models/ICountry'
import { cn } from 'src/utils/css'
import { Link } from 'react-router-dom'
import { useScrollTop } from 'src/hooks/useScrollTop'

interface IProps extends HTMLAttributes<HTMLElement> {
  country: ICountry
}

export default ({ className, country, ...props }: IProps) => {
  const scrollToTop = useScrollTop()

  const populationFormatted = country.population
    .toLocaleString()
    .replace(/,/g, ' ')
  const capitalFormatted = country.capital.join(' ')

  return (
    <article
      {...props}
      className={cn('shadow-md rounded-md overflow-hidden', className)}
    >
      <Link
        to={`/country/${country.name.toLowerCase().replace(/ /g, '%20')}`}
        onClick={scrollToTop}
      >
        <img
          className="w-full h-full max-h-44 object-cover"
          src={country.imageUrl}
          alt={country.alt}
        />
      </Link>
      <div className="px-5 pt-6 pb-8 bg-white dark:bg-dark-blue">
        <Link
          to={`/country/${country.name.toLowerCase().replace(/ /g, '%20')}`}
          onClick={scrollToTop}
        >
          <h3 className="text-lg font-extrabold text-very-dark-blue dark:text-white mb-2">
            {country.name}
          </h3>
        </Link>
        <ul className="list-none text-sm">
          {[
            {
              label: 'Population:',
              value: populationFormatted,
            },
            {
              label: 'Region:',
              value: country.region,
            },
            {
              label: 'Capital:',
              value: capitalFormatted,
            },
          ].map(({ label, value }) => (
            <li
              key={label}
              className="dark:text-very-light-gray text-dark-blue"
            >
              <span className="dark:text-white text-very-dark-blue font-semibold mr-1">
                {label}
              </span>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
