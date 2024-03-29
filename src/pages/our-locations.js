import * as React from "react"
import { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Projectlist from "../components/projectlist/projectlist"

export default function Projects({ data, location }) {
  const [lang, setLang] = useState(location.state?.lang || 'en')

  const passLang = (lang) => {
    setLang(lang)
  }

  const projects = data.allDatoCmsOurLocation.nodes.filter(node => node.locale == lang)

  const [mobile, setMobile] = useState(false)
  React.useEffect(() => {
    const isBrowser = () => typeof window !== `undefined`
    window.addEventListener('resize', setMobile(isBrowser() && window.screen.width < 768))
  }, [])

  return (
    <Layout language={lang} passLang={passLang}>

      {mobile &&
        <div className="title-block">
          <h1>Our Locations</h1>
        </div>
      }

      <Projectlist
        OurLocations={true}
        data={projects}
      />

    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsOurLocation {
      nodes {
        title
        locale
        text {
          value
        }
        images {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        adress {
          title
          link
        }
        serviceTags {
          serviceTitle
        }
        website {
          title
          link
        }
        instagramLink
      }
    }
  }
`