import './Home.scss'
import home from '../../assets/home.jpg'
import { motion } from "framer-motion"
import {Link} from "react-scroll"

export default function Home() {
    return (
    <div className="home">

      <div className="window">
        <div className="content">
          <div className="left-content">
            <motion.img src={home} alt=""
            initial={{y:80, scale:0.5, }}
            animate={{y:0, scale:1, }} 
            transition={{duration:0.8}}/>
            <h1>Quentin Ribardière</h1>
          </div>

          <div className="right-content">
            <p>
              Développeur <motion.span 
              className='motion' 
              style={{color: '#3e6cad'}}
              initial={{y:30, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration: 0.6, delay: 0.2}}
              >front-end</motion.span> passionné, pour moi le développement web est un mélange d'<motion.span 
              className='motion'
              style={{color: '#3e6cad'}}
              initial={{y:30, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration: 0.6, delay: 0.4}}>art</motion.span> et de <motion.span  
              className='motion'
              style={{color: '#3e6cad'}}
              initial={{y:30, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration: 0.6, delay: 0.6}}>logique</motion.span>.
            </p>

            <div className="buttons">
              <Link activeClass="active" to="bio" spy={true} smooth={true} duration={600}>À propros</Link>
              <Link activeClass="active" to="projets" spy={true} smooth={true} duration={600}>Mes réalisations</Link>
            </div>
          </div>
        </div>
      </div>         
    </div>
     
  )
}
