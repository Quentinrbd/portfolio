import './Propos.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons' 
import { faAddressCard } from '@fortawesome/free-solid-svg-icons' 

import { motion } from "framer-motion"

export default function Propos() {
  return (
    <motion.div className='bio'
    initial={{y:400}}
    whileInView={{y:0}}
    transition={{ type: "spring", bounce: 0.30, stiffness: 50}}
    viewport={{ once: true }}
    >
      <h1>À propos</h1>
      <hr />
      <div className="info">
        <div className='apropos'>
          <h2><FontAwesomeIcon icon={faAddressCard}/> Biographie</h2>
          <p>Hello ! <span >👋</span></p>
          <p>Je m'appelle Quentin et je suis développeur front-end basé à Poitiers (86). <br />
          Créatif et passionné par la technologie, je suis toujours à la recherche de nouvelles idées. </p>

          <h3><FontAwesomeIcon icon={faGraduationCap}/> Mes formations</h3>
            <p>
              BTS SIO (Service Informatique aux Organisations) option SLAM. <span>Obtenu en 2021.</span> <br />
              Certification professionnelle - Concepteur développeur d'application web. <span>Obtenu en juillet 2023.</span>
            </p>
        </div>

        <div className="fullstack">
          <h2>Stack technique détaillé</h2>

          <div className="front-back">
            <div className="front">
              <h3>Front</h3>
                <span>HTML</span> <br />
                <span>CSS/SASS</span> <br />
                <span style={{color: '#75C7F0'}}>Javascript</span> <br />
                <span style={{color: '#75C7F0'}}>React</span> <br />
            </div>
            
            <div className="back">
              <h3>Back</h3>
              <span style={{color: '#75C7F0'}}>Ruby on Rails</span> <br />
              <span>PHP</span>

            </div>

            <div className="outils">
              <h3>Outils</h3>

              <span style={{color: '#75C7F0'}}>Git/Github</span> <br />
              <span style={{color: '#75C7F0'}}>Figma</span> <br />
              <span>Heroku</span> <br />
              <span style={{color: '#75C7F0'}}>VS Code</span> <br />
              <span>Framer Motion</span> <br />
              <span>Lightroom</span>
            </div>
          </div>    

        </div>
      </div>
    </motion.div>
  )
}