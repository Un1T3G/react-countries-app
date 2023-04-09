import Button from 'src/ui/button/Button'
import { BsMoon } from 'react-icons/bs'

interface IProps {
  isDarkMode: boolean
  onClick: VoidFunction
}

export default ({ isDarkMode, onClick }: IProps) => {
  return (
    <Button
      onClick={onClick}
      variant="transparent"
      className="flex items-center"
    >
      <BsMoon />
      <span className="ml-1">Dark Mode</span>
    </Button>
  )
}
