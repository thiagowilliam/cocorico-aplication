import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErros from '../utils/getValidationErros';

import LogoImg from '../assets/img/logo-cocorico.svg';

import * as S from './styles';

import Button from '../components/Button';
import Input from '../components/Input';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Digite um email válido'),
        password: Yup.string().min(6, 'Mínimo de 6 digitos'),
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
      <S.Background />
      <S.Content>
        <img
          src={LogoImg}
          alt="Cocoricó - Ovos Delivery"
          title="Cocoricó - Ovos Delivery"
        />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button> Cadastrar</Button>
        </Form>

        <a href="/">
          <S.IconLogin />
          Voltar para o Logon
        </a>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
