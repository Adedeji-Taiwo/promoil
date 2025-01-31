import Banner from "../components/Banner"
import ad from '../assets/ads/adCover.jpg'
import { useContext } from "react";
import { WiizzkidContext, WiizzkidContextType } from "../context/wiizzkid.context";


const Advert = () => {
    const {openAdVideo, setOpenAdVideo } = useContext(WiizzkidContext) as WiizzkidContextType;
  return (
    <>
    <Banner 
        title='Promoil TV ad...'
    />

    <div className='container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-500' id="step">
          <div className="sm:flex items-center sm:space-x-8 md:py-20 py-16">
        <div data-aos="fade-right" className="sm:w-1/2 relative">
            <div className="bg-tomato rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
            <h1 className="font-semibold text-2xl relative z-50 text-navy lg:pr-10">Embark on a journey to discover the beauty of nature with <span className="text-tomato">Promoil</span></h1>
            <p className="py-5 lg:pr-32 md:text-base text-sm md:leading-7 leading-7 text-gray-500">Promoil's TV ad on features captivating visuals and compelling storytelling to showcase the transformative power of their natural beauty products.</p>
            <p className="pt-0 pb-5 lg:pr-32 md:text-base text-sm md:leading-7 leading-7 text-gray-500">Whether it's indulging in the richness of Argan oil or experiencing the rejuvenating benefits of natural ingredients, Promoil's TV ad promises an unforgettable journey to radiant beauty.</p>
        </div>
        <div data-aos="fade-left" className="sm:w-1/2 relative mt-10 sm:mt-0">
            <div className="floating w-24 h-24 bg-teal  absolute rounded-lg z-0 -top-3 -left-3"></div>
            <img className="rounded-xl z-40 relative" src={ad} alt="class" loading='lazy'/>
            <button  onClick={() => setOpenAdVideo(true)} className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-50">
					<svg className="w-5 h-5 ml-1" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#252641"/>
					</svg>
				</button>
            <div className="bg-tomato w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
        </div>
        
    </div>
  </div>
  </>
  )
}

export default Advert