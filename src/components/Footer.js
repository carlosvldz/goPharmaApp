import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link'
import * as FaIcons from 'react-icons/fa'
import 'aos/dist/aos.css'
import logo from '../img/logo-responsive.svg'
import { FormattedMessage } from 'react-intl'

const Horizont =
  'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FGrupo%201%402x.png?alt=media&token=4b70d1e5-3d9d-4230-ad8e-20d774c8ab92'

const Footer = () => {
  return (
    <>
      <section data-aos='fade-up' className='background'>
        <div data-aos='fade-up' className='contenedor'>
          <img src={Horizont} className='horizont' alt='' />
          <h5 data-aos='fade-up'>
            {' '}
            <FormattedMessage id='horizontes.texto' />
            <br /> <FormattedMessage id='horizontes.texto2' />{' '}
          </h5>

          <div className='suscribe-form'>
            {/* Begin Mailchimp Signup Form */}
            <link
              href='//cdn-images.mailchimp.com/embedcode/slim-10_7.css'
              rel='stylesheet'
              type='text/css'
            />

            <div id='mc_embed_signup'>
              <form
                action='https://go-pharma.us17.list-manage.com/subscribe/post?u=06fe9037f09561112ee0081d6&id=212f57f4e5'
                method='post'
                id='mc-embedded-subscribe-form'
                name='mc-embedded-subscribe-form'
                className='validate'
                target='_blank'
                noValidate
                data-aos='fade-up'>
                <div id='mc_embed_signup_scroll'>
                  <label className='label-email' htmlFor='Email'>
                    <FormattedMessage id='form.register' />{' '}
                  </label>
                  <input
                    type='email'
                    name='EMAIL'
                    className='email'
                    id='mce-EMAIL'
                    placeholder='E-mail'
                    required
                  />
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden='true'>
                    <input
                      type='text'
                      name='b_06fe9037f09561112ee0081d6_212f57f4e5'
                      tabIndex={-1}
                      defaultValue
                    />
                  </div>
                  <div className='clear '>
                    <input
                      type='submit'
                      defaultValue='Subscribirse'
                      name='Subscribirse'
                      id='mc-embedded-subscribe'
                      className='button btn-primario'
                    />
                  </div>
                </div>
              </form>
            </div>
            {/* End mc_embed_signup */}
          </div>
        </div>

        <div className='custom-shape-divider-bottom-1642110592'>
          <svg
            id='Capa_1'
            data-name='Capa 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1081 115'>
            <path
              className='cls-1 shape-fill'
              d='M1081,42v73H1V46.42c1.58.1,2.55.13,3.51.23,24.91,2.41,49.11-1,72.77-8.88,24.58-8.19,49.16-16.41,73.79-24.45a16.68,16.68,0,0,1,7.87-.58c11.46,2.1,22.87,4.47,34.27,6.89,4.24.91,8.35,3.07,12.57,3.2a30.5,30.5,0,0,1,18.54,6.7c10.36,8.23,20.72,15.74,35.12,11.93,1.37-.36,3,.27,4.47.21,11.7-.5,23.44-.62,35.08-1.72s22.93-3.15,34.21,1.86a12.4,12.4,0,0,0,8.93-.16c18.73-8.08,37.23-16.72,56-24.69,2.47-1.05,6.25.25,9.19,1.18,3.56,1.14,6.81,4.13,10.32,4.37,6.46.44,10.79,4.07,15.19,7.81,7.26,6.16,12.37,6.69,20.81,2.75,4.27-2,9.16-2.61,13.6-4.3,5.95-2.25,11.78-4.47,18.19-1.88.26.1.66-.22,1-.18,3.76.61,7.63.89,11.25,2s7.11,3.93,10.81,4.28c4.95.48,10.06-.82,15.11-1.14,8.9-.56,17.84-.76,26.72-1.49,10-.83,18.72-5.28,27.3-10,4.47-2.48,9-4.94,13.61-7,1-.43,2.84.6,4.06,1.35,3.82,2.35,7.51,4.92,11.3,7.33a12.47,12.47,0,0,0,4,1.86c5.83,1.19,11.68,2.92,17.56,3.08a242.21,242.21,0,0,0,29.13-1c12.38-1.17,24.72-2.74,35.93-9.14,2.48-1.42,6.54-1.48,9.38-.6a104.83,104.83,0,0,1,16.38,7.09c3,1.56,5.31,1.2,8.21-.33a253.9,253.9,0,0,1,23.31-11.3c8.12-3.26,16.79-5.15,24.89-8.44,4-1.63,7.19-1.82,10.68.47C798.77,12,811.51,20.39,824.33,28.7c10.24,6.63,20,13.61,32.66,16.13,19.12,3.82,37.39,2.27,55.19-5,8.44-3.44,16.43-8,24.58-12.15s17.53-7.32,26-4.77c9.4,2.83,18.71,3.91,28.24,4.8,10.36,1,20.49,3.93,31.17,2.24,4.6-.73,9.65.2,14.31,1.22,10.72,2.33,21.33,5.18,32,7.81C1072.62,40,1076.81,41,1081,42Z'></path>
          </svg>
        </div>
      </section>
      <footer>
        <div className='contenedor grid' data-aos='fade-up'>
          <div className='contenedor-mapa'>
            <iframe
              title='mapa'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60219.2867853589!2d-99.21072112089844!3d19.38190370000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffee58450ff3%3A0xd1b17bf5a6861cef!2sGO%20PHARMA!5e0!3m2!1ses-419!2smx!4v1642183790827!5m2!1ses-419!2smx'
              height={250}
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
            />
          </div>
          <div className='col-footer '>
            <img src={logo} className='logo-footer' alt='go-pharma' />
            <br />
            <small>
              <FormattedMessage id='footer.somos' />
            </small>
            <br />
            <small>
              <FormattedMessage id='footer.desarrollamos' />
            </small>
          </div>

          <div className='col-footer'>
            <p className='titulo'>
              <FormattedMessage id='footer.company' />
            </p>
            <ul>
              <li>
                <Link to='/nosotros'>
                  <FormattedMessage id='nav.nosotros' />
                </Link>
              </li>
              <li>
                <Link to='/servicios'>
                  <FormattedMessage id='nav.servicios' />
                </Link>
              </li>
              <li>
                <Link to='/socios-comerciales'>
                  <FormattedMessage id='nav.socios' />
                </Link>
              </li>
              <li>
                <Link to='/contacto'>
                  <FormattedMessage id='nav.contacto' />
                </Link>
              </li>
              <li>
                <Link to='/aviso-de-privacidad'>
                  <FormattedMessage id='nav.trabajadores' />
                </Link>
              </li>
              <div className='row'>
                {' '}
                <ExternalLink href='https://www.instagram.com/gopharmamx/'>
                  <li>
                    <FaIcons.FaInstagram />
                  </li>
                </ExternalLink>
                <ExternalLink href='https://www.facebook.com/gopharmamx/'>
                  <li>
                    <FaIcons.FaFacebook />
                  </li>
                </ExternalLink>
                <ExternalLink href='https://www.linkedin.com/company/marketing-and-media-go-pharma/'>
                  <li>
                    <FaIcons.FaLinkedin />
                  </li>
                </ExternalLink>
              </div>
            </ul>
          </div>
          <div className='col-footer'>
            <iframe
              title='playlist'
              className='playlist'
              src='https://open.spotify.com/embed/playlist/2JvfdVFmxhdb5mKfF5UQLQ?utm_source=generator'
              width='100%'
              height={380}
              frameBorder={0}
              allowFullScreen
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            />
          </div>
        </div>
      </footer>
      <div className='minifooter'>
        <small>
          Copyright© Marketing and Media Go Pharma® <br />
          All rights reserved 2023.
        </small>
      </div>
    </>
  )
}

export default Footer
