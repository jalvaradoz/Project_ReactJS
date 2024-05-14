import React, { useContext, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { EmailAuthProvider } from 'firebase/auth'

import { userAuth } from '../context/AuthContext'
import { SweetAlert } from '../context/SweetAlert'
import useLoading from '../hooks/useLoading'

const UserAccount = () => {

    const { userParam } = useParams()
    const navigate = useNavigate()

    const { currentUser, doDeleteUser, updateUserInfo, doPasswordReset, reAuthenticate, userMod } = useContext(userAuth)
    const { Modal } = useContext(SweetAlert)
    const { loadingScreen } = useLoading

    const [newUserName, setNewUserName] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const handleNewUserName = (event)=>{
        setNewUserName(event.target.value)
        setErrorMsg('')
    }

    const submitNewName = async()=>{
        if(newUserName === ''){
            setErrorMsg('User can`t be empty')
        }else if(newUserName === currentUser.displayName){
            setErrorMsg('You already have that user name')
        }else{
            try {
                const confirmChange = await Modal.fire({
                    title: 'User name will be changed',
                    text: `Your new user name will be '${newUserName}' , are you sure you want to change it?`,
                    icon: 'warning',
                })
                if(confirmChange.isConfirmed){
                    await updateUserInfo(newUserName)
                    await Modal.fire({
                        title: 'Name Changed successfully',
                        icon: 'success',
                        showCancelButton: false,
                        confirmButtonText: `Great, thanks !`
                    })
                }else{
                    await Modal.fire({
                        title: 'Process canceled',
                        icon: 'info',
                        showCancelButton: false,
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                    })
                    return
                }
            } catch (error) {
                await Modal.fire({
                    title: 'Something happen',
                    text: `username not updated, ref. error: ${error.message}`,
                    icon: 'error',
                    showCancelButton: false,
                })
            }
        }
    }

    const handleResetPassword = async()=>{
        try {
            const confirmEmail = await Modal.fire({
                title: 'Are you sure you want to reset your password ?',
                text: `email will be sent to : ${currentUser.email}`,
            })
            if (confirmEmail.isConfirmed) {
                doPasswordReset(currentUser.email)
                await Modal.fire({
                    title: 'E-mail Sent',
                    text: 'Please follow instructions and log in again, thanks',
                    icon: 'success',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 3500,
                    timerProgressBar: true,
                })
                navigate('/')
            } else if (confirmEmail.dismiss) {
                await Modal.fire({
                    title: 'Process Canceled',
                    icon: 'info',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                })
            }
        } catch (error) {
            await Modal.fire({
                title: 'E-mail NOT Sent',
                text: `${error.message}`,
                icon: 'error',
                showCancelButton: false,
            })
        }
    }

    const deleteAccount = async () => {
        try {
            const confirmDeletion = await Modal.fire({
                title: 'Are you sure you want to DELETE your account ?',
                text: 'This process is irreversible !',
                icon: 'warning',
            })
            if (confirmDeletion.isConfirmed) {
                const response = await Modal.fire({
                    title: "Confirm Deletion",
                    text: 'Enter your password',
                    input: "password",
                    icon: '',
                    inputPlaceholder: "password",
                    inputValue: '',
                    cancelButtonText: `Cancel`,
                })
                if (response.dismiss) {
                    await Modal.fire({
                        title: 'Process Canceled',
                        icon: 'info',
                        showCancelButton: false,
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                    })
                    return
                }else if (!response.value) {
                    await Modal.fire({
                        title: 'Error',
                        text: 'Please enter your password to confirm deletion',
                        icon: 'error',
                        showCancelButton: false,
                    })
                    return
                }
    
                const credential = EmailAuthProvider.credential(
                    userMod.email,
                    response.value
                )
    
                const reAuthPromise = new Promise((resolve, reject) => {
                    reAuthenticate(credential)
                        .then(() => {
                            resolve()
                        })
                        .catch((error) => {
                            reject(error)
                        })
                })
                await reAuthPromise

                await DeleteUser()
            } else if (confirmDeletion.dismiss) {
                await Modal.fire({
                    title: 'Process Canceled',
                    icon: 'info',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                })
            }
        } catch (error) {
            await Modal.fire({
                title: 'Account deletion failed',
                text: `${error.message}`,
                icon: 'error',
                showCancelButton: false,
            })
        }
    }

    const DeleteUser = async()=>{
        await doDeleteUser()
        await Modal.fire({
            title: 'Account deleted',
            text: 'Sorry to see you go !',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false,
            timer: 3500,
            timerProgressBar: true,
        })
        navigate('/')
    }

    if (!currentUser) {
        return loadingScreen
    }

    if(userParam){
        return (
            <>
                <div className='px-10 mt-20 relative'>
                    <h1 className='title text-4xl md:text-6xl lg:text-7xl'>{currentUser.displayName ? currentUser.displayName : currentUser.email}</h1>
                    <h2 className='font-bold text-lg md:text-2xl lg:text-3xl my-8'>Update your info here:</h2>
                    <div>
                        <p>Current user name: {currentUser.displayName || currentUser.email}</p>
                        <div className="logContainer relative my-5">
                            <input className="w-full h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="text" value={newUserName} onChange={handleNewUserName} id="name" name="name" required autoComplete="name" />
                            <label htmlFor="name" className="absolute top-[.4rem] left-3 text-lg">User name</label>
                            {
                                errorMsg && <p className='mt-2 ml-2 text-red-500 font-bold'>{errorMsg}</p>
                            }
                        </div>
                        <button onClick={submitNewName} className='bg-[--black-600] hover:bg-[--black-700] rounded-3xl p-2 text-white duration-300 active:scale-95 shadow-[#0000009d] shadow-lg'>Change User Name</button>
                    </div>
                    <h2 className='font-bold text-lg md:text-2xl lg:text-3xl my-8'>Your Favorites:</h2>
                    <div>
                        {
                            // favorites logic here 
                        }
                    </div>
                    <h2 className='font-bold text-lg md:text-2xl lg:text-3xl my-8'>You can admin your account from here:</h2>
                    <div className='mt-10 flex flex-col gap-6'>
                        <button onClick={handleResetPassword} className='bg-[--black-600] hover:bg-[--black-700] rounded-3xl p-2 text-white duration-300 active:scale-95 shadow-[#0000009d] shadow-lg'>Reset Password</button>
                        <button onClick={deleteAccount} disabled={!userMod} className='bg-red-800 hover:bg-red-900 rounded-3xl p-2 text-white duration-300 active:scale-95 shadow-[#0000009d] shadow-lg disabled:shadow-none disabled:bg-red-200 disabled:pointer-events-none'>Delete Account</button>
                    </div>
                </div>
            </>
        )
    }
}

export default UserAccount