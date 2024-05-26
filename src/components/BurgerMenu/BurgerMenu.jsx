import React from 'react'
import './BurgerMenu.css'
import { animateScroll, scroller } from 'react-scroll';

export default function BurgerMenu({className, closeBurger}) {
  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  
  return (

    <div className={className}>
        <div className="burger-nav">
            <ul className="burger-list">
                <li className="burger-list-item"><a onClick={() => {closeBurger(); scrollToSection("team")}} href="#" className="burger-link">Team</a></li>
                <li className="burger-list-item"><a onClick={() => {closeBurger(); scrollToSection("projects")}} href="#" className="burger-link">Projects</a></li>
                <li className="burger-list-item"><a onClick={() => {closeBurger(); scrollToSection("cookie")}} href="#" className="burger-link">Cookie</a></li>
            </ul>
            <a href="https://t.me/cookiestokens">
            <button className='telegram-button telegram-button-burger'>Our Telegram</button>
            </a>
        </div>
    </div>
  )
}
