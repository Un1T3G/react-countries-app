import { Layout } from 'src/layout'
import { CountriesDetailPage } from 'src/pages/countries-detail'
import { HomePage } from 'src/pages/home'
import { NoMatch } from 'src/pages/no-match'
import { Routes, Route } from 'react-router-dom'

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/countries/:id" element={<CountriesDetailPage />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
