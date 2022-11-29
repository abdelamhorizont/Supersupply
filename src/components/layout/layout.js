import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Div100vh from 'react-div-100vh'

import { Menu, X } from "react-feather"
import Head from "./head"
import LanguageSelector from "../LanguageSelector/languageSelector"
import "./layout.scss"

const Layout = ({title, description, image, language, children, location, passLang}) => {
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

  const [lang, setLang] = useState(language ? language : 'en')

  const handleLang = (lang) => {
    setLang(lang)
    passLang(lang)
  }


  const isOpenStyle = {
    transform: isOpen ? "translateY(0px)" : "translateY(-200px)",
    transition: isOpen ? "transform 0.5s, visibiliy 0.1s 0.5s" : "visibiliy 0.1s, transform 0.5s"
  }

  return (
    <>
      <Head />
      {/* <Head {...props} /> */}

      {mobile ?
        <>
          <header>
            <nav>
              <div>
                <div className="mobile-menu">
                  <li id="logo" key="SUPERSUPPLY"><Link  state={{lang}} to="/">SUPERSUPPLY</Link></li>
                  <div className="menu-buttons">
                  <LanguageSelector language={language} handleLang={handleLang} />
                    {/* <div className="lang"> <button>De</button> / <button>En</button></div> */}
                    <li key="openButton" style={{ display: !isOpen ? "inline" : "none" }} onClick={() => setOpen(true)}><Menu /></li>
                    <li key="closeButton" style={{ display: isOpen ? "inline" : "none" }} onClick={() => setOpen(false)}><X /></li>
                  </div>
                </div>

                <div ref={ref} className="mobile-menu-content" style={isOpenStyle}>
                  <div>
                    <li key='projects'><Link state={{lang}} to="/projects">Projects</Link></li>
                    <li key='services'><Link state={{lang}} to="/services">Services</Link></li>
                    <li key="Our Locations"><Link state={{lang}} to="/our-locations">Our Locations</Link></li>
                  </div>
                  <div>
                    <li><Link state={{lang}} to="/about">About</Link></li>
                    <li><Link state={{lang}} to="/contact">Contact</Link></li>
                    <li><Link state={{lang}} to="/jobs">Jobs</Link></li>
                  </div>
                  <div>
                    <li><Link state={{lang}} to="/imprint">Imprint</Link></li>
                    <li><Link state={{lang}} to="/privacy-policy">Privacy Policy</Link></li>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          <div style={{ marginTop: - navHeight }}></div>

          {children}

        </>
        :
        <>
          <header>
            <nav>
              <div ref={ref} className="menu-top">
                <div>
                  <li id="logo" key="SUPERSUPPLY"><Link state={{lang}} to="/">SUPERSUPPLY</Link></li>
                </div>

                <div className="nav-middle-block">
                  <li key="Our Locations"><Link state={{lang}} to="/our-locations">Our Locations</Link></li>
                  <li><Link state={{lang}} to="/projects">Projects</Link></li>
                  <li><Link state={{lang}} to="/services">Services</Link></li>
                </div>

                <div>
                  <li><Link state={{lang}} to="/about">About</Link></li>
                  <LanguageSelector language={language} handleLang={handleLang} />
                  {/* <div className="lang"> <button>De</button> / <button>En</button></div> */}
                </div>

              </div>
            </nav>
          </header>
          <div style={{ height: navHeight }}></div>

          {children}

          <div style={{ height: navHeight }}></div>
          <footer>
            <nav>
              <div className="menu-bottom">
                <div>
                  <li><Link state={{lang}} to="/contact">Contact</Link></li>
                  <li><Link state={{lang}} to="/jobs">Jobs</Link></li>
                </div>
                <div></div>
                <div>
                  <li><Link state={{lang}} to="/imprint">Imprint</Link></li>
                  <li><Link state={{lang}} to="/privacy-policy">Privacy Policy</Link></li>
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
