import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Barber.css';

function Barber() {
  return (
    <div className='barbers_container'>
      <Header />
      <div className='barbers_box'>
        <div className='barber'>
          <div className='barber_name'>Али</div>
        </div>
        <div className='barber'>
          <div className='barber_name'>Азиз</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Barber;
