import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import keycashPrint1 from '../../assets/KeyCashPrints1.jpg';
import keycashPrint2 from '../../assets/KeyCashPrints2.jpg';
import keycashPrint3 from '../../assets/KeyCashPrints3.jpg';

import { Container } from './styles';

const Portfolio: React.FC = () => {
  return (
    <>
      <Container>
        <div className="header">
          <h2>Portfolio</h2>
          <h3>Abaixo estão listados alguns trabalhos</h3>
        </div>
        <div className="content">
          <section className="carouselRight">
            <p>Trabalho que realizei equanto trabalhava na Ludium</p>
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              width="500px"
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
          </section>
          <section className="carouselLeft">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              width="500px"
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
            <p>Trabalho que realizei equanto trabalhava na Ludium</p>
          </section>
          <section className="carouselRight">
            <p>Trabalho que realizei equanto trabalhava na Ludium</p>
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              width="500px"
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
          </section>
          <section className="carouselLeft">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              width="500px"
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
            <p>Trabalho que realizei equanto trabalhava na Ludium</p>
          </section>
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
