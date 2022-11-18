
import * as React from "react"
import { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import ProminentText from "../components/prominent-text/prominent-text"
import ListEl from "../components/list-el/list-el"

import "../components/project/project.scss"


export default function Services(props) {
  const { services, generalText } = props.data.allDatoCmsService.nodes[0]

  return (
    <Layout>
      {
        services.map((service, i) => {
          return (
            <ListEl el={service} generalText={generalText} />
          )
        })
      }

      {generalText[0] &&
        <ProminentText kicker={generalText[0].kicker} text={generalText[0].text}/>
      }
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsService(filter: {locale: {eq: "en"}}) {
      nodes {
        generalText {
          kicker
          text
        }
        services {
          title
          text
        }
      }
    }
  }
`
