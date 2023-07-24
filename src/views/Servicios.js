import React from 'react'
import { Link } from 'react-router-dom'
// import Imagen from "../img/DigitalMKTPharma.png"
import { FormattedMessage } from 'react-intl'
import 'aos/dist/aos.css' // You can also use <link> for styles

function Servicios () {
  return (
    <section className="section background" >
      <div className="contenedor servicios">
        <header className='header-servicios' data-aos="fade-in">
          <div className="contenedor">
            <div className="texto">
              <h1>
               <FormattedMessage id="portafolio.titulo" />
              </h1>
              <p className="h2">               <FormattedMessage id="portafolio.titulo.des" />
</p>
              <br />
              <Link className="btn-primario" to="/contacto"><FormattedMessage id="portafolio.cta" /></Link>
            </div>
          </div>
        </header>

        <div className="section grupo-servicios" data-aos="fade-in">
          <h3>MKT PHARMA</h3>
          <div className="servicios-contenedor" data-aos="fade-in">
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FBrand-Strategy.png?alt=media&token=4cce3bcb-8b2f-4456-94ec-44a3aff07f61" alt="" />
              <p className="titulo">BRAND STRATEGY & PHARMA VISUAL CONCEPT </p>
              <p><FormattedMessage id="portafolio.servicio"/></p>

            </div>
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FMarket-Research.png?alt=media&token=a75237de-3027-47f4-8cce-211664a890aa" alt="" />
              <p className="titulo">MARKET RESEARCH </p>
              <p><FormattedMessage id="portafolio.servicio1"/></p>

            </div>
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FAdvisory-Board.png?alt=media&token=7caabe1b-9a19-4f24-bd46-576bc00fec3b" alt="" />
              <p className="titulo">ADVISORY BOARD</p>
              <p><FormattedMessage id="portafolio.servicio2"/></p>

            </div>
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FMedical-content.png?alt=media&token=c325a0f5-341c-4f4f-81e9-e9b1b5187cab" alt="" />
              <p className="titulo">MEDICAL CONTENT/ DISEASE AWARENESS/ PATIENT SUPPORT PROGRAMS </p>
              <p><FormattedMessage id="portafolio.servicio3"/></p>

            </div>
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FMarket-Access.png?alt=media&token=dc31de8f-bea5-4e1a-9b63-b2f7c6cbb6fa" alt="" />
              <p className="titulo">MARKET ACCESS </p>
              <p><FormattedMessage id="portafolio.servicio4"/></p>

            </div>
          </div>
        </div>

        <div className="section grupo-servicios">
          <h3>DIGITAL MKT PHARMA </h3>
          <div className="servicios-contenedor" data-aos="fade-in">
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FSocial-Media-Engagement.png?alt=media&token=2835a660-1778-4700-9373-a69d88c26a5b" alt="" />
              <p className="titulo">SOCIAL MEDIA ENGAGEMENT  </p>
              <p><FormattedMessage id="portafolio.servicio5"/></p>

            </div>
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FWeb-%26-app-Development.png?alt=media&token=0121cdc5-1031-4645-90cd-0d5c5dc158ca" alt="" />
              <p className="titulo">WEB & APP DEVELOPMENT </p>
              <p><FormattedMessage id="portafolio.servicio6"/></p>

            </div>

          </div>
        </div>

        <div className="section grupo-servicios">
          <h3>VIDEO, SHOOTING & FILM PRODUCTION  </h3>
          <div className="servicios-contenedor" data-aos="fade-in">
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FStreaming-%26-Live-Production.png?alt=media&token=1f3c4b49-ec8f-47f9-8f7c-a086516faca7" alt="" />
              <p className="titulo">STREAMING & LIVE PRODUCTION  </p>
              <p><FormattedMessage id="portafolio.servicio7"/></p>

            </div>
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FPrint-%26-Promo.png?alt=media&token=fd583695-ee4b-426a-8265-14f40700e937" alt="" />
              <p className="titulo">PRINT, PROMO & EDITORIAL EVENT EXPERIENCE & PRODUCTION  </p>
              <p><FormattedMessage id="portafolio.servicio8"/></p>
            </div>
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FCatering-Concierge.png?alt=media&token=45c72237-c85d-4a29-b559-8f7fcdad7348" alt="" />
              <p className="titulo">CATERING CONCIERGE </p>
              <p><FormattedMessage id="portafolio.servicio9"/></p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicios
