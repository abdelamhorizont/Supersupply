import React from 'react'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./hero-image.scss"

export default function HeroImage(props) {
   const img = props.horizontalImage[0]

   return (
      <div>
         <GatsbyImage
            className='hero-image'
            alt={img.alt}
            image={getImage(img.gatsbyImageData)}
         />
      </div>
   )
}


export const query = graphql`
  fragment HeroImage on DatoCmsHeroImage {
     model {
        apiKey
      }
      horizontalImage {
         alt
         title
         gatsbyImageData(layout: FULL_WIDTH)
      }
   id
 }
`