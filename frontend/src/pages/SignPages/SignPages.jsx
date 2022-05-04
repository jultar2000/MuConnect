import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { register } from '../../actions/userActions'
import './SignPages.css'

const SignPages = () => {

    const nav = useNavigate();
    const [state, setState] = useState(true);

    const registerHandler = () => {
        const data = {
            'username': document.getElementById('username').value,
            'email': document.getElementById('email').value,
            'password': document.getElementById('password').value
        };
        register(data)
        navigate()
    }

    function navigate() {
        state ? nav("/login") : nav("/register")
        setState(!state)
    }

    return (
        <div className='main-container'>
            <div className='content-container'>
                <form className='sign-form'>

                    <label htmlFor='username' className='sign-label' >Username: </label>
                    <input id='username' className='sign-input' type='text' placeholder='username' />

                    {
                        state ?
                            <>
                                <label htmlFor='email' className='sign-label'>Email: </label>
                                <input id='email' className='sign-input' type='email' placeholder='email@email.com' />
                            </> : null
                    }

                    <label htmlFor='password' className='sign-label'>Password: </label>
                    <input id='password' className='sign-input' type='password' placeholder='···········' autoComplete='off' />

                    <input id='submit-button' type='submit' value={state ? 'Register' : 'Login'}
                            onClick={state ? registerHandler : null} />

                    <button id='nav-button' onClick={navigate}>
                        {
                            state ? 'Already have an account?' : "Don't have an account?"
                        }
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignPages;