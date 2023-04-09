import { Container } from 'src/ui/container'

export default () => {
  return (
    <footer className="bg-slate-100 py-2 dark:bg-dark-blue">
      <Container className="text-center">
        <span className="text-very-dark-blue dark:text-white">
          <span className="opacity-60">Made by</span>
          <a
            target="_blank"
            href="https://github.com/Un1T3G"
            className="ml-1 no-underline"
          >
            Un1T3G
          </a>
        </span>
      </Container>
    </footer>
  )
}
