import ArrowDown from '../../assets/icon/arrowDown.png';

function Portfolio() {
    return (
        <div className="w-[90vw] h-max bg-[#2B2B2B] rounded-xl flex flex-col justify-start items-center p-12 gap-10">

            {/* Title Content */}
            <div className="w-full h-max flex flex-col justify-between items-start gap-16 font-primaryFont">
                {/* Title */}
                <div className="w-full h-max flex justify-start items-end text-5xl gap-4 mp:gap-1">
                    <p>What we’ve develop</p>
                    <div className="w-[40px] h-max mp:w-[20px]">
                        <img src={ArrowDown} alt="arrowDown.png" className="w-full h-full object-cover"/>
                    </div>
                </div>

                {/* Description */}
                <div className='w-[50%]'>
                    <p className="font-primaryFont text-xl text-justify leading-10 mp:text-base mp:font-thin">Your Vision Deserves a Platform. We Create Custom Websites that Reflect Your Brand, Engage Your Audience, and Propel Your Business Forward.</p>
                </div>
            </div>

            {/* Main Content */}
            <div className='w-full h-max grid grid-cols-3 gap-12'>

                <div className='w-full h-max bg-white rounded-xl p-6'>
                    <div className="w-full h-max flex flex-col items-center gap-6 mp:gap-3">
                        <div className="w-full h-max flex flex-col items-center gap-2 mp:gap-1">
                            <p className="font-secondaryFont text-black text-3xl">Mojave</p>
                            <div className="w-full h-[30vh] bg-mojaveBackground bg-center bg-cover rounded-md mp:h-[10vh] mp:rounded"></div>
                        </div>
                        <p className="font-primaryFont text-black text-xl text-center mp:text-xs">We designed and built a company website for Mojave Home Collections.</p>
                    </div>   
                </div>

                <div className='w-full h-max bg-white rounded-xl p-6'>
                    <div className="w-full h-max flex flex-col items-center gap-6 mp:gap-3">
                        <div className="w-full h-max flex flex-col items-center gap-2 mp:gap-1">
                            <p className="font-secondaryFont text-black text-3xl">upcycle</p>
                            <div className="w-full h-[30vh] bg-upcycleBackground bg-center bg-cover rounded-md mp:h-[10vh] mp:rounded"></div>
                        </div>
                        <p className="font-primaryFont text-black text-xl text-center mp:text-xs">We designed and built a website for UpCycle, a brand new waste bank.</p>
                    </div>   
                </div>

                <div className='w-full h-max bg-white rounded-xl p-6'>
                    <div className="w-full h-max flex flex-col items-center gap-6 mp:gap-3">
                        <div className="w-full h-max flex flex-col items-center gap-2 mp:gap-1">
                            <p className="font-secondaryFont text-black text-3xl">Skillearn</p>
                            <div className="w-full h-[30vh] bg-skillearnBackground bg-center bg-cover rounded-md mp:h-[10vh] mp:rounded"></div>
                        </div>
                        <p className="font-primaryFont text-black text-xl text-center mp:text-xs">We designed a mobile app ui/ux for Skillearn, an app for learning online.</p>
                    </div>   
                </div>

                <div className='w-full h-max bg-white rounded-xl p-6'>
                    <div className="w-full h-max flex flex-col items-center gap-6 mp:gap-3">
                        <div className="w-full h-max flex flex-col items-center gap-2 mp:gap-1">
                            <p className="font-secondaryFont text-black text-3xl">Support.in</p>
                            <div className="w-full h-[30vh] bg-supportinBackground bg-center bg-cover rounded-md mp:h-[10vh] mp:rounded"></div>
                        </div>
                        <p className="font-primaryFont text-black text-xl text-center mp:text-xs">We designed the UI/UX design for Support.in, a mental health app.</p>
                    </div>   
                </div>
            </div>

            {/* Proven By */}

        </div>
    );
}

export default Portfolio;