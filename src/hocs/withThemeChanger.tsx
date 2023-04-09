import { FC, useEffect } from 'react'
import { useAppSelector } from 'src/hooks/useRedux'

export const withThemeChanger = (Component: FC) => {
  return () => {
    const { isDarkMode } = useAppSelector((state) => state.themeChangeSlice)

    const changeTheme = () => {
      const htmlClasses = document.querySelector('html')!.classList
      isDarkMode ? htmlClasses.add('dark') : htmlClasses.remove('dark')
    }

    useEffect(() => changeTheme(), [isDarkMode])

    return <Component />
  }
}
