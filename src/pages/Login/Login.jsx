import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {
  MainSign,
  Button,
  TextAccount,
  TextColor,
  TitleSign,
  CenterArticle,
  Logo,
  Input,
  Label,
} from '../../ui/index';
import logoSM from '../../assets/images/Logo-sign.png';

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from 'firebase/auth';
import auth from '../../utils/firebase/firebaseConfig';

import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser, userSignedIn } from '../../features/auth/authSlice';
import { useGetSingleUserQuery } from '../../features/api/apiSlice';
import { skipToken } from '@reduxjs/toolkit/dist/query';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(getAuthUser ? getAuthUser : skipToken);
  const {
    data: dbUser,
    isLoading,
    isSuccess,
    error,
  } = useGetSingleUserQuery(authUser.uid);

  useEffect(() => {
    if (isLoading) {
      console.log('Loading...');
      return;
    }
    if (isSuccess) {
      console.log('Well done!');
      console.log({ ...authUser, ...dbUser });
      dispatch(userSignedIn({ ...authUser, ...dbUser.currentUser }));
      dbUser.currentUser && navigate('/dashboard');
    }
  }, [dbUser]);

  // set variables for react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      auth.onAuthStateChanged((user) => {
        if (!user) {
          return;
        }
        const { accessToken, uid } = user;
        const userObject = {
          token: accessToken,
          uid: uid,
        };
        dispatch(userSignedIn(userObject));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainSign>
      <Logo sign src={logoSM} />
      <form
        className="registration__form"
        id="loginForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TitleSign>Hello again!</TitleSign>
        <CenterArticle loginLab>
          {/* <Label htmlFor="email">
            Email:</Label> */}
          <Input
          noFocus
            className="signup__input"
            name="email"
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
            })}
          />
          <ErrorMessage errors={errors} name="email" as="p" />
          {/* </CenterArticle>
        <CenterArticle loginLab> */}
          {/* <Label passPos htmlFor="password">
            Password:
            </Label> */}
          <Input
            className="signup__input"
            name="password"
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
            })}
          />
          <ErrorMessage errors={errors} name="password" as="p" />
        </CenterArticle>
        <TextColor as={Link} to="/reset" className="forgotPass">
          Forgot your password?
        </TextColor>
      </form>
      <article>
        <Button type="submit" form="loginForm">
          Sign in
        </Button>
        <TextAccount register>
          Don't have an account?{' '}
          <TextColor as={Link} to="/registration">
            Register
          </TextColor>{' '}
        </TextAccount>
      </article>
    </MainSign>
  );
};

export default Login;
