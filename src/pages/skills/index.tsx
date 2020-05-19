import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import VisibilitySensor from 'react-visibility-sensor';
import 'react-circular-progressbar/dist/styles.css';
import { Container } from './styles';
import Footer from '../../components/Footer';

const Skills: React.FC = () => {
  let value = 0;
  return (
    <>
      <Container>
        <div className="header">
          <h2>Habilidades</h2>
          <h3>Algumas das minhas habilidades</h3>
        </div>
        <div className="content">
          <div>
            <section>
              <p>HTML</p>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => {
                  if (isVisible) {
                    value = 10;
                  }
                  return (
                    <CircularProgressbar
                      value={value}
                      maxValue={10}
                      text={`${value}`}
                    />
                  );
                }}
              </VisibilitySensor>
            </section>
            <section>
              <p>CSS</p>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => {
                  if (isVisible) {
                    value = 8;
                  }
                  return (
                    <CircularProgressbar
                      value={value}
                      maxValue={10}
                      text={`${value}`}
                    />
                  );
                }}
              </VisibilitySensor>
            </section>
            <section>
              <p>Javascript</p>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => {
                  if (isVisible) {
                    value = 8;
                  }
                  return (
                    <CircularProgressbar
                      value={value}
                      maxValue={10}
                      text={`${value}`}
                    />
                  );
                }}
              </VisibilitySensor>
            </section>
            <section>
              <p>Typescript</p>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => {
                  if (isVisible) {
                    value = 7;
                  }
                  return (
                    <CircularProgressbar
                      value={value}
                      maxValue={10}
                      text={`${value}`}
                    />
                  );
                }}
              </VisibilitySensor>
            </section>
          </div>
          <div>
            <section>
              <p>Vue</p>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => {
                  if (isVisible) {
                    value = 6;
                  }
                  return (
                    <CircularProgressbar
                      value={value}
                      maxValue={10}
                      text={`${value}`}
                    />
                  );
                }}
              </VisibilitySensor>
            </section>
            <section>
              <p>React</p>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => {
                  if (isVisible) {
                    value = 7;
                  }
                  return (
                    <CircularProgressbar
                      value={value}
                      maxValue={10}
                      text={`${value}`}
                    />
                  );
                }}
              </VisibilitySensor>
            </section>
            <section>
              <p>Node.js</p>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => {
                  if (isVisible) {
                    value = 6;
                  }
                  return (
                    <CircularProgressbar
                      value={value}
                      maxValue={10}
                      text={`${value}`}
                    />
                  );
                }}
              </VisibilitySensor>
            </section>
          </div>
        </div>
      </Container>
      <Footer size="small" />
    </>
  );
};

export default Skills;
