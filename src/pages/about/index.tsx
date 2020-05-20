import React from 'react';
import { Container } from './styles';
import Footer from '../../components/Footer';
import Skills from '../../components/Skills';

const About: React.FC = () => {
  return (
    <>
      <Container>
        <div className="header">
          <h2>Sobre Guilherme Shimabukuro</h2>
          <h3>Um pouco da minha trajetória</h3>
        </div>
        <div className="content">
          <img
            className="profile-top"
            src="https://avatars1.githubusercontent.com/u/62029842?s=460&u=acc479676a87759a930f553afd4ad34f05029d67&v=4"
            alt="profile"
          />
          <div>
            <p>
              Olá, meu nome é Guilherme Shimabukuro, mas alguns me chamam de
              Shima. Tenho 29 anos, moro em São Paulo, Capital, atuo como
              Desenvolvedor Front-End desde 2019.
            </p>
            <p>
              Comecei a trabalhar cedo. Dentre as diversas oportunidades que
              tive já fui garçom, entregador de panfletos, vendedor de presentes
              japoneses, vendedor de vídeo games e auxiliar de escritório.
              Estudei química industrial, mas não me adaptei, foi aí que cursei
              Design de Games, onde eu pude ter o primeiro contato com a
              programação, onde meus olhos brilharam, em 2018 tive a chance de
              trabalhar com desenvolvimento web e descobri o que realmente
              queria fazer e desde então este é o meu foco.
            </p>
            <p>
              Busco entregar o melhor trabalho possível, por isso estou sempre
              estudando para adquirir novos aprendizados ou reforçar o conteúdo
              que já adquiri.
            </p>
            <p>
              Divido o meu tempo entre minhas duas paixões, tecnologia e artes
              marciais, sendo assim divido meu tempo em construir algo com
              Arduino ou uma aplicação digital e prática de jiu jitsu.
            </p>
          </div>

          <img
            className="profile-bottom"
            src="https://avatars1.githubusercontent.com/u/62029842?s=460&u=acc479676a87759a930f553afd4ad34f05029d67&v=4"
            alt="profile"
          />
        </div>
        <hr />
      </Container>

      <Skills />
      <Footer size="large" />
    </>
  );
};

export default About;
