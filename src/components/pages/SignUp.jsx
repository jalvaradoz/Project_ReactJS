import React from 'react'
import { motion } from 'framer-motion'

const SignUp = () => {
    return (
        <motion.div
        initial={{opacity:0, scale:.3, transition:{duration:.2}}} 
        animate={{opacity:1, scale:1, transition:{duration:1}}} 
        exit={{opacity:0, transition:{duration:.5}}}
        >
            <div className="pl-3 mt-20">
                <h1 className="text-3xl md:text-6xl title">Sign Up</h1>
            </div>
            <section className="my-20">
                <div className="flex justify-center w-full">
                    <form action=''>
                        <div className="flex flex-col justify-center items-center gap-6 h-fit w-full rounded-3xl bg-[--black-300] dark:bg-[--black-800] py-10">
                            <h2 className="text-left text-wrap px-5 text-lg md:text-3xl">Please enter what will be your user name and password.</h2>
                            <p className="mb-2" id="signConditions">Enter user name without inner spaces and password needs to be 8-16 characters long <br/> And at least 2 letters (1 uppercase and 1 lowercase), 1 number and 1 special character.</p>
                            <div className="flex gap-5 mb-5">
                                <div className="logContainer relative">
                                    <input className="w-96 h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="text" id="registerUserName" name="name" required autoComplete="name" />
                                    <label htmlFor="registerUserName" className="absolute top-[.4rem] left-3 text-lg">User Name</label>
                                    <p className="text-red-500 text-center hidden" id="userDont">User Name can't be blank</p>
                                </div>
                                <div className="logContainer relative">
                                    <input className="w-96 h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="password" id="registerPassword" name="password" required />
                                    <label htmlFor="registerPassword" className="absolute top-[.4rem] left-3 text-lg">Password</label>
                                    <p className="text-red-500 text-center hidden" id="passMeet">Password doesn't meet the conditions</p>
                                </div>
                            </div>
                            <div className="logContainer relative mb-6">
                                <input className="w-96 h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="password" id="confirmPassword" name="password" required />
                                <label htmlFor="confirmPassword" className="absolute top-[.4rem] left-3 text-lg">Confirm Password</label>
                                <p className="text-red-500 text-center hidden" id="passEqual">Password doesn't match</p>
                            </div>
                            <h2 className="px-5 text-3xl">Now enter your email address</h2>
                            <div className="flex gap-5 mb-5">
                                <div className="logContainer relative">
                                    <input className="w-96 h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="text" id="registerMail" name="email" required autoComplete="email" />
                                    <label htmlFor="registerMail" className="absolute top-[.4rem] left-3 text-lg">E-mail</label>
                                    <p className="text-red-500 text-center hidden" id="mailMeet">E-mail doesn't meet the format</p>
                                </div>
                                <div className="logContainer relative">
                                    <input className="w-96 h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="text" id="confirmMail" name="email" required autoComplete="email" />
                                    <label htmlFor="confirmMail" className="absolute top-[.4rem] left-3 text-lg">Confirm E-mail</label>
                                    <p className="text-red-500 text-center hidden" id="mailEqual">E-mail doesn't match</p>
                                </div>
                            </div>
                            <button className="text-xl mainBtn" type="button" id="submitSignUP">Sign Up</button>
                        </div>
                    </form>
                </div>
            </section>
        </motion.div>
    )
}

export default SignUp