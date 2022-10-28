import React from 'react'
import { StructuredText } from 'react-datocms'

import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./project.scss"

export default function Project(props) {
   const project = props.data

   return (
      <div className='project'>
         <h2>{project.title}</h2>
         {/* <StructuredText data={project.text} /> */}

         <GatsbyImage
            className='image'
            alt={project.images[0].alt || project.images[0].title || project.images[0].filename }
            image={getImage(project.images[0].gatsbyImageData)}
         />
      </div>
   )
}


// export const query = graphql`
//   fragment Project on DatoCmsProject {
//       title
//       text {
//         value
//       }
//  }
// `