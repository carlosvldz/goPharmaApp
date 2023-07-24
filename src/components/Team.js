import React from 'react'

// import * as FaIcons from "react-icons/fa";
import 'aos/dist/aos.css'
import { FormattedMessage } from 'react-intl'
function Team () {
  const data = [
    {
      id: 1,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team9.png?alt=media&token=697585e8-63ce-4857-bdc6-c99c40792f6d',
      name: 'Frank Valdez Tapia',
      position: 'General Manager'
    },
    {
      id: 2,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fcaro.png?alt=media&token=07188d83-2574-406f-8990-15c78016b2ab',
      name: 'Carolina Fernández',
      position: 'Art & Audiovisual Director '
    },
    {
      id: 3,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Frosa.png?alt=media&token=be3ae125-f01f-45f0-8e46-f98df8a21323',
      name: 'Rosa Brena ',
      position: 'Medical Manager '
    },
    {
      id: 4,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team4.png?alt=media&token=e62a72bf-02a3-429c-9954-cbc918f66841',
      name: 'Cristina Villagomez ',
      position: 'Finance Head '
    },
    {
      id: 6,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team23.png?alt=media&token=4504caaa-d686-42bb-b415-6e0ecc4234ec',
      name: 'Marisol Molina Medina',
      position: 'MSL'
    },
    {
      id: 8,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fvic.png?alt=media&token=243ba3e0-e9a8-4ac2-82b4-e9cca0b1cc66',
      name: 'Victoria García Zúñiga',
      position: 'Video Manager'
    },
    {
      id: 9,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team10.png?alt=media&token=2371074e-965f-43b0-9129-42bf061a3766',
      name: 'Enrique Alvarado Arenas',
      position: '3D Animation'
    },
    {
      id: 10,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fdiana-rhhead.png?alt=media&token=cc3e0371-86a2-45d0-87f1-21881bcb8eac',
      name: 'Diana Jiménez',
      position: 'HR Head'
    },
    {
      id: 11,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fkari.png?alt=media&token=ac776e18-3833-4a8a-9148-de6bf8fdef90',
      name: 'Karina Fonseca',
      position: 'Design Manager'
    },
    {
      id: 13,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team1.png?alt=media&token=e3ad7729-f618-4501-bac4-4aae7132abd6',
      name: 'Christopher Chavira',
      position: 'Mkt Coordinator'
    },
    {
      id: 14,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team15.png?alt=media&token=2b4035bd-0880-4484-89f1-7db699b84b7a',
      name: 'Arturo Sánchez',
      position: 'Creative Manager '
    },
    {
      id: 15,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team16.png?alt=media&token=095b5716-a45e-4448-81c9-7825d984270c',
      name: 'Víctor Cortés ',
      position: 'Legal Head'
    },
    {
      id: 16,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Falfredo.png?alt=media&token=7150c587-b6ff-4778-88d6-d07d3bc81f61',
      name: 'Alfredo Victoria',
      position: 'Video Production Manager'
    },
    {
      id: 18,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team8.png?alt=media&token=569b95a4-7ed8-461f-9dac-67c53d852baa',
      name: 'Hugo Rosales ',
      position: 'Movility'
    }
  ]
  return (
    <>
      <section data-aos='fade-up' className='Team section'>
        <div className='contenedor '>
          <div className='texto mt-3 mb-4 ' data-aos='fade-up'>
            <h3>
              GO PHARMA<sup>®</sup> TEAM
            </h3>
            <p className='h2'>
              <FormattedMessage id='team.inicio' />
              <span>
                {' '}
                <FormattedMessage id='team.interdisciplinario' />
              </span>{' '}
              <FormattedMessage id='team.formado' />
              <span>
                {' '}
                <FormattedMessage id='team.pharma' />
              </span>{' '}
              <FormattedMessage id='team.areas' />
              <span style={{ margin: '5px' }}>
                <FormattedMessage id='team.mareas' />
              </span>
              <FormattedMessage id='team.exp' />
              <span style={{ margin: '5px' }}>
              <FormattedMessage id='team.deseases' /></span>
              <FormattedMessage id='team.otras' />
            </p>
          </div>
          <br />
          <div className='main mt-3  '>
            {data.map((user) => (
              <div className='profile-card ' key={user.id} data-aos='fade-up'>
                <div className='img'>
                  <img src={user.img} alt='go-pharma-team' />
                </div>

                <div className='caption mt-3 '>
                  <h3>{user.name}</h3>
                  <p>{user.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
