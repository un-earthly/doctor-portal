import React from 'react'
import SetTitle from '../../SharedAndUtils/SetTitle'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Social from '../../SharedAndUtils/Social';

export default function Login() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div class='max-w-sm p-5 rounded-lg shadow-lg mx-auto space-y-5'>
      <SetTitle pageTitle='Login' />

      <form onSubmit={handleSubmit(onSubmit)} class='mx-auto space-y-5'>
        <h1 class='text-xl text-center'>Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input class="input w-full border shadow-none focus:outline-none border-gray-400" id='email' type='text' {...register("email", { required: true })} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input class="input w-full border shadow-none focus:outline-none border-gray-400" id='password' type={`text`} {...register("password", { required: true })} />
        </div>
        <p>Forgot Password ?</p>
        {errors.exampleRequired && <span class='text-red-500'>This field is required</span>}
        <input class='btn btn-accent w-full' type="submit" />
        <p class='text-center'>New to Doctors Portal?<Link to='/register' className="text-secondary">
          Create new account</Link></p>
      </form>
      <Social />
    </div>
  )
}
