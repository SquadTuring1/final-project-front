import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
  ResponseMessage,
} from '../../ui/index';
import logoSM from '../../assets/images/logo-mammoth2-vertical.png';

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
import {
  useLazyGetSingleUserQuery,
  useLogInAndUpdateTokenMutation,
} from '../../features/api/apiSlice';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { nanoid } from '@reduxjs/toolkit';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(getAuthUser && getAuthUser);
  const [
    getSingleUser,
    { data: dbUser, isLoading, isUninitialized, isSuccess, error },
  ] = useLazyGetSingleUserQuery();

  useEffect(() => {
    if (isLoading) {
      console.log('Loading user...');
    } else if (isSuccess) {
      console.log(dbUser.currentUser[0]);
      dispatch(userSignedIn({ ...authUser, ...dbUser.currentUser[0] }));
      authUser &&
        toast.success(`You are now logged in as ${auth?.currentUser?.email}`, {
          toastId: 'login-success',
        });
      navigate('/dashboard');
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
        getSingleUser(uid);
      });
    } catch (error) {
      console.log(error);
      toast.error(`You were unable to log in`, { toastId: 'login-error' });
    }
  };

  return (
    <MainSign>
      <Logo className='logo__login' sign src={logoSM} />
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
          <ErrorMessage
            as={ResponseMessage}
            className="login error"
            errors={errors}
            name="email"
          />
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
          <ErrorMessage
            as={ResponseMessage}
            className="login error"
            errors={errors}
            name="password"
          />
        </CenterArticle>
        <TextColor as={Link} to="/reset" className="forgotPass">
          Forgot your password?
        </TextColor>
      </form>
      <article>
        <Button className="login__btn" type="submit" form="loginForm">
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
