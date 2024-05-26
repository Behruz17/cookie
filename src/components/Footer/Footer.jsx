import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'
import footerCookieImg from '../../assets/footerCookie.svg'


export default function Footer() {
  return (
   <footer>
    <img src={footerCookieImg} className='footer-img' />
    <img src={logo} className='footer-logo' alt="logo" />
    <p className='footer-text'>Copyright © 2024. All rights reserved. Cookie Fund</p>
    <a href="https://t.me/cookiestokens">
    <div className="telegram-logo">
        <img src="images/telegram.svg" alt="telegram" />
      </div>
      </a>
   </footer>
  )
}
