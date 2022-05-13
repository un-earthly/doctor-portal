import React, { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import SetTitle from '../../SharedAndUtils/SetTitle'
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import axios from 'axios';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';
import Footer from '../../SharedAndUtils/Footer';
export default function Appointment() {
    const [date, setDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        axios.get('https://sheltered-cove-23713.herokuapp.com/appointment')
            .then(res => setAppointments(res.data))


    }, [])
    return (
        <div>

            <SetTitle pageTitle='Appointment' />
            {/* banner  */}

            <div className="lg:hero min-h-screen bg-[url('https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/bg.png')]">
                <div className="lg:hero-content w-full flex-col lg:flex-row-reverse">
                    <div className="lg:flex-1"> <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/chair.png" alt='doctors chair' className="max-w-sm rounded-lg shadow-2xl w-full" /></div>
                    <div className='lg:flex-1 flex items-center justify-center flex-col'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate} />
                    </div>
                </div>
            </div>

            {/* available appointments */}
            <div className='py-10'>
                <h1 className="text-secondary text-center font-semibold">You'll be meeting us on {format(date, 'PP')}</h1>

                <div className="grid gid-cols-1 lg:grid-cols-3 lg:my-24 gap-4 lg:px-4">
                    {
                        appointments.map(appointment => <AppointmentCard treatment={setTreatment} key={appointment._id} appointment={appointment} />)
                    }
                </div>
                {treatment && <BookingModal date={format(date, 'PP')} appointment={treatment} ></BookingModal>}
            </div>


            <Footer />
        </div>

    )
}
