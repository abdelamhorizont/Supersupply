import React, {useState} from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Project from '../project/project'
import "./projectlist.scss"
import OurLocations from '../../pages/our-locations'

export default function ProjectList(props) {
   const projects = props.linkProject ? props.linkProject.links : props.data

   return (
      <div className='projectlist'>
         {!props.OurLocations &&
            <h1>{props.listTitle}</h1>
         }
         <div className={!props.OurLocations && 'projectgrid'}>
            {
               projects.map((project) => {
                  return (
                     <Project OurLocations={props.OurLocations} data={project} />
                  )
               })
            }

            {!props.OurLocations &&
               <div className='more-link'>
                  <Link to="/our-locations">more...</Link>
               </div>
            }
         </div>
      </div>
   )
}


export const query = graphql`
  fragment ProjectList on DatoCmsProjectList {
   model {
      apiKey
    }
   id
   listTitle
   linkProject {
      links {
        id
        title
        images {
         gatsbyImageData
        }
        text {
          value
        }
        adress {
         title
         link
        }
        serviceTags {
         serviceTitle
        }
        website {
         title
         link
        }
      }
   }
 }
`