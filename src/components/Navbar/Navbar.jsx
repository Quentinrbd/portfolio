import "./Navbar.scss"
import {Link} from "react-scroll"
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
  const mail = () => toast("quentinribardiere.dev@gmail.com");

  return (
    <header className="header">
      <nav>
        <div className="nav">
          <div className="link">
            <Link activeClass="active" to="bio" spy={true} smooth={true} duration={600}>À propros</Link>
            <Link activeClass="active" to="projets" spy={true} smooth={true} duration={600}>Réalisations</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={600}>Contact</Link>
          </div>

          <div></div>

          <div className="reseau">
            <a href="https://github.com/Quentinrbd" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/quentin-ribardi%C3%A8re/" target="_blank">Linkedin</a>
            <span onClick={mail}>Mail</span>
            <ToastContainer
            position="top-center"
            autoClose={6000}
            transition={Slide}
            />
          </div>
        </div>
        
        <div className="nav-mobile">
          <a href="https://github.com/Quentinrbd" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/quentin-ribardi%C3%A8re/" target="_blank">Linkedin</a>
          <span onClick={mail}>Mail</span>
            <ToastContainer
            position="top-center"
            autoClose={6000}
            transition={Slide}
            />
        </div>
      </nav>
    </header>
  )
}
