import React from 'react'
import SetTitle from '../../SharedAndUtils/SetTitle'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Social from '../../SharedAndUtils/Social';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
export default function Login() {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
  };
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    toast(user.user.email)
  }
  return (
    <div class='max-w-sm p-5 rounded-lg shadow-lg mx-auto space-y-5'>
      <SetTitle pageTitle='Login' />

      <form onSubmit={handleSubmit(onSubmit)} class='mx-auto space-y-5'>
        <h1 class='text-xl text-center'>Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input class="input w-full border shadow-none focus:outline-none border-gray-400" id='email' type='email' {...register("email", { required: true })} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input class="input w-full border shadow-none focus:outline-none border-gray-400" id='password' type={`text`} {...register("password", { required: true })} />
        </div>
        <p>Forgot Password ?</p>
        <input class='btn btn-accent w-full' type="submit" />
        <p class='text-center'>New to Doctors Portal?<Link to='/register' className="text-secondary">
          Create new account</Link></p>
      </form>
      <Social />
    </div>
  )
}
