import React, { useState } from 'react'
import { StructuredText } from 'react-datocms'

import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./project.scss"

export default function Project(props) {
   const project = props.data

   const [visible, setvisible] = useState(false)

   const [mobile, setMobile] = useState(false)
   React.useEffect(() => {
      const isBrowser = () => typeof window !== `undefined`
      window.addEventListener('resize', setMobile(isBrowser() && window.screen.width < 768))
   }, [])

   return (
      <div className={props.OurLocations && !mobile ? 'location project' : 'project'}>
         <h2 onClick={() => setvisible(!visible)}>{project.title}</h2>
    
         <div className='left-box'>
            <div className={visible || props.OurLocations && !mobile ? 'visible' : 'hidden'}>
               <StructuredText data={project.text} />
            </div>
         </div>

         <div className='project-images'>
            <GatsbyImage
               style={{ height: '100%' }}
               // imageStyle={{ objectFit: `cover` }}
               alt={project.images[0].alt || project.images[0].title || project.images[0].filename}
               image={getImage(project.images[0].gatsbyImageData)}
            />
         </div>
      </div >
   )
}

