import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger-icon ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
        <li>
          <NavLink to="/" activeClassName="active" onClick={closeMenu}>Главная</NavLink>
        </li>
        <li>
          <NavLink to="/barber" activeClassName="active" onClick={closeMenu}>Барберы</NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active" onClick={closeMenu}>Услуги</NavLink>
        </li>
        <li>
          <NavLink to="/works" activeClassName="active" onClick={closeMenu}>Наши работы</NavLink>
        </li>
        <li>
          <NavLink to="/store" activeClassName="active" onClick={closeMenu}>Магазин</NavLink>
        </li>
        {isMenuOpen && (
          <div className='header_contact_container'>
            <div className='work_time_text'>10:00 до 20:00</div>
            <a href='tel:++998 94 943 80 80' className='telephone_number'>+998 97 491 11 18</a>
            <a href='https://n1245856.alteg.io/' className='submit'>записаться</a>
          </div>
        )}
      </ul>
      <div className='header_logo'>
        <img src={logo} alt=''/>
      </div>
      <div className='header_contact_container'>
        <div className='work_time_text'>10:00 до 20:00</div>
        <a href='tel:++998 97 491 11 18' className='telephone_number'>+998 97 491 11 18</a>
        <a href='https://n1245856.alteg.io/' className='submit'>записаться</a>
      </div>
    </nav>
  );
}

export default Header;
