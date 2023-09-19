/* eslint-disable react/no-unescaped-entities */
import "./Bio.css"
import html from "../../assets/html.svg"
import css from "../../assets/CSS.svg"
import js from "../../assets/javascript.svg"
import ruby from "../../assets/ruby.svg"
import rails from "../../assets/rails.svg"
import react from "../../assets/react.svg"

export default function Bio() {

  return (
    <div className="bio">
      <div className="bio-content">
        <h1>Qui suis-je ?</h1>
        <p>Développeur front-end junior, je suis passioné par le développement web et par la création.</p>
        <p>Mes éxpériences passées m'ont permis de maîtriser différents langages comme ces derniers : </p>
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
  )
}
