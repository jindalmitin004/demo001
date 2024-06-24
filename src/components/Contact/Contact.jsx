import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bmd8sh3', 'template_963n2xd', form.current, 'PoGTrPaN2s8KA8B7v')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>
        Get In Touch
      </h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jindalmitin0004@gmail.com</h5>
            <a href="mailto:jindalmitin04@outlook.com" target='_blank'>Send an Email</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Mitin Jindal</h5>
            <a href="https://m.me/jindalmitin04" target='_blank'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 70157-15821</h5>
            <a href="https://api.whatsapp.com/send?phone=7015715821" target='_blank'>Send a Message</a>
          </article>

        </div>
        {/*End of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='Name' placeholder='Your Full Name' required/>
          <input type="email" name='Email' placeholder='Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact