import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 32px;
  }
  h3 {
    margin-top: 10px;
    font-size: 22px;
    text-align: center;
  }
  p {
    text-align: justify;
    margin: 40px 20px 0 20px;
    padding-bottom: 20px;
    font-size: 1.2rem;
  }
  section {
    display: block;
    margin-top: 80px;
    background: #454444;
    border-radius: 20px;
    max-width: 100%;
  }
  .carouselLeft {
    .carousel {
      border-radius: 20px 0 0 20px;
    }
  }
  .carouselRight {
    .carousel {
      border-radius: 0 20px 20px 0;
    }
  }
  .carouselTop {
    .carousel {
      border-radius: 20px 20px 0 0;
    }
  }
  .carousel .control-dots .dot {
    background: #323232;
    width: 15px;
    height: 15px;
    z-index: 10;
  }

  @media screen and (min-width: 320px) {
    .web {
      display: none;
    }
    .mobile {
      display: initial;
      section {
        display: block;
        margin: 10px 10px;
      }
    }
    .carousel .control-dots .dot {
      width: 8px;
      height: 8px;
    }
  }
  @media screen and (min-width: 1440px) {
    .carousel .control-dots .dot {
      width: 15px;
      height: 15px;
    }
  }
  @media screen and (min-width: 2560px) {
    .content {
      max-width: 1300px;
      p {
        font-size: 2rem;
      }
    }
    .carousel .control-dots .dot {
      width: 20px;
      height: 20px;
    }
  }
`;
