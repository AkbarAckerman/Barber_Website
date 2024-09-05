import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import './Store.css';

function Store() {
  return (
    <div className='Shop_container'>
      <Header />
      <div className='shop_bg'>
      <div className='coming_soon'>
          Скоро
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Store;
