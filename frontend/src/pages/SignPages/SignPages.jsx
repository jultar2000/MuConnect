import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { register } from '../../actions/userActions'
import './SignPages.css'

const SignPages = () => {

    const nav = useNavigate();
    const location = useLocation()
    const is_register = location.pathname === '/register'

    const registerHandler = () => {
        const data = {
            'username': document.getElementById('username').value,
            'email': document.getElementById('email').value,
            'password': document.getElementById('password').value
        };
        register(data)
        navigate()
    }

    // useEffect(() => {
    //     is_register ? setState(true): setState(false)
    // }, [location]);

    function navigate() {
        is_register ? nav("/login") : nav("/register")
    }

    return (
        <div className='main-container'>
            <div className='content-container'>
                <form className='sign-form'>

                    <label htmlFor='username' className='sign-label' >Username: </label>
                    <input id='username' className='sign-input' type='text' placeholder='username' />

                    {
                        is_register ?
                            <>
                                <label htmlFor='email' className='sign-label'>Email: </label>
                                <input id='email' className='sign-input' type='email' placeholder='email@email.com' />
                            </> : null
                    }

                    <label htmlFor='password' className='sign-label'>Password: </label>
                    <input id='password' className='sign-input' type='password' placeholder='···········' autoComplete='off' />

                    <input id='submit-button' type='submit' value={is_register ? 'Register' : 'Login'}
                        onClick={is_register ? registerHandler : null} />

                    <button id='nav-button' onClick={navigate}>
                        {
                            is_register ? 'Already have an account?' : "Don't have an account?"
                        }
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignPages;