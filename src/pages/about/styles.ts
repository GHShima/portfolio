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
    margin-top: 40px;
    font-size: 16px;
    & + p {
      margin-top: 20px;
    }
  }

  img {
    margin-top: 40px;
    margin-left: 20px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
`;
