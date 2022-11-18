import React, { useState } from 'react'
import { StructuredText } from 'react-datocms'

import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./list-el.scss"

export default function ListEl(props) {
  //  const project = props.data

   const [visible, setvisible] = useState(false)
   const [mobile, setMobile] = useState(false)

   React.useEffect(() => {
      const isBrowser = () => typeof window !== `undefined`
      window.addEventListener('resize', setMobile(isBrowser() && window.screen.width < 768))
   }, [])

   return (
      <div className={props.OurLocations && !mobile ? 'location list-el' : 'list-el'}>
      <div className='left-box'>

        <h2 onClick={() => setvisible(!visible)}>{props.el.title}</h2>

        <div className={visible || (props.OurLocations && !mobile) ? 'visible' : 'hidden'}>
          <p> {props.el.text} </p>
          {/* <StructuredText data={props.el.text} /> */}
        </div>

      </div>

      <div className='project-images'>
      </div>
    </div >
   )
}

