import React from 'react'
import "./portfolio.css"
import HoverVideoPlayer from "react-hover-video-player";
import VID1 from '../../assets/react portfolio.webm'
import VID2 from '../../assets/zippy video.webm'
import VID3 from '../../assets/study resources_Trim.mp4'
import VID4 from '../../assets/react portfolio.webm'
const portfolio = () => {
 return (
  <section id='portfolio'>
   <h5>My Recent Work</h5>
   <h2>Projects</h2>

   <div className="container portfolio__container">
    <article className='portfolio__item'>
     <div className="portfolio__item-image">
      <HoverVideoPlayer
       videoSrc={VID1}

       pausedOverlay={<div className="paused-overlay">hover to play</div>}
       overlayTransitionDuration={10}

      />
     </div>
     <h3>React portfolio</h3>
     <div className="portfolio__item-cta">

      <a href="https://github.com/shivaprasadyanala/react-portfolio" target='_blank' className='btn'>Github</a>
      <a href="https://github.com/shivaprasadyanala/react-portfolio" className='btn btn-primary' target='_blank'>Live Demo</a>
     </div>

    </article>
    <article className='portfolio__item'>
     <div className="portfolio__item-image">
      <HoverVideoPlayer
       videoSrc={VID2}

       pausedOverlay={<div className="paused-overlay">hover to play</div>}
       overlayTransitionDuration={10}

      />
     </div>
     <h3>Zippy static website</h3>
     <div className="portfolio__item-cta">

      <a href="https://github.com/shivaprasadyanala/LGMVIP-WebDev/tree/master/Task-1" target='_blank' className='btn'>Github</a>
      <a href="http://devwithshiva.me/static_web/" className='btn btn-primary' target='_blank'>Live Demo</a>
     </div>

    </article>
    <article className='portfolio__item'>
     <div className="portfolio__item-image">
      <HoverVideoPlayer
       videoSrc={VID3}

       pausedOverlay={<div className="paused-overlay">hover to play</div>}
       overlayTransitionDuration={10}

      />
     </div>
     <h3>Study resources</h3>
     <div className="portfolio__item-cta">

      <a href="https://github.com/shivaprasadyanala/hackerforet-faculty-student" target='_blank' className='btn'>Github</a>
      <a href="https://github.com/shivaprasadyanala/hackerforet-faculty-student" className='btn btn-primary' target='_blank'>Live Demo</a>
     </div>

    </article>
    <article className='portfolio__item'>
     <div className="portfolio__item-image">
      <HoverVideoPlayer
       videoSrc={VID1}

       pausedOverlay={<div className="paused-overlay">hover to play</div>}
       overlayTransitionDuration={10}

      />
     </div>
     <h3>This is a portfolio item</h3>
     <div className="portfolio__item-cta">

      <a href="https://github.com" target='_blank' className='btn'>Github</a>
      <a href="https://github.com/shivaprasadyanala" className='btn btn-primary' target='_blank'>Live Demo</a>
     </div>

    </article>
   </div>
  </section>
 )
}

export default portfolio