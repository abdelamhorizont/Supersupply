import * as React from "react"
import _ from "lodash";

import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

import "../styles/reset.scss"
import "../styles/global.scss"
import "../styles/typo.scss"

export default function About(props) {
  const { aboutPage } = props.data
  console.log(aboutPage.blocks)
  //mycontent ist leer aber wieso?

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return (
    <Layout {...aboutPage}>
      {/* <sections.ProminentText kicker={aboutPage.blocks[0].ProminentText[0].kicker} /> */}
      {aboutPage.blocks.map((block) => { 
        const { ...componentProps } = block
        let blockType = _.camelCase(block?.model.apiKey)
        blockType = capitalizeFirstLetter(blockType)

        const Component = sections[blockType] || Fallback
        return <Component key={block?.id} {...componentProps} />
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    aboutPage {
      ... on DatoCmsAboutpage {
        title
        id
        blocks: mycontent {
          ...ProminentText 
          ...HeroImage
        }
      }
    }
  }
`
// export const query = graphql`
//   {
//     aboutPage {
//       id
//       title
//       description
//       image {
//         id
//         url
//       }
//       blocks: content {
//         id
//         blocktype
//       }
//     }
//   }
// `

// export const query = graphql`
//   {
//     homepage {
//       ... on DatoCmsHomepage {
//         title
//         blocks: mycontent {
//           ...ProminentText 
//           ...HeroImage
//           ...ProjectList
//         }
//       }
//     }
//   }
// `


