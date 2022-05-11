import React from 'react'
import Button from '../../SharedAndUtils/Button'

export default function AppointmentCard({ appointment }) {
    const { name, slots } = appointment;
    return (
        <div class="card lg:max-w-full shadow-md">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date.</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                {slots.length ?
                    <Button>Book Appointment</Button>
                    : <button disabled className='btn'>Book Appointment </button>
                }            </div>
        </div>
    )
}
