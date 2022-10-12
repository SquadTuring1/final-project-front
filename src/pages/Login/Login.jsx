import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios"
import { MainSign, Button, TextAccount, TextColor, TitleSign, CenterArticle, Logo, Input, Label } from '../../ui/index';
import logoSM from '../../assets/images/Logo-sign.png';

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, } from 'firebase/auth';
import auth from '../../utils/firebase/firebaseConfig';

import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser, userSignedIn } from '../../features/auth/authSlice';
import { useGetSingleUserQuery } from '../../features/api/apiSlice';




const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(getAuthUser);  
  const dbUser = useGetSingleUserQuery(authUser.uid)
  
  
  // set variables for react-hook-form
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
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

        if (dbUser.isLoading) {
          console.log('Loading user...')
        } else if (dbUser.isSuccess) {
          dispatch(userSignedIn({...userObject, ...dbUser.data.currentUser}));
          // console.log(authUser)
        } else if (dbUser.isError) {
            console.log(dbUser.error);
        } 
        navigate('/dashboard');
      });
    } catch(error) {
      console.log(error)
    }
  }




  return (
    <MainSign>
      <Logo sign src={logoSM} />
      <form className="registration__form" id="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <TitleSign>Hello again!</TitleSign>
        <CenterArticle loginLab>
          <Label htmlFor="email">
            Email:</Label>
            <Input
              className="signup__input"
              name="email"
              // label="Email:"
              type="email"
              {...register('email', {
                required: 'Email is required',
              })}
            />
          <ErrorMessage errors={errors} name="email" as="p" />
          {/* </CenterArticle>
        <CenterArticle loginLab> */}
          <Label passPos htmlFor="password">
            Password:
            </Label>
            <Input
              className="signup__input"
              name="password"
              label="Password:"
              type="password"
              {...register('password', {
                required: 'Password is required',
              })}
            />
          <ErrorMessage errors={errors} name="password" as="p" />
        </CenterArticle>
        <TextColor className="forgotPass">Forgot your password?</TextColor>
      </form>
      <article>
        <Button type="submit" form="loginForm">Sign in</Button>
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
