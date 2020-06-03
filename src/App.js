import React from "react";
import Header from "./components/header";
import Section1 from "./components/section1";
import Img from "./components/assets/imagens/Img.jpg";
import Section2 from "./section2";



import './App222.css';
import CreativeThinkingUrl from './assets2/img/cardescolha.svg'
import EscolharOMelhorUrl from './assets2/img/Meeting.svg'
import RecebaEntregasUrl from './assets2/img/cardwebsite.svg'
import ObjetivoAlcancado from './assets2/img/cardfoguete2.svg'
import Box from './components/Box';

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
      <div className="section__comoFunciona2004">
      <div className="section__comoFuncionaTitle2004">
        {/*<h1>Como funciona?</h1>
        <p>  Desenvolva sua ideia e o seu site com a gente e aproveite! </p>*/}
      </div>
      <section className="section__comoFunciona_content2004">
        <section class="container2004">
          <Box imgUrl={CreativeThinkingUrl} />
          <Box imgUrl={EscolharOMelhorUrl} text=""/>
          <Box imgUrl={RecebaEntregasUrl} text=""/>
          <Box imgUrl={ObjetivoAlcancado} text="                    "/>
         {/* <Box text="Receba entregas do seu site durante a criação"/> */}
        </section>
      

        
      </section>
      </div>
    </>
  );
}

export default App;
