import {Link} from "react-router-dom"
import './Footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
        <p id="copyright">©2024. Tous droits réservés Quentin Ribardière - <Link to='/mentions' style={{color: '#75C7F0'}}>Mentions légales</Link>.</p>
    </div>
  )
}