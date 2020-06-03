import React, { useRef, useCallback } from 'react';
import { FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import axios from 'axios';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container } from './styles';
import Footer from '../../components/Footer';
import Input from '../../components/Input';

const Contact: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Digite um e-mail válido'),
        subject: Yup.string().required('Assunto é obrigatório'),
        // message: Yup.string().required('Mensagem é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      console.log('entrou');

      const api = axios.create({
        baseURL: 'https://formsubmit.io',
      });

      await api.post('/send/d5a5551f-5a39-4f57-9d72-bc54a453bbd4', {
        ...data,
        _redirect: 'https://www.guilhermeshima.com',
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);
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
            <Form
              action="https://formsubmit.io/send/d5a5551f-5a39-4f57-9d72-bc54a453bbd4"
              onSubmit={handleSubmit}
              ref={formRef}
              id="contactform"
              method="POST"
            >
              <Input id="name" type="text" name="name" placeholder="Nome" />

              <Input
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
              />

              <Input
                id="subject"
                type="text"
                name="subject"
                placeholder="Assunto"
              />

              {/* <textarea
                id="message"
                name="message"
                cols={65}
                rows={7}
                placeholder="Mensagem"
              /> */}
              <input
                name="_formsubmit_id"
                type="text"
                style={{ display: 'none' }}
              />

              <button type="submit">Enviar</button>
            </Form>
          </div>
        </div>
      </Container>
      <Footer size="small" />
    </>
  );
};

export default Contact;
