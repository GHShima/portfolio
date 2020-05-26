import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import { Container } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <Container size={size} isMobile={isMobile}>
        <header>
          <div>
            <h1>Guilherme Shimabukuro</h1>
            <p>Web-developer</p>
          </div>
          <nav className="top-nav">
            <Link to="/">Sobre</Link>
            <Link to="/portfolio">Trabalhos</Link>
            <Link to="/contact">Contato</Link>
          </nav>
          <button
            type="button"
            onClick={() => setIsMobile(true)}
            className="button-side-nav"
          >
            <FiAlignJustify size="30px" />
          </button>
          <nav id="sideNav" className="side-nav">
            <button
              type="button"
              className="close-btn"
              onClick={() => setIsMobile(false)}
            >
              x
            </button>
            <Link to="/">Sobre</Link>
            <Link to="/portfolio">Trabalhos</Link>
            <Link to="/contact">Contato</Link>
          </nav>
        </header>
      </Container>
    </>
  );
};

export default Header;
