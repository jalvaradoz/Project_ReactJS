import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

import Checkboxes from './Checkboxes'
import ItemsListContainer from '../../components/itemsListContainer/ItemsListContainer'

const Search = () => {

    const [searchCriteria, setSearchCriteria] = useState('')
    const [searchInput, setSearchInput] = useState('')
    const [loadingError, setLoadingError] = useState(false)

    const handleCheckboxChange = (name) => {
        setSearchCriteria(prevCriteria => prevCriteria === name ? '' : name)
    }
    
    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleLoadingError = (error) => {
        setLoadingError(error)
    }

    useEffect(() => {
        setLoadingError(false)
    }, [searchCriteria, searchInput])

    return (
        <>
            <Helmet>
                <title>Alter Jewelry | Search</title>
                <meta name='description' content='Search for your favorites, by category, name or collection. Explore the history of our company and how it became what it is today. Each piece is meticulously handcrafted with vegan and eco-friendly materials. Dive into our universe of unique and sustainable design where beauty meets ethics. Welcome to a world where distinction is eco-friendly!'/>
            </Helmet>
            <motion.div
            initial={{opacity:0, scale:.3, transition:{duration:.2}}} 
            animate={{opacity:1, scale:1, transition:{duration:1}}} 
            exit={{opacity:0, transition:{duration:.5}}}
            >
                <div className="my-20">
                    <h1 className="text-3xl md:text-6xl lg:text-7xl title ml-10">Search</h1>
                    <div className='my-10'>
                        <h2 className='text-2xl text-center px-5'>Please type your search criteria or check one of the checkboxes to start</h2>
                        <p className='text-center px-5 my-2'>(clean the text if you want to search by check box or uncheck the checkbox if you want to search by text)</p>
                    </div>
                    <div className='mt-10 mb-10 flex justify-center'>
                        <div className="logContainer relative w-[80%]">
                            <input
                                className="w-full h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4"
                                type="search"
                                id="search"
                                name="search"
                                value={searchInput}
                                onChange={handleSearchInputChange}
                                required
                            />
                            <label htmlFor="search" className="absolute top-[.4rem] left-3 text-sm md:text-lg">
                                Category, name, collection or type...
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-[80%] flex flex-wrap justify-evenly gap-5'>
                            {['ring', 'necklace', 'hairpin', 'earring', 'pendant', 'choker', 'crown', 'bondage', 'veil', 'clutch', 'bracelet', 'ear cuff', 'body chain'].map(category => (
                                <Checkboxes key={category} name={category} isChecked={searchCriteria === category} onCheckChange={handleCheckboxChange} />
                            ))}
                        </div>
                    </div>
                </div>
                {
                    loadingError ? 
                    
                    (<h2 className='text-center text-2xl text-red-500 my-12'>No items were found with your search criteria</h2>)    
                    
                    : 

                    (<ItemsListContainer category={searchCriteria} searchInput={searchInput} onLoadingError={handleLoadingError} />)
                }
            </motion.div>
        </>
    )
}

export default Search