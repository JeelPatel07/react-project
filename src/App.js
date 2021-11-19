import React from "react";

import { Navbar, Brand, CTA } from "./components";
import {
  Footer,
  Blog,
  Possibility,
  WhatGPT3,
  Header,
  Features,
} from "./containers/index";
import "./App.css";
const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Footer />
    </div>
    {/* <CTA />
    <Blog /> */}
  </div>
);

export default App;
