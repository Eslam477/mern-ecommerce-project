import React, { useState } from 'react';
import { registerFun } from '../functions/auth';
const Reg = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <div>
                <input type="text" onChange={(e) => { setUserName(e.target.value) }} placeholder='User' />
                <input type="text" onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
                <button onClick={() => { registerFun(userName, password) }}> Register </button>
            </div>
        </div>
    );
}

export default Reg;
