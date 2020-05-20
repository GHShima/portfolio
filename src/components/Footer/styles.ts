import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}
export const Container = styled.div<ContainerProps>`
  padding: 30px 0;
  background: #262626;
  border-style: solid;
  border-color: #000000;
  border-width: 0.1px 0 1px 0;
  width: 100%;
  height: 100px;
  position: ${({ size }) => (size === 'small' ? 'fixed ' : 'initial')};
  bottom: 0;
  left: 0;
  footer {
    text-align: center;
  }
  a {
    text-decoration: none;
  }
  svg {
    color: #f0f2f5;
  }
  @media screen and (min-width: 320px) {
    position: ${({ size }) => (size === 'small' ? 'initial ' : 'initial')};
  }
  @media screen and (min-width: 1024px) {
    position: ${({ size }) => (size === 'small' ? 'fixed ' : 'initial')};
  }
`;
