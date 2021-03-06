import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  isMobile: boolean;
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
        font-size: 1.3rem;
        transition: opacity 0.2s;

        & + a {
          margin-left: 3.2rem;
        }
        &:hover {
          opacity: 0.6;
        }
      }
    }
    button {
      background: none;
      border: none;
    }
    svg {
      color: #f0f2f5;
    }
    .side-nav {
      width: ${({ isMobile }) => (isMobile === true ? '300px' : '0')};
      height: 100%;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: #262626;
      overflow-x: hidden;
      transition: 0.5s;
      padding-top: 60px;
    }
    .side-nav a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      margin: 0;
      font-size: 2rem;
      display: block;
      transition: 0.3s;
    }
    .side-nav a:hover {
      opacity: 0.6;
    }
    .side-nav .close-btn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
    }
  }
  @media screen and (min-width: 320px) {
    .top-nav {
      display: none;
    }
    .button-side-nav {
      display: initial;
    }
    header {
      div {
        h1 {
          font-size: 1.6rem;
        }
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    header {
      div {
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .top-nav {
      display: initial;
    }
    .button-side-nav {
      display: none;
    }
  }
`;
