import OstechIcon from '../../assets/icon/ostechIcon.png';
import IconInstagram from '../../assets/icon/iconInstagram.png';
import IconWhatsapp from '../../assets/icon/iconWhatsapp.png';

function Footer() {
    const handleClick = (e) => {
        if (e === 'ig') {
            window.open('https://www.instagram.com/os.tech_official/', '_blank');
        } else if (e === 'wa') {
            window.open('https://wa.me/+6281298673656', '_blank');
        } else if (e === 'pricing') {
            window.open('https://www.canva.com/design/DAGP5NcQG2A/2fEL7LVwUBQRN1YAIwsxEg/view?utm_content=DAGP5NcQG2A&utm_campaign=designshare&utm_medium=link&utm_source=editor', '_blank')
        } else if (e === 'fiverr') {
            window.open('https://www.fiverr.com/s/akdlYGg', '_blank')
        }
    }

    return(
        <div className="w-screen h-max bg-[#2B2B2B] px-32 py-12 flex flex-col gap-16 mp:p-6 mp:gap-6">
            {/* Header Footer */}
            <div className="w-full h-max flex justify-between items-center">
                <div className='w-max h-[50px] mp:h-[25px]'>
                    <img src={OstechIcon} alt="ostechIcon.png" className='w-full h-full object-cover'/>
                </div>
                <div className='w-max h-max flex items-center text-xl gap-16 flex justify-center text-white font-thin mp:gap-3 mp:text-xs'>
                    <p className='cursor-pointer opacity-50 hover:opacity-100' onClick={() => handleClick('pricing')}>Pricing</p>
                    <p className='cursor-pointer opacity-50 hover:opacity-100' onClick={() => handleClick('fiverr')}>Our Gig on Fiverr</p>
                </div>
            </div>

            {/* Additional Content */}
            <div className='w-full h-max flex justify-between items-center mp:gap-8'>
                <div className='w-full h-max flex flex-col items-start gap-4 font-primaryFont text-3xl text-white mp:text-sm mp:gap-1 mp:w-max'>
                    <p>Improve Website Business With Us</p>
                    <p>Low <span className='text-secondaryColor'>Price</span>, High <span className='text-secondaryColor'>Quality</span>!</p>
                </div>

                {/* Follow Icon */}
                <div className='w-full h-max flex flex-col items-end gap-4 font-primaryFont text-3xl text-secondaryColor mp:gap-2 mp:text-sm mp:w-max'>
                    <p>Follow Us</p>
                    <div className='w-max h-max flex gap-4 mp:gap-2'>
                        <div className='w-[40px] cursor-pointer opacity-50 hover:opacity-100 mp:w-[20px] mp:h-max' onClick={() => {handleClick('ig')}}>
                            <img src={IconInstagram} alt="iconInstagram.png" className='w-full h-full object-cover'/>
                        </div>
                        <div className='w-[40px] cursor-pointer opacity-50 hover:opacity-100 mp:w-[20px] mp:h-max' onClick={() => {handleClick('wa')}}>
                            <img src={IconWhatsapp} alt="iconWhatsapp.png" className='w-full h-full object-cover'/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Info */}
            <div className='w-full h-max flex flex-col items-center gap-2 font-primaryFont text-lg font-thin text-white opacity-50 mp:text-xs mp:gap-1'>
                <p>Copyright 2024</p>
                <p>Orange Sphere Technology</p>
            </div>
        </div>
    );
}

export default Footer;