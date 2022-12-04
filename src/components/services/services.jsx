import React from 'react'
import './services.css'
import { SiLeetcode } from 'react-icons/si'
import { SiGeeksforgeeks } from 'react-icons/si'
import { BsStarFill } from 'react-icons/bs'
import { SiCodechef } from 'react-icons/si'
import { SiCodeforces } from 'react-icons/si'
import { SiHackerrank } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
const services = () => {
 return (
  <section id='services'>
   <h5>coding skills</h5>
   <h2>coding profile</h2>
   <div className="container services__container">
    <div className="coding__profiles">
     <article className='coding__profile'>
      <SiLeetcode className='coding__profile-icon' />
      <h4>Leetcode</h4>
      <h5>400+ problems</h5>
      <a href="https://leetcode.com/shivaprasadyanala/">view profile</a>
     </article>
     <article className='coding__profile'>
      <SiGeeksforgeeks className='coding__profile-icon' />
      <h4>Geeksforgeeks</h4>
      <h5>300+ coding score</h5>
      <a href="https://auth.geeksforgeeks.org/user/shivareddy9">view profile</a>
     </article>
     <article className='coding__profile'>
      <SiCodechef className='coding__profile-icon' />
      <h4>Code chef</h4>
      <h5>1 <BsStarFill /></h5>
      <a href="https://www.codechef.com/users/shiva_yanala12">view profile</a>
     </article>
     <article className='coding__profile'>
      <SiCodeforces className='coding__profile-icon' />
      <h4>Code forces</h4>
      <h5>621 rating</h5>
      <a href="https://codeforces.com/profile/shivaprasad123">view profile</a>
     </article>
     <article className='coding__profile'>
      <SiHackerrank className='coding__profile-icon' />
      <h4>Hackerrank</h4>
      <h5>3 <BsStarFill /></h5>
      <a href="https://www.hackerrank.com/shivaprasadyana1">view profile</a>
     </article>
     <article className='coding__profile'>
      <SiGithub className='coding__profile-icon' />
      <h4>Github</h4>
      <h5>80+ repositories</h5>
      <a href="https://github.com/shivaprasadyanala">view profile</a>
     </article>
    </div>
   </div>
   <article >

   </article>
  </section>
 )
}

export default services