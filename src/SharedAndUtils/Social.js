import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'

export default function Social() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    return (
        <div>
            <div class="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
        </div>
    )
}
