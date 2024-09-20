import './Projet.scss'
import { useState } from "react"
import { createPortal } from "react-dom"
import ModalBrain from "./ModalBrain"
import ModalSMW from "./ModalSMW"

export default function ProjetCard({title, desc, skills, img, link, projet}) {
  const [showModalBrain, setShowModalBrain] = useState(false)
  const [showModalSMW, setShowModalSMW] = useState(false)

  function modal() {
    if(title === "Airbnbrain") {
      return (
        <button onClick={() => setShowModalBrain(true)}><a>En savoir plus !</a></button>
      )
    }
    else if(title === "Save My Wallet") {
      return (
        <button onClick={() => setShowModalSMW(true)}><a>En savoir plus !</a></button>
      )
    }
  }
  return (
    <div className="projetCard">
            <img src={img} alt="product image" />

        <div className="projet-content">
            <p>{title}</p>
            <p id='desc'>{desc}</p>
            <ul>
            {skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}           
            </ul>

            {projet === "ecole" ? modal() : <button><a href={link} target="_blank">Visiter le site</a></button>}

            {showModalBrain && createPortal(<ModalBrain closeModal={() => setShowModalBrain(false)}/>, document.body)}
            {showModalSMW && createPortal(<ModalSMW closeModal={() => setShowModalSMW(false)}/>, document.body)}
        </div>
    </div>
  )
}