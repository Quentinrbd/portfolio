import "./Navbar.scss"
import {Link} from "react-scroll"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'



export default function Navbar() {
  return (
    <header className="header">
      <nav>
        <div className="nav">
          <Link activeClass="active" to="bio" spy={true} smooth={true} duration={600}>À propros</Link>
          <Link activeClass="active" to="service" spy={true} smooth={true} duration={600}>Mes services</Link>
          <Link activeClass="active" to="projet" spy={true} smooth={true} duration={600}>Projets</Link>
          <Link activeClass="active" to="contact" spy={true} smooth={true} duration={600}>Contact</Link>

        <div id="dispo">
          <div id="green"></div>
          <div id="pulse"></div>
          <span>disponible</span>
        </div>
        </div>
        
        <div className="nav-mobile">
          <div className="bg">
            <Link activeClass="active" to="bio" spy={true} smooth={true} duration={600}> <FontAwesomeIcon icon={faUser}/> </Link>
            <Link activeClass="active" to="service" spy={true} smooth={true} duration={600}><FontAwesomeIcon icon={faDesktop}/></Link>
            <Link activeClass="active" to="projet" spy={true} smooth={true} duration={600}><FontAwesomeIcon icon={faListCheck}/></Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={600}><FontAwesomeIcon icon={faMessage}/></Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
