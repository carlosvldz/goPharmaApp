import React, { Component } from 'react'

import axios from 'axios'
import { FormattedMessage } from 'react-intl'

import 'aos/dist/aos.css'
const Cohete =
  'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FSpaceship.png?alt=media&token=8a39bf08-6961-496a-884f-7fadfe5a7f44'

const Nube =
  'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FGrupo%201%402x.png?alt=media&token=4b70d1e5-3d9d-4230-ad8e-20d774c8ab92'

const Star =
  'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FStar.png?alt=media&token=530337ee-8115-4965-86d0-4d1a713f4e3e'

class ContactForm extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      status: 'Enviar'
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({ status: 'Enviando...' })

    axios({
      method: 'POST',
      url: 'https://13.58.216.185:5000/contact',
      data: this.state
    }).then((response) => {
      if (response.data.status === 'sent') {
        window.location.href = '/success'
        console.log('Mensaje enviado')

        this.setState({ name: '', email: '', message: '', status: 'Enviado' })
      } else if (response.data.status === 'failed') {
        window.location.href = '/error'
        console.log('Error en el mensaje, porfavor intenta de nuevo')
      }
    })
  }

  handleChange (event) {
    const field = event.target.id
    if (field === 'name') {
      this.setState({ name: event.target.value })
    } else if (field === 'email') {
      this.setState({ email: event.target.value })
    } else if (field === 'phone') {
      this.setState({ phone: event.target.value })
    } else if (field === 'message') {
      this.setState({ message: event.target.value })
    }
  }

  render () {
    const buttonText = this.state.status

    return (
      <section className='section contacto-section' data-aos='fade-in'>
        <h1><FormattedMessage id='contacto'/></h1>
        <div className='contenedor contact_form'>
          <img
            className='cohete-contacto'
            src={Cohete}
            alt='Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD.'
          />
          <img
            className='nube-contacto'
            src={Nube}
            alt='Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD.'
          />
          <img
            className='star-contacto'
            src={Star}
            alt='Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD.'
          />
          <img
            className='cohete-contacto'
            src={Cohete}
            alt='Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD.'
          />
          <div className='contenedor-form d-flex'>
            <div className='col'>
              <h2>
                <FormattedMessage id='contacto.contacto' defaultMessage='¡Tienes un proyecto!' /><br />
                <FormattedMessage id='contacto.contacto2' defaultMessage='Conversemos' />
              </h2>
              <p>
               <FormattedMessage id='contacto.frase' defaultMessage='¡Gracias por ponerse en contacto!'/> <br />
               <FormattedMessage id='contacto.frase2' defaultMessage='Llena el formulario,  '/> <br />
                <br />
                <FormattedMessage id='contacto.frase3' defaultMessage='¡que tengas un excelente día!  '/>
              </p>
            </div>
            <div className='col'>
              <form
                className='formulario'
                onSubmit={this.handleSubmit.bind(this)}
                method='POST'>
                <div className='labelArea'>
                  <input
                    placeholder='Nombre completo**'
                    type='text'
                    id='name'
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                    required
                  />
                </div>

                <div className='labelArea'>
                  <input
                    placeholder='Correo electrónico**'
                    type='email'
                    id='email'
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                    required
                  />
                </div>

                <div className='labelArea'>
                  <input
                    placeholder='Teléfono'
                    type='phone'
                    id='phone'
                    value={this.state.phone}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>

                <div className='labelArea'>
                  <textarea
                    placeholder='¿Cómo podemos ayudarte?**'
                    id='message'
                    value={this.state.message}
                    onChange={this.handleChange.bind(this)}
                    required
                  />
                </div>

                <small>
                  ** información requerida
                  <br />
                  Al enviar este formulario, se le agregará a nuestra lista de
                  correo.
                </small>

                <br />

                <button className='btn-primario' type='submit'>
                  {buttonText}
                </button>

                <br />
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ContactForm
