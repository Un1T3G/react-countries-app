import { Button } from 'src/ui/button'
import { AiOutlineHome } from 'react-icons/ai'
import { Container } from 'src/ui/container'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <section className="py-6 min-h-full flex items-center w-full">
      <Container className="w-full flex-1">
        <div className="flex flex-col items-center w-full">
          <h1 className="font-extrabold text-[24px] md:text-[38px] text-very-dark-blue dark:text-white">
            404
          </h1>
          <p className="mb-2 font-extrabold text-[24px] md:text-[38px] text-very-dark-blue dark:text-white">
            Not found
          </p>
          <Link to="/">
            <Button
              size="large"
              className="flex items-center w-full x-sm:w-auto justify-center x-sm:justify-normal"
            >
              <AiOutlineHome />
              <span className="ml-1 text-md">Go home</span>
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
