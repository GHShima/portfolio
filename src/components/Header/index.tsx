import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <div>
        <h1>Guilherme Shimabukuro</h1>
        <p>Web-developer</p>
      </div>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/skills">Habilidades</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  </Container>
);

export default Header;
