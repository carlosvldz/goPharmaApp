import React from 'react'
import { Link } from 'react-router-dom'
function Sucess () {
  console.log('mensaje enviado')
  return <>
    <section className="section" data-aos="fade-in">
      <div className="contenedor" style={{ textAlign: 'center' }}>
        <h1>Mensaje enviado</h1>
        <p>Le contactaremos a la brevedad</p>
        <Link to="/" className="btn-primario">Ir al inicio</Link>
      </div>
    </section>
  </>
}

export default Sucess
