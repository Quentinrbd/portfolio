/* eslint-disable react/no-unescaped-entities */
import "./Bio.css"
import html from "../../assets/html.svg"
import css from "../../assets/CSS.svg"
import js from "../../assets/javascript.svg"
import ruby from "../../assets/ruby.svg"
import rails from "../../assets/rails.svg"
import react from "../../assets/react.svg"
import cv from "../../assets/CV.pdf"

import { motion } from "framer-motion"

export default function Bio() {

  return (
    <div className="bio" id="bio">
        <motion.div
        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{ ease: "linear", duration:0.7}}
        >

          <div className="bio-content" >
            <h1>Qui suis-je ?</h1>
            <p>Développeur front-end junior, je suis passioné par le développement web et par la création.</p>
            <p>Diplômé d'un BTS SIO ainsi que d’une certification Concepteur - Développeur d’application web au sein du <a href="https://www.lewagon.com/fr" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"#ECB365"}}>Wagon</a>, j'ai acquis de nombreuses connaissances sur ces derniers langages.</p>
            <div className="logo">
              <img src={html} alt="html" id="html"/>
              <img src={css} alt="css" id="css" />
              <img src={js} alt="js" id="js"/>
              <img src={ruby} alt="ruby" id="ruby" />
              <img src={rails} alt="rails" id="rails" />
              <img src={react} alt="react" id="react"/>
            </div>
            <div className="btn-cv">
              <a href={cv} type="button" target="_blank" rel="noreferrer" className="cv"><span>CV</span></a>
            </div>
          </div>
    </motion.div>
      </div>
  )
}
