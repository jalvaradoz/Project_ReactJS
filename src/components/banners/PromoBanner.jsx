import { Carousel } from "@material-tailwind/react";

const PromoBanner = () => {
    return (
        <>
            <section className="mt-20 lg:mt-20 w-full h-full">
                <h1 className="text-3xl md:text-5xl lg:text-8xl [font-family:--cursive] text-center my-14">New Collections Available</h1>
                <Carousel className="rounded-xl" autoplay loop autoplayDelay={5000} navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2"> 
                        {new Array(length).fill("").map((_, i) => (
                        <span key={i} className={`block h-3 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`} onClick={() => setActiveIndex(i)}/>))}
                    </div>)}>
                    <div className="banner relative">
                            <a href="">
                                <img className="h-full w-full object-cover rounded-3xl aspect-video" src="img/banners/mainBanner.webp" alt="main banner 1" height='auto' width='auto'/>
                                <h2 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 bg-[#00000077] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-full text-center [font-family:--cursive]'>Thea Collection</h2>
                            </a>
                    </div>
                    <div className="banner relative">
                        <a href="">
                            <img className="h-full w-full object-cover rounded-3xl aspect-video" src="img/banners/mainBannerVampire.jpg" alt="main banner 2" height='auto' width='auto'/>
                            <h2 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-700 bg-[#00000077] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-full text-center [font-family:--cursive]'>Vampire Collection</h2>
                        </a>
                    </div>
                    <div className="banner relative">
                        <a href="">
                            <img className="h-full w-full object-cover rounded-3xl aspect-video" src="img/banners/mainBanner2.jpg" alt="main banner 3" height='auto' width='auto'/>
                            <h2 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-gray-300 bg-[#00000077] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-full text-center [font-family:--cursive]'>Ghost Collection</h2>
                        </a>
                    </div>
                </Carousel>
            </section>
        </>
    )
}

export default PromoBanner