import React from 'react'
import './about.css'
import ML from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const about = () => {
 return (
  <section id="about">
   <h5>Get to Know</h5>
   <h2>About Me</h2>
   <div className="container about__container">
    <div className="about__me">
     <div className="about__me-image">
      <img src={ML} alt="" />
     </div>
    </div>
    <div className="about__content">
     <div className="about__cards">
      <article className='about__card'>
       <FaAward className='about__icon' />
       <h5>Student</h5>
       <small>SICET hyderabad</small>
      </article>
      <article className='about__card'>
       <FiUsers className='about__icon' />
       <h5>Course</h5>
       <small>Computer Science</small>
      </article>
      <article className='about__card'>
       < VscFolderLibrary className='about__icon' />
       <h5>Projects</h5>
       <small>10+ projects completed</small>
      </article>
     </div>

     <p>
      I am passionate and curious to learn new mindset student persuing graduation in sri indu college of engineering looking forward to work as software engineer.I am good at front-end,back-end and database and having decent problem solving skills.Being good at communication skills and able to work in bottle neck situation looking for a oppurtunity work.
     </p>
     <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
   </div>
  </section>
 )
}

export default about