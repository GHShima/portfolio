import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  padding: 30px 0;
  background: #262626;
  header {
    width: 100%;
    margin: 0 auto;
    padding: ${({ size }) =>
      size === 'small' ? '10px 60px ' : '0 20px 150px'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      color: #f0f2f5;
      h1 {
        font-size: 26px;
      }
      p {
        font-size: 20px;
      }
    }
    nav {
      a {
        color: #f0f2f5;
        text-decoration: none;
        font-size: 20px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
