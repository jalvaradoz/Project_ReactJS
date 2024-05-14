import React, { useContext, useState } from 'react'

import { Link } from 'react-router-dom'

import { SweetAlert } from '../../../context/SweetAlert'
import { userAuth } from '../../../context/AuthContext'

const UserOverlay = ({toggle}) => {

    const { Modal } = useContext(SweetAlert)
    const { doSignInWithEmailAndPassword, doSignInWithGoogle  } = useContext(userAuth)

    const [logForm, setLogForm] = useState({
        email: '',
        password: '',
    })

    const handleChangeInput = (event)=>{
        setLogForm({...logForm, [event.target.name] : event.target.value})
    }

    const cleanForm = ()=>{
        setLogForm({email:'', password:''})
    }

    const logIn = async(e)=>{
        e.preventDefault()
        try {
            const currentUser = await doSignInWithEmailAndPassword(logForm.email,logForm.password)
            toggle()
            cleanForm()
            await Modal.fire({
                title: 'Log In successful',
                text: `Welcome ${currentUser.email} !`,
                icon: 'success',
                showCancelButton: false,
                confirmButtonText: `Let's shop`
            })
        } catch (error) {
            await Modal.fire({
                title: 'Error !',
                text: `${error.message}`,
                icon: 'error',
                showCancelButton: false,
                confirmButtonText: `Ok, I'll try again`
            })
        }
        
    }

    const onGoogleSignIn = async(e)=>{
        e.preventDefault()
        try {
            const currentUser = await doSignInWithGoogle()
            toggle()
            await Modal.fire({
                title: 'Log In successful !',
                text: `Welcome ${currentUser.displayName} !`,
                icon: 'success',
                showCancelButton: false,
                confirmButtonText: `Let's shop`
            })
        } catch (error) {
            await Modal.fire({
                title: 'Error !',
                text: `${error}`,
                icon: 'error',
                showCancelButton: false,
                confirmButtonText: `Ok, I'll try again`
            })
        }
    }

    return (
        <div id="logOverlay" className="logOverlay fixed top-0 left-0 w-full h-full z-50">
            <div id="logFormContainer" className="logFormContainer bg-[--black-600] dark:bg-[--black-900] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 py-8 px-9 md:px-28 rounded-3xl">
                <form onSubmit={logIn}>
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-center font-medium text-3xl mb-3 text-[--black-50]">Log In</h2>
                        <div className="logContainer relative">
                            <input value={logForm.email} onChange={handleChangeInput} className="w-[250px] h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="text" id="email" name="email" required autoComplete="email"/>
                            <label htmlFor="email" className="absolute top-[.4rem] left-3 text-lg">E-mail</label>
                        </div>
                        <div className="logContainer relative mb-5">
                            <input value={logForm.password} onChange={handleChangeInput} className="w-[250px] h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="password" id="password" name="password" required />
                            <label htmlFor="password" className="absolute top-[.4rem] left-3 text-lg">Password</label>
                        </div>
                        <button className="text-xl mainBtn" type="submit">Login</button>
                        <button type="button" className="cancelBtn px-[73px]" onClick={toggle}><span className="text">Close</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                        <div className='flex flex-row text-center w-full'>
                            <div className='border-b-2 mb-2.5 mr-2 w-full'></div>
                            <div className='text-sm w-fit'>OR</div>
                            <div className='border-b-2 mb-2.5 ml-2 w-full'></div>
                        </div>
                        <button 
                            onClick={(e) => { onGoogleSignIn(e) }}
                            className={`w-full flex items-center justify-center gap-x-3 py-2.5 border-2 rounded-3xl text-sm transition duration-300 hover:bg-gray-100 active:bg-gray-100 active:scale-95 dark:hover:bg-[--black-500] dark:active:bg-[--black-600]`}
                        >
                            <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_17_40)">
                                    <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                    <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                    <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                    <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_40">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Continue with Google
                        </button>
                        <div className="flex flex-col items-center">
                            <p className="text-[.8rem] mb-3 text-[--black-50]">Don't have an account yet?</p>
                            <Link to={'/sign-up'} onClick={toggle} className='text-sm text-blue-400 hover:text-blue-700 duration-200'>Sign Up</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserOverlay