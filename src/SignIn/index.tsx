import React from 'react';
import LogoImg from '../assets/img/logo-cocorico.svg';
import * as S from './styles';
import Button from '../components/Button';
import Input from '../components/Input';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <img
          src={LogoImg}
          alt="Cocoricó - Ovos Delivery"
          title="Cocoricó - Ovos Delivery"
        />

        <S.Form>
          <h1>Faça seu logon</h1>
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />

          <Button />

          <a href="/" title="Esqueci minha senha">
            Esqueci minha senha
          </a>
        </S.Form>

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
