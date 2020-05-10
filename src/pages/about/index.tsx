import React from 'react';
import Header from '../../components/Header';
import { Container } from './styles';

const About: React.FC = () => {
  return (
    <>
      <Header size="small" />
      <Container>
        <h1>About</h1>
      </Container>
    </>
  );
};

export default About;
