import React, { useState, useEffect } from 'react';
import EmblaCarousel from 'embla-carousel-react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Works.css';

const haircutsImages = [
  'https://rival.team/upload/portfolio/a2/cc/1-_3.jpg',//1
  'https://rival.team/upload/portfolio/64/12/4-_3.jpg', // 2
  'https://rival.team/upload/portfolio/bd/3b/9-_2.jpg', // 3
  'https://rival.team/upload/portfolio/5c/ae/3.jpg', // 4
  'https://rival.team/upload/portfolio/0f/b3/44.jpg', //5
  'https://rival.team/upload/portfolio/87/10/9.jpg', //6
  'https://rival.team/upload/portfolio/9d/96/11111.jpg',//7
  'https://rival.team/upload/portfolio/20/44/88.jpg', //8
  'https://rival.team/upload/portfolio/0f/4d/setka-rival-test3.jpg',//9
  'https://rival.team/upload/portfolio/1c/60/1_1.jpg',//10
  'https://rival.team/upload/portfolio/5a/9e/333.jpg',//11
  'https://rival.team/upload/portfolio/e5/54/19.jpg',//12
  'https://rival.team/upload/portfolio/a5/17/11.jpg',//13
  'https://rival.team/upload/portfolio/41/92/222.jpg',//14
  'https://rival.team/upload/portfolio/cd/4d/4.jpg'//15
];

const beardsImages = [
  'https://rival.team/upload/portfolio/c9/fa/2-_4.jpg',//1
  'https://rival.team/upload/portfolio/1d/14/77-_1.jpg',//2
  'https://rival.team/upload/portfolio/73/29/55-_1.jpg',//3
  'https://rival.team/upload/portfolio/66/7b/33-_2.jpg',//4
  'https://rival.team/upload/portfolio/ae/39/3-_2.jpg',
  'https://rival.team/upload/portfolio/ff/da/14-_2.jpg',
  'https://rival.team/upload/portfolio/48/69/6-_3.jpg'
];

function Works() {
  const [emblaRef] = EmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    align: 'start',
  });

  const [selectedCategory, setSelectedCategory] = useState('haircuts');

  const images = selectedCategory === 'haircuts' ? haircutsImages : beardsImages;

  useEffect(() => {
    if (emblaRef.current) {
      emblaRef.current.scrollTo(0);
    }
  }, [emblaRef, selectedCategory]);

  return (
    <div className='Work_container'>
      <Header />
      <div className='button-container'>
        <button
          className={`toggle-button ${selectedCategory === 'haircuts' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('haircuts')}
        >
          Стрижки
        </button>
        <button
          className={`toggle-button ${selectedCategory === 'beards' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('beards')}
        >
          Бороды
        </button>
      </div>
      <div className='carousel-container' ref={emblaRef}>
        <div className='carousel'>
          {images.map((image, index) => (
            <div
              className='carousel-slide'
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Works;
