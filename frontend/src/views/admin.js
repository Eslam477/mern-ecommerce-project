import React from 'react'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useSignOut, useAuthUser } from 'react-auth-kit'
function _admin() {
    const AuthUserData = useAuthUser();
    const signOut = useSignOut();
    const navigate = useNavigate();
    const LogOut = () => {
        signOut()
        navigate('/')
    }
    return (
        <div className='text-center mt-5'>
            <h2>
                welcome to your Admin page
            </h2>
            <h4>hi {AuthUserData().userName}</h4>
            <button onClick={() => { LogOut() }}>LogOut</button>

        </div>
    )
}


export default _admin
