const NavBar = () => {
    return (
        <section id="nav">
            <div className="imgDivClip">
                <img src="../img/logo.png" alt="mainLogo" className="absolute top-48 left-2/4 h-52 sm:h-[250px] -translate-x-2/4 -translate-y-2/4 w-auto"/>
            </div>
            <div>
                <nav>
                    <ul class="flex flex-wrap justify-evenly w-full">
                        <li className="hover:bg-[--black-600] rounded-3xl p-1 px-2 transition duration-300 ease-in-out md:-translate-y-24"><a href="">Women</a></li>
                        <li className="hover:bg-[--black-600] rounded-3xl p-1 px-2 transition duration-300 ease-in-out md:-translate-y-[3.2rem] md:-translate-x-5"><a href="">Men</a></li>
                        <li className="hover:bg-[--black-600] rounded-3xl p-1 px-2 transition duration-300 ease-in-out md:translate-x-[28px]"><a href="">Home</a></li>
                        <li className="hover:bg-[--black-600] rounded-3xl p-1 px-2 transition duration-300 ease-in-out md:-translate-y-12 md:translate-x-9"><a href="">Collections</a></li>
                        <li className="hover:bg-[--black-600] rounded-3xl p-1 px-2 transition duration-300 ease-in-out md:-translate-y-[6.7rem]"><a href="">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default NavBar