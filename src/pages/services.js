
import * as React from "react"
import { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import ProminentText from "../components/prominent-text/prominent-text"
import ListEl from "../components/list-el/list-el"

import "../components/project/project.scss"


export default function Services({data, location}) {
  const [lang, setLang] = useState(location.state.lang || 'en')

  const passLang = (lang) => {
    setLang(lang)
  }
  
  const { services, generalText } = data.allDatoCmsService.nodes.filter(node =>  node.locale == lang)[0]

  return (
    <Layout language={lang} passLang={passLang}>
      {
        services.map((service) => {
          return (
            <ListEl el={service} />
          )
        })
      }

      {generalText[0] &&
        <ProminentText kicker={generalText[0].kicker} text={generalText[0].text}/>
      }
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsService {
      nodes {
        locale
        generalText {
          kicker
          text
        }
        services {
          title
          text
        }
      }
    }
  }
`
