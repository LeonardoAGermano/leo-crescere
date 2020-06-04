import React from "react";
import Header from "./components/header";
import Section1 from "./components/section1";
import Img from "./components/assets/imagens/Img.jpg";
import Section2 from "./section2";

import "./App222.css";
import CreativeThinkingUrl from "./assets2/img/cardescolha.svg";
import EscolharOMelhorUrl from "./assets2/img/Meeting.svg";
import RecebaEntregasUrl from "./assets2/img/cardwebsite.svg";
import ObjetivoAlcancado from "./assets2/img/cardfoguete2.svg";
import Box from "./components/Box";

import "./App333.css";
import Card from "./components/Card";
import Faq from "./components/Faq";
import landing from "./components/assets3/img/landing.svg";
import wordpress from "./components/assets3/img/wordpress.svg";
import personalize from "./components/assets3/img/personalize.svg";

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
            <Box imgUrl={EscolharOMelhorUrl} text="" />
            <Box imgUrl={RecebaEntregasUrl} text="" />
            <Box imgUrl={ObjetivoAlcancado} text="" />
            {/* <Box text="Receba entregas do seu site durante a criação"/> */}
          </section>
        </section>
      </div>

      {/*Código do Leonardo*/}

      <h1 id="planos">Planos</h1>
      <div class="todos">
        <div>
          <div id="container">
            <div class="cards">
              <Card imgUrl={landing} />
              <Card imgUrl={wordpress} />
              <Card imgUrl={personalize} />
            </div>
          </div>
        </div>
        <div class="info_planos">
          <p class="titulo_inclui">Todos os planos incluem:</p>
          <div>
            <ul class="lista">
              <li>Consultoria para seu negócio digital (1 hora)</li>
              <li>Suporte técnico por 1 mês</li>
              <li>Hospedagem por 1 ano (Umbler)</li>
              <li>Integração com banco de dados (MongoDB)</li>
            </ul>
          </div>
        </div>{" "}
        <button className="cta_quero">Quero meu site!</button>
      </div>
      <div>
        <div class="perguntas">
          <div class="img_perguntas">
            {" "}
            <img
              src={require("./components/assets3/img/perguntas.svg")}
              alt="perguntas"
              className="imgPerguntas"
            ></img>
          </div>
          <div>
            <Faq />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
