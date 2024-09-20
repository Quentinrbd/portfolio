import Header from "../components/Header/Header"
import Home from "../components/Home/Home"
import Propos from "../components/Propos/Propos"
import Service from "../components/Service/Service"
import Projet from "../components/Projet/Projet"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import {scrollTop} from '../hooks/scrollTop'

export default function All() {
  scrollTop(0,0)
  return (
    <>
        <Header />   
        <Home />
        <Propos/>
        <Service/>
        <Projet />
        <Contact /> 
        <Footer />
    </>
  )
}