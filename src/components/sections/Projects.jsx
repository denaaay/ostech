import { useEffect, useRef, useState } from "react";
import Button from "../additional/Button";
import ArrowDown from '../../assets/icon/arrowDown.png';

function Projects() {
    const divRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (divRef.current) {
              setDivHeight(divRef.current.clientHeight);
            }
          };
      
          updateHeight();
          window.addEventListener('resize', updateHeight);
      
          return () => {
            window.removeEventListener('resize', updateHeight);
          };
    }, []);

    return(
        <div className="w-[90vw] h-max bg-[#2B2B2B] rounded-lg flex flex-col p-14 gap-8">
            {/* Project Title */}
            <div className="w-full h-max font-primaryFont text-white text-6xl flex gap-4 items-end">
                <p>What we’ve develop</p>
                <div className="w-[45px] h-max">
                    <img src={ArrowDown} alt="arrowDown.png" className="w-full h-full object-cover"/>
                </div>
            </div>

            {/* Project Content */}
            <div className="w-full h-max flex gap-10">
                {/* Project Content Detail */}
                <div className="w-[300px] flex flex-col justify-between items-start" style={{ height: divHeight }}>
                    <Button title='GO MORE'/>
                    <p className="font-primaryFont text-xl text-justify">Your Vision Deserves a Platform. We Create Custom Websites that Reflect Your Brand, Engage Your Audience, and Propel Your Business Forward.</p>
                </div>

                {/* Project Content List */}
                <div ref={divRef} className="flex-1 h-max overflow-x-auto flex gap-8">
                    <div className="min-w-[300px] max-w-[300px] h-max bg-white rounded-xl p-4">
                        <div className="w-full h-max flex flex-col items-center gap-6">
                            <div className="w-full h-max flex flex-col items-center gap-2">
                                <p className="font-secondaryFont text-black text-2xl">Mojave</p>
                                <div className="w-full h-[20vh] bg-landingBackground bg-center bg-cover"></div>
                            </div>
                            <p className="font-primaryFont text-black text-lg text-center">Your Vision Deserves a Platform. We Create Custom Websites</p>
                        </div>
                    </div>

                    <div className="min-w-[300px] max-w-[300px] h-max bg-white rounded-xl p-4">
                        <div className="w-full h-max flex flex-col items-center gap-6">
                            <div className="w-full h-max flex flex-col items-center gap-2">
                                <p className="font-secondaryFont text-black text-2xl">Mojave</p>
                                <div className="w-full h-[20vh] bg-landingBackground bg-center bg-cover"></div>
                            </div>
                            <p className="font-primaryFont text-black text-lg text-center">Your Vision Deserves a Platform. We Create Custom Websites</p>
                        </div>
                    </div>

                    <div className="min-w-[300px] max-w-[300px] h-max bg-white rounded-xl p-4">
                        <div className="w-full h-max flex flex-col items-center gap-6">
                            <div className="w-full h-max flex flex-col items-center gap-2">
                                <p className="font-secondaryFont text-black text-2xl">Mojave</p>
                                <div className="w-full h-[20vh] bg-landingBackground bg-center bg-cover"></div>
                            </div>
                            <p className="font-primaryFont text-black text-lg text-center">Your Vision Deserves a Platform. We Create Custom Websites</p>
                        </div>
                    </div>

                    <div className="min-w-[300px] max-w-[300px] h-max bg-white rounded-xl p-4">
                        <div className="w-full h-max flex flex-col items-center gap-6">
                            <div className="w-full h-max flex flex-col items-center gap-2">
                                <p className="font-secondaryFont text-black text-2xl">Mojave</p>
                                <div className="w-full h-[20vh] bg-landingBackground bg-center bg-cover"></div>
                            </div>
                            <p className="font-primaryFont text-black text-lg text-center">Your Vision Deserves a Platform. We Create Custom Websites</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default Projects;