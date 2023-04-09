import Button from 'src/ui/button/Button'
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from 'react-icons/bs'
import { useLayoutEffect, useRef, useState } from 'react'
import { useOutside } from 'src/hooks/useOutside'

interface IOption<T> {
  value: T
  label: string
}

interface IProps<T> {
  value?: T
  onChange: (item: T) => void
  options: IOption<T>[]
  placeHolderText?: string
}

export default <T,>({
  value,
  onChange,
  options,
  placeHolderText = 'None',
}: IProps<T>) => {
  const [height, setHeight] = useState(0)
  const [isOpened, setIsOpened] = useState(false)

  const buttonRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    setIsOpened((prev) => !prev)
  }

  useOutside([buttonRef, listRef], () => {
    setIsOpened(false)
  })

  useLayoutEffect(() => {
    setHeight(buttonRef.current?.clientHeight ?? 0)
  }, [buttonRef])

  return (
    <div ref={buttonRef} className="relative w-full max-w-[165.05px]">
      <Button
        size="large"
        onClick={handleToggle}
        className="flex items-center w-full justify-between"
      >
        <span className="mr-1">
          {options.find((x) => x.value === value)?.label ?? placeHolderText}
        </span>
        {isOpened ? <BsFillArrowUpCircleFill /> : <BsFillArrowDownCircleFill />}
      </Button>
      {isOpened && (
        <ul
          ref={listRef as any}
          style={{
            top: `${height + 10}px`,
          }}
          className="absolute left-0 w-full p-3 rounded-md bg-white shadow-md dark:bg-dark-blue list-none"
        >
          {options.map((e) => (
            <li
              key={e.label}
              className="rounded-md p-2 cursor-pointer hover:bg-slate-200 text-very-dark-blue dark:text-white dark:hover:bg-slate-700"
              onClick={() => {
                onChange(e.value)
                setIsOpened(false)
              }}
            >
              {e.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
