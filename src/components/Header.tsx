import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { col3, col2, col1, promoil} from "../assets/header/index";
import Hero from './Hero';
import { headerDataType } from '../types';
import Button from './Button';
import { Link } from 'react-router-dom';




const data: headerDataType[] = [
    {
        id: 1,
        colorDeep: '#3b5d83',
        colorLight: '#d3dce0',
        tagline: "inclusivity",
        text: 'Promoil is partnering with women nationwide to create Project "#Naturally You".',
        shadow: '0px 10px 20px rgba(78, 112, 149, 0.8)',
        mobileShadow: '0px 5px 20px rgba(78, 112, 149, 0.8)',
        img: col1,
    },
    {
        id: 2,
        colorDeep: '#35553f',
        colorLight: '#dcdfc0',
        tagline: "nature",
        text: "Transform Your Skin, Unleash Your Beauty: Promoil's Argan Oil Magic. ",
        shadow: '0px 10px 20px rgba(130, 134, 99, 0.8)',
        mobileShadow: '0px 5px 20px rgba(130, 134, 99, 0.8)',
        img: col2,
    },
    {
        id: 3,
        colorDeep: '#97582d',
        colorLight: '#e3d2c2',
        tagline: "beauty",
        text: "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
        shadow: '0px 10px 20px rgba(200, 171, 120, 0.8)',
        mobileShadow: '0px 5px 20px rgba(200, 171, 120, 0.8)',
        img: col3,
    },
]

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState<boolean>(false);
    
   

    //prevent scroll when profile dropdown is clicked
    useEffect(() => {
        const body = document.querySelector('body');
        if (mobileDropdownOpen) {
            body!.style.overflow = "hidden";
        }
        else {
            body!.style.overflowY = "scroll";
            body!.style.overflowX = "hidden";
        }
    }, [mobileDropdownOpen])


    //render only on homepage
    if (location.pathname !== "/") {
        return null;
    }


    return (
        <Swiper
            spaceBetween={30}
            speed={3000}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            effect={"fade"}
            fadeEffect={{
                crossFade: true,
            }}
            modules={[Autoplay, EffectFade]}
            className="mySwiper"
            id="header"
        >
            {data.map(({ id, colorDeep, colorLight, tagline, text, shadow, mobileShadow, img }) => (
                <SwiperSlide key={id} style={{ backgroundColor: `${colorLight}` }}>
                    {/*header section*/}
                    <div className="lg:absolute lg:top-0 lg:left-0 z-20 lg:flex lg:w-full lg:items-center">

                        <header className="w-full text-gray-700">
                            <div className="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row">
                                <div className="flex flex-row items-center justify-between md:pt-8 pt-6">
                                    <div className={`flex justify-center items-center border-2  h-18 w-18 rounded-lg p-1`} style={{ borderColor: `${colorDeep}` }}>
                                        <img className='w-full h-auto max-w-[60px]' src={promoil} alt="wiizzkid logo" width="50" height="80"/>
                                    </div>
                                    <button className={`rounded-lg lg:hidden focus:outline-none focus:shadow-outline ${mobileDropdownOpen && 'pointer-events-none'}`} onClick={() => setOpen(!open)}>
                                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-7 h-7">
                                            {open ? (
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            ) : (
                                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                            )}
                                        </svg>
                                    </button>
                                </div>
                                <nav className={`lg:h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:flex lg:justify-end lg:flex-row origin-top duration-300 ${open ? 'h-full scale-y-1' : 'h-0 transform lg:transform-none scale-y-0'}`}>
                        
                                                  

                                    <a className={`${mobileDropdownOpen && 'blur-2xl'} px-4 py-2 mt-2 md:text-base text-sm bg-transparent rounded-lg lg:mt-8 lg:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline`} href="#home" onClick={() => { setOpen(false) }}>Home</a>
                                    <Link to='/advert' className={`${mobileDropdownOpen && 'blur-2xl'} px-4 py-2 mt-2 md:text-base text-sm bg-transparent rounded-lg lg:mt-8 lg:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline`} onClick={() => setOpen(false)}>TV Ads</Link>
                                    <a className={`${mobileDropdownOpen && 'blur-2xl'} px-4 py-2 mt-2 md:text-base text-sm bg-transparent rounded-lg lg:mt-8 lg:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline`} href="#products" onClick={() => setOpen(false)}>Products</a>
                                    <a className={`${mobileDropdownOpen && 'blur-2xl'} px-4 py-2 mt-2 md:text-base text-sm bg-transparent rounded-lg lg:mt-8 lg:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline`} href="#tips&care" onClick={() => setOpen(false)}>Tips & Care</a>
                                    <a className={`${mobileDropdownOpen && 'blur-2xl'} px-4 py-2 mt-2 md:text-base text-sm bg-transparent rounded-lg lg:mt-8 lg:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline`} href="#mission" onClick={() => setOpen(false)}>Mission</a>

                                    <Button
                                        className={`${mobileDropdownOpen && 'blur-2xl'} px-10 py-3 mt-3 md:text-base text-sm text-center text-white lg:mt-8 lg:ml-4`}
                                        children="Contact Ad'R"
                                        href='https://adr-agency.vercel.app/'
                                        style={{ backgroundColor: `${colorDeep}` }}
                                        />

                                  

                                
                                </nav>
                            </div>
                        </header>
                    </div>
                    {/*hero section */}
                    <Hero
                        colorDeep={colorDeep}
                        mobileDropdownOpen={mobileDropdownOpen}
                        text={text}
                        shadow={shadow}
                        mobileShadow={mobileShadow}
                        tagline={tagline}
                        setDropdownOpen={setDropdownOpen}
                        img={img}
                    />

                </SwiperSlide>
            ))}
        </Swiper>

    )
}

export default Header;