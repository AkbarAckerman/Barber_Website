import React, { useEffect } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import home_limit_image from '../assets/home_limit_image.png';
import creative_image from '../assets/creative_image.png';
import taper_fade from '../assets/taper_fade.png';
import freestyle from '../assets/freestyle.png';
import best_barber from '../assets/best_barber.png';

const backgrounds = [
  'https://rival.team/images/bg.png',
  'https://rival.team/images/hover.png',
];

function Home() {
  useEffect(() => {
    let index = 0;
    const changeBackground = () => {
      const homeElement = document.querySelector('.home');
      homeElement.style.backgroundImage = `url(${backgrounds[index]})`;
      homeElement.classList.add('fade-in');

      index = (index + 1) % backgrounds.length;
    };

    const intervalId = setInterval(changeBackground, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='home_container'>
      <Header />
      <div className='home'>
        <div className='image-container'>
          <img src={home_limit_image} alt="Centered" />
        </div>
        <div className='home_center_images_box'>
          <div><img src={creative_image} alt="Creative" /></div>
          <div><img src={taper_fade} alt="Taper Fade" /></div>
          <div><img src={freestyle} alt="Freestyle" /></div>
          <div><img src={best_barber} alt="Best Barber" /></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
