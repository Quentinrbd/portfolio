import "./Projet.scss"
import { useState } from "react"
import projetData from "../../data/projetData"
import ProjetCard from "./ProjetCard"
import { motion } from "framer-motion"


export default function Projet() {
  return (
    <motion.div className="projet"
    initial={{y:400}}
    whileInView={{y:0}}
    transition={{ type: "spring", bounce: 0.30, stiffness: 50}}
    viewport={{ once: true }}>
      <h1>Projets</h1>
      <hr />

      <h2>Freelance</h2>      

      <div className="freelance">

        <ProjetCard title={projetData[0].title}
          desc={projetData[0].desc}
          skills={projetData[0].skills}
          img={projetData[0].img}
          link={projetData[0].link}
        />

        <ProjetCard title={projetData[1].title}
          desc={projetData[1].desc}
          skills={projetData[1].skills}
          img={projetData[1].img}
          link={projetData[1].link}
        />
      </div>

      <h2>Scolaire</h2>

      <div className="ecole">
        
        <ProjetCard title={projetData[2].title}
            projet={projetData[2].projet}
            desc={projetData[2].desc}
            skills={projetData[2].skills}
            img={projetData[2].img}
            link={projetData[2].link}
        />

        <ProjetCard title={projetData[3].title}
            projet={projetData[3].projet}
            desc={projetData[3].desc}
            skills={projetData[3].skills}
            img={projetData[3].img}
            link={projetData[3].link}
        />
      </div>


    </motion.div>
  )
}
