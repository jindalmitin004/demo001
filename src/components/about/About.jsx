import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__card__icon'/>
              <h5>Experience</h5>
              <small>5+ years working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__card__icon'/>
              <h5>Clients</h5>
              <small>3 clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__card__icon'/>
              <h5>Projects</h5>
              <small>10+ completed projects</small>
            </article>
          </div>

          <p>
              By profession, I'm a <strong><em>Quality Assurance Specialist</em></strong> and by passion I'm <strong><em>Web App Developer</em></strong> and <strong><em>Android App Developer</em></strong>. Having total 5 years of experience in QA and maintenance. Currently working as a <strong><em>Freelancer</em></strong>, covering all these 3 areas. If I'll be able to helpful in any manner in these areas, ring a bell!
          </p>

          <a href='#contact' className='btn btn_primary'>Let's Talk</a>

        </div>
      </div>


    </section>
  )
}

export default About