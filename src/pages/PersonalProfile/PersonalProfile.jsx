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
import { useUpdateUserMutation } from '../../features/api/apiSlice';


const PersonalProfile = () => {
  const [modifyInfo, setModifyInfo] = useState(true);
  
  const authUser = useSelector(getAuthUser);
  
  const [ updateUser, { isLoading } ] = useUpdateUserMutation();
  
  
  const { getValues, register, reset, watch, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      username: authUser.username,
      firstName: authUser.firstName,
      lastName: authUser.lastName,
      email: authUser.email,
      currentPassword: '',
      newPassword: '',
    },
  });

  const handleDisabled = (e) => {
    e.preventDefault();
    setModifyInfo(false);
  };

  const handleEnabled = () => {
    setModifyInfo(true);
  };

  const onSubmit = async (data) => {
    if (!isLoading) {
      try {
        const userObj = {  uid: authUser.uid, firstName: data.firstName, lastName: data.lastName}; 
        console.log(userObj)       
        await updateUser({...userObj}).unwrap();
        // reset();
      } catch (error) {
        console.log('Failed to update user')
      }
    }
    handleEnabled();
  };

  return (
    <MainDash>
      <form id="personalProfileForm" onSubmit={handleSubmit(onSubmit)}>
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
            name="currentPassword"
            type="password"
            placeholder="Current password"
            {...register('currentPassword')}
          />
          {/* <Label className="conf__pass-profile">Confirm Password</Label> */}
          <Input
            name="newPassword"
            type="password"
            placeholder="New password"
            {...register('newPassword')}
          />
          <Button>Change Password</Button>
         
        </CenterProfile>
      </form>
      <CenterArticle className="button__profile--container">
            {modifyInfo ? (
              // enables editing of name
              <Button className="modify__btn" type="button" onClick={(e) => {handleDisabled(e)}}>
                Modify
              </Button>
            ) : (              
              <Button className="modify__btn" form="personalProfileForm" type="submit" >
                Save
              </Button>
            )}
            {/* <Button type="submit">Save</Button> */}
          </CenterArticle>
    </MainDash>
  );
};

export default PersonalProfile;
