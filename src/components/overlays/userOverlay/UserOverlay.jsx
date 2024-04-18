import React from 'react'
import { Link } from 'react-router-dom'

const UserOverlay = ({toggle}) => {
    return (
        <div id="logOverlay" className="logOverlay fixed top-0 left-0 w-full h-full z-50">
            <div id="logFormContainer" className="logFormContainer bg-[--black-600] dark:bg-[--black-900] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 py-8 px-9 md:px-28 rounded-3xl">
                <form id="loginForm">
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-center font-medium text-3xl mb-3 text-[--black-50]">Log In</h2>
                        <div className="logContainer relative">
                            <input className="w-[250px] h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="text" id="username" name="username" required autoComplete="username"/>
                            <label htmlFor="username" className="absolute top-[.4rem] left-3 text-lg">User Name or E-mail</label>
                        </div>
                        <div className="logContainer relative mb-5">
                            <input className="w-[250px] h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="password" id="password" name="password" required />
                            <label htmlFor="password" className="absolute top-[.4rem] left-3 text-lg">Password</label>
                        </div>
                        <button className="text-xl mainBtn" type="button" id="loginButton">Login</button>
                        <button type="button" className="cancelBtn rounded-3xl" onClick={toggle}><span className="text">Close</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                        <div className="flex flex-col items-center">
                            <p className="text-[.8rem] mb-3 text-[--black-50]">Don't have an account yet?</p>
                            <Link to={'/sign-up'} className='text-sm text-blue-400 hover:text-blue-700'>Sign Up</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserOverlay