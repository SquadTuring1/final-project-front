import React from 'react';
import { Button, ErrorImg, MainSign } from '../../ui/index';
import logo404 from '../../assets/images/not-found-logo.png';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('dashboard', {
      replace: true,
    });
  };

  return (
    <MainSign>
      <ErrorImg src={logo404} />
      <Button className="modify__btn" onClick={handleClick}>
        Go Home!
      </Button>
    </MainSign>
  );
};

export default ErrorPage;
