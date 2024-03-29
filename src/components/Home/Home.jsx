import './Home.css'
import Image from "../../assets/test-portfolio.jpg"
import 'animate.css'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="home">
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{
      ease: "linear",
      duration: 1,
      x: { duration: 1 }
    }}
    >
        <div className='home-card'>
          <div className='left-side'>
            <h1>Je suis <span id='name'>Quentin Ribardière</span>, développeur front-end.</h1>
            <h3>Bienvenue sur mon portfolio !</h3>
          </div>
          <div className='right-side'>
            <motion.div className='right-side'
            whileHover={{ scale: 1.1 }}
            transition={{duration:0.5}}
            >
            <img src={Image} alt="" />
            </motion.div>
          </div>
        </div>
    </motion.div>
      </div>
  )
}
