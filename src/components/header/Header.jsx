import CartWidget from "./CartWidget"
import ThemeSwitch from "./ThemeSwitch"
import UserWidget from "./UserWidget"
import SearchWidget from "./SearchWidget"


const Header = ({title}) => {

    return (
        <div className="sticky top-0 h-[5rem] bg-[#0000009f] z-50">
            <div className="relative w-full px-5 py-5">
                <ThemeSwitch/>
                <a href="" className="home absolute left-2/4 top-9 -translate-x-2/4 -translate-y-2/4 text-[color:var(--black-50)] [font-family:var(--cursive)] mainLogo sm:text-3xl md:text-5xl xl:text-6xl tracking-wider">{title}</a>
                <div>
                    <SearchWidget/>
                    <UserWidget/>
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}

export default Header