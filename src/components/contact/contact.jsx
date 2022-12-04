import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ex4w7nu', 'template_9047ol4', form.current, 'blZgAt955nwpFaUWI')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href="mailto:dummyemail@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>shivaprasadyanala</h5>
            <a href="https://www.linkedin.com/in/yanala-shiva-prasad-reddy/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsTwitter className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5>@Shivaprasadyan2</h5>
            <a href="https://twitter.com/Shivaprasadyan2" rel="noopener noreferrer" target="_blank" >Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>whatsapp</h4>
            <h5>7013550898</h5>
            <a href="https://api.whatsapp.com/send?&phone=7013550898" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full name' required />
          <input type="text" name='email' placeholder='Your email' required />
          <textarea name="message" cols="30" rows="y" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>send message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact