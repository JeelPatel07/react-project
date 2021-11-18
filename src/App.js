import React from 'react';

import {Navbar,Brand,CTA,Feature} from './components'
import {Footer,Blog,Possibility,WhatGPT3,Header} from './containers/index';
import './App.css';
const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      <Brand />
  
    </div>
    <WhatGPT3 />
    <Feature />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
