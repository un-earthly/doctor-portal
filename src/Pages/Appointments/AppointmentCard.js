import React from 'react'

export default function AppointmentCard({ appointment, treatment }) {
    const { name, slots } = appointment;
    return (
        <div className="card lg:max-w-full shadow-md">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date.</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'Booking Slots' : 'Booking Slot'} available</p>
                <label onClick={() => treatment(appointment)} htmlFor="bookingModal" disabled={slots.length === 0} className="btn text-white 'bg-gradient-to-l from-primary to-secondary">open modal</label>
            </div>
        </div>
    )
}
