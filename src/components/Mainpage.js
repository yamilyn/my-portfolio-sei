import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Purpose from '../components/Purpose';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Testimonials from './Testimonials';


export default function Mainpage() {
  return (
    <div>
      <Home/>
      <About/>
      <Purpose/>
      <Education/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}
