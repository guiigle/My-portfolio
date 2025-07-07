import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
