import React from 'react'

const MainNavigationBtn = ({nav}) => {
    return (
        <div className="w-full flex justify-center">
            <a href={nav}><button className='text-2xl btnShadow dark:bg-gray-600 rounded-3xl p-2 px-6 dark:hover:bg-gray-700 bg-gray-400 hover:bg-gray-600 active:scale-90 transition duration-500 ease-in-out'><strong>Go to collection</strong></button></a>
        </div>
    )
}

export default MainNavigationBtn