/* eslint-disable react/no-unescaped-entities */
import "./Projet.css"
import smw from "../../assets/smw (2).png"
import smw2 from "../../assets/smw2.png"
import smw3 from "../../assets/smw3.png"
import smw4 from "../../assets/smw4.png"
import smw5 from "../../assets/smw5.png"
import smw6 from "../../assets/smw6.png"


// eslint-disable-next-line react/prop-types
export default function ModalSMW({closeModal}) {
  return (
    <div
    className="item"
    onClick={closeModal}>
      <div className="modals"
      onClick={e => e.stopPropagation()}>
        <button
        className="btn"
        onClick={closeModal}>X</button>
        <h1>Save My Wallet</h1>
        <p>Ce projet a été fait en groupe de 4 lors de ma formation au sein de <a href="https://www.lewagon.com/fr" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>Le Wagon</a>.</p>
        <p>Le concept de cette application mobile est de "gamifier" notre façon de gérer nos dépenses.
          C'est-à-dire que les dépenses que nous allons rentrer dans l'application et que nous allons répartir en plusieurs catégories (alimentation, vêtements, loisirs, etc...)
          vont ainsi créer des bâtiments en fonction de ces catégories. Plus les dépenses sont élevées, plus le bâtiment est imposant</p>
        <p><b style={{color:"#ECB365"}}>Save My Wallet</b> permet aussi de visualiser ses dépenses avec des graphiques ou encore
          de participer à des challenges afin d'atteindre de nouveux objectifs. 🚀</p>
        <div className="img-side">
          <img src={smw} alt="" />
          <img src={smw5} alt="" />
          <img src={smw2} alt="" />
          <img src={smw3} alt="" />
          <img src={smw6} alt="" />
          <img src={smw4} alt="" />
        </div>
        <p>Le code de ce projet est disponible sur mon profil <a href="https://github.com/Quentinrbd" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>GitHub</a>.</p>
      </div>
    </div>
  )
}
