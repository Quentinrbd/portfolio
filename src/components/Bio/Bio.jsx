/* eslint-disable react/no-unescaped-entities */
import "./Bio.css"
import html from "../../assets/html.svg"
import css from "../../assets/CSS.svg"
import js from "../../assets/javascript.svg"
import ruby from "../../assets/ruby.svg"
import rails from "../../assets/rails.svg"
import react from "../../assets/react.svg"
// import me from "../../assets/bio.jpg"

import { motion } from "framer-motion"

export default function Bio() {

  return (

    <motion.div
    initial={{opacity:0, scale:0}}
    whileInView={{opacity:1, scale:1}}
    transition={{ ease: "linear", duration:0.7}}
    >
      <div className="bio" id="bio">

          <div className="bio-content" >
            {/* <motion.div
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{
                ease: "linear",
                duration: 0.9,
                delay:0.7
              }}
              >
              <img src={me} alt="me" id="me" />
            </motion.div> */}
            <h1>Qui suis-je ?</h1>
            <p>Développeur front-end junior, je suis passioné par le développement web et par la création.</p>
            <p>Mes expériences passées m'ont permis de maîtriser différents langages comme ces derniers : </p>
            <div className="logo">
              <img src={html} alt="html" id="html"/>
              <img src={css} alt="css" id="css" />
              <img src={js} alt="js" id="js"/>
              <img src={ruby} alt="ruby" id="ruby" />
              <img src={rails} alt="rails" id="rails" />
              <img src={react} alt="react" id="react"/>
            </div>
          </div>
      </div>
    </motion.div>
  )

}
