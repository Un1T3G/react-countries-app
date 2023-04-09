import { Container } from 'src/ui/container'
import { ThemeToggleButton } from './components'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <header className="white py-4 shadow-md dark:bg-dark-blue">
      <Container>
        <div className="flex justify-between items-center">
          <Link to="/">
            <span className="font-extrabold text-sm md:text-md text-very-dark-blue dark:text-white">
              Where in the world?
            </span>
          </Link>
          <ThemeToggleButton />
        </div>
      </Container>
    </header>
  )
}
