import axios from 'axios';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../SharedAndUtils/Loading';

export default function BookingModal({ appointment, date }) {
    const { name, slots, _id } = appointment
    const { register, handleSubmit } = useForm();
    const [user, loading] = useAuthState(auth)
    const onSubmit = data => {
        const { slot, phone } = data;
        const bookingData = {
            treatementId: _id,
            treatment: name,
            date,
            slot,
            phone,
            patientEmail: user.email,
            patientName: user.displayName,

        }
        axios.post('http://localhost/booking', bookingData)
            .then(res => {
                res.data.success ?
                    toast.success(`Your Appointment Has been set on  ${date} at ${slot}`)
                    : toast.error(`couldnt set your appointment on ${date} at ${slot}`)
                console.log()
            })
    };
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
                        <label htmlFor="bookingModal" className="btn btn-sm btn-circle">✕</label>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='mx-auto space-y-5'>
                        <input value={date} className="input w-full " id='date' disabled type='text' />
                        <select className="select select-bordered w-full" {...register("slot")}>
                            {slots.map(slot => <option value={slot} key={slot}>{slot}</option>)}
                        </select>
                        <input className="input w-full " disabled value={user.email} id='email' type='email' />
                        <input className="input w-full " disabled value={user.displayName} id='name' type='text' />
                        <input className="input w-full border shadow-none focus:outline-none border-gray-300" placeholder='Phone Number' id='phone' type='tel' {...register("phone", { required: true })} />
                        <input className='btn btn-accent w-full' type="submit" />
                    </form>
                </div>
            </div>
        </div >
    )
}
