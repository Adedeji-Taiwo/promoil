import { hash, arrow } from '../assets/header'
import { w11, w12, w13, w14, w15, w16, w17, w18, w19, w20, w21, w22 } from '../assets/header'

const Challenge = () => {
  return (
    <div className="relative container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700">
            <img src={arrow} alt="arrow" className='absolute w-full h-auto max-w-[80px] rotate-180 top-0 md:left-12'/>
			<div data-aos="flip-up" className="max-w-xl mx-auto text-center mt-24 ">
				<h1 className="flex flex-row items-center justify-center gap-0 font-bold text-navy my-3 md:text-3xl text-2xl"><img src={hash} alt="hash" className='w-full h-auto max-w-[50px]'/> <span className="">Naturally You!</span></h1>
				<p className="leading-relaxed text-gray-500 lg:text-base text-sm">A collection of 1000+ images uploaded by our customers that offer a more inclusive vision of beauty for all.</p>
			</div>
			

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={w11} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={w12} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={w13} alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={w14} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={w15} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={w16} alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={w17} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={w18} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={w19} alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={w20} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={w21} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={w22} alt="" />
        </div>
    </div>
</div>

		</div>
  )
}

export default Challenge