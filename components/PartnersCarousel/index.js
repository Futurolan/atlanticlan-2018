import React from 'react'
import Slider from 'react-slick'

import './styles.scss'

class PartnersCarousel extends React.Component {
  render () {
    let settings = {
      slidesToShow: 3,
      variableWidth: true,
      nextArrow: <button type='button' className='slick-next'><i className='fa fa-2x fa-arrow-right' /> </button>,
      prevArrow: <button type='button' className='slick-prev'><i className='fa fa-2x fa-arrow-left' /> </button>

    }
    return (
      <section className='section ga-partners-carousel'>
        <Slider {...settings}>
          <div className='carousel-item'>
            <img src='http://placekitten.com/g/400/200' />
          </div>
          <div className='carousel-item'>
            <img src='http://placekitten.com/g/200/200' />
          </div>
          <div className='carousel-item'>
            <img src='http://placekitten.com/g/300/200' />
          </div>
        </Slider>
      </section>
    )
  }
}

export default PartnersCarousel
