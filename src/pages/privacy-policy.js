import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import Text from "../components/text/text"

export default function Imprint(props) {
  const data = useStaticQuery(graphql`
  {
    allDatoCmsPrivacyPolicy {
      nodes {
        privacyPolicy
      }
    }
  }
  `)
  const { privacyPolicy } = data.allDatoCmsPrivacyPolicy.nodes[0]

  return (
    <Layout>
      <Text text={privacyPolicy} />
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
