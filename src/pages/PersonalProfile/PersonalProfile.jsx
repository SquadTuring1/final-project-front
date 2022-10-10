import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MainDash, TitleH2, Input, Label, CenterArticle, TitleP, Button } from '../../ui/index';

const PersonalProfile = () => {
  const {
    getValues,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      name: '',
      lastname: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <MainDash>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CenterArticle loginLab>
        <TitleH2>Profile</TitleH2>
        <Label>Avatar</Label>
        <input accept='image/png,image/jpeg' type='file' />
          <Label>Username</Label>
          <Input name="username" type="username" placeholder="Username" />

          <Label>Name</Label>
          <Input
            name="name"
            type="name"
            placeholder="Name"
            {...register('name')}
          />
 
          <Label>Lastname</Label>
          <Input
            name="lastname"
            type="lastname"
            placeholder="Lastname"
            {...register('lastname')}
          />
          <TitleP>Change Password</TitleP>
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          <Label>Confirm Password</Label>
          <Input
            name="confirmpassword"
            type="password"
            placeholder="Confirm password"
            {...register('confirmpassword')}
          />
          <Button className='mofify__btn' type='button'>Modify</Button>
          <Button type='submit'>Save</Button>
        </CenterArticle>
      </form>
    </MainDash>
  );
};

export default PersonalProfile;
/* - Username (no modificable)
- Email (no modificable)
- name
- lastname
- avatar (input)
change password? */
