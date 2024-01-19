import "./Header.css"
import {Link} from "react-scroll"

export default function Header() {
  return (
    <header className="header">
      <nav>
        <div className="l-side">
          <span>Quentin Ribardière</span>
        </div>
        <div className="r-side">
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={600}>Accueil</Link>
          <Link activeClass="active" to="bio" spy={true} smooth={true} offset={-300} duration={600}>Qui suis-je ?</Link>
          <Link activeClass="active" to="projet" spy={true} smooth={true} offset={-115} duration={600}>Projets</Link>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={600}>Contact</Link>
        </div>
      </nav>
    </header>
  )
}
