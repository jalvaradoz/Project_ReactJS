import React from 'react'

const Checkboxes = ({ name, isChecked, onCheckChange }) => {

    const handleCheckChange = () => {
        onCheckChange(name)
    }

    return (
        <div className="flex items-center gap-3">
            <label className="hover:bg-[--black-600] duration-300 searchCheckBox block cursor-pointer w-7 h-7 border-[3px] border-solid border-[--black-100] rounded-xl relative overflow-hidden">
                <input 
                    id={`${name}`} 
                    type="checkbox" 
                    checked={isChecked}
                    onChange={handleCheckChange}
                />
                <div className="duration-300 ease-in w-16 h-16 bg-white top-[-52px] left-[-52px] absolute z-50"></div>
            </label>
            <label className='w-[90px]' htmlFor={`${name}`}>{name}</label>
        </div>
    )
}

export default Checkboxes
