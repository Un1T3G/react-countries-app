import Button from 'src/ui/button/Button'
import { Container } from 'src/ui/container'
import { BsMoon } from 'react-icons/bs'

export default () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <Container>
        <div className="flex justify-between items-center">
          <span className="text-black font-extrabold text-lg">
            Where in the world?
          </span>
          <Button className="flex items-center">
            <BsMoon />
            <span className="ml-1">Dark Mode</span>
          </Button>
        </div>
      </Container>
    </header>
  )
}
