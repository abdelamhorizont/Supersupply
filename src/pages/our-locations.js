import * as React from "react"
import { graphql } from "gatsby"
import { useState } from "react"

import Layout from "../components/layout/layout"
import Projectlist from "../components/projectlist/projectlist"

export default function OurLocations(props) {
  const { projects } = props.data.allDatoCmsProject

  const [mobile, setMobile] = useState(false)
  React.useEffect(() => {
    const isBrowser = () => typeof window !== `undefined`
    window.addEventListener('resize', setMobile(isBrowser() && window.screen.width < 768))
  }, [])

  return (
    <Layout>
      {mobile &&
        <div className="title-block">
          <h1>Our Locations</h1>
        </div>
      }

      <Projectlist
        OurLocations={true}
        data={props.data.allDatoCmsProject}
      />

    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsProject(filter: {location: {eq: true}, locale: {eq: "en"},}) {
      nodes {
        title
        text {
          value
        }
        images {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`