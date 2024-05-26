import { useEffect, useState } from 'react';
import './Header.css'
import BurgerIcon from '../BurgerIcon/BurgerIcon';


export default function Header({showBurgerMenu, setShowBurgerMenu}) {

  const sections = [
    { id: 'team', label: 'Team' },
    { id: 'projects', label: 'Projects' },
    { id: 'cookie', label: 'Cookie' },
  ];

  const [iconSrc, setIconSrc] = useState('assets/burger.svg');
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 50;
    let foundSection = false;
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element.offsetTop <= scrollPosition && element.offsetTop + element.clientHeight > scrollPosition) {
        setActiveSection(section.id);
        foundSection=true;
      }
    });
    if (!foundSection) {
      setActiveSection('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    showBurgerMenu === true
    ? setIconSrc('assets/burger-x.svg') : setIconSrc('assets/burger.svg');
  })

  const handleButtonClick = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };
  

  return (
<header>
  <div className="logo">
    <img src="images/logo.svg" alt="logo" />
    <p className="logoText">Cookie</p>
  </div>
  <div className="header-info">
    <nav>
      <ul className='nav-list'>
      {sections.map(section => (
              <li key={section.id} className='nav-list-item'>
                <a
                  href={`#${section.id}`}
                  className={`${activeSection == section.id ? 'active-link' : ''}`}
                >
                  {section.label}
                </a>
              </li>
            ))}
      </ul>
    </nav>

      <a href="https://t.me/cookiestokens">
      <div className="telegram-logo">
        <img src="images/telegram.svg" alt="telegram" />
      </div>
      </a>
  </div>
  <BurgerIcon iconSrc={iconSrc} onClick={handleButtonClick} />
</header>
  )
}
