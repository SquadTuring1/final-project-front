import React, { useState } from 'react';
import { Input, MainSign, Logo, TitleSign } from '../../ui';
import logoSM from '../../assets/images/logo-mammoth-vertical.png';
import { Button } from '../../ui';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../utils/firebase/firebaseConfig';
import { MainReset } from '../../ui/Main.styled';

const ForgotPassword = () => {
  const [email, setEmail] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email, {
      url: 'http://localhost:5173/login',
    })
      .then(() => setIsSuccess(true))
      .catch((error) => setError(error));
  };
  return (
    <MainReset>
      <form onSubmit={handleSubmit}>
      <Logo sign src={logoSM} />
        <TitleSign>Reset your password</TitleSign>
        <Input onChange={handleChange} />
        <Button type="submit">Reset passowrd</Button>
      </form>
      {isSuccess && <p>TODO: alert react toast for rest email instructions</p>}
      {error && <p>TODO: alert react toast for error</p>}
    </MainReset>
  );
};

export default ForgotPassword;
