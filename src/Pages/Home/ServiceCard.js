import React from 'react'

export default function ServiceCard({ title, img, desc }) {
    return (
        <div class="card card-compact w-96 duration-500 hover:shadow-xl">
            <figure><img src={img} alt={title} /></figure>
            <div class="card-body">
                <h2 class="card-title justify-center">{title}</h2>
                <p className='text-center'>{desc}</p>
            </div>
        </div>
    )
}
