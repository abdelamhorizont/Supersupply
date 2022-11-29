import React, { useState } from "react"
import "./languageSelector.scss"

export default function LanguageSelector({ handleLang, language }) {
   const [lang, setLang] = useState(language ? language : 'en')

   return (
      <div className="lang">
         <button className={lang === 'de' && "active-lang"} onClick={() => {
            handleLang('de')
            setLang('de')
         }}> De </button>
         /
         <button className={lang === 'en' && "active-lang"} onClick={() => {
            handleLang('en')
            setLang('en')
         }}>En</button>
      </div>
   )
}
