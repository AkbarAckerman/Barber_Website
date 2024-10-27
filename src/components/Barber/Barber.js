import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Barber.css';
import barberImage1 from '../assets/test1.png';
import barberImage2 from '../assets/test2.png';
import barberImage3 from '../assets/barber_three.webp';
import barberImage4 from '../assets/barber_four.jpg';

const barbers = [
  { name: 'Али барбер', image: barberImage1 },
  { name: 'Азиз барбер', image: barberImage2 },
  { name: 'Джамщид барбер', image: barberImage3 },
  { name: 'Пепе барбер', image: barberImage4 },
];

function Barber() {
  return (
    <div className='barbers_container'>
      <Header />
      <div className='barbers_box'>
        {barbers.map((barber, index) => (
          <div
            className='barber'
            key={index}
            style={{ backgroundImage: `url(${barber.image})` }}
          >
            <div className='barber_name'>{barber.name}</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Barber;
