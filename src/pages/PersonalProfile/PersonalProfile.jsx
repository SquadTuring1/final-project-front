import { ErrorMessage } from '@hookform/error-message';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Popover } from 'react-tiny-popover';
import { getAuthUser } from '../../features/auth/authSlice';
import {
  MainDash,
  TitleH2,
  Input,
  Label,
  CenterArticle,
  CenterProfile,
  TitleP,
  Button,
} from '../../ui/index';
import auth from '../../utils/firebase/firebaseConfig';


const PersonalProfile = () => {
  const [modifyInfo, setModifyInfo] = useState(true);
  
  const authUser = useSelector(getAuthUser)
  console.log(authUser)

  console.log(modifyInfo)
  const {
    getValues,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: authUser.username,
      firstName: authUser.firstName,
      lastName: authUser.lastName,
      email: authUser.email,
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleDisabled = () => {
    setModifyInfo(false);
  };

  const handleEnabled = () => {
    setModifyInfo(true);
  };

  return (
    <MainDash>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CenterProfile loginLab>
          <TitleH2 className="profile__title">Profile</TitleH2>
          <TitleP>Avatar</TitleP>
          <input accept="image/png,image/jpeg" type="file" />
          {/* <Label className="username__profile">Username</Label> */}
          <Input
            disabled
            className="username__input"
            name="username"
            type="text"
            placeholder="Username"
            {...register('username')}
          />
          {/* <Label className="email__profile">Email</Label> */}
          <Input
            disabled
            className="email__input"
            name="email"
            type="text"
            placeholder="Email"
            {...register('email')}
          />

          {/* <Label className="name__profile">Name</Label> */}
          <Input
            disabled = {(modifyInfo === true) ? true : false}
            className="info__user--input"
            name="firstName"
            type="text"
            placeholder="First name"
            {...register('firstName')}
          />

          {/* <Label className="lastname__profile">Lastname</Label> */}
          <Input
            disabled = {(modifyInfo === true) ? true : false}
            className="info__user--input"
            name="lastName"
            type="text"
            placeholder="Last name"
            {...register('lastName')}
          />
          <TitleP className="change__pass">Change Password</TitleP>
          {/* <Label className="pass__profile">Password</Label> */}
          <Input
            name="password"
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          {/* <Label className="conf__pass-profile">Confirm Password</Label> */}
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            {...register('confirmPassword')}
          />
          <Button>Change Password</Button>
          <CenterArticle className="button__profile--container">
            {modifyInfo ? (
              <Button className="mofify__btn" type="button" onClick={() => handleDisabled()}>
                Modify
              </Button>
            ) : (
              <Button className="mofify__btn" type="button" onClick={() => handleEnabled()}>
                Save
              </Button>
            )}
            {/* <Button type="submit">Save</Button> */}
          </CenterArticle>
        </CenterProfile>
      </form>
    </MainDash>
  );
};

export default PersonalProfile;
