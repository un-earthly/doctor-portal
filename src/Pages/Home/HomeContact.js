import React from 'react'
import { toast } from 'react-toastify'
import Button from '../../SharedAndUtils/Button'

export default function Contact() {
    return (
        <div className="space-y-5 bg-[url('https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/appointment.png')] lg:p-5 p-2">
            <h1 className="text-primary text-center">Contact Us</h1>
            <h1 className="text-center text-4xl text-white">Stay connected with us</h1>
            <form className='flex items-center justify-center flex-col space-y-4' onSubmit={e => {
                e.preventDefault()
                e.target.email.value ?
                    toast("Successfull send ! We'll Get Back To You Soon")
                    : toast("Attempt failed.PLease fill up the form")
            }}>
                <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs" required />
                <input name='message' type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" required />
                <textarea className="textarea w-full max-w-xs" placeholder="Your message" required></textarea>
                <Button>Submit</Button>
            </form>
        </div>
    )
}
