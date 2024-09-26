import './Projet.scss'
import { useState } from "react"
import Modal from './Modal'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ProjetCard({id, title, img, modal, goal, skills, link}) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="projetCard">
        <img src={img} alt="product image" />

        <div className="projet-content">
          <p>{title}</p>

          <button onClick={() => setShowModal(true)}>Voir plus <FaLongArrowAltRight /></button>

          {showModal && <Modal closeModal={setShowModal} title={title} modal={modal} goal={goal} skills={skills} link={link} id={id}/>}          

        </div>
    </div>
  )
}