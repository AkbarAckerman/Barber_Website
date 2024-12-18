import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='location_box'>
        <div><IoLocationSharp /></div>
        <a href='https://maps.app.goo.gl/cvvgtaPtsXEYdFgw8'>Ташкент, ул.Махтумкули, 62</a>
      </div>
      <div className='social_media_box'>
        <a href="https://t.me/@id7285745714"><FaTelegramPlane /></a>
        <a href="http://facebook.com/hawk.strike.uz"><FaFacebookSquare /></a>
        <a href="https://www.instagram.com/hawk_strike_uzb_/"><FaInstagram /></a>
      </div>
    </div>
  );
}

export default Footer;
