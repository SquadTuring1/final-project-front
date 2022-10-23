import { ErrorMessage } from '@hookform/error-message';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Popover } from 'react-tiny-popover';
import { getAuthUser } from '../../features/auth/authSlice';
import { MainDash, TitleH2, Input, CenterArticle, CenterProfile, TitleP, Button, ResponseMessage, } from '../../ui/index';
import auth from '../../utils/firebase/firebaseConfig';
import { updatePassword } from 'firebase/auth'
import { useUpdateUserMutation } from '../../features/api/apiSlice';
import FileUploader from './FileUploader';



const PersonalProfile = () => {
  const [modifyInfo, setModifyInfo] = useState(true);  // enable editing in fields
  const [ message, setMessage ] = useState({});
  
  
  // global state for auth and user query
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
        console.log(newUser)
        
        let response = await updateUser({...userObj}).unwrap();
        if (response.success) {
          setMessage({ success: 'User information updated successfully' })
        }
        reset();
      } catch (error) {
        console.log('Failed to update user')
        setMessage({ error: 'User information was not updated' })
      }
    }
    handleEnabled();
  };

  const changePassword = async () => {
    const newPassword = getValues().newPassword;
    console.log(newPassword)

    updatePassword(auth.currentUser, newPassword).then(() => {
      console.log('Update Successful')
      setMessage({success: 'Password updated successfully'})
    }).catch ((error) => {
      console.log('Error: ', error)
      setMessage({error: 'Password was not updated'})
    })
  
    
  }




  return (
    <MainDash>
      <form id="personalProfileForm" onSubmit={handleSubmit(onSubmit)}>
        <CenterProfile loginLab>
          <TitleH2 className="profile__title">Profile</TitleH2>
          
          {/* <Button><input accept="image/png,image/jpeg" id="avatar__input" type="file"  />Avatar</Button> */}
          <FileUploader>Hey</FileUploader>
          
          
          
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
        </CenterProfile>
      </form>
      <Button className="pass__btn" type="button" onClick={(e) => changePassword(e)}>Change Password</Button>
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
