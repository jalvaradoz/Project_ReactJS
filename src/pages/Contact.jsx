import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

const Contact = () => {

    const [status, setSetStatus] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault()
        setStatus("Sending....")
        const formData = new FormData(event.target)
    
        formData.append("access_key", "ad3b27e7-8676-4841-90e8-664c83b23fc0")
    
        const object = Object.fromEntries(formData)
        const json = JSON.stringify(object)
    
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json())
    
        if (res.success) {
            console.log("Success", res)
        }
    }


    return (
        <>
            <Helmet>
                <title>Alter Jewelry | Contact</title>
                <meta name='description' content='Contact us with your questions or requests. Explore the history of our company and how it became what it is today. Each piece is meticulously handcrafted with vegan and eco-friendly materials. Dive into our universe of unique and sustainable design where beauty meets ethics. Welcome to a world where distinction is eco-friendly!'/>
            </Helmet>
            <motion.div
            initial={{opacity:0, scale:.3, transition:{duration:.2}}} 
            animate={{opacity:1, scale:1, transition:{duration:1}}} 
            exit={{opacity:0, transition:{duration:.5}}}
            >
                <div className="my-20">
                    <h1 className="text-3xl md:text-6xl lg:text-7xl title ml-10">Contact</h1>
                    <section className="my-16 flex justify-center max-w-full">
                        <div className="bg-[--black-800] p-10 rounded-3xl w-[90%] max-w-full">
                            <form onSubmit={onSubmit}>
                                <div className="flex flex-col gap-10">
                                    <div className="logContainer relative">
                                        <input className="w-full h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="text" id="name" name="name" required autoComplete="name" />
                                        <label htmlFor="name" className="absolute top-[.4rem] left-3 text-lg">Name</label>
                                    </div>
                                    <div className="logContainer relative">
                                        <input className="w-full h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="email" id="email" name="email" required autoComplete="email" />
                                        <label htmlFor="email" className="absolute top-[.4rem] left-3 text-lg">E-mail</label>
                                    </div>
                                    <div className="logContainer relative">
                                        <select className="w-full h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" id="options" name="why" type="select" required>
                                            <option value=""></option>
                                            <option value="Complain or congrats">Complain or congrats</option>
                                            <option value="Custom made Jewelry">Custom made Jewelry</option>
                                            <option value="Collaboration">Collaboration</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <label htmlFor="options" className="absolute top-[.4rem] left-3 text-lg">Reason of contact</label>
                                    </div>
                                    <div className="logContainer relative">
                                        <textarea className="rounded-3xl bg-[--black-400] p-1 pl-4 w-full resize-none" id="textArea" rows="5" name="textArea" required></textarea>
                                        <label htmlFor="textArea" className="absolute top-[.4rem] left-3 text-lg">How can we help you?</label>
                                    </div>
                                </div>
                                <div className="w-full flex justify-center flex-wrap gap-10 mt-8">
                                    <button type="submit" className="mainBtn rounded-3xl p-3">
                                        Submit
                                    </button>
                                    <button type="reset" className="cancelBtn active:scale-95 hover:bg-red-900 hover:scale-110 transition duration-500 ease-in-out">
                                        <span>Reset</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </motion.div>
        </>
    )
}

export default Contact