import { useEffect, useRef, useState } from 'react';
import Star from '../../assets/icon/stars.png';

function Testimonial() {
    const divRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);
    const mobile = window.matchMedia("(max-width: 480px)").matches

    useEffect(() => {
        const updateHeight = () => {
            if (divRef.current && !mobile) {
              setDivHeight(divRef.current.clientHeight);
            } else if (mobile) {
                setDivHeight("max-content")
            }
          };
      
          updateHeight();
          window.addEventListener('resize', updateHeight);
      
          return () => {
            window.removeEventListener('resize', updateHeight);
          };
    }, []);

    return(
        <div className='w-full h-max pt-32 flex justify-center mp:pt-16'>
            <div className="w-[75vw] h-max flex flex-col justify-center items-center gap-10 mp:w-[90vw] mp:gap-4">
                {/* Testimonial Title */}
                <div className="w-full h-max font-secondaryFont text-[84px] leading-none flex justify-center mp:text-4xl">
                    <p><span className="text-secondaryColor">testi</span>monial</p>
                </div>

                {/* Testimonial Content */}
                <div ref={divRef} className="w-full h-max flex justify-between items-start gap-8 mp:gap-2">
                    <div className="flex-1 h-max p-8 bg-[#2b2b2b] rounded-lg flex flex-col justify-between items-start gap-8 mp:p-2 mp:gap-2 mp:rounded">
                        <div className="w-full h-max flex flex-col items-start gap-2">
                            <div className="w-full h-max">
                                <img src={Star} alt="stars.png" className='w-[35%] h-full object-cover mp:w-[60%]'/>
                            </div>
                            <p className='font-primaryFont text-white text-xl text-justify mp:hidden'>The team at Orange Sphere Technology is incredibly professional and responsive. span Our project was completed on time, and the results exceeded our expectations!"</p>
                        </div>

                        <div className='w-full h-max flex flex-col items-start gap-1 font-primaryFont text-white text-xl text-justify mp:text-xs'>
                            <p>F**** A***r</p>
                            <p className='opacity-60'>1 month ago</p>
                        </div>
                    </div>

                    <div className="flex-1 p-8 bg-[#2b2b2b] rounded-lg flex flex-col justify-between items-start gap-8 mp:p-2 mp:gap-2 mp:rounded" style={{ height: divHeight }}>
                        <div className="w-full h-max flex flex-col items-start gap-2">
                            <div className="w-full h-max">
                                <img src={Star} alt="stars.png" className='w-[35%] h-full object-cover mp:w-[60%]'/>
                            </div>
                            <p className='font-primaryFont text-white text-xl text-justify mp:hidden'>I'm impressed by the creativity and expertise of the team. Their UI/UX design is intuitive and visually appealing!</p>
                        </div>

                        <div className='w-full h-max flex flex-col items-start gap-1 font-primaryFont text-white text-xl text-justify mp:text-xs'>
                            <p>J***** F****</p>
                            <p className='opacity-60'>3 month ago</p>
                        </div>
                    </div>

                    <div className="flex-1 h-max p-8 bg-[#2b2b2b] rounded-lg flex flex-col justify-between items-start gap-8 mp:p-2 mp:gap-2 mp:rounded" style={{ height: divHeight }}>
                        <div className="w-full h-max flex flex-col items-start gap-2">
                            <div className="w-full h-max">
                                <img src={Star} alt="stars.png" className='w-[35%] h-full object-cover mp:w-[60%]'/>
                            </div>
                            <p className='font-primaryFont text-white text-xl text-justify mp:hidden'>Working with Orange Sphere Technology has been an outstanding experience. They truly listened to our needs and delivered the right solutions.</p>
                        </div>

                        <div className='w-full h-max flex flex-col items-start gap-1 font-primaryFont text-white text-xl text-justify mp:text-xs'>
                            <p>D*** F*****y</p>
                            <p className='opacity-60'>6 month ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;