import SearchBar from './SearchBar'

interface IProps {
  value: string
  onChange: (value: string) => void
}

export default ({ value, onChange }: IProps) => {
  return <SearchBar value={value} onChange={onChange} />
}
