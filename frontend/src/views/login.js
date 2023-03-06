import React, { useState } from 'react';
import { useSignIn } from "react-auth-kit";
import { loginFun } from '../functions/auth';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const singIn = useSignIn()
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <div>
                <input type="text" onChange={(e) => { setUserName(e.target.value) }} placeholder='User' />
                <input type="text" onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
                <button onClick={() => { loginFun(userName, password, singIn, navigate) }}> Login </button>
            </div>
        </div>
    );
}

export default Login;
