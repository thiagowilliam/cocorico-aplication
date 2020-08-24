import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErros from '../utils/getValidationErros';

import LogoImg from '../assets/img/logo-cocorico.svg';

import * as S from './styles';

import Button from '../components/Button';
import Input from '../components/Input';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErros(err);
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <S.Container>
      <S.Content>
        <img
          src={LogoImg}
          alt="Cocoricó - Ovos Delivery"
          title="Cocoricó - Ovos Delivery"
        />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button> Entrar</Button>

          <a href="/" title="Esqueci minha senha">
            Esqueci minha senha
          </a>
        </Form>

        <a href="/">
          <S.IconLogin />
          Criar Conta
        </a>
      </S.Content>
      <S.Background />
    </S.Container>
  );
};

export default SignIn;
