import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { resume } from 'react-dom/server';
import { auth } from '../../firebase/firebase.init';
import { Link } from 'react-router';

const Registration = () => {

    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log("Clicked", email);
        console.log("Clicked", password);


        setSucess(false);
        setError('');

        if(!terms){
            setError('Please accept our terms and conditions');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password, terms)
            .then(result => {
                console.log(result.user)
                setSucess(true);
                e.target.reset();
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
            })
    }

    const handleShowPassWord = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <form onSubmit={handleFormSubmit}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Registration now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        className="input" placeholder="Password" />
                                    <button onClick={handleShowPassWord} className="btn btn-xs absolute top-2 right-5">{
                                        showPassword ? "Eye Open" : "Eye Close"
                                    }</button>
                                </div>
                                <div className="">
                                    <fieldset className="fieldset">
                                        <label className="label">
                                            <input 
                                            type="checkbox" 
                                            name='terms'
                                            className="checkbox" />
                                            Accept Our Terms & Conditions <Link className='text-blue-400 underline' 
                                            to='/privecy'>Privecy & Plicy</Link>
                                        </label>
                                    </fieldset>
                                </div>

                                <button className="btn btn-neutral mt-4">Sign Up</button>
                            </fieldset>
                            {
                                sucess && <p className='text-green-500'>Account Created Successfully!</p>
                            }
                            {
                                error && <p className='text-red-500'>{error}</p>
                            }
                            <p>Already have an account? Please <Link className='text-blue-400 underline' to='/login'>Login</Link> </p>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Registration
