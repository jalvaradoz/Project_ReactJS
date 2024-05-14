import React, { useState, useContext } from 'react'

import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import { validateSignUpForm } from '../utils/validationYup'

import { SweetAlert } from '../context/SweetAlert'
import { userAuth } from '../context/AuthContext'

const SignUp = () => {

    const { Modal } = useContext(SweetAlert)

    const { doCreateUserWithEmailAndPassword, updateUserInfo, userMod } = useContext(userAuth)

    const [errorMsg, setErrorMsg] = useState('')

    const [signUpForm, setSignUpForm] = useState({
        userName: '',
        password: '',
        confirmedPassword:'',
        email:'',
        confirmedEmail:'',
    })

    const handleChangeSignInput = (event)=>{
        setSignUpForm({...signUpForm, [event.target.name] : event.target.value})
    }

    const verifyPassword = ()=>{
        if(signUpForm.password !== signUpForm.confirmedPassword){
            setErrorMsg('Passwords must match')
            return false
        }else if(signUpForm.password === signUpForm.confirmedPassword){
            setErrorMsg('')
            return true
        }
    }

    const verifyEmail = ()=>{
        if(signUpForm.email !== signUpForm.confirmedEmail){
            setErrorMsg('Emails must match')
            return false
        }else if(signUpForm.email === signUpForm.confirmedEmail){
            setErrorMsg('')
            return true
        }
    }

    const navigate = useNavigate()

    const signUp = async(e)=>{
        e.preventDefault()
        verifyPassword()
        verifyEmail()
        if(verifyPassword && verifyEmail){
            const res = await validateSignUpForm(signUpForm)
    
            if(res.status === 'Success'){
                try {
                    await doCreateUserWithEmailAndPassword(signUpForm.email, signUpForm.password, signUpForm.userName)
                    await Modal.fire({
                        title: 'Account created successfully',
                        text: 'You are signed in now',
                        icon: 'success',
                        showCancelButton: false,
                        showConfirmButton: false,
                        timer: 3500,
                        timerProgressBar: true,
                    })
                    navigate('/')
                } catch (error) {
                    await Modal.fire({
                        title: 'An error occurred',
                        text: `We couldn't create your account, ${error}`,
                        icon: 'error',
                        showCancelButton: false,
                    })
                    return
                }
            }else{
                setErrorMsg(res.error)
            }
        }
    }

    return (
        <>
            <Helmet>
                <title>Alter Jewelry | Sign up</title>
                <meta name='description' content='Please sign up for a better experience. Explore the history of our company and how it became what it is today. Each piece is meticulously handcrafted with vegan and eco-friendly materials. Dive into our universe of unique and sustainable design where beauty meets ethics. Welcome to a world where distinction is eco-friendly!'/>
            </Helmet>
            <motion.div
            initial={{opacity:0, scale:.3, transition:{duration:.2}}} 
            animate={{opacity:1, scale:1, transition:{duration:1}}} 
            exit={{opacity:0, transition:{duration:.5}}}
            >
                <div className="pl-3 mt-14">
                    <h1 className="text-3xl md:text-6xl title">Sign Up</h1>
                </div>
                <section className="my-10 w-full flex justify-evenly">
                    <div className="w-[90%] lg:w-[50%]">
                        <form onSubmit={signUp}>
                            <div className="flex flex-wrap justify-center items-center gap-6 h-fit w-full rounded-3xl bg-[--black-300] dark:bg-[--black-800] py-10">
                                <h2 className="text-left font-bold text-wrap px-5 text-lg md:text-3xl">Please enter what will be your user name and password.</h2>
                                <div className="flex flex-wrap gap-10 my-3 justify-evenly">
                                    <div className="logContainer relative">
                                        <input value={signUpForm.userName} onChange={handleChangeSignInput} className="w-64 lg:w-96 h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="text" id='registerUserName' name="userName" required autoComplete="name" />
                                        <label htmlFor="registerUserName" className="absolute top-[.4rem] left-3 text-lg">User Name</label>
                                    </div>
                                    <div className="logContainer relative">
                                        <input onBlur={verifyPassword} onChange={handleChangeSignInput} className={` w-64 lg:w-96 h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4`} type="text" value={signUpForm.password} id="registerPassword" name="password" required />
                                        <label htmlFor="registerPassword" className="absolute top-[.4rem] left-3 text-lg">Password</label>
                                    </div>
                                    <div className="logContainer relative">
                                        <input onBlur={verifyPassword} onChange={handleChangeSignInput} className="w-64 lg:w-96 h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="text" value={signUpForm.confirmedPassword} id="confirmPassword" name="confirmedPassword" required />
                                        <label htmlFor="confirmPassword" className="absolute top-[.4rem] left-3 text-lg">Confirm Password</label>
                                    </div>
                                </div>
                                <h2 className="px-5 text-3xl mb-3">Now enter your email address</h2>
                                <div className="flex flex-wrap gap-10 mb-5 justify-evenly">
                                    <div className="logContainer relative">
                                        <input onBlur={verifyEmail} onChange={handleChangeSignInput} className="w-64 lg:w-96 h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="email" value={signUpForm.email} id="registerMail" name="email" required autoComplete="email" />
                                        <label htmlFor="registerMail" className="absolute top-[.4rem] left-3 text-lg">E-mail</label>
                                    </div>
                                    <div className="logContainer relative">
                                        <input onBlur={verifyEmail} onChange={handleChangeSignInput} className="w-64 lg:w-96 h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="email" value={signUpForm.confirmedEmail} id="confirmedEmail" name="confirmedEmail" required />
                                        <label htmlFor="confirmedEmail" className="absolute top-[.4rem] left-3 text-lg">Confirm E-mail</label>
                                    </div>
                                </div>
                                {
                                    errorMsg !== '' &&

                                    <p className="text-red-500 text-center w-full">{errorMsg}</p>
                                }
                                <div className='w-full flex justify-center'>
                                    <button className="text-xl mainBtn" type="submit">Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default SignUp