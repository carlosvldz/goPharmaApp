import React from 'react'
import { FormattedMessage } from 'react-intl'

function filosofia () {
  return (
    <>
      <section className='section filosofia' data-aos='fade-up'>
        <div className='container-fluid '>
          <div className='texto'>
            <h3 data-aos='fade-up'>
              <FormattedMessage id='filosofia.nuestra' />
            </h3>
            <h4 data-aos='fade-up'> PATIENT CENTRICITY </h4>
            <p className='amper' data-aos='fade-in'>
              &
            </p>
            <h4 data-aos='fade-up'>CUSTOMER ENGAGEMENT </h4>
          </div>
        </div>
      </section>
    </>
  )
}

export default filosofia
