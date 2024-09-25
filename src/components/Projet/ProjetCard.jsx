import './Projet.scss'
import { useState } from "react"
import { createPortal } from "react-dom"
import ModalBrain from "./ModalBrain"
import ModalSMW from "./ModalSMW"
import projetData from '../../data/projetData'

export default function ProjetCard({title, img, id}) {
  const [showModalBrain, setShowModalBrain] = useState(false)
  const [showModalSMW, setShowModalSMW] = useState(false)

  return (
    <div className="projetCard">
        <img src={img} alt="product image" />

        <div className="projet-content">
          <p>{title}</p>
          <span>voir plus</span>


          {id === 1 ? <button onClick={() => setShowModalSMW(true)}>test</button> :''}
          {id === 2 ? <button onClick={() => setShowModalSMW(true)}>test</button> :''}
          {id === 3 ? <button onClick={() => setShowModalBrain(true)}>test</button> :''}
          {id === 4 ? <button onClick={() => setShowModalSMW(true)}>test</button> :''}

          

          {showModalSMW && <ModalSMW closeModal={setShowModalSMW}/>}
          {showModalBrain && <ModalBrain closeModal={setShowModalBrain}/>}
        </div>
    </div>
  )
}