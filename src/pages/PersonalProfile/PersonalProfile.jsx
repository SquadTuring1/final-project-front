import { ErrorMessage } from '@hookform/error-message';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Popover } from 'react-tiny-popover';
import { getAuthUser, userSignedIn } from '../../features/auth/authSlice';
import {
  MainDash,
  TitleH2,
  Input,
  CenterArticle,
  CenterProfile,
  TitleP,
  Button,
  ResponseMessage,
  PlaylistBigHeader,
} from '../../ui/index';
import auth from '../../utils/firebase/firebaseConfig';
import { updatePassword } from 'firebase/auth';
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from '../../features/api/apiSlice';
import FileUploader from './FileUploader';
import AvatarUpload from './AvatarUpload';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { nanoid } from '@reduxjs/toolkit';
import Navbar from '../../components/Navbar/index'


const PersonalProfile = () => {
  const dispatch = useDispatch();
  const [modifyInfo, setModifyInfo] = useState(true); // enable editing in fields
  const [message, setMessage] = useState({});

  // global state for auth and api for user query
  const authUser = useSelector(getAuthUser);
  const [updateUser, { isLoading, isError, error }] = useUpdateUserMutation();
  const { data } = useGetSingleUserQuery(authUser.uid);
  const formRef = useRef();
  // form settings
  const {
    getValues,
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: authUser.username,
      firstName: authUser.firstName,
      lastName: authUser.lastName,
      email: authUser.email,
      currentPassword: '',
      newPassword: '',
    },
  });

  // control modify & save btns
  const handleDisabled = (e) => {
    e.preventDefault();
    setModifyInfo(false);
  };

  const handleEnabled = () => {
    setModifyInfo(true);
  };

  // update user info to db
  const onSubmit = async (data) => {
    console.log(updateUser, isLoading);
    const canSave =
      [data.firstName, data.lastName, data.username].every(Boolean) &&
      !isLoading;
    if (canSave && !isLoading) {
      try {
        const userObj = {
          uid: authUser.uid,
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
        };
        await updateUser({ ...userObj }).unwrap();
        formRef.current.reset();
        dispatch(userSignedIn({ ...authUser, ...userObj }));
        toast.success('User updated successfully!', { toastId: nanoid() });
      } catch (error) {
        console.log('Failed to update user');
        toast.error('User was not updated', { toastId: nanoid() });
      }
    }
    handleEnabled();
  };

  // change update pw to firebase
  const changePassword = async () => {
    const newPassword = getValues().newPassword;
    console.log(newPassword);

    updatePassword(auth.currentUser, newPassword)
      .then(() => {
        console.log('Update Successful');
        toast.success('Password updated successfully!', { toastId: nanoid() });
      })
      .catch((error) => {
        console.log('Error: ', error);
        toast.error('Password was not updated', { toastId: nanoid() });
      });
  };

  return (
    <>
    <Navbar />
    <MainDash>
      <form
        id="personalProfileForm"
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <CenterProfile loginLab>
          <PlaylistBigHeader className="profile__title">Profile</PlaylistBigHeader>
          {/* <Button><input accept="image/png,image/jpeg" id="avatar__input" type="file"  />Avatar</Button> */}
          {/* <FileUploader buttonName="Avatar"></FileUploader> */}

          {/* <Label className="name__profile">Name</Label> */}
          <Input
            disabled={modifyInfo === true ? true : false}
            className="info__user--input"
            name="firstName"
            type="text"
            placeholder="First name"
            {...register('firstName')}
          />

          {/* <Label className="lastname__profile">Lastname</Label> */}
          <Input
            disabled={modifyInfo === true ? true : false}
            className="info__user--input"
            name="lastName"
            type="text"
            placeholder="Last name"
            {...register('lastName')}
          />
                            {modifyInfo ? (
          // enables editing of name
          <Button
            className="modify__btn"
            type="button"
            onClick={(e) => {
              handleDisabled(e);
            }}
          >
            Modify
          </Button>
          
        ) : (
          <Button
            style={{color:'#fff', border:'1px solid #fff'}}
            className="modify__btn"
            form="personalProfileForm"
            type="submit"
          >
            Save
          </Button>
        )}
        
          <AvatarUpload />
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
      <Button
        className="pass__btn"
        type="button"
        onClick={(e) => changePassword(e)}
      >
        Change Password
      </Button>

      <CenterArticle className="button__profile--container">
        {/* {modifyInfo ? (
          // enables editing of name
          <Button
            className="modify__btn"
            type="button"
            onClick={(e) => {
              handleDisabled(e);
            }}
          >
            Modify
          </Button>
        ) : (
          <Button
            className="modify__btn"
            form="personalProfileForm"
            type="submit"
          >
            Save
          </Button>
        )} */}
        {/* <Button type="submit">Save</Button> */}
      </CenterArticle>
    </MainDash>
    </>
  );
};

export default PersonalProfile;
