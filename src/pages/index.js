import * as React from "react"
import { useState } from "react";
import _ from "lodash";

import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

import "../styles/reset.scss"
import "../styles/global.scss"
import "../styles/typo.scss"

export default function Homepage({data, location}) {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [lang, setLang] = useState(location.state?.lang || 'en')

  const passLang = (lang) => {
    setLang(lang)
  }

  const homepage = data.allDatoCmsHomepage.nodes.filter(node =>  node.locale == lang)[0]

  return (
    <Layout language={lang} passLang={passLang} {...homepage}>
      {homepage.blocks.map((block) => { 
        const { ...componentProps } = block
        let blockType = _.camelCase(block?.model?.apiKey)
        blockType = capitalizeFirstLetter(blockType)

        const Component = sections[blockType] || Fallback
        return <Component key={block?.id} {...componentProps} />
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsHomepage {
      nodes {
        title
        locale
        blocks: mycontent {
          ...ProminentText 
          ...HeroImage
          ...ProjectList
          ...ContactLink
          ...ServiceList
        }
      }
    }
  }
`

