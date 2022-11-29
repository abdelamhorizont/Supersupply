import * as React from "react"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProminentText from '../prominent-text/prominent-text'

export default function ContactLink(props) {
  const contact = props.linkContact.links[0].contact

  return (
    <div className='projectlist'>
      <h1>{props.listTitle}</h1>
      <ProminentText text={contact} />
    </div>
  )
}

export const query = graphql`
fragment ContactLink on DatoCmsContactLink {
   model {
      apiKey
    }
   id
   listTitle
   linkContact {
      links {
        contact
        locale
      }
    }
 }
`