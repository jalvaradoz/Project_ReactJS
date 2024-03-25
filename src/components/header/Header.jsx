import CartWidget from "./CartWidget"
import ThemeSwitch from "./ThemeSwitch"
import UserWidget from "./UserWidget"
import SearchWidget from "./SearchWidget"


const Header = () => {

    return (
        <div className="sticky top-0 h-[5rem] bg-[#0000009f] z-50">
            <div className="relative w-full px-5 py-5">
                <ThemeSwitch/>
                <a href="" className="absolute left-24 sm:left-2/4 top-9 -translate-x-2/4 -translate-y-2/4 text-[color:var(--black-50)] [font-family:var(--cursive)] text-2xl sm:text-3xl md:text-5xl xl:text-6xl tracking-wider">Alter Jewelry</a>
                <SearchWidget/>
                <UserWidget/>
                <CartWidget/>
            </div>
        </div>
    )
}

export default Header