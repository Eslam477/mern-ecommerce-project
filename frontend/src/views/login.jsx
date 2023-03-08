import React, { useState } from 'react';
import { useSignIn } from "react-auth-kit";
import { loginFun } from '../functions/auth';
import { useNavigate, Link } from "react-router-dom";
import BG from '../component/bg/bg_stars';
import '../style/auth.css';

const Login = () => {
    const singIn = useSignIn()
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='container-fluid auth_container'>
            <BG />
            <div className='auth_form'>
                <h4>Hi, login here now</h4>
                <input type="text" className='form-control' onChange={(e) => { setUserName(e.target.value) }} placeholder='User' />
                <input type="text" className='form-control' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
                <button className='btn w-100' onClick={() => { loginFun(userName, password, singIn, navigate) }}> Login </button>
                <p>Go to <Link to='/'>Home Page</Link> or let's <Link to='/reg'>Sign Up</Link> now</p>
            </div>
        </div>
    );
}

export default Login;
