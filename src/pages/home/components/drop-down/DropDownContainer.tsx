import DropDown from './DropDown'
import { options } from 'src/constants/options'

interface IProps {
  value: string | undefined
  onChange: (value: string) => void
}

export default ({value, onChange} : IProps) => {
  return <DropDown value={value} onChange={onChange} options={options} />
}
