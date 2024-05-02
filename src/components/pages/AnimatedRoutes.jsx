import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Index from './Index'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Collections from './Collections'
import Gallery from './Gallery'
import SignUp from './SignUp'
import Checkout from './Checkout'

const AnimatedRoutes = () => {

    const location = useLocation()

    return (
        <AnimatePresence mode='sync'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Index />}/>
                <Route path='/collections/:idCategory' element={<Collections />}/>
                <Route path='/about-us' element={<AboutUs />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/gallery' element={<Gallery />}/>
                <Route path='/sign-up' element={<SignUp />}/> 
                <Route path='/checkout' element={<Checkout />}/>          
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes