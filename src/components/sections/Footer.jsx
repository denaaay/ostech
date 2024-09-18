import OstechIcon from '../../assets/icon/ostechIcon.png';
import IconInstagram from '../../assets/icon/iconInstagram.png';
import IconWhatsapp from '../../assets/icon/iconWhatsapp.png';

function Footer() {
    return(
        <div className="w-screen h-max bg-[#2B2B2B] px-32 py-12 flex flex-col gap-16">
            {/* Header Footer */}
            <div className="w-full h-max flex justify-between items-center">
                <div className='w-max h-[50px]'>
                    <img src={OstechIcon} alt="ostechIcon.png" className='w-full h-full object-cover'/>
                </div>
                <div className='w-max h-max flex items-center text-xl gap-16 flex justify-center text-white font-thin'>
                    <p>Home</p>
                    <p>Service</p>
                    <p>Project</p>
                    <p>About Us</p>
                </div>
            </div>

            {/* Additional Content */}
            <div className='w-full h-max flex justify-between items-center'>
                <div className='w-full h-max flex flex-col items-start gap-4 font-primaryFont text-3xl text-white'>
                    <p>Improve Website Business With Us</p>
                    <p>Low <span className='text-secondaryColor'>Price</span>, High <span className='text-secondaryColor'>Quality</span>!</p>
                </div>

                {/* Follow Icon */}
                <div className='w-full h-max flex flex-col items-end gap-4 font-primaryFont text-3xl text-secondaryColor'>
                    <p>Follow Us</p>
                    <div className='w-max h-max flex gap-4'>
                        <div className='w-[40px]'>
                            <img src={IconInstagram} alt="iconInstagram.png" className='w-full h-full object-cover'/>
                        </div>
                        <div className='w-[40px]'>
                            <img src={IconWhatsapp} alt="iconWhatsapp.png" className='w-full h-full object-cover'/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Info */}
            <div className='w-full h-max flex flex-col items-center gap-2 font-primaryFont text-lg font-thin text-white opacity-50'>
                <p>Copyright 2024</p>
                <p>Orange Sphere Technology</p>
            </div>
        </div>
    );
}

export default Footer;