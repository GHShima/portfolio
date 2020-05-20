import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import { Container } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  function openNav(): void {
    const sideNavbar = window.document.getElementById('sideNav');
    if (sideNavbar === null) {
      console.log('is null');
    } else {
      sideNavbar.style.width = '300px';
    }
  }

  function closeNav(): void {
    const sideNavbar = window.document.getElementById('sideNav');
    if (sideNavbar === null) {
      console.log('is null');
    } else {
      sideNavbar.style.width = '0';
    }
  }

  return (
    <>
      <Container size={size}>
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
          <button type="button" onClick={openNav} className="button-side-nav">
            <FiAlignJustify size="30px" />
          </button>
          <nav id="sideNav" className="side-nav">
            <button type="button" className="close-btn" onClick={closeNav}>
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
