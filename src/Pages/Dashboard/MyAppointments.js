import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

export default function MyAppointments() {
    const [appointments, setAppointments] = useState([])
    const [user] = useAuthState(auth)
    const patientEmail = user.email
    useEffect(() => {
        axios.get(`http://localhost/byemail?patientEmail=${patientEmail}`, {
            headers: {
                'authorization': `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                setAppointments(res.data)
            }
            )
    }, [patientEmail])

    return (
        <div>

            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment, i) => {
                            return <tr>
                                <th>{i + 1}</th>
                                <th>{appointment.date}</th>
                                <td>{appointment.slot}</td>
                                <td>{appointment.treatment}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
