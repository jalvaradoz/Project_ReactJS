import React from 'react'

import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'

import MainBanners from '../components/banners/MainBanners'

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>Alter Jewelry | About Us</title>
                <meta name='description' content='Explore the history of our company and how it became what it is today. Each piece is meticulously handcrafted with vegan and eco-friendly materials. Dive into our universe of unique and sustainable design where beauty meets ethics. Welcome to a world where distinction is eco-friendly!'/>
            </Helmet>
            <motion.div
            initial={{opacity:0, scale:.3, transition:{duration:.2}}} 
            animate={{opacity:1, scale:1, transition:{duration:1}}} 
            exit={{opacity:0, transition:{duration:.5}}}
            >
                <div className="my-20">
                    <h1 className="text-3xl md:text-6xl lg:text-7xl title ml-10">About Us</h1>
                    <div className='relative'>
                        <MainBanners src='/img/about/mainBanner.webp' alt={'aboutUsBanner'}/>
                        <h2 className='text-white w-fit text-nowrap text-3xl md:text-6xl lg:text-7xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 title bg-[#00000077] pb-2 px-4 rounded-3xl'>Alter Jewelry</h2>
                    </div>
                    <div className='mx-auto p-10 bg-[--black-300] dark:bg-[--black-500] rounded-3xl w-[95%]'>
                        <p className='text-lg md:text-3xl mb-10 md:leading-[3rem] '><span className='text-pink-500 dark:text-pink-300 font-bold'>Genuine harmony</span> is elusive - it`s among us, it`s near, it`s everywhere and nowhere. It`s right in front of you — so close that you`re about to grab it, comprehend it, define and divide it, compartmentalize it. And yet you can`t — <span className='text-pink-500 dark:text-pink-300 font-bold'>it slips away at once</span>.</p>
                        <p className='text-lg md:text-3xl mb-10 md:leading-[3rem] '>Both <span>nature and art</span> obey one law and rhythm; thus, all the masterpieces are alignment, whether it`s an ocean bay, Notre Dame de Paris, a human skull or a Lalique`s comb.</p>
                        <p className='text-lg md:text-3xl mb-10 md:leading-[3rem] '>The motive is <span className='text-pink-500 dark:text-pink-300 font-bold'>hidden</span> everywhere, and the messages are marked with a delicate hint — <span className='text-pink-500 dark:text-pink-300 font-bold'>only find and sense them</span>. They can either be low moving clouds in the sky, or a rib vaults in a cathedral built hundreds years ago; they are almost yellow leaves, or stitches sewn with <span className='text-pink-500 dark:text-pink-300 font-bold'>phenomenal care</span> into an old corsage; they may be the bend of a gentle shell or Bernini`s marble perfection.</p>
                        <p className='text-lg md:text-3xl mb-10 md:leading-[3rem] '><span className='text-pink-500 dark:text-pink-300 font-bold'>Alter Jewelry`s</span> mission is to discover and translate all these moments of harmony into <span className='text-pink-500 dark:text-pink-300 font-bold'>fashion</span>. Therefore, to bring a true meaningful beauty into a modern world making it contemporary itself. The inspiration is nature, architecture, sculpture, and the very elusive something that <span className='text-pink-500 dark:text-pink-300 font-bold'>transcends the whole world</span>, erasing the boundaries in space and time, being eternal, ever present and profound.</p>
                    </div>
                    <div className='relative'>
                        <MainBanners src={'/img/about/middleBanner.jpg'} alt={'flowersHistory'}/>
                        <h2 className='text-white w-fit text-nowrap text-3xl md:text-6xl lg:text-7xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 title bg-[#00000077] pb-2 px-4 rounded-3xl'>Florent story</h2>
                    </div>
                    <div className='mx-auto p-10 bg-[--black-300] dark:bg-[--black-500] rounded-3xl w-[95%]'>
                    <p className='text-lg md:text-3xl mb-10 md:leading-[3rem]'> <span className='text-pink-500 dark:text-pink-300 font-bold'>'Florent'</span> story is inspired by 'The Roses of Helio-gabalus' painting by Sir Lawrence Alma-Tadema. The piece depicting famously decadent young Roman emperor Elagabalus at one of his grand parties. Although the story is quite <span className='text-pink-500 dark:text-pink-300 font-bold'>mythical</span> in its nature, it is indeed macabre. </p>
                    <p className='text-lg md:text-3xl mb-10 md:leading-[3rem]'>The young emperor who's reign was conspicuous for <span className='text-pink-500 dark:text-pink-300 font-bold'>sex</span> scandals and religious controversy, was hosting a <span className='text-pink-500 dark:text-pink-300 font-bold'>lavish affair</span>: a banquet that splendor so the rose petals were falling from the sky.</p>
                    <p className='text-lg md:text-3xl mb-10 md:leading-[3rem]'>As the <span className='text-pink-500 dark:text-pink-300 font-bold'>story</span> goes, the false ceiling was filled with millions of <span className='text-pink-500 dark:text-pink-300 font-bold'>rose</span> and <span className='text-purple-500 dark:text-purple-300 font-bold'>violet</span> petals; as the guests were twisting themselves in pleasures - the petals kept pouring filling the room in pink subtle and the air in thick <span className='text-pink-500 dark:text-pink-300 font-bold'>fragrance</span>. Finally there were so many that they suffocated emperor's ecstatic guests.</p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default AboutUs