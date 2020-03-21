import React from 'react';

import SignIn from '../../components/sign-in/Sign-In';
import SignUp from '../../components/sign-up/SignUp';

import './Sign-In-and-Sign-Up.scss'

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;