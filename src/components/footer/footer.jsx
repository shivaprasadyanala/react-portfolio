import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
const footer = () => {
 return (
  <footer>
   <a href="#" className='footer__logo'>SHIVA</a>
   <ul className="permalinks">
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
   </ul>
   <div className="footer__socials">
    <a href="https://facebook.com"><FaFacebookF /></a>
    <a href="https://linkedin.com"><FaLinkedinIn /></a>
    <a href="https://twitter.com"><BsTwitter /></a>
   </div>
   <div className="footer__copyright">
    <small>&copy: shivaprasad. All rights reserved</small>
   </div>
  </footer>
 )
}

export default footer