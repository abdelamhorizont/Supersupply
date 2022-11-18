import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Div100vh from 'react-div-100vh'

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
  const [navHeight, setNavHeight] = useState(0)
  const ref = useRef(null)

  React.useEffect(() => {
    const isBrowser = () => typeof window !== `undefined`
    window.addEventListener('resize', setMobile(isBrowser() && window.screen.width < 768))
  }, [])

  useEffect(() => {
    mobile ? setNavHeight(ref.current.clientHeight) : setNavHeight(ref.current.clientHeight)
  })

  const isOpenStyle = {
    transform: isOpen ? "translateY(0px)" : "translateY(-200px)",
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

                <div ref={ref} className="mobile-menu-content" style={isOpenStyle}>
                  <div>
                    <li key='projects'><Link to="/projects">Projects</Link></li>
                    <li key='services'><Link to="/services">Services</Link></li>
                    <li key="Our Locations"><Link to="/our-locations">Our Locations</Link></li>
                  </div>
                  <div>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                  </div>
                  <div>
                    <li><Link to="/imprint">Imprint</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          <div style={{ marginTop: - navHeight }}></div>

          {props.children}

        </>
        :
        <>
          <header>
            <nav>
              <div ref={ref} className="menu-top">
                <div>
                  <li id="logo" key="SUPERSUPPLY"><Link to="/">SUPERSUPPLY</Link></li>
                </div>

                <div className="nav-middle-block">
                  <li key="Our Locations"><Link to="/our-locations">Our Locations</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/services">Services</Link></li>
                </div>

                <div>
                  <li><Link to="/about">About</Link></li>
                  <div className="lang"> <button>De</button> / <button>En</button></div>
                </div>

              </div>
            </nav>
          </header>
          <div style={{ height: navHeight }}></div>

          {props.children}

          <div style={{ height: navHeight }}></div>
          <footer>
            <nav>
              <div className="menu-bottom">
                <div>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/jobs">Jobs</Link></li>
                </div>
                <div></div>
                <div>
                  <li><Link to="/imprint">Imprint</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
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
