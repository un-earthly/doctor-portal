import { format } from 'date-fns';
import React from 'react'
import { useForm } from 'react-hook-form';

export default function BookingModal({ appointment, date }) {
    const { name, slots } = appointment
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.table(data);
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
                        <input value={date} className="input w-full border shadow-none focus:outline-none border-gray-300" placeholder='' id='date' disabled type='text' />
                        <select className="select select-bordered w-full" {...register("slot", { required: true })}>
                            {slots.map(slot => <option value={slot} key={slot}>{slot}</option>)}
                        </select>
                        <input className="input w-full border shadow-none focus:outline-none border-gray-300" placeholder='Full Name' id='name' type='text' {...register("name", { required: true })} />
                        <input className="input w-full border shadow-none focus:outline-none border-gray-300" placeholder='Phone Number' id='phone' type='tel' {...register("phone", { required: true })} />
                        <input className="input w-full border shadow-none focus:outline-none border-gray-300" placeholder='Email' id='email' type='text' {...register("email", { required: true })} />

                        <input className='btn btn-accent w-full' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
