import React from 'react';
import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <>
      <Container>
        <div className="header">
          <h2>Contatos</h2>
        </div>
        <div className="content">
          <div>
            <form action="https://formspree.io/moqkjdrb" method="POST">
              <input type="text" name="name" />
              <input type="email" name="_replyto" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
