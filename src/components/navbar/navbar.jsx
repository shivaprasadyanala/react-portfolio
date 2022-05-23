import React from 'react'
import './navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'
import ReactTooltip from 'react-tooltip';
const Navbar = () => {
 const [activeNav, setActiveNav] = useState('#')
 return (

  <nav>
   <a href="#" data-type='info' data-tip="home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
   <a href="#about" data-type='info' data-tip="about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
   <a href="#experience" data-type='info' data-tip="experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
   <a href="#portfolio" data-type='info' data-tip="portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
   <a href="#contact" data-type='info' data-tip="contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
   <ReactTooltip />
  </nav>
 )
}

export default Navbar