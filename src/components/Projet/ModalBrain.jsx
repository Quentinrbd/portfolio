import "./Projet.css"
import airbnbrain from "../../assets/airbnbrain.png"
import airbnbrain2 from "../../assets/airbnbrain2.png"
import airbnbrain3 from "../../assets/airbnbrain3.png"

// eslint-disable-next-line react/prop-types
export default function ModalContent({closeModal}) {
  return (
    <div
    className="item"
    onClick={closeModal}
    >
      <div
      className="modals"
      onClick={e => e.stopPropagation()}>
        <button
        className="btn"
        onClick={closeModal}
        >X</button>
        <h1>Airbnbrain</h1>
        <p>Ce projet a été fait en groupe de 4 lors de ma formation au sein de <a href="https://www.lewagon.com/fr" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>Le Wagon</a>. <br /> Le but de cette application était de faire un «Airbnb like». </p>
        <p> <b style={{color:"#ECB365"}}>Airbnbrain</b> a donc pour but de vous faire louer un cerveau pour un événement en particulier. Suite à cette location vous acquérez les compétences fournies par le cerveau. Magique ! 🪄</p>
        <img className="airbnbrain-img" src={airbnbrain} alt="airbnbrain" />
        <img className="airbnbrain-img" src={airbnbrain2} alt="airbnbrain" />
        <img className="airbnbrain-img" src={airbnbrain3} alt="airbnbrain" />
        <p>Le code de ce projet est disponible sur mon profil <a href="https://github.com/Quentinrbd" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>GitHub</a>.</p>
      </div>
    </div>
  )
}
