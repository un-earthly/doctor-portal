import React from 'react'

export default function Testimonials({ img, name, location, review }) {
    return (
        <div class="card p-5 shadow-md py-5">
            <p>{review}</p>
            <div class='max-h-max'>
                <div class="card-body items-center text-center">
                    <p>{location}</p>
                    <h2 class="card-title">{name}</h2>
                </div>
                <div >
                    <img src={img} alt="Shoes" class="border-secondary border rounded-full  w-16 h-16" />
                </div>
            </div>
        </div>
    )
}
