import * as React from "react"
import { useState } from "react"

import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import Text from "../components/text/text"

export default function Imprint({location}) {
  const data = useStaticQuery(graphql`
  {
    allDatoCmsPrivacyPolicy {
      nodes {
        privacyPolicy
        locale
      }
    }
  }
  `)

  const [lang, setLang] = useState(location.state.lang || 'en')

  const passLang = (lang) => {
    setLang(lang)
  }

  const { privacyPolicy } = data.allDatoCmsPrivacyPolicy.nodes.filter(node => node.locale == lang)[0]

  return (
    <Layout language={lang} passLang={passLang}>
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
