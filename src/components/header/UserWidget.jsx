import { useState,useEffect } from "react"
import UserOverlay from "../overlays/userOverlay/UserOverlay"
import UserValidated from "../overlays/userOverlay/UserValidated"

const UserWidget = () => {

    const [showOverlay, setShowOverlay] = useState(false)
    const [validateLogin, setValidateLogin] = useState(null)

    const toggleOverlay = ()=>{
        setShowOverlay(!showOverlay)
    }

    useEffect(() => {
        const user = sessionStorage.getItem('user') || localStorage.getItem('user')
        setValidateLogin(user)
    }, [])

    return (
        <>
            <button onClick={toggleOverlay} className="userIcon absolute" id="userButton">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </button>
            {showOverlay && validateLogin === null && <UserOverlay toggle={toggleOverlay} />}
            {showOverlay && validateLogin && <UserValidated  />}
        </>
    )
}

export default UserWidget