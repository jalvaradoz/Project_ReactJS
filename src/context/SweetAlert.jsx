import { createContext } from "react"
import Swal from "sweetalert2"

const SweetAlert = createContext()

const AlertProvider = ({children})=>{

    const Toast = Swal.mixin({
        customClass: {
            timerProgressBar: 'bg-[--black-400]',
            popup: 'rounded-3xl mb-5 ml-1 shadow-[#0000009d] shadow-lg',
        },
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        background: "var(--black-800)",
        color: "var(--black-50)",
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
            timerProgressBar: 'bg-[--black-400]',
            confirmButton: "alertButton",
            cancelButton: "alertButton denyButton",
            popup: 'rounded-3xl shadow-[#0000009d] shadow-lg',
            input: 'h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4',
            inputLabel: 'text-lg',
        },
        buttonsStyling: false,
        background: "var(--black-700)",
        color: "var(--black-50)",
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