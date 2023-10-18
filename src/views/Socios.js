import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FormattedMessage } from 'react-intl'

// import required modules
import { Autoplay, Grid, Pagination, Navigation } from 'swiper'
const partners = [
  {
    id: 1,
    name: 'Abbott',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fabbott%2Fa_sig_horiz_1c_w_113px-01.png?alt=media&token=770b19fd-e180-4320-9cc5-65d3056f7432',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fabbott%2Fa_sig_horiz_1c_w_113px-01.png?alt=media&token=770b19fd-e180-4320-9cc5-65d3056f7432',
    url: 'https://www.latam.abbott/'
  },
  {
    id: 2,
    name: 'Abbvie',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fabbvie%2Flogo.svg?alt=media&token=eda626f1-8cd4-4566-ad42-77b4f7d652fa',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fabbvie%2Flogo.svg?alt=media&token=eda626f1-8cd4-4566-ad42-77b4f7d652fa',
    url: 'https://www.abbvie.com.mx/'
  },
  {
    id: 3,
    name: 'Allergan',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fallergan%2Flogo-black.svg?alt=media&token=af2f66c4-210b-4ea6-a9dc-27d51c81ec37',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fallergan%2Flogo-black.svg?alt=media&token=af2f66c4-210b-4ea6-a9dc-27d51c81ec37',
    url: 'https://www.allerganaestheticslatam.com/'
  },
  {
    id: 4,
    name: 'Armstrong',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Farmstrong%2Flogo-blanco.svg?alt=media&token=313552d7-2fb1-4119-87cc-10998452d9a7',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Farmstrong%2Flogo-blanco.svg?alt=media&token=313552d7-2fb1-4119-87cc-10998452d9a7',
    url: 'https://laboratoriosarmstrong.mx/'
  },
  {
    id: 5,
    name: 'Asofarma',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fasofarma%2Flogo-asofarma-mexico-blanco.svg?alt=media&token=7a43cf3f-5a8f-4652-a14d-b9ddc28a357d',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fasofarma%2Flogo-asofarma-mexico-blanco.svg?alt=media&token=7a43cf3f-5a8f-4652-a14d-b9ddc28a357d',
    url: 'https://www.asofarma.com.mx/'
  },
  {
    id: 6,
    name: 'Astra Zeneca',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fastrazeneca%2Flogo-az-white.png?alt=media&token=05343593-0468-4ad4-b509-d23470bacf8c',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fastrazeneca%2Flogo-az-white.png?alt=media&token=05343593-0468-4ad4-b509-d23470bacf8c',
    url: 'https://www.astrazeneca.mx/'
  },
  {
    id: 7,
    name: 'Baxter',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fbaxter%2F320px-Baxter.svg.png?alt=media&token=fa39d26a-0bc2-48f5-8c58-2f5f361821bc',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fbaxter%2F320px-Baxter.svg.png?alt=media&token=fa39d26a-0bc2-48f5-8c58-2f5f361821bc',
    url: 'https://www.baxter.mx/'
  },
  {
    id: 8,
    name: 'Biogen',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fbiogen%2Fbiogen-logo-refresh-new.svg?alt=media&token=6295789d-1e96-4bef-b264-8dd81e8eb201',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fbiogen%2Fbiogen-logo-refresh-new.svg?alt=media&token=6295789d-1e96-4bef-b264-8dd81e8eb201',
    url: 'https://www.biogen.com.mx/'
  },
  {
    id: 9,
    name: 'Biomarin',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fbiomarin%2Fbiomarin-wht.svg?alt=media&token=9b646767-fcc5-42e6-9e61-5f91eb84ce5f',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fbiomarin%2Fbiomarin-wht.svg?alt=media&token=9b646767-fcc5-42e6-9e61-5f91eb84ce5f',
    url: 'https://www.biomarin.com/'
  },
  {
    id: 10,
    name: 'BPL',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fbpl%2Fbio-products-laboratory-bpl-logo-4494A0F799-seeklogo.com.png?alt=media&token=14c86480-447a-44ab-a17e-b3021b8b93f8',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fbpl%2Fbio-products-laboratory-bpl-logo-4494A0F799-seeklogo.com.png?alt=media&token=14c86480-447a-44ab-a17e-b3021b8b93f8',
    url: 'https://www.bplgroup.com/'
  },
  {
    id: 11,
    name: 'Chiesi',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fchiesi%2Fchiesi-farmaceutici-s-p-a-logo-388781ECC6-seeklogo.com.png?alt=media&token=9d059152-523a-4af7-988f-18f5d6e10530',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fchiesi%2Fchiesi-farmaceutici-s-p-a-logo-388781ECC6-seeklogo.com.png?alt=media&token=9d059152-523a-4af7-988f-18f5d6e10530',
    url: 'https://www.chiesi.mx/'
  },
  {
    id: 12,
    name: 'Churchdwight',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fchurchdwight%2FlogoChD.png?alt=media&token=327d0480-7d51-4b37-bd5f-280809b374c6',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fchurchdwight%2FlogoChD.png?alt=media&token=327d0480-7d51-4b37-bd5f-280809b374c6',
    url: 'https://www.churchdwight.com.mx/'
  },
  {
    id: 12.2,
    name: 'CSL Behin',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2FcslBehin%2Fcsl-behring-2022.png?alt=media&token=45568fea-dce9-44d7-89e1-2e3f5329bbfd',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2FcslBehin%2Fcsl-behring-2022.png?alt=media&token=45568fea-dce9-44d7-89e1-2e3f5329bbfd',
    url: 'https://www.cslbehring.com.mx/'
  },
  {
    id: 13,
    name: 'Eisai',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Feisai%2Flogo.png?alt=media&token=f45f33f8-2a26-45cb-8155-5617284264fd',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Feisai%2Flogo.png?alt=media&token=f45f33f8-2a26-45cb-8155-5617284264fd',
    url: 'https://www.eisai.com.mx/es-mx/'
  },
  {
    id: 14,
    name: 'Farmapiel',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Ffarmapiel%2Flogo-2023022311240926100.webp?alt=media&token=8d37e506-eaf6-4314-971b-c1b03ee6c22c',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Ffarmapiel%2Flogo-2023022311240926100.webp?alt=media&token=8d37e506-eaf6-4314-971b-c1b03ee6c22c',
    url: 'https://www.farmapiel.com/'
  },
  {
    id: 15,
    name: 'Ipsen',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fipsen%2FLogo_IPSEN.svg?alt=media&token=f3a835a8-9876-4a16-aa00-23efb0a47476',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fipsen%2FLogo_IPSEN.svg?alt=media&token=f3a835a8-9876-4a16-aa00-23efb0a47476',
    url: 'https://www.ipsen.com/'
  },
  {
    id: 16,
    name: 'Janssen',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fjanssen%2Flogo.png?alt=media&token=6e541812-9488-43f1-853b-1c3d0177cb8d',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fjanssen%2Flogo.png?alt=media&token=6e541812-9488-43f1-853b-1c3d0177cb8d',
    url: 'https://www.janssen.com/mexico/'
  },
  {
    id: 17,
    name: 'Moksha8',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fmoksha8%2Fmoksha8.png?alt=media&token=9945b8c0-39e6-47a8-9d1b-790c1a8a9d77',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fmoksha8%2Fmoksha8.png?alt=media&token=9945b8c0-39e6-47a8-9d1b-790c1a8a9d77',
    url: 'https://www.m8pharmaceuticals.com/'
  },
  {
    id: 18,
    name: 'Novartis',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fnovartis%2Flogo.svg?alt=media&token=da5aec69-3787-4633-aeb9-729e99e52b4a',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fnovartis%2Flogo.svg?alt=media&token=da5aec69-3787-4633-aeb9-729e99e52b4a',
    url: 'https://www.novartis.com/mx-es/'
  },
  {
    id: 19,
    name: 'PTC',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fptc%2FPTC_logo_footer.png?alt=media&token=c28696f4-49bb-43cc-b6fc-08299f02ede9',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fptc%2FPTC_logo_footer.png?alt=media&token=c28696f4-49bb-43cc-b6fc-08299f02ede9',
    url: 'https://www.ptcbio.es/'
  },
  {
    id: 20,
    name: 'Recordati',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Frecordati%2FRecordati.svg?alt=media&token=7bfe57db-980d-4fa1-80c0-5321b7dd08fd',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Frecordati%2FRecordati.svg?alt=media&token=7bfe57db-980d-4fa1-80c0-5321b7dd08fd',
    url: 'https://recordati.com/products/cystadane-mexico/'
  },
  {
    id: 21,
    name: 'Roche',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Froche%2Froche-logo.png?alt=media&token=cef8b9b0-506f-4db3-9c00-9d938d55d78c',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Froche%2Froche-logo.png?alt=media&token=cef8b9b0-506f-4db3-9c00-9d938d55d78c',
    url: 'https://www.roche.com.mx/'
  },
  {
    id: 22,
    name: 'Sanofi',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fsanofi%2Fsanofi-logo-2-dark.png?alt=media&token=f0a5b3a8-9e9a-4c7e-8b7f-cf852787592c',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fsanofi%2Fsanofi-logo-2-dark.png?alt=media&token=f0a5b3a8-9e9a-4c7e-8b7f-cf852787592c',
    url: 'https://www.sanofi.com.mx/'
  },
  {
    id: 23,
    name: 'Sophia',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fsophia%2Flogo_v2-white.svg?alt=media&token=3cdf3615-f300-4dcd-95c4-5b7e8bd09342',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fsophia%2Flogo_v2-white.svg?alt=media&token=3cdf3615-f300-4dcd-95c4-5b7e8bd09342',
    url: 'https://www.sophialab.com/'
  },
  {
    id: 24,
    name: 'Takeda',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Ftakeda%2Fta5253t3d5-takeda-logo-takeda-logo-medicine--com.png?alt=media&token=dd4e1e0e-6cca-4599-97cd-57d294ef77f3',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Ftakeda%2Fta5253t3d5-takeda-logo-takeda-logo-medicine--com.png?alt=media&token=dd4e1e0e-6cca-4599-97cd-57d294ef77f3',
    url: 'https://www.takeda.com/es-mx'
  },
  {
    id: 25,
    name: 'Teva',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fteva%2Fteva-logo2%20copy.png?alt=media&token=c76e579a-e7dd-47cb-891d-ef4c7afca161',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fteva%2Fteva-logo2%20copy.png?alt=media&token=c76e579a-e7dd-47cb-891d-ef4c7afca161',
    url: 'https://www.tevamexico.com.mx/'
  },
  {
    id: 26,
    name: 'Ultragenix',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fultragenix%2Flogo_89fae9fb09e515049539530da9a6fd66_1x.png?alt=media&token=78727788-95cc-4201-8651-cf74b7b579bc',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fultragenix%2Flogo_89fae9fb09e515049539530da9a6fd66_1x.png?alt=media&token=78727788-95cc-4201-8651-cf74b7b579bc',
    url: 'https://ultramedic.com.mx/'
  },
  {
    id: 27,
    name: 'Ultramedic',
    img: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fultramedic%2Fultragenyx-footer-logo.png?alt=media&token=9a080be5-ae04-4228-be02-ac36dfe7d234',
    bucketLink: 'https://firebasestorage.googleapis.com/v0/b/gopharmaapp-461d6.appspot.com/o/assets%2Flogos%2Fultramedic%2Fultragenyx-footer-logo.png?alt=media&token=9a080be5-ae04-4228-be02-ac36dfe7d234',
    url: 'https://www.ultragenyx.com/mx/'
  }
]
export default function Socios () {
  const handleImageClick = (url) => {
    window.location.href = url
  }

  return (
    <>
      <section className='sociost'>
        <h4>
          <FormattedMessage id='socios.inicio' />
        </h4>
        <Swiper
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          grid={{
            rows: 2
          }}
          spaceBetween={30}
          navigation={true}
          pagination={{
            dynamicBullets: true,
            clickable: true
          }}
          modules={[Autoplay, Grid, Pagination, Navigation]}
          className='mySwiper'>
          {partners.map((partner) => (
            <SwiperSlide key={partner.id} className='col-sm socio'>
              <img
                src={partner.img}
                className='socioimg'
                alt={partner.name}
                onClick={() => handleImageClick(partner.url)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}
