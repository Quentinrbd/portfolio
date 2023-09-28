import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <h1>Me contacter</h1>
        <span><FontAwesomeIcon icon={faEnvelope} size="2xl"/></span>
        <span><a href="https://github.com/Quentinrbd" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2xl"/></a></span>
        <span><a href="https://www.linkedin.com/in/quentin-ribardi%C3%A8re-63139b238/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a></span>
      </div>
    </div>
  )
}
