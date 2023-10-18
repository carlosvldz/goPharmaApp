import React, { useEffect } from 'react'

import logo from '../img/logo-responsive.svg'
import Slogan from '../img/we-go-beyond.svg'

import Clay from '../img/nave.png'
import '../scss/index.scss'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

import Socios from '../views/Socios'
// import Team from '../components/Team'
import Filosofia from '../components/Filosofia'
import { FormattedMessage } from 'react-intl'

function Home () {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 20,
      duration: 500,
      easing: 'ease-in-out',
      debounceDelay: 50,
      throttleDelay: 99,
      mirror: false,
      anchorPlacement: 'bottom-top'
    })
  }, [])
  return (
    <>
      <header data-aos='fade-in' className='App-header-hero'>
        <img src={logo} className='App-logo' alt='logo go-pharma' />
        <img
          src={Slogan}
          className='slogan-img'
          alt='we go beyons the horizon'
        />
      </header>

      <section data-aos='fade-up' className='section'>
        <div className='contenedor' data-aos='fade-up'>
          <h1 data-aos='fade-up'>
            Go Pharma<sup>®</sup>
          </h1>
          <h2 data-aos='fade-up'>
            <FormattedMessage id='h2.somos' />{' '}
            <span>
              <FormattedMessage id='h2.tipo' />{' '}
            </span>
            <FormattedMessage id='h2.marca' />{' '}
            <span>
              <FormattedMessage id='h2.mercado' />
            </span>{' '}
            <FormattedMessage id='h2.conjuncion' />
            <span>
              {' '}
              <FormattedMessage id='h2.helthcare' />{' '}
            </span>{' '}
            <FormattedMessage id='h2.helthcareb' />
            <FormattedMessage id='h2.punchline' />
            <span>
              <FormattedMessage id='h2.connect' />
            </span>
            <FormattedMessage id='h2.connectb' />
          </h2>
        </div>
        <div className='contenedor container-3d' data-aos='fade-up'>
          <img src={Clay} alt='nube' />

          {/*
          <div className="container-star">
            <img src={Star} alt="Star" data-aos="fade-up" />
            <img src={Star} alt="Star" data-aos="fade-up" />
            <img src={Star} alt="Star" data-aos="fade-up" />
            <img src={Star} alt="Star" data-aos="fade-up" />
            <img src={Star} alt="Star" data-aos="fade-up" />
          </div> */}
        </div>
      </section>

      <Filosofia />
      <Socios />
    </>
  )
}

export default Home
