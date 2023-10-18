import React from 'react'
import 'aos/dist/aos.css' // You can also use <link> for styles
import Socios from '../views/Socios'
// import Team from '../components/Team'
import Filosofia from '../components/Filosofia'
import { FormattedMessage } from 'react-intl'

// const Star = 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FStar.png?alt=media&token=530337ee-8115-4965-86d0-4d1a713f4e3e'
const Clay =
  'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2Fclay%402x.png?alt=media&token=847a0e52-0aae-4730-b2fc-f58f896961e1'
const Star =
  'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FStar.png?alt=media&token=530337ee-8115-4965-86d0-4d1a713f4e3e'

function Nosotros () {
  return (
    <>
      <section className='section nosotros' data-aos='fade-up'>
        <div className='container'>
          <div className='row-nosotros' data-aos='fade-up'>
            <div className='col'>
              <h1 className='title'><FormattedMessage id='nav.nosotros'/></h1>
            </div>
            <div className='col '>
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
          </div>
          <div className='contenedor container-3d' data-aos='fade-up'>
            <img src={Clay} alt='nube' />
          </div>
          <br />
          <br />
          <div className='row beneficios'>
            <div className='contenedor-beneficios'>
              <h3 ><FormattedMessage id='nosotros.beneficios'/></h3>
              <div className='contenedor-beneficios-lista' data-aos='fade-up'>
                <div className='col'>
                  <img
                    className='img-responsive'
                    src={Star}
                    alt='Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD.'
                  />
                  <div className='texto'>
                    <p className='titulo' data-aos='fade-up'>
                    <FormattedMessage id='nosotros.mision'/>
                    </p>
                    <FormattedMessage id='nosotros.mision.des'/>

                  </div>
                </div>
                <div className='col'>
                  <img
                    className='img-responsive'
                    src={Star}
                    alt='Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD.'
                  />
                  <div className='texto'>
                    <p className='titulo' data-aos='fade-up'>
                    <FormattedMessage id='nuestra.experiancia'/>

                    </p>
                    <p data-aos='fade-up' className='h4 aos-init aos-animate'>
                    <FormattedMessage id='nuestra.experiancia1'/>
                      <span>
                      <FormattedMessage id='nuestra.experiancia2'/>

                      </span>{' '}
                      <FormattedMessage id='nuestra.experiancia3'/>

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row pilares'>
            <div className='contenedor-beneficios '>
              <h3 data-aos='fade-up' className='text-left'>
                <FormattedMessage id='nosotros.pilares'/>
              </h3>
              <div className='contenedor-beneficios-lista' data-aos='fade-up'>
                <div className='col k p-2'>
                  <img
                    className='img-responsive'
                    src={Star}
                    alt='Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD.'
                  />
                  <p className='titulo' data-aos='fade-up'>
                <FormattedMessage id='nosotros.pilares.titulo'/>

                  </p>
                  <p data-aos='fade-up' className='h4 aos-init aos-animate'>
                  <FormattedMessage id='nosotros.pilares.titulo.des'/>
                  </p>
                </div>
                <div className='col k p-2'>
                  <img
                    className='img-responsive'
                    src={Star}
                    alt='Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD.'
                  />
                  <p className='titulo' data-aos='fade-up'>
                <FormattedMessage id='nosotros.pilares.titulo1'/>

                  </p>
                  <p data-aos='fade-up' className='h4 aos-init aos-animate'>
                  <FormattedMessage id='nosotros.pilares.titulo1.des'/>

                  </p>
                </div>
                <div className='col k p-2'>
                  <img
                    className='img-responsive'
                    src={Star}
                    alt='Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD.'
                  />
                  <p className='titulo' data-aos='fade-up'>

                <FormattedMessage id='nosotros.pilares.titulo2'/>

                  </p>
                  <p data-aos='fade-up' className='h4 aos-init aos-animate'>
                  <FormattedMessage id='nosotros.pilares.titulo2.des'/>

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Filosofia />

      <Socios />
    </>
  )
}

export default Nosotros
