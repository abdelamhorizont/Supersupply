import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"

import "./text.scss"

export default function Text(props) {
   return (
      <div className='small-text'>
            {/* <h3>{props.kicker}</h3> */}
            <p>{props.text}</p>
      </div>
   )
}


// export const query = graphql`
//   fragment ProminentText on DatoCmsProminentText {
//      model {
//         apiKey
//       }
//    kicker
//    text
//    locale
//    id
//  }
// `