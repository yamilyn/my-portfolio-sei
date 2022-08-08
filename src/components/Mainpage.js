import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Testimonials from './Testimonials';


export default function Mainpage() {
  return (
    <div>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}
