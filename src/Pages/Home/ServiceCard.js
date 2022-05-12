import React from 'react'

export default function ServiceCard({ title, img, desc }) {
    return (
        <div className="card card-compact lg:w-96 duration-500 shadow-md mt-3 hover:shadow-xl">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{title}</h2>
                <p className='text-center'>{desc}</p>
            </div>
        </div>
    )
}
