import axios from "axios"
import { useEffect, useState } from "react"

export default function useToken(user) {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        const currentUser = { email }
        if (email) {
            axios.put(`http://localhost/user/${email}`, currentUser)
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    setToken(res.data.token)
                })
        }
    }, [user])
    return [token]
}
