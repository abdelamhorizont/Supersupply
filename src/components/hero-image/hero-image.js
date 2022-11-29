import React from 'react'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper';

import "./hero-image.scss"
import 'swiper/css'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default function HeroImage(props) {
   const images = props.images

   return (
      <div className='hero'>
         <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            style={{
               "--swiper-pagination-color": "#fff",
               "--swiper-navigation-color": "#fff",
             }}
         >
            {
               images.map((img) => {
                  return (
                     <SwiperSlide>
                        <GatsbyImage
                           className='hero-image'
                           // alt={img.alt}
                           image={getImage(img.gatsbyImageData)}
                        />
                     </SwiperSlide>
                  )
               })
            }
         </Swiper>
      </div>
   )
}


export const query = graphql`
  fragment HeroImage on DatoCmsHeroImage {
     model {
        apiKey
      }
      images {
         gatsbyImageData(layout: FULL_WIDTH)
      }
   id
 }
`