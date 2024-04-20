import React from 'react'
import { motion } from 'framer-motion'

const AboutUs = () => {
    return (
        <motion.div
        initial={{opacity:0, scale:.3, transition:{duration:.2}}} 
        animate={{opacity:1, scale:1, transition:{duration:1}}} 
        exit={{opacity:0, transition:{duration:.5}}}
        >
            <div className="my-20">
                <h1 className="text-3xl md:text-6xl lg:text-7xl title ml-10">About Us</h1>
                
            </div>
        </motion.div>
    )
}

export default AboutUs