import Navbar from "./Navbar";
import Laptop from '../../assets/images/landingImage1.png';
import Ipad from '../../assets/images/landingImage2.png';
import Phone from '../../assets/images/landingImage3.png';
import Button from "../additional/Button";
import React, { useEffect, useState } from "react";

const Home = React.forwardRef((props, ref) => {
    const words = ['improve', 'scale up', 'build']
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((previndex) => (previndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [])

    return(
        <div className="w-screen h-screen bg-landingBackground bg-center bg-cover flex justify-center items-end mp:bg-black mp:bg-none mp:h-max" id={props.id} ref={ref}>
            {/* Landing Content */}
            <div className="w-[75vw] h-[90vh] py-8 flex flex-col justify-between items-center gap-4 mp:w-[90vw] mp:h-max mp:mt-24 mp:gap-10 mp:py-0">

                {/* Landing Tagline */}
                <div className="w-full h-max font-secondaryFont text-[84px] leading-none flex flex-col mp:text-[40px] mp:items-center">
                    <p><span className="bg-gradient-to-r from-white to-secondaryColor bg-clip-text text-transparent transition-all duration-500">{words[currentWordIndex]}</span> website business</p>
                    <p>with us.</p>
                </div>

                {/* Landing Main Content */}
                <div className="w-full flex-1 flex flex-col justify-between items-end relative mp:gap-10">
                    <div className="w-[73%] h-max flex justify-end font-secondaryFont text-2xl text-end mp:w-full mp:text-justify mp:text-lg mp:leading-8 mp:font-thin">
                        <p>At <span className="text-secondaryColor">Orange Sphere Technology</span>, we are a dedicated team of IT experts in web and mobile development, UI/UX design, and innovative solutions. We provide tailored services to help businesses succeed in the digital world.</p>
                    </div>
                    <div className="w-max h-max flex flex-col items-end gap-2 font-secondaryFont text-3xl text-end mp:text-2xl">
                        <p>Turning Ideas into Digital Realities.</p>
                        {/* <Button title="VIEW PORTFOLIOS"/> */}
                    </div>

                    {/* Additional Images */}
                    <div className="absolute w-[40%] h-full left-0 top-0 mp:hidden">
                        <div className="absolute w-full h-full">
                            <img src={Laptop} alt="landingImage1.png" className="w-max h-[80%] object-cover"/>
                        </div>

                        <div className="absolute w-full h-full flex justify-start items-end">
                            <div className="w-[58%] h-max">
                                <img src={Ipad} alt="landingImage2.png" className="w-full h-full object-cover"/>
                            </div>
                        </div>

                        <div className="absolute w-full h-full flex justify-end items-end">
                            <div className="w-[35%] h-max">
                                <img src={Phone} alt="landingImage3.png" className="w-full h-full object-cover"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Home;