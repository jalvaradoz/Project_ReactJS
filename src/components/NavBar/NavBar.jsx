import { Link } from "react-router-dom"
import { Menu, MenuHandler, MenuList, MenuItem, ThemeProvider} from '@material-tailwind/react'

const NavBar = () => {

    const theme = {
        menu: {
            styles: {
                base: {
                    item: {
                        initial: {
                        borderRadius: "rounded-3xl",
                        bg: "hover:bg-[--black-300] focus:bg-[--black-300] active:bg-[--black-500]",
                        },
                    },
                },
            },
        },
    };


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
                        <Link to={'/'} className="absolute md:static hover:bg-[--black-600] rounded-3xl p-1 px-2 transition duration-300 ease-in-out md:translate-x-[12.5px]">Home</Link>
                        <ThemeProvider value={theme}>
                            <Menu>
                                <MenuHandler>
                                    <button className="absolute top-[17rem] right-8 md:static hover:bg-[--black-600] rounded-3xl p-1 px-2 transition duration-300 ease-in-out md:-translate-y-12 md:translate-x-9">Collections</button>
                                </MenuHandler>
                                <MenuList className="bg-[--black-200] dark:bg-[--black-800] border-0 dropMenu min-w-10 rounded-3xl flex flex-col gap-2 p-5">
                                    <MenuItem className="w-fit h-fit p-0">
                                        <Link className="text-[--text] hover:text-black text-[1.1rem] text-center px-[2.52rem]" to={'/collections/thea'}>Thea</Link>
                                    </MenuItem>
                                    <MenuItem className="w-fit h-fit p-0 ">
                                        <Link className="text-[--text] hover:text-black text-[1.1rem] text-center px-[2.3rem]" to={'/collections/ghost'} >Ghost</Link>
                                    </MenuItem>
                                    <MenuItem className="w-fit h-fit p-0 ">
                                        <Link className="text-[--text] hover:text-black text-[1.1rem] text-center px-[2.48rem]" to={'/collections/siren'} >Siren</Link>
                                    </MenuItem>
                                    <MenuItem className="w-fit h-fit p-0 ">
                                        <Link className="text-[--text] hover:text-black text-[1.1rem] text-center px-[1.75rem]" to={'/collections/vampire'} >Vampire</Link>
                                    </MenuItem>
                                    <MenuItem className="w-fit h-fit p-0 ">
                                        <Link className="text-[--text] hover:text-black text-[1.1rem] text-center px-[2.5rem]" to={'/collections/faun'} >Faun</Link>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </ThemeProvider>
                        <Link to={'/contact'} className="absolute top-56 right-2 md:static hover:bg-[--black-600] rounded-3xl p-1 px-2 transition duration-300 ease-in-out md:-translate-y-[6.7rem]">Contact</Link>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default NavBar