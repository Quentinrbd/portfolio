import './Contact.scss'
import emailjs from '@emailjs/browser'
import {useRef} from 'react'
import {useForm} from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

export default function Contact() {
    const form = useRef()

    const notify = () => toast('Here is your toast.');

    const sendEmail = (formData) => {
        emailjs.send("service_4nvxad7","template_waq0di6", formData, "w9zAHj8StjJ7j4iv-").then(
            (result) => {
                console.log(result.text)
                form.current?.reset();
                toast.success("Le formulaire a été envoyé.")
            },
            (error) => {
                console.log(error.text)
                toast.error("Le formulaire ne s'est pas envoyé.")
            }
        )
    }

    const {handleSubmit, register, formState: {errors}} = useForm()

  return (
    <div className="contact">
        <h1>Contact</h1>
        <hr />

        <form onSubmit={handleSubmit(sendEmail)} ref={form}>
            <input type="text" placeholder='Nom' id='name' name='user_name'  {... register("name", {required:true, minLength:2})} />
            {errors.name && <p className='error'>Nom de plus de deux caractères obligatoire.</p>}
            <input type="email" placeholder='Email' id='email' name='user_email'  {... register ("email", {pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, required: true})} />
            {errors.email && <p className='error'>Votre email n'est pas valide.</p>}
            <textarea type="text" placeholder='Votre message' name="message" id="message" {... register("message", {required: true, minLength:10})} />
            {errors.message && <p className='error'>Message de plus de dix caractères obligatoire.</p>}
            
            <button>Envoyer</button>
            <Toaster
             toastOptions={{
                className: '',
                style: {
                    fontFamily: 'Urbanist'
                },
              }}/>
        </form>


    </div>
  )
}