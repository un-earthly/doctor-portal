import React from 'react'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import SetTitle from '../../SharedAndUtils/SetTitle'
import Social from '../../SharedAndUtils/Social';

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateProfileErr] = useUpdateProfile(auth);
    const [token] = useToken(user)
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
    };

    if (error || updateProfileErr) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading || updating) {
        return <progress className="progress w-56 mx-auto block"></progress>
    }
    if (token) {
        toast(user.user?.displayName)
        // navigate('/')
    }
    return (
        <div className='max-w-sm p-5 rounded-lg shadow-lg mx-auto space-y-5'>
            <SetTitle pageTitle='Register' />

            <form onSubmit={handleSubmit(onSubmit)} className='mx-auto space-y-5'>
                <h1 className='text-xl text-center'>Sign Up</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input className="input w-full border shadow-none focus:outline-none border-gray-400" id='name' type='text' {...register("name", { required: true })} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input className="input w-full border shadow-none focus:outline-none border-gray-400" id='email' type='text' {...register("email", { required: true })} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className="input w-full border shadow-none focus:outline-none border-gray-400" id='password' type={`text`} {...register("password", { required: true })} />
                </div>
                <p>Forgot Password ?</p>
                {errors.exampleRequired && <span className='text-red-500'>This field is required</span>}
                <input className='btn btn-accent w-full' type="submit" />
                <p className='text-center'>Already a member?<Link to='/login' className="text-secondary">
                    Login now</Link></p>
            </form>
            <Social />
        </div>
    )
}
