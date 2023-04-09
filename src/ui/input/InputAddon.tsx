import { HTMLAttributes } from 'react'
import { Children } from 'src/types/Children'
import { cn } from 'src/utils/css'

interface IProps {
  children?: Children
  className?: string
}

export default ({
  children,
  className,
  ...props
}: IProps & Omit<HTMLAttributes<HTMLDivElement>, 'className'>) => {
  return (
    <div {...props} className={cn('text-dark-blue dark:text-very-light-gray', className && className)}>
      {children}
    </div>
  )
}
