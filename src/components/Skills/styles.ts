import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  .content {
    margin-top: 50px;
    div {
      display: flex;
      justify-content: center;
      section {
        max-width: 150px;
        margin: 0 auto;
        .CircularProgressbar {
          width: 150px;
          margin: 10px auto;
        }
      }
    }
  }
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
    text-align: center;
  }
  @media screen and (min-width: 320px) {
    .content {
      div {
        display: block;
        margin: 0 auto;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .content {
      div {
        display: flex;
      }
    }
  }
`;
