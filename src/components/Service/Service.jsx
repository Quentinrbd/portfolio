import './Service.scss'

import { motion } from "framer-motion"

export default function Service() {
  return (
    <motion.div className='service'
    initial={{y:400}}
    whileInView={{y:0}}
    transition={{ type: "spring", bounce: 0.30, stiffness: 50}}
    viewport={{ once: true }}>
        <h1>Mes services</h1>
        <hr />

        <div className="list">
            <div className="refonte">
                <h2 style={{color: '#ECB365'}}>Refonte de site</h2>
                <p>Votre site a pris la poussière et vous souhaitez lui redonner peau neuve ?</p>
            </div>

            <div className="vitrine">
                <h2 style={{color: '#ECB365'}}>Site vitrine/ portfolio</h2>
                <p>Vous êtes entrepreneur, commerçant ou artisan et souhaitez développer votre visibilité sur le web avec un site fonctionnel et à votre image ?</p>
            </div>

            <div className="landing">
                <h2 style={{color: '#ECB365'}}>Landing page</h2>
                <p>Vous souhaitez une page d'accueil impactante et à votre image ?</p>
            </div>
        </div>

    </motion.div>
  )
}