import React from 'react'
import CancelButton from '../../buttons/CancelButton'

const UserValidated = () => {
    return (
        <div className="fixed top-20 right-10 z-50">
            <div className="flex flex-col items-center rounded-full bg-[--bg] gap-4 py-7 px-5 border-[1.5px] border-[--black-50]">
                <h2 className="text-center font-medium text-base mb-3"> user verified</h2>
                <CancelButton title={'Log Out'} />
            </div>
        </div>
    )
}

export default UserValidated