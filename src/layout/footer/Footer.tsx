import { Container } from 'src/ui/container'

export default () => {
  return (
    <footer className="bg-slate-100 py-2">
      <Container className="text-center">
        <span className="text-gray-500">
          Made by
          <a
            target="_blank"
            href="https://github.com/Un1T3G"
            className="ml-1 no-underline text-gray-600"
          >
            Un1T3G
          </a>
        </span>
      </Container>
    </footer>
  )
}
