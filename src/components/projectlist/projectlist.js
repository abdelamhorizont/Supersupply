import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Project from '../project/project'
import "./projectlist.scss"

export default function ProjectList(props) {
   const linkProjects = props.linkProject

   return (
      <div className='projectlist'>
         <h1>{props.listTitle}</h1>
         {
            linkProjects.links.map((project) => {
               return(
                  <Project data={project} />
               )
            })
         }
         <Link>more...</Link>
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
      }
    }
 }
`