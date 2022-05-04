import React from 'react'
import { useNavigate } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {
    const nav = useNavigate()
    const loginNavigate = () => {
        nav('/login')
    }
    const registerNavigate = () => {
        nav('/register')
    }

    return (
        <div className='home-container'>
            <div className='buttons-container'>
                <button className='main-button' id='register-button' onClick={registerNavigate}>Register</button>
                <button className='main-button' id='login-button' onClick={loginNavigate}>Login</button>
            </div>
        </div>
    );
}

export default HomePage;