import { Container } from 'src/ui/container'
import { SearchBar } from './components/search-bar'
import { DropDown } from './components/drop-down'

export default () => {
  return (
    <section className="py-8">
      <Container>
        <div className="flex justify-between">
          <SearchBar />
          <DropDown />
        </div>
      </Container>
    </section>
  )
}
