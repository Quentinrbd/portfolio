import './Home.scss'
// import home2 from '../../assets/home2.png'
import home from '../../assets/home.jpg'
import 'animate.css'
import { motion } from "framer-motion"


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
              Développeur <motion.span 
              class='motion' 
              style={{color: '#3e6cad'}}
              initial={{y:30, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration: 0.8}}
              >front-end</motion.span> passionné, pour moi le développement web est un mélange d'<motion.span 
              className='motion'
              style={{color: '#3e6cad'}}
              initial={{y:30, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration: 0.8, delay: 0.2}}>art</motion.span> et de <motion.span  
              className='motion'
              style={{color: '#3e6cad'}}
              initial={{y:30, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration: 0.8, delay: 0.4}}>logique</motion.span>.
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
