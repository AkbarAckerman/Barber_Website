import React from 'react';
import Header from '../Header/Header';
import './Barber.css';
import barberImage1 from '../assets/test1.png';
import barberImage2 from '../assets/test2.png';


const barbers = [
  { name: 'Али барбер', image: barberImage1 },
  { name: 'Азиз барбер', image: barberImage2 },
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
