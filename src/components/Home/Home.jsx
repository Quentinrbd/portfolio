import './Home.scss'
// import home2 from '../../assets/home2.png'
import home from '../../assets/home.jpg'
import 'animate.css'
import { motion } from "framer-motion"

import js from '../../assets/js.svg'
import react from '../../assets/react.svg'
import ruby from '../../assets/ruby.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Home() {
  const handleClick = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  }
  
  return (
    <div className="home">

      <div className="window">
        <div className="content">
          <div className="left-content">
            <img src={home} alt="" />
            <h1>Quentin Ribardière</h1>
          </div>

          <div className="right-content">
            <p>
              Développeur <span style={{color: '#3A5780'}}>front-end</span> passionné, pour moi le développement web est un mélange d'<span style={{color: '#3A5780'}}>art</span> et de <span style={{color: '#3A5780'}}>logique</span>.
            </p>

            <div className="buttons">
              <button>à propos</button>
              <button>mes réalisations</button>
            </div>
          </div>
        </div>


      </div>    
      
    </div>
     
  )
}
