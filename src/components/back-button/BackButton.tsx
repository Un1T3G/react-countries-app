import {Button} from 'src/ui/button'
import { BiArrowBack } from 'react-icons/bi'
import { cn } from 'src/utils/css'
import { useNavigate } from 'react-router-dom'

interface IProps {
  className?: string
}

export default ({ className }: IProps) => {
  const navigate = useNavigate();

  const handleOnClick = () => navigate(-1)

  return (
    <Button
      variant="standard"
      size="small"
      onClick={handleOnClick}
      className={cn('flex items-center shadow-md', className && className)}
    >
      <BiArrowBack />
      <span className="ml-3">Back</span>
    </Button>
  )
}
