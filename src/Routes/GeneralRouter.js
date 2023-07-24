import React, { useLayoutEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from '../views/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Error404 from '../views/Error404'
import Servicios from '../views/Servicios'
import Nosotros from '../views/Nosotros'
import Socios from '../views/Socios'
import Contacto from '../views/Contacto'
import Aviso from '../views/Aviso'
import Sucess from '../views/Sucess'
import Error from '../views/Error'
import Satelites from '../views/Satelites'

const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}
function GeneralRouter () {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error404 />} />
            <Route path='/servicios' element={<Servicios />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/socios-comerciales' element={<Socios />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/aviso-de-privacidad' element={<Aviso />} />
            <Route path='/success' element={<Sucess />} />
            <Route path='/error' element={<Error />} />
            <Route path='/satelites' element={<Satelites />} />

            {/* <Route path='*' element={<Error404 />} /> */}
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </>
  )
}

export default GeneralRouter
