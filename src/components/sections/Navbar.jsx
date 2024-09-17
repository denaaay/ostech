import OstechIcon from '../../assets/icon/ostechIcon.png';

function Navbar() {
    return(
        <div className="w-screen h-max fixed flex justify-between items-center font-primaryFont text-black py-6 px-12">
            {/* Logo */}
            <div className='flex-1 h-max flex justify-start'>
                <div className='w-max h-[50px]'>
                    <img src={OstechIcon} alt="ostechIcon.png" className='w-full h-full object-cover'/>
                </div>
            </div>

            {/* Navbar Button */}
            <div className="flex-[4] h-max flex items-center text-2xl gap-20 flex justify-center text-white">
                <p>Home</p>
                <p className='opacity-50'>Service</p>
                <p className='opacity-50'>Projects</p>
                <p className='opacity-50'>About Us</p>
            </div>
            
            {/* Contact Us Button */}
            <div className='flex-1 h-max flex justify-end'>
                <button className='bg-transparent rounded-full border-[1px] border-white px-6 py-2 text-white text-xl opacity-80'>
                    CONTACT US
                </button>
            </div>
        </div>
    );
}

export default Navbar;