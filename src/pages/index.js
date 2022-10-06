import * as React from "react"
import { useEffect } from "react"
import _ from "lodash";

import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

import "../styles/reset.scss"
import "../styles/global.scss"
import "../styles/typo.scss"

export default function Homepage(props) {
  const { homepage } = props.data

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return (
    <Layout {...homepage}>
      {/* <h1>{homepage.blocks[0].kicker}</h1> */}
      {homepage.blocks.map((block) => {
        const { ...componentProps } = block
        let blockType = _.camelCase(block.model.apiKey)
        blockType = capitalizeFirstLetter(blockType)

        const Component = sections[blockType] || Fallback
        return <Component key={block.id} {...componentProps} />
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    homepage {
      ... on DatoCmsHomepage {
        title
        blocks: mycontent {
          ...ProminentText 
          ...HeroImage
        }
      }
    }
  }
`

