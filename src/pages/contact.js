import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

export default function Contact(props) {
  // const data = useStaticQuery(graphql`
  // {
  //   allDatoCmsContact {
  //     nodes {
  //       contact
  //     }
  //   }
  // }
  // `)
  const { contact } = props.data.allDatoCmsContact.nodes[0]

  return (
    <Layout>
      <sections.ProminentText text={contact} />
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsContact {
      nodes {
        contact
      }
    }
  }
`
