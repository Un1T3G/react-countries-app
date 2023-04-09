import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import ThemeToggleButton from './ThemeToggleButton'
import { toggleDarkMode } from 'src/store/reducers/theme-changer/theme-change.slice'

export default () => {
  const { isDarkMode } = useAppSelector((state) => state.themeChangeSlice)

  const dispatch = useAppDispatch()

  const onClickHandler = () => {
    dispatch(toggleDarkMode())
  }

  return <ThemeToggleButton isDarkMode={isDarkMode} onClick={onClickHandler} />
}
