import React from 'react'

export default function InfoCard({ img, title, desc, classes }) {
    return (
        <div className={`${classes} w-full rounded-2xl flex items-center justify-center`}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg" alt={title} />
                <div className=' text-white'>
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="py-2">{desc}</p>
                </div>
            </div>
        </div>
    )
}
