import React from 'react'
import SignIn from '../../components/sign-in/SignIn'
import SignUpp from '../../components/signUp/SignUpp'
import './sign-page.scss'

export default function SignUp() {
    return (
        <div className='sign-page'>
        <SignIn/>
        <SignUpp/>
        </div>
    )
}
