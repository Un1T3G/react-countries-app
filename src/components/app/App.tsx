import { Layout } from 'src/layout'
import { CountriesDetailPage } from 'src/pages/countries-detail'
import { HomePage } from 'src/pages/home'
import { NoMatch } from 'src/pages/no-match'
import { Routes, Route } from 'react-router-dom'
import { withThemeChanger } from 'src/hocs/withThemeChanger'

export default () => {
  return withThemeChanger(() => (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/country/:name" element={<CountriesDetailPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  ))()
}
