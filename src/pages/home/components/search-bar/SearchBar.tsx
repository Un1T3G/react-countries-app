import { Input, InputAddon, InputGroup } from 'src/ui/input'
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import { BsCommand } from 'react-icons/bs'
import { useEffect, useRef } from 'react'

interface IProps {
  value: string
  onChange: (value: string) => void
}

export default ({ value, onChange }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const isEmpty = value === ''

  const handleClear = () => {
    onChange('')
  }

  const handleSearchButton = () => {
    inputRef.current?.focus()
  }

  useEffect(() => {
    const onKeyboardDown = (e: globalThis.KeyboardEvent) => {
      if (e.keyCode === 32 && e.ctrlKey) {
        inputRef.current?.focus()
      }else if (e.keyCode === 27){
        handleClear()
      }
    }

    window.addEventListener('keydown', onKeyboardDown)

    return () => {
      window.removeEventListener('keydown', onKeyboardDown)
    }
  }, [])

  return (
    <InputGroup className="text-dark-gray text-md w-full h-12 md:max-w-[400px] mb-5 md:mb-0 md:h-auto">
      <InputAddon
        onClick={handleSearchButton}
        className="flex items-center px-5 text-lg cursor-pointer"
      >
        <AiOutlineSearch size="24px" />
      </InputAddon>
      <Input
        type="text"
        placeholder="Search for a country..."
        value={value}
        className="flex-1"
        onChange={(e) => onChange(e.target.value)}
        inputRef={inputRef}
      />
      <InputAddon
        style={{ cursor: isEmpty ? 'default' : 'pointer' }}
        className="flex items-center px-5 text-md"
        onClick={handleClear}
      >
        {isEmpty ? (
          <>
            <BsCommand />
            <span>+Space</span>
          </>
        ) : (
          <AiOutlineCloseCircle size="24px" />
        )}
      </InputAddon>
    </InputGroup>
  )
}
