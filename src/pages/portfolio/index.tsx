import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Footer from '../../components/Footer';
import keycashPrint1 from '../../assets/KeyCashPrints1.jpg';
import keycashPrint2 from '../../assets/KeyCashPrints2.jpg';
import keycashPrint3 from '../../assets/KeyCashPrints3.jpg';
import GitHubExplorer1 from '../../assets/GitHubExplorerPrint1.jpg';
import GitHubExplorer2 from '../../assets/GitHubExplorerPrint2.jpg';
import GoFinances1 from '../../assets/GoFinancesPrint1.jpg';
import GoFinances2 from '../../assets/GoFinancesPrint2.jpg';
import BeTheHero1 from '../../assets/BeTheHeroPrint1.jpg';
import BeTheHero2 from '../../assets/BeTheHeroPrint2.jpg';
import BeTheHero3 from '../../assets/BeTheHeroPrint3.jpg';
import BeTheHero4 from '../../assets/BeTheHeroPrint4.jpg';

import { Container } from './styles';

const Portfolio: React.FC = () => {
  return (
    <>
      <Container>
        <div className="header">
          <h2>Trabalhos</h2>
          <h3>Abaixo estão listados alguns trabalhos</h3>
        </div>
        <div className="content">
          <div className="mobile">
            <section className="carouselTop">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
              >
                <div>
                  <img src={keycashPrint1} alt="keycash work print 1" />
                </div>
                <div>
                  <img src={keycashPrint2} alt="keycash work print 2" />
                </div>
                <div>
                  <img src={keycashPrint3} alt="keycash work print 3" />
                </div>
              </Carousel>
              <p>
                Trabalho no qual participei pela Ludium para o cliente KeyCash,
                onde foi feito uma plataforma responsiva e mobile friendly para
                o corretor poder cadastrar os imóveis que seriam vendidos.
                <br />
                <br />
                <br />
                Tecnologias utilizadas por mim: HTML, CSS, Javascript e VueJS.
              </p>
            </section>
            <section className="carouselTop">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
              >
                <div>
                  <img
                    src={GitHubExplorer1}
                    alt="github-explorer work print 1"
                  />
                </div>
                <div>
                  <img
                    src={GitHubExplorer2}
                    alt="github-explorer work print 2"
                  />
                </div>
              </Carousel>
              <p>
                Trabalho realizado acompanhando o curso GoStack da Rocketseat,
                do qual consumimos a api pública do github para listar o os
                repositórios e seus dados.
                <br />
                <br />
                <br />
                Tecnologias utilizadas: HTLM, CSS, Typescript e React JS.
              </p>
            </section>
            <section className="carouselTop">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
              >
                <div>
                  <img src={GoFinances1} alt="keycash work print 1" />
                </div>
                <div>
                  <img src={GoFinances2} alt="keycash work print 2" />
                </div>
              </Carousel>
              <p>
                Trabalho realizado através de desafios do curso GoStack da
                Rocketseat, do qual criamos uma api para armazenar transações
                financeiras utilizando o Node.js e depois criamos um site para
                consumir essa api utilizando React.
                <br />
                <br />
                <br />
                Tecnologias utilizadas: HTLM, CSS, Typescript, React JS e
                Node.js.
              </p>
            </section>
            <section className="carouselTop">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
              >
                <div>
                  <img src={BeTheHero1} alt="keycash work print 1" />
                </div>
                <div>
                  <img src={BeTheHero2} alt="keycash work print 2" />
                </div>
                <div>
                  <img src={BeTheHero3} alt="keycash work print 3" />
                </div>
                <div>
                  <img src={BeTheHero4} alt="keycash work print 3" />
                </div>
              </Carousel>
              <p>
                Trabalho realizado durante a semana omnistack 11 da rocketseat,
                do qual criamos uma aplicação que armazena e mostra os casos das
                ONGs cadastradas, permitindo o usuario entrar em contato com a
                ONG para ajudar.
                <br />
                <br />
                <br />
                Tecnologias utilizadas: HTLM, CSS, Javascript, React JS e
                Node.js.
              </p>
            </section>
          </div>
        </div>
      </Container>
      <Footer size="large" />
    </>
  );
};

export default Portfolio;
