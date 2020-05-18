import React from 'react';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <div className="header">
          <h2>Dashboard</h2>
          <h3>
            A seguir disponibilizo algumas formas de entrar em contato comigo
          </h3>
        </div>
        <div className="content" />
      </Container>
    </>
  );
};

export default Dashboard;
