import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Menu, X } from "react-feather"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      layout {
        header {
          id
          navItems {
            id
            navItemType
            ... on NavItem {
              href
              text
            }
            ... on NavItemGroup {
              name
              navItems {
                id
                href
                text
                description
                icon {
                  alt
                  gatsbyImageData
                }
              }
            }
          }
          cta {
            id
            href
            text
          }
        }
      }
    }
  `)

  const { navItems, cta } = data.layout.header
  const [isOpen, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  return (
    <header>
      <nav>
          {navItems &&
            navItems.map((navItem) => (
              <li key={navItem.id}>
                {navItem.navItemType === "Group" ? (
                  <Link to={navItem.href}>{navItem.name}</Link>
                ) : (
                  <Link to={navItem.href}>{navItem.text}</Link>
                )}
              </li>
            ))}
      </nav>
    </header>
  )
}
