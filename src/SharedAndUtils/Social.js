import React, { useEffect } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../firebase.init'

export default function Social() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user, from, navigate])


    if (loading) {
        return <progress className="progress w-56 mx-auto block"></progress>
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            <small className='text-red-500 text-center block mt-4'>{error && error.message}</small>
        </div>
    )
}
