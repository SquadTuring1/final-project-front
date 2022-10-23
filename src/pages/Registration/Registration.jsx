import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

import { useSignUpUserMutation, useGetSingleUserQuery, } from '../../features/api/apiSlice';
import { getAuthUser, userSignedIn } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

import '../../ui/Registration.styled.css';
import logoSM from '../../assets/images/Logo-sign.png';
import { MainSign, Button, ButtonGoogle, TextAccount, TextColor, TextTerms, TermColor, TextRemember, TitleSign, Logo, Input, Label, CenterArticle, ResponseMessage } from '../../ui/index';

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, } from 'firebase/auth';
import auth from '../../utils/firebase/firebaseConfig.js';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'




const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUpError, setSignUpError] = useState(null);

  const authUser = useSelector(getAuthUser);
  const currentUser = useGetSingleUserQuery(authUser.uid);
  // get the function addUser from apiSlice hook, only need the function since adding
  const [signUpUser, { isLoading }] = useSignUpUserMutation();

  const showToast = (type, string) => {
    type === 'success' ? toast.success(string) : toast.error(string);
  }

  // set variables from react-hook-form
  const { getValues, register, handleSubmit, formState: { errors },} = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });
  
  

  const addUserToStateAndDb = async (user, data) => {
    const { accessToken, uid, email } = user;
    const userObject = {
      token: accessToken,
      uid: uid,
      email: email,
      password: data.password, // TODO: to get value, must be hashed and sent to back? bcryptjs?
      username: data.username,
    };

    const canSave = [userObject.token, userObject.uid, userObject.email, userObject.password, userObject.username].every(Boolean) && !isLoading;
    if (canSave) {
      try {
        await signUpUser(userObject).unwrap();
        console.log('Signed up successfully')
        showToast('success', 'Signed up successfully')
      } catch (error) {
        console.log('Signup failed')
        showToast('error', 'Signup failed')
      }
      
    }
    
    dispatch(userSignedIn(userObject));
    

    if (currentUser.isLoading) {
      console.log('Loading user...');
    } else if (currentUser.isSuccess) {
      dispatch(
        userSignedIn({ ...userObject, ...currentUser.data.currentUser }),
      );
      console.log(authUser);
    } else if (currentUser.isError) {
      console.log(currentUser.error);
    }
  };

  const onSubmit = async (data) => {
    const { email, password, username } = data;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      auth.onAuthStateChanged((user) => {
        if (!user) {
          return;
        }
        addUserToStateAndDb(user, data); // calls func declared above
        navigate('/dashboard');
        console.log('User Created');
      });
    } catch (error) {
      setSignUpError(error.message);
      console.log(error.message);
    }
  };

  // TODO: implement same func as above, to add user to db and state, uncomment button
  // const signInWithGoogle = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then(({ user }) => {
  //       if (user) {
  //         const { uid, accessToken, displayName } = user;
  //         console.log(uid, accessToken, displayName);
  //         // TODO: set golbal state with details above
  //         navigate('/dashboard');
  //       }
  //       if (!user) {
  //         console.log('something went wrong');
  //         // TODO: Error handling component
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <MainSign>
      <Logo sign src={logoSM} />
      <form className="registration__form" onSubmit={handleSubmit(onSubmit)}>
        <TitleSign signUp>Sign up</TitleSign>
        <CenterArticle loginLab>
          <Input
            className="signup__input"
            name="email"
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
            })}
          />
          <ErrorMessage as={ResponseMessage} className="login error" errors={errors} name="email" />
          <Input
            className="signup__input"
            name="username"
            type="text"
            placeholder="Username"
            {...register('username', {
              required: 'Username is required',
            })}
          />
          <ErrorMessage as={ResponseMessage} className="login error" errors={errors} name="username" />
          <Input
            className="signup__input"
            name="password"
            label="Password:"
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
            })}
          />
          <ErrorMessage as={ResponseMessage} className="login error" errors={errors} name="password" />
          <Input
            className="signup__input"
            name="confirmPassword"
            placeholder="Confirm password:"
            type="password"
            {...register('confirmPassword', {
              validate: (value) => {
                value === getValues('password');
              },
              required: 'Confirmation is required',
            })}
          />
          <ErrorMessage as={ResponseMessage} className="login error" errors={errors} name="confirmPassword" />
          <TextRemember>
            <input type="checkbox" name="remember" />
            Remember me
          </TextRemember>
          <Button type="submit" >Create account</Button>
          <TextAccount>
            Already have an account?{' '}
            <TextColor as={Link} to="/login">
              Log in
            </TextColor>{' '}
          </TextAccount>
        </CenterArticle>
      </form>
      {/* <ButtonGoogle onClick={signInWithGoogle}>Login with Google</ButtonGoogle> */}
      <TextTerms>
        By signing up, you’re agree to our{' '}
        <TermColor to="/terms">Term & Conditions and Privacy Policy</TermColor>
      </TextTerms>
    </MainSign>
  );
};

export default Registration;
