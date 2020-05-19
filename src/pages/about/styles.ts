import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  .content {
    display: flex;
    margin-bottom: 150px;
  }
  p {
    text-align: justify;
    margin: 40px 20px 0 20px;
    font-size: 16px;
    & + p {
      margin-top: 20px;
    }
  }
  .profile-top {
    display: none;
  }
  img {
    max-width: 300px;
    max-height: 300px;
    border-radius: 50%;
  }
  @media screen and (min-width: 320px) {
    .content {
      display: block;
    }
    .profile-top {
      display: block;
      width: 250px;
      margin: 20px auto;
    }
    .profile-bottom {
      display: none;
    }
  }
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 425px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    .content {
      display: flex;
    }
    .profile-top {
      display: none;
    }
    .profile-bottom {
      display: initial;
      margin: 60px 10px;
    }
  }
  @media screen and (min-width: 2560px) {
    .content {
      max-width: 1440px;
      p {
        font-size: 2rem;
      }
      img {
        max-height: 500px;
        max-width: 500px;
        width: 500px;
        height: 500px;
      }
    }
  }
`;
