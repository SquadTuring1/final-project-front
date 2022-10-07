import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import React from 'react'

const PersonalProfile = () => {

  const { 
    register, 
    handleSubmit, 
    formState: { errors} } = useForm( {defaultValues: {
        email: email,
        username: username,
        password: password,
    }} );

  const saveProfileInfo = (data) => {
    console.log(data);
  }


  return (
    <>
    <form className="task__form" onSubmit={handleSubmit(saveProfileInfo)}>
      <h1>My Profile</h1>
      <div>
        
        
        <article>
          <Input
            className="personal-profile__input"
            label="Email:"
            type="email"
            placeholder=""
            {...register("email", {
              required: 'Email is required'
            }) }
          />
          <ErrorMessage errors={errors} name="email" as="p" />
        </article>
        <article>
          <Input
            className="personal-profile__input"
            label="Username:"
            type="text"
            placeholder=""
            {...register("username", {
              required: 'Username is required'
            }) }
          />
          <ErrorMessage errors={errors} name="username" as="p" />
        </article>
        <article>
          <Input
            className="personal-profile__input"
            label="Password:"
            type="text"
            placeholder=""
            {...register("password", {
              required: 'Password is required'
            }) }
          />
          <ErrorMessage errors={errors} name="password" as="p" />
        </article>
      </div>
      <div>
        <button className="personal-profile__btn" type="submit">Save</button>
      </div>
    </form>
    </>
  )
}

export default PersonalProfile