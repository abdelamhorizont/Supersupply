import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"

export default function Page(props) {
  const { page } = props.data

  return (
    <Layout {...page}>
          <div
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />
    </Layout>
  )
}

export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
  }
`
