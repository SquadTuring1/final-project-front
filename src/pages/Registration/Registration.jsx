import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import "../../ui/Registration.styled.css";
import React from 'react'



const Registration = () => {
  
  const { 
    getValues,
    register, 
    watch,
    handleSubmit, 
    formState: { errors} } = useForm( { defaultValues: {
      email: '',
      username: '',
      password: '',
    }} );

  const onSubmit = (data) => {
    console.log(data);
  }


  return (
    <>
    <div className="registration">
      <form className="registration__form" onSubmit={handleSubmit(onSubmit)}>
        <h1>My Profile</h1>
        <article className="registration__item">
          <label htmlFor="email">Email:</label>
          <input
            className="signup__input"
            name="email"
            // label="Email:"
            type="email"
            placeholder="email"            
            {...register("email", {
              required: 'Email is required'
            }) }
          />
          <ErrorMessage errors={errors} name="email" as="p" />
          </article>
        <article className="registration__item">
          <label htmlFor="username">Username:</label>
          <input
            className="signup__input"
            name="username"
            // label="Username:"
            type="text"
            placeholder="username"
            {...register("username", {
              required: 'Username is required'
            }) }
          />
          <ErrorMessage errors={errors} name="username" as="p" />
        </article>
        <article className="registration__item">
          <label htmlFor="password">Password:</label>
          <input
            className="signup__input"
            name="password"
            label="Password:"
            type="text"
            placeholder="password"            
            {...register("password", {
              required: 'Password is required'
            }) }
          />
        </article>        
        <article className="registration__item">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className="signup__input"
            name="confirmPassword"
            label="Confirm Password:"
            type="text"
            placeholder="confirm password"
            {...register("confirmPassword", {
              validate: (value) => {
                value === getValues("password");
                }
              })}
          />
          <ErrorMessage errors={errors} name="password" as="p" />
        </article>
        <div>
          <button className="signup__btn" type="submit">Save</button>
        </div>
      </form>
    </div>
    </>
  )
}



export default Registration;
