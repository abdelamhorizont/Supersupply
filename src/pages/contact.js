import * as React from "react"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

export default function Contact({data, location}) {
  const [lang, setLang] = useState(location.state.lang || 'en')

  const passLang = (lang) => {
    setLang(lang)
  }

  const contact = data.allDatoCmsContact.nodes.filter(node =>  node.locale == lang)[0].contact

  return (
    <Layout language={lang} passLang={passLang}>
      <sections.ProminentText text={contact} />
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsContact {
      nodes {
        contact
        locale
      }
    }
  }
`
