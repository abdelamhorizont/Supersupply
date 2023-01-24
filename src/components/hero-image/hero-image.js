import React, { useEffect, useState } from 'react'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper';
import { ArrowLeft, ArrowRight } from "react-feather"

import "./hero-image.scss"
import 'swiper/css'
// import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default function HeroImage(props) {
   const images = props.images

   const navigationPrevRef = React.useRef(null)
   const navigationNextRef = React.useRef(null)
   const [mobile, setMobile] = useState(false)

   useEffect(() => {
      const isBrowser = () => typeof window !== `undefined`
      setMobile(isBrowser() && window.screen.width < 768)
      window.addEventListener('resize', setMobile(isBrowser() && window.screen.width < 768))
   }, [])

   console.log(images.length)

   return (
      <div className='hero'>
         <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation={{
               nextEl: navigationNextRef.current,
               prevEl: navigationPrevRef.current
            }}
            onBeforeInit={(swiper) => {
               swiper.params.navigation.nextEl = navigationNextRef.current;
               swiper.params.navigation.prevEl = navigationPrevRef.current;
            }}
            loop={true}
            watchOverflow={true}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            style={{
               "--swiper-pagination-color": "#fff",
               "--swiper-navigation-color": "#fff",
            }}
         >
            {images.length > 0 ?
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
               :
               <GatsbyImage
                  className='hero-image'
                  // alt={img.alt}
                  image={getImage(images[0]?.gatsbyImageData)}
               />
            }
            {images.length > 1 &&
               <div className="swiper-buttons">
                  <div ref={navigationPrevRef} className="swiper-button-prev"> {mobile && <ArrowLeft />} </div>
                  <div ref={navigationNextRef} className="swiper-button-next"> {mobile && <ArrowRight />} </div>
               </div>
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