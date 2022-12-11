import React, { useState, useEffect } from 'react'
import { StructuredText } from 'react-datocms'

import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper';
import { ArrowLeft, ArrowRight } from "react-feather"

import "../hero-image/hero-image.scss"
import 'swiper/css'
// import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "./project.scss"

export default function Project(props) {
   const project = props.data

   const [mobile, setMobile] = useState(false)

   useEffect(() => {
      const isBrowser = () => typeof window !== `undefined`
      setMobile(isBrowser() && window.screen.width < 768)

      window.addEventListener('resize', setMobile(isBrowser() && window.screen.width < 768))
      // !mobile && props.OurLocations && setvisible(true)

      const timer = setTimeout(() => {
         window.screen.width < 768 && setvisible(mobile)
      }, 500);
      return () => clearTimeout(timer);
   }, [])

   const [visible, setvisible] = useState(!mobile && props.OurLocations)
   // console.log(mobile);

   const navigationPrevRef = React.useRef(null)
   const navigationNextRef = React.useRef(null)

   return (
      <div id={project.title} className={(props.OurLocations && !mobile) ? 'location project' : 'project'}>
         <div className='title-bar' onClick={() => setvisible(!visible)}>
            <h2>{project.title}</h2>
            {(props.OurLocations && !mobile) &&
               <a target="_blank" href={project.adress[0]?.link}>
                  <p>{project.adress[0]?.title}</p>
               </a>
            }
         </div>

         <div className={(!props.OurLocations || mobile) ? 'project-content' : (props.OurLocations && visible ? 'project-content' : 'hidden-project')}>
            <div className={visible ? 'visible' : 'hidden'}>

               <div className='project-text'>
                  <StructuredText data={project.text} />
               </div>


               <div className='project-info-group'>
                  {(props.OurLocations && mobile) &&
                     <div className='project-info'>
                        <a target="_blank" href={project.adress[0]?.link}>
                           <p>{project.adress[0]?.title}</p>
                        </a>
                     </div>
                  }

                  {project.adress[0] &&
                     <div className='project-info'> <a target="_blank" href={project.website[0]?.link}>{project.website[0]?.title}</a></div>
                  }

                  {project.serviceTags[0] &&
                     <div className='project-info'>
                        {project.serviceTags?.map((tag, i) => {
                           return (
                              tag.serviceTitle !== "" && tag.serviceTitle + (i !== project.serviceTags.length - 1 ? ", " : "")
                           )
                        })}
                     </div>
                  }
               </div>
            </div>

            <div className='project-images'>
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
                  // pagination={{ clickable: true }}
                  spaceBetween={0}
                  slidesPerView={1}
                  style={{
                     "--swiper-pagination-color": "#fff",
                     "--swiper-navigation-color": "#fff",
                     "height": "100%",
                     "overflow": "hidden"
                  }}
               >
                  {
                     project.images.map((img) => {
                        return (
                           <SwiperSlide>
                              <GatsbyImage
                                 // className='hero-image'
                                 style={{ height: '100%' }}
                                 // alt={project.images[0].alt || project.images[0].title || project.images[0].filename}
                                 image={getImage(img.gatsbyImageData)}
                              />
                           </SwiperSlide>
                        )
                     })
                  }
                  <div className="swiper-buttons">
                     <div ref={navigationPrevRef} className="swiper-button-prev"> {mobile && <ArrowLeft />} </div>
                     <div ref={navigationNextRef} className="swiper-button-next"> {mobile && <ArrowRight />} </div>
                  </div>
               </Swiper>
            </div>
         </div>

      </div >
   )
}

