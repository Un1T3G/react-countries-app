import { Children } from 'src/types/Children'
import { cn } from 'src/utils/css'
import { HTMLAttributes } from 'react'

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
    <div
      {...props}
      className={cn('mx-auto px-5 max-w-7xl', className && className)}
    >
      {children}
    </div>
  )
}
