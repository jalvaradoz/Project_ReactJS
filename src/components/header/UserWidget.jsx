import { useState,useContext } from "react"

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, MenuHandler, MenuList, MenuItem,Typography, ThemeProvider} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

import { userAuth } from "../../context/AuthContext"
import { SweetAlert } from "../../context/SweetAlert";

import UserOverlay from "../overlays/userOverlay/UserOverlay"

const UserWidget = () => {

    const { userLoggedIn, currentUser, userImage, doSignOut } = useContext(userAuth)
    const { Toast, Modal } = useContext(SweetAlert)

    const [showOverlay, setShowOverlay] = useState(false)

    const toggleOverlay = ()=>{
        setShowOverlay(!showOverlay)
    }

    const navigate = useNavigate()

    const handleSignOut = async()=>{
        try {
            await doSignOut()
            navigate('/')
            Toast.fire({icon: "info", title: 'Successfully logged out'})
        } catch (error) {
            await Modal.fire({
                title: 'Error',
                text: `${error.message}`,
                icon: 'error',
                showCancelButton: false,
            })
        }
    }

    const theme = {
        menu: {
            styles: {
                base: {
                    item: {
                        initial: {
                        borderRadius: "rounded-3xl",
                        bg: "hover:bg-[--black-300] focus:bg-[--black-300] active:bg-[--black-500]",
                        },
                    },
                },
            },
        },
    }

    return (
        <>
            {
                !userLoggedIn ? 
                
                <button onClick={toggleOverlay} className="userIcon absolute">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </button>       :

                <ThemeProvider value={theme}>
                    <Menu animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                    }}>
                        <MenuHandler>
                            {
                                userImage ? 

                                <button className="absolute top-[14px] right-[73px]">
                                    <img className='w-[45px] rounded-3xl' src={userImage} alt="" />
                                </button> :

                                <button onClick={toggleOverlay} className="userIcon absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </button> 
                            }
                        </MenuHandler>
                        <MenuList className="bg-[--black-200] dark:bg-[--black-800] border-0 dropMenu min-w-10 rounded-3xl flex flex-col gap-2 p-5">
                            <MenuItem disabled>
                                <div className="overflow-hidden">
                                    {
                                        currentUser.displayName ?

                                        <Typography variant="h2" className="text-center text-base text-[--text]">
                                            {currentUser.displayName}
                                        </Typography>       :

                                        <Typography variant="h2" className="text-center text-base text-[--text] max-w-[110px] animate-marquee">
                                            {currentUser.email }
                                        </Typography>

                                    }
                                </div>
                            </MenuItem>
                            <MenuItem className="w-fit h-fit p-0">
                                <Link className="text-[--text] hover:text-black text-[1.1rem] text-center w-full p-[2.3rem]" to={`/${currentUser.displayName ? currentUser.displayName.replace(/\s+/g, '') : currentUser.email }`}>Account</Link>
                            </MenuItem>
                            <MenuItem onClick={handleSignOut} className="cancelBtn px-10">
                                <span className="text">Logout</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </ThemeProvider>
            }
            <AnimatePresence>
                {
                    showOverlay && !userLoggedIn &&

                    <motion.div exit={{opacity:0}} transition={{duration:.4}}>
                        <UserOverlay toggle={toggleOverlay} />
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default UserWidget