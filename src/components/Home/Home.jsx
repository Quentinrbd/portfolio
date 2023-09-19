import './Home.css'
import Image from "../../assets/test-portfolio.jpg"
// import Test from "../../assets/andras-vas-Bd7gNnWJBkU-unsplash.jpg"

export default function Home() {
  return (
    <div className="home">
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
  )
}
