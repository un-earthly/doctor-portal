import React from 'react'
import SetTitle from '../../SharedAndUtils/SetTitle'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from '../../SharedAndUtils/Social';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loading from '../../SharedAndUtils/Loading';
import useToken from '../../Hooks/useToken';
export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from.pathname
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    getValues
  } = useForm();

  const token = useToken(user)

  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
  };
  const [sendPasswordResetEmail, sending, forgetPassErr] = useSendPasswordResetEmail(auth);
  if (loading || sending) {
    return <progress className="progress w-56 mx-auto block"></progress>
  }
  if (token) {
    toast.success(user?.user?.displayName)
    // navigate(from || '/', { replace: true })
  }
  return (
    <div className='max-w-sm p-5 rounded-lg shadow-lg mx-auto space-y-5'>
      <SetTitle pageTitle='Login' />

      <form onSubmit={handleSubmit(onSubmit)} className='mx-auto space-y-5'>
        <h1 className='text-xl text-center'>Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input className="input w-full border shadow-none focus:outline-none border-gray-400" id='email' type='email' {...register("email", { required: true })} />
          {forgetPassErr && <span className="text-red-500">{forgetPassErr.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className="input w-full border shadow-none focus:outline-none border-gray-400" id='password' type={`text`} {...register("password", { required: true })} />
        </div>
        <p
          onClick={async () => {
            await sendPasswordResetEmail(JSON.stringify(getValues('email')).split('"').join(''));
          }}

        >Forgot Password ?</p>
        {error && <span className='text-red-500 mt-20'>{error.message}</span>}
        <input className='btn btn-accent w-full' type="submit" />
        <p className='text-center'>New to Doctors Portal?<Link to='/login/register' className="text-secondary">
          Create new account</Link></p>
      </form>
      <Social />
    </div>
  )
}
