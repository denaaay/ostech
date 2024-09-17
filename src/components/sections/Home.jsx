import Navbar from "./Navbar";
import Laptop from '../../assets/images/landingImage1.png';
import Ipad from '../../assets/images/landingImage2.png';
import Phone from '../../assets/images/landingImage3.png';

function Home() {
    return(
        <div className="w-screen h-screen bg-landingBackground bg-center bg-cover flex justify-center items-end">
            {/* Landing Content */}
            <div className="w-[75vw] h-[90vh] py-8 flex flex-col justify-between items-center gap-4">

                {/* Landing Tagline */}
                <div className="w-full h-max font-secondaryFont text-[84px] leading-none flex flex-col">
                    <p><span>improve</span> website business</p>
                    <p>with us.</p>
                </div>

                {/* Landing Main Content */}
                <div className="w-full flex-1 flex flex-col justify-between items-end relative">
                    <div className="w-[73%] h-max flex justify-end font-secondaryFont text-2xl text-end">
                        <p>At <span className="text-secondaryColor">Orange</span> Sphere Technology, we are a passionate team of IT professionals dedicated to helping businesses thrive in the digital world. Founded by experts in web and mobile development, UI/UX design, and innovative IT solutions, our agency offers a range of services tailored to meet the unique needs of each client.</p>
                    </div>
                    <div className="w-max h-max flex flex-col items-end gap-2 font-secondaryFont text-3xl text-end">
                        <p>Turning Ideas into Digital Realities.</p>
                        <button className='bg-transparent rounded-full border-[1px] border-white px-6 py-2 text-white text-xl opacity-80 font-primaryFont'>
                            VIEW PORTFOLIOS
                        </button>
                    </div>

                    {/* Additional Images */}
                    <div className="absolute w-[40%] h-full left-0 top-0">
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
}

export default Home;