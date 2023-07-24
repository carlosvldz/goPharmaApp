import React, { useEffect } from 'react'

import logo from '../img/logo-responsive.svg'
import Slogan from '../img/we-go-beyond.svg'
import '../scss/index.scss'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

import Socios from '../views/Socios'
import Team from '../components/Team'
import Filosofia from '../components/Filosofia'
import { FormattedMessage } from 'react-intl'
const Clay =
  'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2Fclay%402x.png?alt=media&token=847a0e52-0aae-4730-b2fc-f58f896961e1'
// const PlanetaNube2 = 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FCloud%20%26%20Planet%2002.png?alt=media&token=da2433b1-41d7-4522-b3b9-9965276fce53'

// const Cohete = 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FSpaceship.png?alt=media&token=8a39bf08-6961-496a-884f-7fadfe5a7f44'

// const Nube = 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FCloud01.png?alt=media&token=53093a4f-51e5-4c9d-ab8d-4725fb73fb3f'

// const Star = "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FStar.png?alt=media&token=530337ee-8115-4965-86d0-4d1a713f4e3e"

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
      <section data-aos='fade-up' className='section'>
        <div className='contenedor' data-aos='fade-up'>
          <div className='iframe-contenedor'>
            <div style={{ padding: '75% 0 0 0', position: 'relative' }}>
              <iframe
                className='iframe-video'
                src='https://player.vimeo.com/video/668322181?h=f15f9ccf67&badge=0&autopause=0&player_id=0&app_id=58479'
                frameBorder={0}
                allow='autoplay; fullscreen; picture-in-picture'
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
                title='go-pharma presentacion'
              />
            </div>
          </div>

          <br />
          <Team />
        </div>
      </section>
      <Filosofia />
      <Socios />
    </>
  )
}

export default Home
