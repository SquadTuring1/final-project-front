import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
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
  CenterArticle
} from '../../ui/index';
import { useNavigate, Link } from 'react-router-dom';

const Registration = () => {
  const {
    getValues,
    register,
    watch,
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

  const onSubmit = (data) => {
    console.log(data);
  };

  const navigate = useNavigate();

  return (
    <MainSign>
      <Logo sign src={logoSM} />
      <form className="registration__form" onSubmit={handleSubmit(onSubmit)}>
        <TitleSign signUp>Sign up</TitleSign>
        <CenterArticle loginLab>
          <Label htmlFor="email">Email</Label>
          <Input
            className="signup__input"
            name="email"
            // label="Email:"
            type="email"
            // placeholder="email"
            {...register('email', {
              required: 'Email is required',
            })}
          />
          <ErrorMessage errors={errors} name="email" as="p" />
          <Label className='sign__username' htmlFor="username">Username</Label>
          <Input
            className="signup__input"
            name="username"
            // label="Username:"
            type="text"
            // placeholder="username"
            {...register('username', {
              required: 'Username is required',
            })}
          />
          <ErrorMessage errors={errors} name="username" as="p" />
          <Label className='sign__pass' htmlFor="password">Password</Label>
          <Input
            className="signup__input"
            name="password"
            label="Password:"
            type="password"
            // placeholder="password"
            {...register('password', {
              required: 'Password is required',
            })}
          />
          <Label className='sing__pass--confirm' htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            className="signup__input"
            name="confirmPassword"
            label="Confirm Password:"
            type="password"
            {...register('cotnfirmPassword', {
              validate: (value) => {
                value === getValues('password');
              },
            })}
          />
          <ErrorMessage errors={errors} name="password" as="p" />
            <TextRemember>
            <input type="checkbox" name="remember"/>
            Remember me</TextRemember>
          <Button as={Link} to="/dashboard">
            Create account
          </Button>
          <TextAccount>
            Already have an account?{' '}
            <TextColor as={Link} to="/login">
              Log in
            </TextColor>{' '}
            <TextAccount orLine>OR</TextAccount>
            <ButtonGoogle>Login with Google</ButtonGoogle>
          </TextAccount>
        </CenterArticle>
      </form>
      <TextTerms>
        By signing up, you’re agree to our{' '}
        <TermColor to="/terms">Term & Conditions and Privacy Policy</TermColor>
      </TextTerms>
    </MainSign>
  );
};

export default Registration;
