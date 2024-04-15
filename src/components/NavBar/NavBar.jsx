import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <section id="nav">
            <div className="imgDivClip">
                <Link to={'/'}><img src="../img/logo.png" alt="mainLogo" className="absolute top-48 left-2/4 h-52 sm:h-[250px] -translate-x-2/4 -translate-y-2/4 w-auto"/></Link>
            </div>
            <div>
                <nav>
                    <ul className="flex flex-wrap justify-evenly w-full">
                        <Link to={'/about-us'} className="absolute top-56 left-1 md:static hover:bg-[--black-600] rounded-3xl p-1 px-2 transition duration-300 ease-in-out md:-translate-y-24">About Us</Link>
                        <Link to={'/gallery'} className="absolute top-[17rem] left-20 md:static hover:bg-[--black-600] rounded-3xl p-1 px-2 transition duration-300 ease-in-out md:-translate-y-[3.2rem] md:-translate-x-5">Gallery</Link>
                        <Link to={'/'} className="absolute md:static hover:bg-[--black-600] rounded-3xl p-1 px-2 transition duration-300 ease-in-out md:translate-x-[28px]">Home</Link>
                        <Link to={'/collections'} className="absolute top-[17rem] right-8 md:static hover:bg-[--black-600] rounded-3xl p-1 px-2 transition duration-300 ease-in-out md:-translate-y-12 md:translate-x-9">Collections</Link>
                        <Link to={'/contact'} className="absolute top-56 right-2 md:static hover:bg-[--black-600] rounded-3xl p-1 px-2 transition duration-300 ease-in-out md:-translate-y-[6.7rem]">Contact</Link>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default NavBar