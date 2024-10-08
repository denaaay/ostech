import React, { useEffect, useRef, useState } from "react";
import Button from "../additional/Button";
import ArrowDown from '../../assets/icon/arrowDown.png';

const Projects = React.forwardRef((props, ref) => {
    const scrollableRef = useRef(null);
    const thumbRef = useRef(null);
    const [thumbWidth, setThumbWidth] = useState(0);
    const [thumbPosition, setThumbPosition] = useState(0);
    const [divHeight, setDivHeight] = useState(0);

    useEffect(() => {
        const mobile = window.matchMedia("(max-width: 480px)").matches

        const updateHeight = () => {
            if (scrollableRef.current && !mobile) {
              setDivHeight(scrollableRef.current.clientHeight);
            } else if (mobile) {
                setDivHeight('max-content')
            }
          };
      
          updateHeight();
          window.addEventListener('resize', updateHeight);
      
          return () => {
            window.removeEventListener('resize', updateHeight);
          };
    }, []);

    useEffect(() => {
        const scrollable = scrollableRef.current;

        const updateThumbWidth = () => {
            const scrollWidth = scrollable.scrollWidth;
            const clientWidth = scrollable.clientWidth;
            const newThumbWidth = (clientWidth / scrollWidth) * 100;
            setThumbWidth(newThumbWidth);
        };

        const handleScroll = () => {
            const scrollLeft = scrollable.scrollLeft;
            const scrollWidth = scrollable.scrollWidth;
            const clientWidth = scrollable.clientWidth;
            // const maxScrollLeft = scrollWidth - clientWidth;

            // Pastikan maxScrollLeft tidak negatif
            let rate = 0
            if (window.matchMedia("(max-width: 480px)").matches) {
                rate = 200
            } else {
                rate = 150
            }

            const newThumbPosition = (scrollLeft / scrollWidth) * rate;
            setThumbPosition(newThumbPosition);
        };

        updateThumbWidth();
        scrollable.addEventListener('scroll', handleScroll);

        window.addEventListener('resize', updateThumbWidth);

        return () => {
            scrollable.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateThumbWidth);
        };
    }, [thumbWidth]);

    return(
        <div className="w-full h-max pt-32 flex justify-center mp:pt-16" id={props.id} ref={ref}>
            <div className="w-[90vw] h-max bg-[#2B2B2B] rounded-lg flex flex-col p-14 gap-8 mp:p-4 mp:rounded">
                {/* Project Title */}
                <div className="w-full h-max font-primaryFont text-white text-6xl flex justify-between items-center mp:text-lg">
                    <div className="w-full h-max flex justify-start items-end gap-4 mp:gap-1">
                        <p>What we’ve develop</p>
                        <div className="w-[45px] h-max mp:w-[20px]">
                            <img src={ArrowDown} alt="arrowDown.png" className="w-full h-full object-cover"/>
                        </div>
                    </div>

                    <div className="relative w-[150px] h-2 bg-gray-400 rounded-md mp:w-[100px]">
                        {/* Scrollbar thumb */}
                        <div ref={thumbRef} className="absolute top-0 left-0 h-full bg-white rounded-lg" style={{ width: `${thumbWidth}%`, transform: `translateX(${thumbPosition}%)`, }}
                        ></div>
                    </div>
                </div>

                {/* Project Content */}
                <div className="w-full h-max flex gap-10 mp:flex-col mp:gap-4">
                    {/* Project Content Detail */}
                    <div className="w-[300px] flex flex-col justify-between items-start mp:w-full" style={{ height: divHeight }}>
                        {/* <Button title='GO MORE'/> */}
                        <div></div>
                        <p className="font-primaryFont text-xl text-justify mp:text-base mp:font-thin">Your Vision Deserves a Platform. We Create Custom Websites that Reflect Your Brand, Engage Your Audience, and Propel Your Business Forward.</p>
                    </div>

                    {/* Project Content List */}
                    <div ref={scrollableRef} className="flex-1 h-max overflow-x-auto flex gap-8 mp:gap-4" style={{scrollbarWidth: 'none'}}>

                        <div className="min-w-[300px] max-w-[300px] h-max bg-white rounded-xl p-4 mp:p-2 mp:rounded mp:min-w-[150px] mp:max-w-[150px]">
                            <div className="w-full h-max flex flex-col items-center gap-6 mp:gap-3">
                                <div className="w-full h-max flex flex-col items-center gap-2 mp:gap-1">
                                    <p className="font-secondaryFont text-black text-lg">Mojave</p>
                                    <div className="w-full h-[20vh] bg-mojaveBackground bg-center bg-cover rounded-md mp:h-[10vh] mp:rounded"></div>
                                </div>
                                <p className="font-primaryFont text-black text-lg text-center mp:text-xs">We designed and built a company website for Mojave Home Collections.</p>
                            </div>
                        </div>

                        <div className="min-w-[300px] max-w-[300px] h-max bg-white rounded-xl p-4 mp:p-2 mp:rounded mp:min-w-[150px] mp:max-w-[150px]">
                            <div className="w-full h-max flex flex-col items-center gap-6 mp:gap-3">
                                <div className="w-full h-max flex flex-col items-center gap-2 mp:gap-1">
                                    <p className="font-secondaryFont text-black text-lg">upcycle</p>
                                    <div className="w-full h-[20vh] bg-upcycleBackground bg-center bg-cover rounded-md mp:h-[10vh] mp:rounded"></div>
                                </div>
                                <p className="font-primaryFont text-black text-lg text-center mp:text-xs">We designed and built a website for UpCycle, a brand new waste bank.</p>
                            </div>
                        </div>

                        <div className="min-w-[300px] max-w-[300px] h-max bg-white rounded-xl p-4 mp:p-2 mp:rounded mp:min-w-[150px] mp:max-w-[150px]">
                            <div className="w-full h-max flex flex-col items-center gap-6 mp:gap-3">
                                <div className="w-full h-max flex flex-col items-center gap-2 mp:gap-1">
                                    <p className="font-secondaryFont text-black text-lg">Skillearn</p>
                                    <div className="w-full h-[20vh] bg-skillearnBackground bg-center bg-cover rounded-md mp:h-[10vh] mp:rounded"></div>
                                </div>
                                <p className="font-primaryFont text-black text-lg text-center mp:text-xs">We designed a mobile app ui/ux for Skillearn, an app for learning online.</p>
                            </div>
                        </div>

                        <div className="min-w-[300px] max-w-[300px] h-max bg-white rounded-xl p-4 mp:p-2 mp:rounded mp:min-w-[150px] mp:max-w-[150px]">
                            <div className="w-full h-max flex flex-col items-center gap-6 mp:gap-3">
                                <div className="w-full h-max flex flex-col items-center gap-2 mp:gap-1">
                                    <p className="font-secondaryFont text-black text-lg">Support.in</p>
                                    <div className="w-full h-[20vh] bg-supportinBackground bg-center bg-cover rounded-md mp:h-[10vh] mp:rounded"></div>
                                </div>
                                <p className="font-primaryFont text-black text-lg text-center mp:text-xs">We designed the UI/UX design for Support.in, a mental health app.</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Projects;