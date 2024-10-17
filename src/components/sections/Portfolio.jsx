import ArrowDown from '../../assets/icon/arrowDown.png';
import MojaveLogo from '../../assets/images/portfolios/mojave/mojaveLogo.png';
import SeenLogo from '../../assets/images/portfolios/seen/seenLogo.png';
import SkillearnLogo from '../../assets/images/portfolios/skillearn/skillearnLogo.png';
import UpcycleLogo from '../../assets/images/portfolios/upcycle/upcycleLogo.png';
import HacktivLogo from '../../assets/images/provenBy/hacktiv8Logo.png';
import MSIBSkilvulLogo from '../../assets/images/provenBy/msibSkilvulLogo.png';
import RuangguruLogo from '../../assets/images/provenBy/ruangguruLogo.png';
import GotoImpactLogo from '../../assets/images/provenBy/gotoImpactLogo.png';
import BluebirdLogo from '../../assets/images/provenBy/bluebirdLogo.png';

function Portfolio() {
    const provenList1 = [MojaveLogo, SeenLogo, SkillearnLogo, UpcycleLogo, HacktivLogo]
    const provenList2 = [MSIBSkilvulLogo, RuangguruLogo, GotoImpactLogo, BluebirdLogo]

    return (
        <div className="w-[90vw] h-max bg-[#2B2B2B] rounded-xl flex flex-col justify-start items-center p-16 gap-10">

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

            {/* Proven By & Client */}
            <div className='w-full h-max gap-12 flex flex-col justify-start items-center mt-12'>

                {/* Title Proven By & Client */}
                <div className='w-full h-max flex justify-center'>
                    <p className="font-secondaryFont text-white text-5xl mp:text-4xl">Our Client & proven by</p>
                </div>

                {/* Content Proven By & Client 1 */}
                <div className='w-[80%] h-max grid grid-cols-5 gap-16 items-center'>
                    {provenList1.map((data, index) => {
                        return <div key={index}>
                            <div className='w-full h-max'>
                                <img src={data} alt={`${data}.png`} className='w-full h-full object-cover'/>
                            </div>
                        </div>
                    })}
                </div>

                <div className='w-[80%] h-max grid grid-cols-4 gap-16 items-center'>
                    {provenList2.map((data, index) => {
                        return <div key={index}>
                            <div className='w-full h-max'>
                                <img src={data} alt={`${data}.png`} className='w-full h-full object-cover'/>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;