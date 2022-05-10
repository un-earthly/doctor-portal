import React from 'react'

export default function InfoCard({ img, title, desc, classes }) {
    return (
        <div class={`${classes} rounded-2xl flex items-center justify-center`}>
            <div class="hero-content flex-col lg:flex-row">
                <img src={img} class="max-w-sm rounded-lg" />
                <div class=' text-white'>
                    <h1 class="text-2xl font-bold">{title}</h1>
                    <p class="py-2">{desc}</p>
                </div>
            </div>
        </div>
    )
}
