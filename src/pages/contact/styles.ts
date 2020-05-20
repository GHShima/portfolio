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
    max-width: 500px;
    form {
      margin: 10px;
      padding: 10px;
      input {
        width: 47.5%;
        margin-top: 10px;
        max-width: 290px;
        border-radius: 5px;
      }
    }
  }
  textarea {
    margin-top: 10px;
    resize: none;
    max-width: 600px;
    border-radius: 5px;
  }
  button {
    margin: 10px 0;
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
  @media screen and (min-width: 320px) {
    .content {
      display: block;
    }
    .form {
      display: block;

      max-width: 100%;
      form {
        max-width: 100%;
        margin: 10px 10px;

        input {
          width: 100%;
          max-width: 100%;
          border-radius: 5px;
        }
      }
    }
    textarea {
      resize: none;
      width: 100%;
      border-radius: 5px;
    }
    #subject {
      width: 100%;
    }
  }
  @media screen and (min-width: 768px) {
    .content {
      max-width: 600px;
    }
  }
  @media screen and (min-width: 1024px) {
    .content {
      max-width: 960px;
      display: flex;
    }
  }
  @media screen and (min-width: 2560px) {
    .content {
      max-width: 1300px;
    }
  }
`;
