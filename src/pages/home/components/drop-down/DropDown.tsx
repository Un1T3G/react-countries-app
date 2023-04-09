import Selector from 'src/components/selector/Selector'

interface IProps {
  value?: string
  onChange: (value: string) => void
  options: { value?: string; label: string }[]
}

export default ({ value, options, onChange }: IProps) => {
  return (
    <Selector
      value={value}
      onChange={onChange}
      options={options.map((e) => ({ value: e.value ?? '', label: e.label }))}
      placeHolderText="Filter by Region"
    />
  )
}
