import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"

import "./prominent-text.scss"

export default function ProminentText(props) {
   return (
      <div className='prominent-text'>
         <div className='text'>
            <h3>{props.kicker}</h3>
            <p>{props.text}</p>
         </div>
      </div>
   )
}


export const query = graphql`
  fragment ProminentText on DatoCmsProminentText {
     model {
        apiKey
      }
   kicker
   text
   locale
   id
 }
`
