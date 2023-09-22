import React from 'react';
import Header from './Header.js';
import Contents from './Contents.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Common.scss';
const Home = () => {
  return (
    <>
        <Header />
        <Contents />
        <Footer />
    </>
  )
}

export default Home