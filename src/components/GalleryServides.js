import React from 'react'
import Carousel from 'react-grid-carousel'

function GalleryServides () {
  return <>
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img src="https://picsum.photos/800/600?random=1" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" alt="" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" alt="" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  </>
}

export default GalleryServides
