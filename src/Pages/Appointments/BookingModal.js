import { format } from 'date-fns';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../SharedAndUtils/Loading';

export default function BookingModal({ appointment, date }) {
    const { name, slots } = appointment
    const { register, handleSubmit } = useForm();
    const [user, loading] = useAuthState(auth)
    const onSubmit = data => console.log(data);
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="flex items-center justify-between mb-10 font-bold">


                        <h2 className='text-xl'>{name}</h2>
                        <label for="bookingModal" className="btn btn-sm btn-circle">✕</label>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='mx-auto space-y-5'>
                        <fieldset disabled>
                            <input value={date} className="input w-full bg-gray-200" id='date' type='text' {...register("date", { required: true })} />
                        </fieldset>
                        <select className="select select-bordered w-full" {...register("slot")}>
                            {slots.map(slot => <option value={slot} key={slot}>{slot}</option>)}
                        </select>
                        <fieldset disabled>
                            <input className="input w-full bg-gray-200" value={user.email} id='email' type='email' {...register("email", { required: true })} />
                        </fieldset>
                        <fieldset disabled>
                            <input className="input w-full bg-gray-200" value={user.displayName} id='name' type='text' {...register("name", { required: true })} />
                        </fieldset>
                        <input className="input w-full border shadow-none focus:outline-none border-gray-300" placeholder='Phone Number' id='phone' type='tel' {...register("phone", { required: true })} />
                        <input className='btn btn-accent w-full' type="submit" />
                    </form>
                </div>
            </div>
        </div >
    )
}
