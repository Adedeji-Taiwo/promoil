import { w8 } from "../assets/header"

const Testimonial = () => {
  return (
 <div className="bg-navy">
   <div className="lg:container m-auto space-y-8 px-4 py-16 md:px-8">
   <h2 className="my-3 md:text-3xl text-2xl text-center text-gray-100">
     Join in the Conversation
   </h2>
       <div className="swiper-slide !bg-transparent">
         <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
           <img
             className="mx-auto h-16 w-16 rounded-full"
             src={w8}
             alt="user avatar"
             height="220"
             width="220"
             loading="lazy"
           />
            <div className="text-gray-400">
            <blockquote className="relative text-gray-200 text-center p-10 w-full m-1">
            Since joining the Naturally You challenge and incorporating Promoil cream into my skincare routine, I've experienced a remarkable transformation in my skin's health and appearance. 
	        </blockquote>
             </div>
           <div>
             <h6 className="text-lg font-semibold leading-none text-gray-400">Hiba</h6>
           </div>
         </div>
       </div>
    </div>
    </div>
                                   
  )
}

export default Testimonial