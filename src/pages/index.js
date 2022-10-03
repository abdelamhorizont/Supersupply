import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

import "../styles/reset.scss"
import "../styles/global.scss"
import "../styles/typo.scss"

export default function Homepage(props) {
  const { homepage } = props.data

  return (
    <Layout {...homepage}>

    </Layout>
  )
}

export const query = graphql`
  {
    homepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
      }
    }
  }
`

// export default function Homepage(props) {
//   const { homepage } = props.data

//   return (
//     <Layout {...homepage}>
//       {homepage.blocks.map((block) => {
//         const { id, blocktype, ...componentProps } = block
//         const Component = sections[blocktype] || Fallback
//         return <Component key={id} {...componentProps} />
//       })}
//     </Layout>
//   )
// }
