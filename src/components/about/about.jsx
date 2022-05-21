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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora blanditiis consequuntur esse exercitationem nulla iusto repellendus error corrupti voluptates cumque harum aliquid, voluptatum suscipit beatae? Inventore mollitia debitis commodi quae.
     </p>
     <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
   </div>
  </section>
 )
}

export default about