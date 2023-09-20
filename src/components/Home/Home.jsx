import './Home.css'
import Image from "../../assets/test-portfolio.jpg"
import 'animate.css'

export default function Home() {
  return (
    <div className="home" id="home">
      <div className='home-card'>
        <div className='left-side'>
          <h1>Hey ! Ici <span id='name'>Quentin Ribardière</span>, développeur front-end.</h1>
          <h3>Bienvenue sur mon portfolio !</h3>
        </div>
        <div className='right-side'>
          <img src={Image} alt="" className='animate__animated animate__fadeInRight' />
        </div>
      </div>
    </div>
  )
}
