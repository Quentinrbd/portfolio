import './Propos.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons' 
import { faAddressCard } from '@fortawesome/free-solid-svg-icons' 
import { MdOutlineSchool } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { MdOutlineComputer } from "react-icons/md";


import { motion } from "framer-motion"

export default function Propos() {
  return (
    <div className='bio'>

      <h1>À propos</h1>

      <p>Hello! 👋 Je m'apelle Quentin et je suis développeur front-end.</p>

      <div className="diplomestack">
        <div className="exp">

          <div className="free">
           <MdOutlineComputer />
            <div className="details">
              <p>janv. 2024 - aujourd'hui</p>
              <p>Développeur front-end freelance</p>
            </div>
          </div>
          <div className='wagon'>
            <MdOutlineSchool />
            <div className="details">
              <p>2023</p>
              <p>Le Wagon - Certification professionelle concepteur d’application web</p>
            </div>
          </div>

          <div className='bts'>
            <MdOutlineSchool />
            <div className="details">
              <p>2021</p>
              <p>BTS SIO (Services Informatiques aux Organisations)</p>
            </div>
          </div>
        </div>

          <div className="stack">

            <div className="language">

              <div className='react'>
                <FaReact /> 
              </div>

              <div className="rails">
                <SiRubyonrails/>
              </div>

              <div className="js">
                <IoLogoJavascript />
              </div>
            </div>

            <div className="outils">
              <div className="github">
                <FaGithub/>                
              </div>

              <div className="framer">
                <TbBrandFramerMotion />
              </div>

              <div className="figma">
                <FaFigma />
              </div>

              <div className="vscode">
                <VscVscode/>
              </div>
            </div>        

          </div>
      </div>
      {/* <h1>À propos</h1>
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
      </div> */}
    </div>
  )
}