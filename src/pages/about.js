import * as React from "react"
import { useState } from "react"

import _ from "lodash";

import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

import "../styles/reset.scss"
import "../styles/global.scss"
import "../styles/typo.scss"

export default function About({data, location}) {
  // const { aboutPage } = data
  // console.log(location.state.lang)

  const [lang, setLang] = useState(location.state.lang || 'en')

  const passLang = (lang) => {
    setLang(lang)
  }

  const aboutPage = data.allDatoCmsAboutpage.nodes.filter(node =>  node.locale == lang)[0]

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return (
    <Layout language={lang} passLang={passLang} {...aboutPage}>
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
    allDatoCmsAboutpage {
      nodes {     
        title
        id
        locale
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
//       ... on DatoCmsAboutpage {
//         title
//         id
//         blocks: mycontent {
//           ...ProminentText 
//           ...HeroImage
//         }
//       }
//     }
//   }
// `
