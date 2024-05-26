import React from 'react'
import './HeaderContainer.css'
import headerLight from '../../assets/header-light.svg'
import Animation from '../Animation/Animation'

export default function HeaderContainer() {
  return (
<div className="header-container">
  <img src="/images/cookie.png" className='header-cookie' alt="" />
  <img src={headerLight} alt="" className='header-light'/>
  <div className="sections">
  <div className="left">
    <h2>Cookie</h2>
    <p> A meme token on the TON blockchain with open functionality! A fair distribution model, a Fair Launch on Ton Raffles, no private or public sales, offers by investors, etc.</p>
  </div>
  <div className="right">
    <Animation />
    <a href="#cookie">
    <button className='explore'>Explore</button>
    </a>
  </div>
  </div>
</div>
  )
}
