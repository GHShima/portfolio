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
  svg {
    color: #f0f2f5;
  }
  .content {
    display: flex;
  }

  .social {
    display: block;
    margin: 20px 20px;
    div {
      & + div {
        margin-top: 20px;
      }
    }
  }
  .form {
    display: flex;
    margin: 20px 20px;
    max-width: 500px;
    input {
      margin: 10px 10px;
      width: 47.5%;
      max-width: 290px;
      border-radius: 5px;
    }
  }
  textarea {
    margin: 10px 10px;
    resize: none;
    max-width: 600px;
    border-radius: 5px;
  }
  button {
    margin: 10px 10px;
    background: #f0f2f5;
    width: 100%;
    height: 40px;
    max-width: 600px;
    border-radius: 5px;
    border: 0;
    box-shadow: 0;
  }
  #subject {
    width: 100%;
    max-width: 600px;
  }
`;
