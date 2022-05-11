import React from 'react'

export default function Testimonials({ img, name, location, review }) {
    return (
        <div class="card lg:p-5 px-5 w-full space-y-3 shadow-md py-5">
            <p>{review}</p>
            <div class='flex items-center lg:space-x-0 space-x-5'>
                <div class="avatar">
                    <div class="lg:w-16 w-12 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                </div>
                <div class="lg:card-body ">
                    <h2 class="card-title">{name}</h2>
                    <p>{location}</p>
                </div>

            </div>
        </div>
    )
}
