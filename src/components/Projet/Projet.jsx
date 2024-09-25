import "./Projet.scss"
import { useState } from "react"
import projetData from "../../data/projetData"
import ProjetCard from "./ProjetCard"
import { motion } from "framer-motion"
import boyerpeinture from "../../../src/assets/boyer.png"


export default function Projet() {
  return (
   <div className="projets">
      <h1>Mes réalisations</h1>

      <div className="project-list">
        {/* <div className="boyerpeinture">
          <img src={boyerpeinture} alt="" />
          <p>Site vitrine Boyer Peinture</p>
          <span>Voir plus</span>
        </div> */}

        {projetData.map((projet) => 
          <ProjetCard
          key={projet.id}
          title={projet.title}
          img={projet.img}
          id={projet.id}
          />
        )}
        
      </div>
   </div>
  )
}
