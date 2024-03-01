import React from 'react'
import { useEffect } from 'react'
import HeaderImage from '../../assets/NewProf.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'
import data from './data'

const Header = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])

  return (
    <header id="header">
      <div className='container header__container'>
        <div className='header__profile' data-aos="flip-up">
          <img src={HeaderImage} alt="Header portait" />
        </div>
        <h3 data-aos="fade-up">Tushar Borse</h3>
        <p data-aos="fade-up">
        Hello there! I'm Tushar, a passionate and aspiring Programmer enthusiast with a deep love for creating interactive web experiences.
        </p>
        <div className='header__cta' data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className='header__socials'>
          {
            data.map(item=> <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header