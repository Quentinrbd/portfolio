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
      <div className="text">
        <h1 style={{color: '#3A5780'}}>Quentin Ribardière</h1>
        <h2>Développeur front-end</h2>
      </div>


      <div className="content">
        <div className="content-left">
        <h3 style={{color: '#3A5780'}}>Stack technique</h3>
            <div className="stack">
              <div className="js">
                <p><img src={js} alt="" /> </p>
              </div>            
              <div className="react">
                <p><img src={react} alt="" /></p>
              </div>              
              <div className="rails">
                <p><img src={ruby} alt="" /></p>
              </div>
          </div>
        </div>

        <div className="photo">
          <img src={home} alt="photo home" id='img-home'/>
        </div>



        <div className="content-right">
          <h3 style={{color: '#3A5780'}}>Me contacter</h3>
          <div className='contact-1'>
            <a href="https://github.com/Quentinrbd" target='_blank'> <FontAwesomeIcon icon={faGithub}/> Github </a>
            <a href="https://www.linkedin.com/in/quentin-ribardi%C3%A8re-63139b238/" target='_blank'> <FontAwesomeIcon icon={faLinkedin} /> Linkedin </a>
          </div>

          <div className='contact-2'>
           <a> <FontAwesomeIcon icon={faEnvelope}/> quentinribardiere.dev@gmail.com </a>
          </div>

        </div>
      </div>
        
        <p id='scroll' onClick={handleClick}>scroll down <FontAwesomeIcon icon={faAnglesDown}  className='animate__animated animate__fadeInUp animate__infinite	infinite animate__slow'/></p>
    </div>
  )
}
