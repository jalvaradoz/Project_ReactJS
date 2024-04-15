import React from 'react'
import CancelButton from '../../buttons/CancelButton'

const UserOverlay = ({toggle}) => {
    return (
        <div id="logOverlay" className="logOverlay fixed top-0 left-0 w-full h-full z-50">
            <div id="logFormContainer" className="logFormContainer absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 py-8 px-9 md:px-28 rounded-3xl">
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
                        <CancelButton logic={toggle} title={'Close'}/>
                        <div className="flex flex-col items-center">
                            <p className="text-[.8rem] mb-3 text-[--black-50]">Don't have an account yet?</p>
                            <a href="" className="text-sm text-blue-400 hover:text-blue-700">Sign Up</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserOverlay