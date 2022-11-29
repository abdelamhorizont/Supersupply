import * as React from "react"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import Text from "../components/text/text"

export default function Imprint({ location }) {
  const data = useStaticQuery(graphql`
  {
    allDatoCmsImprint{      
      nodes {
        imprint
        locale
      }
    }
  }
  `)

  const [lang, setLang] = useState(location.state.lang || 'en')

  const passLang = (lang) => {
    setLang(lang)
  }

  const { imprint } = data.allDatoCmsImprint.nodes.filter(node => node.locale == lang)[0]

  return (
    <Layout language={lang} passLang={passLang}>
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
