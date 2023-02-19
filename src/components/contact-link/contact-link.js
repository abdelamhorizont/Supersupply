import * as React from "react"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProminentText from '../prominent-text/prominent-text'

export default function ContactLink(props) {
  const contact = props.linkContact.links[0].contact
  const mail = props.linkContact.links[0].mailAdress

  return (
    <div className='projectlist'>
      {/* <h1>{props.listTitle}</h1> */}
      <ProminentText text={contact} kicker={props.listTitle} />
      <div className="text">
        <a href={"mailTo:" + mail}><p>{mail}</p></a>
      </div>
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
        mailAdress
      }
    }
 }
`