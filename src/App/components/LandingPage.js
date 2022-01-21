import React from 'react'
import Header from './Header';
import Slider from './Slider';
import Blog from './Blog';
import Footer from './Footer';

function LandingPage() {
  return (
    <div>
    <Header/>
      <Slider/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default LandingPage
