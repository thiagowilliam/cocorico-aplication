import React from 'react';
import GlobalStyles from './styles/global';
// import SignIn from './SignIn';
import SignUp from './SignUp';

const App: React.FC = () => {
  return (
    <>
      <SignUp />
      <GlobalStyles />
    </>
  );
};

export default App;
