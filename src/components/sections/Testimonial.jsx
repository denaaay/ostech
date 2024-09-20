import Star from '../../assets/icon/stars.png';

function Testimonial() {
    return(
        <div className="w-[75vw] h-max flex flex-col justify-center items-center gap-10">
            {/* Testimonial Title */}
            <div className="w-full h-max font-secondaryFont text-[84px] leading-none flex justify-center">
                <p><span className="text-secondaryColor">testi</span>monial</p>
            </div>

            {/* Testimonial Content */}
            <div className="w-full h-max flex justify-between items-start gap-8">
                <div className="flex-1 h-max p-8 bg-[#2b2b2b] rounded-lg flex flex-col justify-between items-start gap-8">
                    <div className="w-full h-max flex flex-col items-start gap-2">
                        <div className="w-full h-max">
                            <img src={Star} alt="stars.png" className='w-[35%] h-full object-cover'/>
                        </div>
                        <p className='font-primaryFont text-white text-xl text-justify'>Good quality & love the service from the team they build. Good quality & love the service from the team they build.</p>
                    </div>

                    <div className='w-full h-max flex flex-col items-start gap-1 font-primaryFont text-white text-xl text-justify '>
                        <p>Farel Akbar Gunawan</p>
                        <p className='opacity-60'>1 month ago</p>
                    </div>
                </div>

                <div className="flex-1 h-max p-8 bg-[#2b2b2b] rounded-lg flex flex-col justify-between items-start gap-8">
                    <div className="w-full h-max flex flex-col items-start gap-2">
                        <div className="w-full h-max">
                            <img src={Star} alt="stars.png" className='w-[35%] h-full object-cover'/>
                        </div>
                        <p className='font-primaryFont text-white text-xl text-justify'>Good quality & love the service from the team they build. Good quality & love the service from the team they build.</p>
                    </div>

                    <div className='w-full h-max flex flex-col items-start gap-1 font-primaryFont text-white text-xl text-justify '>
                        <p>Farel Akbar Gunawan</p>
                        <p className='opacity-60'>1 month ago</p>
                    </div>
                </div>

                <div className="flex-1 h-max p-8 bg-[#2b2b2b] rounded-lg flex flex-col justify-between items-start gap-8">
                    <div className="w-full h-max flex flex-col items-start gap-2">
                        <div className="w-full h-max">
                            <img src={Star} alt="stars.png" className='w-[35%] h-full object-cover'/>
                        </div>
                        <p className='font-primaryFont text-white text-xl text-justify'>Good quality & love the service from the team they build. Good quality & love the service from the team they build.</p>
                    </div>

                    <div className='w-full h-max flex flex-col items-start gap-1 font-primaryFont text-white text-xl text-justify '>
                        <p>Farel Akbar Gunawan</p>
                        <p className='opacity-60'>1 month ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;