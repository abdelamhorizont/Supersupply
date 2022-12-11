import React, { useState } from 'react'
import { StructuredText } from 'react-datocms'

import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./list-el.scss"

export default function ListEl(props) {
  //  const project = props.data

  const [visible, setvisible] = useState(false)
  const [mobile, setMobile] = useState(false)
  console.log(visible);

  React.useEffect(() => {
    const isBrowser = () => typeof window !== `undefined`
    window.addEventListener('resize', setMobile(isBrowser() && window.screen.width < 768))
  }, [])

  return (
    <div className={'list-el'}>

        <h2 className={visible ? 'h2-visible' : 'h2-hidden'}
          onClick={() => setvisible(!visible)}>{props.el.title}</h2>

        <div className='job-content'>
          <div className={visible ? 'visible' : 'hidden'}>
            <p> {props.el.text} </p>
            {/* <StructuredText data={props.el.text} /> */}
          </div>

          <div>
          </div>

      </div>


      <div className='project-images'>
      </div>
    </div >
  )
}

