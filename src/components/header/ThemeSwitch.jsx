import { useState, useEffect } from "react";

const ThemeSwitch = () => {
    const storedTheme = localStorage.getItem('theme') || 'dark'

    const [theme, setTheme] = useState(storedTheme)

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        document.body.classList.remove('light', 'dark')
        document.body.classList.add(theme)
    }, [theme])

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        storedTheme && setTheme(storedTheme)
    }, [])

    return (
        <div className="hidden sm:block wrapper absolute left-5">
            <input onChange={toggleTheme} type="checkbox" name="checkbox" className="themeSwitch relative w-[70px] h-[31px] appearance-none bg-[color:var(--black-950)] bg-cover bg-no-repeat transition-[background-image] duration-[0.7s] ease-[ease-in-out] cursor-pointer overflow-hidden m-0 rounded-[25px] checked:bg-[rgb(0,195,255)] checked:bg-cover checked:transition-[background-image] checked:duration-[1s] checked:ease-[ease-in-out] checked:after:animate-[on_0.5s_forwards_cubic-bezier(.8,0.5,0.2,1.4)] checked:after:shadow-[inset_-5px_-5px_4px_rgba(53,53,53,0.3)] checked:before:content-[''] checked:before:w-[15px] checked:before:h-[15px] checked:before:absolute checked:before:origin-[53px_10px] checked:before:bg-transparent checked:before:shadow-[5px_-1px_0px_#fff] checked:before:blur-none checked:before:animate-[sun_0.5s_forwards_ease] checked:before:rounded-[50%] checked:before:left-2.5 checked:before:top-[5px] after:content-[''] after:w-5 after:h-5 after:bg-white after:absolute after:translate-x-0 after:animate-[off_0.5s_forwards_cubic-bezier(.8,0.5,0.2,1.4)] after:shadow-[inset_5px_-5px_4px_rgba(53,53,53,0.3)] after:rounded-[50%] after:left-2 after:top-[5px] before:content-[''] before:w-[15px] before:h-[15px] before:absolute before:blur-[1px] before:bg-[#f5daaa] before:shadow-[0px_0px_10px_#f5deb4,0px_0px_20px_#f5deb4,0px_0px_30px_#f5deb4,inset_0px_0px_2px_#efd3a3] before:origin-[53px_10px] before:animate-[moon_0.5s_forwards_ease] before:rounded-[50%] before:-left-10 before:top-[5px]" checked={theme === 'light'}/>
        </div>
    )
}

export default ThemeSwitch


