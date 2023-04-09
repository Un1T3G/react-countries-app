import { InputHTMLAttributes, RefObject } from 'react'
import { cn } from 'src/utils/css'

interface IProps {
  className?: string
  inputRef?: RefObject<HTMLInputElement>
}

export default ({
  children,
  className,
  inputRef,
  ...props
}: IProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'ref'>) => {
  return (
    <input
    ref={inputRef}
      {...props}
      className={cn('py-2 h-10 focus:outline-none bg-transparent text-dark-blue min-w-0 dark:text-very-light-gray', className && className)}
    />
  )
}
