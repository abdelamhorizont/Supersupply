import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"

export default function HeroImage(props) {
   return (
      <div>{props.id}</div>
   )
}


export const query = graphql`
  fragment HeroImage on DatoCmsHeroImage {
     model {
        apiKey
      }
      myImage {
         url
       }
   id
 }
`