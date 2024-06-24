import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import { ScrollPosition } from './ScrollPosition.jsx'

const Nav = () => {
  const sPosition = ScrollPosition()

  console.log(sPosition);
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick /*onScroll*/={() => setActiveNav('#')} className={activeNav === '#'/* || sPosition < 500*/ ? 'active' : ''}> <AiOutlineHome/> </a>
      <a href='#about' onClick /*onScroll*/={() => setActiveNav('#about')} className={activeNav === '#about'/* || 500 < sPosition < 1200*/ ? 'active' : ''}> <AiOutlineUser/> </a>
      <a href='#experience' onClick /*onScroll*/={() => setActiveNav('#experience')} className={activeNav === '#experience'/* || 1200 < sPosition < 2475*/ ? 'active' : ''}> <BiBook/> </a>
      <a href='#services' onClick /*onScroll*/={() => setActiveNav('#services')} className={activeNav === '#services'/* || 2475 < sPosition < 3200*/ ? 'active' : ''}> <RiServiceLine/> </a>
      <a href='#contact' onClick /*onScroll*/={() => setActiveNav('#contact')} className={activeNav==='#contact'/* || 3200 < sPosition < 4225*/ ? 'active' : ''}> <BiMessageSquareDetail/> </a>
    </nav>

  )
}

export default Nav