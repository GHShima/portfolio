import React from 'react';
import { FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';
import { Container } from './styles';
import Footer from '../../components/Footer';

interface FormValidation {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  /* function validateForm(formParams: FormValidation) {
    const errors = [];

    if (formParams.name.length === 0) {
      errors.push('O campo nome precisa ser preenchido');
    }
    if (formParams.email.length < 5) {
      errors.push('O e-mail deveria ter mais de 5 caracteres');
    }
    if (formParams.email.split('').filter(x => x === '@').length !== 1) {
      errors.push('O e-mail deveria ter um @');
    }
    if (formParams.email.indexOf('.') === -1) {
      errors.push('O e-mail deveria ter pelo menos um ponto');
    }
    if (formParams.subject.length === 0) {
      errors.push('O campo assunto precisa ser preenchido');
    }
    if (formParams.message.length === 0) {
      errors.push('O campo mensagem precisa ser preenchido');
    }
    return errors;
  } */

  return (
    <>
      <Container>
        <div className="header">
          <h2>Contatos</h2>
          <h3>Vamos conversar?</h3>
        </div>
        <div className="content">
          <div className="social">
            <div>
              <h4>
                Se meus trabalhos te interessaram e você quer que eu faça parte
                do seu time ou quer conversar sobre algum projeto, me mande um
                email pelo formulario ou entre em contato comigo pelas redes
                sociais!
              </h4>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/guilherme-hidemi-shimabukuro-araujo-82827216a/">
                <FiLinkedin size="30px" />
              </a>
              <a href="https://github.com/GHShima">
                <FiGithub size="30px" />
              </a>
              <a href="https://www.facebook.com/guilherme.shimabukuro.50/">
                <FiFacebook size="30px" />
              </a>
            </div>
          </div>
          <div className="form">
            <form
              id="contactform"
              action="https://formsubmit.io/send/d5a5551f-5a39-4f57-9d72-bc54a453bbd4
"
              method="POST"
            >
              <input
                name="_redirect"
                type="hidden"
                id="name"
                value="https://www.guilhermeshima.com/contact"
              />

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Nome"
                required
              />

              <input
                required
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
              />

              <input
                required
                id="subject"
                type="text"
                name="subject"
                placeholder="Assunto"
              />

              <textarea
                required
                id="message"
                name="message"
                cols={65}
                rows={7}
                placeholder="Mensagem"
              />

              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </Container>
      <Footer size="small" />
    </>
  );
};

export default Contact;
