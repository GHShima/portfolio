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
    font-size: 16px;
  }
  section {
    display: inline-flex;
    margin-top: 80px;
    background: #454444;
    border-radius: 20px;
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
  .carousel .control-dots .dot {
    background: #323232;
    z-index: 10;
  }
`;
