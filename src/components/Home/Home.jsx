import './Home.css'
import Image from "../../assets/test-portfolio.jpg"
import 'animate.css'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
    className='home'
    id="home"
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.6}}
    >
      <div className="home" id="home">
        <div className='home-card'>
          <div className='left-side'>
            <h1>Hey ! Ici <span id='name'>Quentin Ribardière</span>, développeur front-end.</h1>
            <h3>Bienvenue sur mon portfolio !</h3>
          </div>
          <div className='right-side'>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
