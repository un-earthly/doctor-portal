import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import SetTitle from '../../SharedAndUtils/SetTitle'
import Social from '../../SharedAndUtils/Social';

export default function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div class='max-w-sm p-5 rounded-lg shadow-lg mx-auto space-y-5'>
            <SetTitle pageTitle='Register' />

            <form onSubmit={handleSubmit(onSubmit)} class='mx-auto space-y-5'>
                <h1 class='text-xl text-center'>Sign Up</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input class="input w-full border shadow-none focus:outline-none border-gray-400" id='name' type='text' {...register("name", { required: true })} />
                </div>
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
                <p class='text-center'>Already a member?<Link to='/login' className="text-secondary">
                    Login now</Link></p>
            </form>
            <Social />
        </div>
    )
}
