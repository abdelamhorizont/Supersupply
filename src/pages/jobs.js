
import * as React from "react"
import { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import ProminentText from "../components/prominent-text/prominent-text"
import ListEl from "../components/list-el/list-el"

import "../components/project/project.scss"


export default function Jobs(props) {
   const { generalText, jobEntries } = props.data.allDatoCmsJob.nodes[0]

   return (
      <Layout>
         {
            jobEntries.map(job => {
               return (
                  <ListEl el={job} />
               )
            })
         }

         {generalText[0] &&
            <ProminentText kicker={generalText[0].kicker} text={generalText[0].text} />
         }
      </Layout>
   )
}

export const query = graphql`
  {
   allDatoCmsJob {
      nodes {
         generalText {
            kicker
            text
          }
        jobEntries {
          text
          title
        }
      }
    }
  }
`
