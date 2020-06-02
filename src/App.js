import React from "react";
import Header from "./components/header";
import Section1 from "./components/section1";
import Img from "./components/assets/imagens/Img.jpg";
import Section2 from "./section2";

import "./App.css";

function App() {
  return (
    <>
      <div
        className="background"
        Img
        style={{ backgroundImage: `url(${Img})` }}
      >
        <Header />
        <Section1 />
      </div>
      <Section2 />
    </>
  );
}

export default App;
