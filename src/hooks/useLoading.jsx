import { useState } from "react"
import './loadingScreen.css'

const useLoading = ()=>{
    const [loading, setLoading] = useState(true)

    const toggleLoading = ()=> setLoading(!loading)

    const loadingScreen =  <div className='z-[100] absolute top-0 left-0 bg-[--black-900] h-full w-full flex justify-center flex-col items-center'>
                                <div>
                                    <div className="loader">
                                    <div className="circle">
                                        <div className="dot"></div>
                                        <div className="outline"></div>
                                    </div>
                                    <div className="circle">
                                        <div className="dot"></div>
                                        <div className="outline"></div>
                                    </div>
                                    <div className="circle">
                                        <div className="dot"></div>
                                        <div className="outline"></div>
                                    </div>
                                    <div className="circle">
                                        <div className="dot"></div>
                                        <div className="outline"></div>
                                    </div>
                                    </div>
                                </div>
                            </div>

    return { loading, toggleLoading, loadingScreen}
}

export default useLoading