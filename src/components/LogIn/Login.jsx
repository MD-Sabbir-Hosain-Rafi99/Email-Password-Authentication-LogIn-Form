import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router'
import { auth } from '../../firebase/firebase.init';

const Login = () => {

    const [errorlogin, setErrorLogin] = useState('');

     const handleLogin = event => {
            event.preventDefault();
            const email = event.target.email.value;
            const password = event.target.password.value;
            // console.log(email, password)
            setErrorLogin('')
            signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
                setErrorLogin(error.message);
            })
        }

    return (

        <div className="card bg-base-100 w-full max-w-sm m-auto mt-44 shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-4xl font-bold">Login now!</h1>
                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" 
                        name='email'
                        className="input" 
                        placeholder="Email" />
                        <label className="label">Password</label>
                        <input 
                        type="password" 
                        name='password'
                        className="input" 
                        placeholder="Password" />
                        {
                            errorlogin && <p className='text-red-500'>{errorlogin}</p>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p>New To Our Website? Please <Link className='text-blue-400 underline' to='/registration'>Registration</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default Login
