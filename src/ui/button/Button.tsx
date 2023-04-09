import { HTMLAttributes } from 'react'
import { Children } from 'src/types/Children'
import { cn } from 'src/utils/css'

interface IProps {
  variant?: 'standard' | 'transparent'
  size?: 'small' | 'large'
  children?: Children
  className?: string
}

export default ({
  variant = 'standard',
  size = 'small',
  children,
  className,
  ...props
}: IProps & Omit<HTMLAttributes<HTMLButtonElement>, 'className'>) => {
  const getStylesByVariant = () => {
    switch (size) {
      case 'small':
        return 'px-4 py-2 sm:'
      case 'large':
        return 'p-4'
      default:
        throw new Error(size)
    }
  }

  const getBgColor = () => {
    switch (variant) {
      case 'standard':
        return `bg-white dark:bg-dark-blue hover:bg-slate-200 active:bg-slate-300 dark:hover:bg-slate-700 dark:active:bg-slate-900`
      case 'transparent':
        return `bg-transparent hover:bg-slate-200 active:bg-slate-300 dark:hover:bg-slate-700 dark:active:bg-slate-900`
      default:
        throw new Error(variant)
    }
  }

  return (
    <button
      {...props}
      className={cn(
        `${getStylesByVariant()} ${getBgColor()} font-light rounded-lg transition-colors text-very-dark-blue dark:text-white`,
        className && className
      )}
    >
      {children}
    </button>
  )
}
