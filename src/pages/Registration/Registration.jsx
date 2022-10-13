import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

import {
  useSignUpUserMutation,
  useGetSingleUserQuery,
} from '../../features/api/apiSlice';
import { getAuthUser, userSignedIn } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

import '../../ui/Registration.styled.css';
import logoSM from '../../assets/images/Logo-sign.png';
import {
  MainSign,
  Button,
  ButtonGoogle,
  TextAccount,
  TextColor,
  TextTerms,
  TermColor,
  TextRemember,
  TitleSign,
  Logo,
  Input,
  Label,
  CenterArticle,
} from '../../ui/index';

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import auth from '../../utils/firebase/firebaseConfig.js';

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(getAuthUser);
  const currentUser = useGetSingleUserQuery(authUser.uid);

  // get the function addUser from apiSlice hook, only need the function since adding
  const [signUpUser] = useSignUpUserMutation();

  // set variables from react-hook-form
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });
  const [signUpError, setSignUpError] = useState(null);

  const addUserToStateAndDb = (user, data) => {
    const { accessToken, uid, email } = user;
    const userObject = {
      token: accessToken,
      uid: uid,
      email: email,
      password: data.password, // TODO: to get value, must be hashed and sent to back? bcryptjs?
      username: data.username,
    };
    dispatch(userSignedIn(userObject));
    signUpUser(userObject);

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
          {/* <Label htmlFor="email">Email</Label> */}
          <Input
            className="signup__input"
            name="email"
            type="email"
            placeholder="email"
            {...register('email', {
              required: 'Email is required',
            })}
          />
          <ErrorMessage errors={errors} name="email" as="p" />
          {/* <Label className='sign__username' htmlFor="username">Username</Label> */}
          <Input
            className="signup__input"
            name="username"
            type="text"
            placeholder="username"
            {...register('username', {
              required: 'Username is required',
            })}
          />
          <ErrorMessage errors={errors} name="username" as="p" />
          {/* <Label className='sign__pass' htmlFor="password">Password</Label> */}
          <Input
            className="signup__input"
            name="password"
            label="Password:"
            type="password"
            placeholder="password"
            {...register('password', {
              required: 'Password is required',
            })}
          />
          {/* <Label className='sing__pass--confirm' htmlFor="confirmPassword">Confirm Password</Label> */}
          <Input
            className="signup__input"
            name="confirmPassword"
            placeholder="Confirm Password:"
            type="password"
            {...register('confirmPassword', {
              validate: (value) => {
                value === getValues('password');
              },
            })}
          />
          <ErrorMessage errors={errors} name="password" as="p" />
          <TextRemember>
            <input type="checkbox" name="remember" />
            Remember me
          </TextRemember>
          <Button
            type="submit"
            // onClick={() => navigate('/dashboard')}
          >
            Create account
          </Button>
          <TextAccount>
            Already have an account?{' '}
            <TextColor as={Link} to="/login">
              Log in
            </TextColor>{' '}
            {/* <TextAccount orLine>OR</TextAccount> */}
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
