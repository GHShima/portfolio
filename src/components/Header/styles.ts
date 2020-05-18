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

  header {
    margin: 0 auto;
    width: 100%;
    padding: ${({ size }) =>
      size === 'small' ? '10px 60px ' : '0 20px 150px'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      color: #f0f2f5;
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
    nav {
      a {
        color: #f0f2f5;
        text-decoration: none;
        font-size: 20px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 3.2rem;
        }
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
