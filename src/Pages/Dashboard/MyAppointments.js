import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

export default function MyAppointments() {
    const [appointments, setAppointments] = useState([])
    const [user] = useAuthState(auth)
    const patientEmail = user.email
    useEffect(() => {
        axios.get(`https://sheltered-cove-23713.herokuapp.com/byemail?patientEmail=${patientEmail}`)
            .then(res => {
                console.log(res)
                setAppointments(res.data)
            }
            )
    }, [patientEmail])

    return (
        <div>MyAppointments : {appointments.length}</div>
    )
}
