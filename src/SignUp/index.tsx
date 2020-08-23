import React from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import LogoImg from '../assets/img/logo-cocorico.svg';
import * as S from './styles';
import Button from '../components/Button';
import Input from '../components/Input';

const SignUp: React.FC = () => {
  return (
    <S.Container>
      <S.Background />
      <S.Content>
        <img
          src={LogoImg}
          alt="Cocoricó - Ovos Delivery"
          title="Cocoricó - Ovos Delivery"
        />

        <S.Form>
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
        </S.Form>

        <a href="/">
          <S.IconLogin />
          Voltar para o Logon
        </a>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
