import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'

export default () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
