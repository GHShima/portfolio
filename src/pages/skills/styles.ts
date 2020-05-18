import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  .content {
    margin-top: 50px;
    div {
      display: flex;
      justify-content: center;
      section {
        max-width: 200px;
        .CircularProgressbar {
          width: 150px;
          margin: 20px 20px;
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
`;
