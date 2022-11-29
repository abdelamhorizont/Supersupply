import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Project from '../project/project'
import ListEl from "../list-el/list-el"

import "../projectlist/projectlist.scss"
import OurLocations from '../../pages/our-locations'

export default function ServicetList(props) {
   const services = props.linkProject.links[0].services

   return (
      <div className='projectlist'>
         <h1>{props.listTitle}</h1>
         {
            services.map((service) => {
               return (
                  <ListEl el={service} />
               )
            })
         }
      </div>
   )
}


export const query = graphql`
  fragment ServiceList on DatoCmsServiceList {
   model {
      apiKey
    }
   id
   listTitle
   linkProject {
      links {
         services {
            text
            title
          }
      }
   }
 }
`