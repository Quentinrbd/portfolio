import "./Projet.css"
import { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "./ModalBrain"

export default function Projet() {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className="projet">
      <h1>Projets</h1>
      <div className="projet-content">
        <div className="airbnbrain"
        onClick={() => setShowModal(true)}>
          Airbnbrain
        </div>
        <div className="smw">
          Save My Wallet
        </div>
        {showModal && createPortal(<ModalContent  closeModal={() => setShowModal(false)}/>, document.body)}
      </div>
    </div>
  )
}
