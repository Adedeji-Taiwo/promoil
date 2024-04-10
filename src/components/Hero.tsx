import { FC, useContext} from 'react';
import Button from './Button';
import { HeroProps } from '../types';
import { WiizzkidContext, WiizzkidContextType } from '../context/wiizzkid.context';



const Hero: FC<HeroProps> = ({ colorDeep, mobileDropdownOpen, text, shadow, mobileShadow, tagline, img, setDropdownOpen }) => {
    const {openVideo, setOpenVideo } = useContext(WiizzkidContext) as WiizzkidContextType;
    
    
    return (
        <>  
            <div id="home" className={`${mobileDropdownOpen && 'md:blur-0 blur-2xl'} max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start z-10 relative overflow-hidden pt-[30px] md:pt-[90px] lg:pt-[120px]`} onClick={() => setDropdownOpen(false)}>
                <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
                    <h1 data-aos="fade-right" data-aos-once="true" className="my-4 text-4xl md:text-5xl lg:mx-0 mx-auto font-bold leading-tight text-navy">We're about <span style={{ color: `${colorDeep}` }}>{tagline}!</span></h1>
                    <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className="leading-normal md:text-2xl text-lg mb-8 text-navy">{text}</p>
                    <div className="w-full flex sm:flex-row flex-col items-center justify-center md:gap-0 gap-6 lg:justify-start sm:space-x-5">
                        <Button
                            children="Contact Ad'R"
                            href='https://adr-agency.vercel.app/'
                            className='lg:mx-0 text-white text-xl font-bold py-4 px-9 focus:outline-none '
                            style={window.innerWidth > 767 ? { backgroundColor: `${colorDeep}`, boxShadow: `${shadow}` } : { backgroundColor: `${colorDeep}`, boxShadow: `${mobileShadow}` }}
                        />

                                              

                        <div className="flex items-center justify-center space-x-3 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"  onClick={() => setOpenVideo(true)}>
                            <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" style={{ fill: `${colorDeep}` }} />
                                </svg>
                            </button>
                            <span className="cursor-pointer">Watch campaign ad!</span>
                        </div>

                    </div>

                </div>

               
              
                <div className="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
                    <img data-aos="fade-up" data-aos-once="true" className="w-2/3 mx-auto 2xl:-mb-20" loading="eager" src={img} alt='wiizzkids people learning'  width="500" height="300" />
                </div>

            </div>
            <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-20 relative">
                <svg className="xl:h-40 xl:w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor"></path>
                </svg>
            </div>
        </>
    )
}

export default Hero;