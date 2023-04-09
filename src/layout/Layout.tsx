import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'

export default () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-very-light-gray dark:bg-very-dark-blue">
      <Header />
      <main className="flex-1 items-stretch flex w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
