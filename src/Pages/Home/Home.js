import React from 'react'
import Button from '../../SharedAndUtils/Button'
import Contact from './Contact'

export default function Home() {
    return (
        <div>
            {/* banner  */}
            <div class="hero min-h-screen bg-[url('https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/bg.png')]">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className="flex-1"> <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/chair.png" class="max-w-sm rounded-lg shadow-2xl" /></div>
                    <div class='flex-1'>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6 capitalize">Hello Docs!This is Docs Portal. Find latest news and updates here!!</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
            {/* info  */}

            {/* testimonial */}

            {/* Contact */}
            <Contact />
        </div>
    )
}
