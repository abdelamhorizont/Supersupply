import * as React from "react"
import { useState, useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { Menu, X } from "react-feather"
import Head from "./head"
// import SocialLinks from "./socialLinks"

import "./layout.scss"

const Layout = (props) => {
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
      }
    }
  }
`)

  const [mobile, setMobile] = useState(false)
  const [isOpen, setOpen] = useState(false)

  React.useEffect(() => {
    const isBrowser = () => typeof window !== `undefined`
    setMobile(isBrowser() && window.screen.width < 768)
  }, [])

  const isOpenStyle = {
    transform: isOpen ? "translateY(0px)" : "translateY(-200px)",
    // visibility: isOpen ? "visible" : "hidden",
    transition: isOpen ? "transform 0.5s, visibiliy 0.1s 0.5s" : "visibiliy 0.1s, transform 0.5s"
  }

  return (
    <>
      <Head {...props} />

      {mobile ?
        <>
          <header>
            <nav>
              <div>
                <div className="mobile-menu">
                  <li id="logo" key="SUPERSUPPLY"><Link to="/">SUPERSUPPLY</Link></li>
                  <div className="menu-buttons">
                    <div className="lang"> <button>De</button> / <button>En</button></div>
                    <li key="openButton" style={{ display: !isOpen ? "inline" : "none" }} onClick={() => setOpen(true)}><Menu /></li>
                    <li key="closeButton" style={{ display: isOpen ? "inline" : "none" }} onClick={() => setOpen(false)}><X /></li>
                  </div>
                </div>

                <div className="mobile-menu-content" style={isOpenStyle}>
                  <div>
                    <li><Link to="/">Projects</Link></li>
                    <li><Link to="/">Services</Link></li>
                    <li key="Our Locations"><Link to="/our-locations">Our Locations</Link></li>
                  </div>
                  <div>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">Jobs</Link></li>
                  </div>
                  <div>
                    <li><Link to="/">Imprint</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          {props.children}

        </>
        :
        <>
          <header>
            <nav>
              <div className="menu-top">
                <div>
                <li id="logo" key="SUPERSUPPLY"><Link to="/">SUPERSUPPLY</Link></li>
                </div>

                <div>
                  <li key="Our Locations"><Link to="/our-locations">Our Locations</Link></li>
                  <li><Link to="/">Projects</Link></li>
                  <li><Link to="/">Services</Link></li>
                </div>

                <div>
                  <li><Link to="/">About</Link></li>
                  <div className="lang"> <button>De</button> / <button>En</button></div>
                </div>
              </div>
            </nav>
          </header>

          {props.children}

          <footer>
            <nav>
              <div className="menu-bottom">
                <div>
                  <li><Link to="/">Contact</Link></li>
                  <li><Link to="/">Jobs</Link></li>
                </div>
                <div>
                  <li><Link to="/">Imprint</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                </div>
              </div>
              {/* <div>
              <SocialLinks />
              </div> */}
            </nav>
          </footer>
        </>
      }

    </>
  )
}

export default Layout
