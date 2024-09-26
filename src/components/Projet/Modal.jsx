import './Projet.scss'
import { FaLongArrowAltRight } from "react-icons/fa";


export default function Modal({id, closeModal, title, modal, goal, skills, link}) {
  function projet() {
    if (link != '') {
      return (
        <a href={link} target='_blank' id='link'>
        voir le site 
        <FaLongArrowAltRight />
      </a>
      )
    } else if (id === 3 || 4){
      return (
        <pdiv></pdiv>
      )
    }
  }
  return (
    <div className='item'
    onClick={()=> closeModal(false)}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
        <button className='btn' onClick={() => {closeModal(false)}}>x</button>
        <p id='title'>{title}</p>
        <p id='content'>{modal}</p>
        <p id='goal'>{goal}</p> 
        <ul>
          {skills.map((skill) =>
          <li key={skill.id}>{skill}</li>
          )}
        </ul>     
          {projet()}
      </div>
    </div>
  )
}