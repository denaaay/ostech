import OstechIcon from '../../assets/icon/ostechIcon.png';
import Button from '../additional/Button';

function Navbar(props) {
    return(
        <div className={`w-screen h-max fixed flex justify-between items-center font-primaryFont text-black py-6 px-12 z-50 ${props.scrolled && 'bg-black'} transition duration-500 ease-linear`}>
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
                <Button title="CONTACT US"/>
            </div>
        </div>
    );
}

export default Navbar;