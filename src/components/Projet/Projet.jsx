import "./Projet.scss"
import projetData from "../../data/projetData"
import ProjetCard from "./ProjetCard"

export default function Projet() {
  return (
   <div className="projets">
      <h1>Mes réalisations</h1>

      <div className="project-list">
        {projetData.map((projet) => 
          <ProjetCard
          key={projet.id}
          id={projet.id}
          title={projet.title}
          img={projet.img}
          modal={projet.modal}
          goal={projet.goal}
          skills={projet.skills}
          link={projet.link}
          />
        )}        
      </div>
   </div>
  )
}
