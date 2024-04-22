import { createContext } from "react"
import Swal from "sweetalert2"

const SweetAlert = createContext()

const AlertProvider = ({children})=>{

    const Toast = Swal.mixin({
        customClass: {
            popup: 'rounded-3xl mb-5 ml-1',
        },
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        background: "#4f4f4f",
        color: "#f6f6f6",
        padding: '20px 20px 20px 20px',
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    })
    
    const Modal = Swal.mixin({
        customClass: {
            confirmButton: "alertButton",
            cancelButton: "alertButton denyButton",
            popup: 'rounded-3xl',
        },
        buttonsStyling: false,
        background: "#454545",
        color: "#f6f6f6",
        showCancelButton: true,
        confirmButtonText: "Accept",
        cancelButtonText: "Deny",
        icon: "question",
        padding: '0 0 2rem 0',
    })


    return(
        <SweetAlert.Provider value={{Toast,Modal}}>
            {children}
        </SweetAlert.Provider>
    )
}

export { SweetAlert, AlertProvider }