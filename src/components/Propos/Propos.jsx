import './Propos.scss'

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

      <div className="diplomestack">
        <div className="exp">

          <motion.div 
          className="free"
          initial={{x:-200}}
          whileInView={{x:0}}
          transition={{type:"spring", bounce:0.2, duration: 0.8}}
          viewport={{ once: true }}>
           <MdOutlineComputer />
            <div className="details">
              <p>janv. 2024 - aujourd'hui</p>
              <p>Développeur front-end freelance</p>
            </div>
          </motion.div>
          <motion.div 
          className='wagon'
          initial={{x:-200}}
          whileInView={{x:0}}
          transition={{type:"spring", bounce:0.2, duration: 0.8, delay:0.1}}
          viewport={{ once: true }}>
            <MdOutlineSchool />
            <div className="details">
              <p>2023</p>
              <p>Le Wagon - Certification professionelle concepteur d’application web</p>
            </div>
          </motion.div>

          <motion.div 
          className='bts'
          initial={{x:-200}}
          whileInView={{x:0}}
          transition={{type:"spring", bounce:0.2, duration: 0.8, delay: 0.2}}
          viewport={{ once: true }}>
            <MdOutlineSchool />
            <div className="details">
              <p>2021</p>
              <p>BTS SIO (Services Informatiques aux Organisations)</p>
            </div>
          </motion.div>
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
    </div>
  )
}