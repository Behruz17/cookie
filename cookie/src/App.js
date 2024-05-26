import { useEffect, useState } from 'react';
import './App.css';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Header from './components/Header/Header';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';
import Team from './components/Team/Team';
import Projects from './components/Projects/Projects';
import CookieToken from './components/CookieToken/CookieToken';
import WhitePaper from './components/WhitePaper/WhitePaper';
import Footer from './components/Footer/Footer';
import light from './assets/round-light.svg'

function App() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  function closeBurger(){
    setShowBurgerMenu(false)
  }  

  return (
<>
<div style={{background: '#4C3405', overflow: 'hidden'}}>
<Header showBurgerMenu={showBurgerMenu} setShowBurgerMenu={setShowBurgerMenu} />
{showBurgerMenu ? <BurgerMenu closeBurger = {closeBurger} className="burger-menu-block menu-opened" /> : <BurgerMenu closeBurger = {closeBurger} className="burger-menu-block menu-closed" />}
<HeaderContainer />
<Team />
<div className='lights-container'>
<img src={light} className='left-light' />
<img src={light} className='right-light' />
</div>
<Projects />
<CookieToken />
<WhitePaper />
<Footer />
</div>
</>
  );
}

export default App;
