import { HTMLAttributes } from 'react'
import { ICountry } from 'src/models/ICountry'
import { cn } from 'src/utils/css'
import { Link } from 'react-router-dom'
import { useScrollTop } from 'src/hooks/useScrollTop'

interface IProps {
  className?: string
  country: ICountry
}

export default ({
  className,
  country,
  ...props
}: IProps & Omit<HTMLAttributes<HTMLElement>, 'className'>) => {
  const scrollToTop = useScrollTop()

  return (
    <article
      {...props}
      className={cn(
        'shadow-md rounded-md overflow-hidden',
        className && className
      )}
    >
      <Link to={`/country/${country.name.toLowerCase()}`} onClick={scrollToTop}>
        <img
          className="w-full h-full max-h-44 object-cover"
          src={country.imageUrl}
          alt={country.alt}
        />
      </Link>
      <div className="px-5 pt-6 pb-8 bg-white dark:bg-dark-blue">
        <h3 className="text-lg font-extrabold text-very-dark-blue dark:text-white mb-2">
          {country.name}
        </h3>
        <ul className="list-none text-sm">
          <li className="dark:text-very-light-gray text-dark-blue">
            <span className="dark:text-white text-very-dark-blue font-semibold mr-1">
              Population:
            </span>
            {country.population.toLocaleString().replace(/,/g, ' ')}
          </li>
          <li className="dark:text-very-light-gray text-dark-blue">
            <span className="dark:text-white text-very-dark-blue font-semibold mr-1">
              Region:
            </span>
            {country.region}
          </li>
          <li className="dark:text-very-light-gray text-dark-blue">
            <span className="dark:text-white text-very-dark-blue font-semibold mr-1">
              Capital:
            </span>
            {country.capital.join(' ')}
          </li>
        </ul>
      </div>
    </article>
  )
}
