import './banners.css'

const PromoBanner = ({promo}) => {
    return (
        <>
            <section id="mainHightLight">
                <div className="bgImageDiv">
                    <div className="mt-10 lg:mt-40 relative mainBgImage rounded-3xl">
                        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center absolute top-10 left-10 lg:top-20 lg:left-14 text-wrap w-10 xl:leading-[8rem] text-[--black-700] [font-family:var(--cursive)]">{promo}</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PromoBanner