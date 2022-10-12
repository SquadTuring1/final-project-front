import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useGetUsersQuery, useAddUserMutation } from '../../features/api/apiSlice';
import '../../ui/Registration.styled.css';
import logoSM from '../../assets/images/Logo-sign.png';
import axios from "axios"
// import for styled components
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
import { useNavigate, Link } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import auth from '../../utils/firebase/firebaseConfig.js';
import { useState } from 'react';

const Registration = () => {
  const navigate = useNavigate();

  // get users data from apiSlice hook
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUsersQuery();

  // get the function addUser from apiSlice hook, only need the function since adding
  const [ addUser ] = useAddUserMutation();
  
  
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

  const onSubmit = async (data) => {
    console.log(data);
    const { email, password, username } = data;

    // * Post request without Firebase Authentification
    axios.post("http://localhost:4000/signup", {email, password, username})
    .then(response => console.log(response))
    .catch (error => console.log(error.message))
    

        
    // * with Firebase
    // try {
    //   console.log('insde try');
    //   await createUserWithEmailAndPassword(auth, email, password);
    //   auth.onAuthStateChanged((user) => {
    //     if (user) {
    //       const { accessToken, uid, email } = user;
    //       navigate('/dashboard');
    //     }
    //   });
    // } catch (error) {
    //   setSignUpError(error.message);
    // }
  };

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
            <input type="checkbox" name="remember"/>
            Remember me</TextRemember>
          <Button type='submit'
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
