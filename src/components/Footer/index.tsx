import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { Container } from './styles';

interface FooterProps {
  size?: 'small' | 'large';
}
const Footer: React.FC<FooterProps> = ({ size = 'large' }: FooterProps) => (
  <Container size={size}>
    <footer>
      <div>
        <p>
          Este site foi desenvolvido em React e o codigo pode ser acessado no
          meu GitHub
          <span />
          <a href="https://github.com/GHShima">
            <FiGithub size="20px" />
          </a>
        </p>
      </div>
    </footer>
  </Container>
);

export default Footer;
