import "./Projet.css"
import { useState } from "react"
import { createPortal } from "react-dom"
import ModalBrain from "./ModalBrain"
import ModalSMW from "./ModalSMW"


export default function Projet() {

  const [showModalBrain, setShowModalBrain] = useState(false)
  const [showModalSMW, setShowModalSMW] = useState(false)

  return (
    <div className="projet">
      <h1>Projets</h1>
      <div className="projet-content">
        <div className="airbnbrain"
        onClick={() => setShowModalBrain(true)}>
          Airbnbrain
        </div>
        <div className="smw"
        onClick={() => setShowModalSMW(true)}
        >
          Save My Wallet
        </div>
        {showModalBrain && createPortal(<ModalBrain closeModal={() => setShowModalBrain(false)}/>, document.body)}
        {showModalSMW && createPortal(<ModalSMW closeModal={() => setShowModalSMW(false)}/>, document.body)}
      </div>
    </div>
  )
}
