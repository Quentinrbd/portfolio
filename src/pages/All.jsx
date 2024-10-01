import Navbar from "../components/Navbar/Navbar"
import Home from "../components/Home/Home"
import Propos from "../components/Propos/Propos"
import Projet from "../components/Projet/Projet"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import {scrollTop} from '../hooks/scrollTop'

export default function All() {
  scrollTop(0,0)
  return (
    <>
        <Navbar />    
        <Home />
        <Propos/>
        <Projet />
        <Contact /> 
        <Footer />
    </>
  )
}