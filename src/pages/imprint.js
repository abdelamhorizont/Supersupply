import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import Text from "../components/text/text"

export default function Imprint(props) {
  const data = useStaticQuery(graphql`
  {
    allDatoCmsImprint {
      nodes {
        imprint
      }
    }
  }
  `)
  const { imprint } = data.allDatoCmsImprint.nodes[0]

  return (
    <Layout>
      <Text text={imprint} />
    </Layout>
  )
}

// export const query = graphql`
//   {
//     allDatoCmsContact {
//       nodes {
//         contact
//       }
//     }
//   }
// `
