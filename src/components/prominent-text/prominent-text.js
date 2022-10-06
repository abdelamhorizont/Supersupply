import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"

export default function ProminentText(props) {
   return (
      <div>{props.kicker}</div>
   )
}


export const query = graphql`
  fragment ProminentText on DatoCmsProminentText {
     model {
        apiKey
      }
   kicker
   text
   id
 }
`