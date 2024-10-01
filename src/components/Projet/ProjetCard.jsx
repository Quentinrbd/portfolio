import './Projet.scss'
import { useState } from "react"
import Modal from './Modal'
import { FaLongArrowAltRight } from "react-icons/fa";
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function ProjetCard({id, title, img, modal, goal, skills, link}) {
  const [showModal, setShowModal] = useState(false)

  return (
    <motion.div className="projetCard"
    whileHover={{ scale: 1.05}}
    transition={{duration:0.2}}>
        <img src={img} alt="product image" />

        <div className="projet-content">
          <p>{title}</p>

          <button onClick={() => setShowModal(true)}>Voir plus <FaLongArrowAltRight /></button>          

          {showModal && createPortal(<Modal closeModal={() => setShowModal(false)} title={title} modal={modal} goal={goal} skills={skills} link={link} id={id}/>, document.body)}      

        </div>
    </motion.div>
  )
}