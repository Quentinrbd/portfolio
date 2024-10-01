import {Link} from "react-router-dom"
import './Footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
        <p id="copyright">©2024. Tous droits réservés Quentin Ribardière - <Link to='/mentions' style={{color: '#3e6cad'}}>Mentions légales</Link>.</p>
    </div>
  )
}