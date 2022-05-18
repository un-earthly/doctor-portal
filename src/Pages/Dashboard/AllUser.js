import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

export default function AllUser() {
    const { data: users, isLoading } = useQuery('users', () => axios.get('http://localhost/user'))

    if (isLoading) {
        return 'Loadin....'
    }
    console.log(users?.data)

    // const getUserData = async () => {
    //     const { data } = await axios.get('http://localhost/user')
    // }

    // getUserData()
    // return data
    return (
        <div>AllUser = {users.data.length}</div>
    )
}
