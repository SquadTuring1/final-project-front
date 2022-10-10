import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser, userSignedIn } from '../../features/auth/authSlice';
import {
  MainSign,
  Button,
  TextAccount,
  TextColor,
  TitleSign,
  CenterArticle,
  Logo,
  Input,
  Label
} from '../../ui/index';
import logoSM from '../../assets/images/Logo-sign.png';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Link, useNavigate } from 'react-router-dom';
import { selectAllUsers } from '../../features/users/usersSlice.js';

const Login = () => {
  const dispatch = useDispatch();
  const authUser = useSelector(getAuthUser);
  const users = useSelector(selectAllUsers);


  // set variables for react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit =async (data) => {
    if (authUser.loggedIn) {
      console.log('A user already logged in')
      return;
    } 

    const userExists = users.find(user => user.email === data.email)
    if (userExists) {
      dispatch(userSignedIn(data.email))
    } else {
      console.log('This user does not exist')
    }
  };


  const navigate = useNavigate();

  return (
    <MainSign>
      <Logo sign src={logoSM} />
      <form className="registration__form" id="registrationForm" onSubmit={handleSubmit(onSubmit)}>
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
          <TextColor className='forgotPass'>Forgot your password?</TextColor>
      </form>
      <article>
        <Button type="submit" form="registrationForm">
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
