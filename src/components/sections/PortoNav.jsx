import { useNavigate } from "react-router-dom";
import Button from "../additional/Button";
import OstechIcon from '../../assets/icon/ostechIcon.png';

function PortoNav(props) {
    const navigate = useNavigate();

    return (
        <div className={`w-screen h-max fixed flex justify-between items-center font-primaryFont text-black py-6 px-12 z-50 ${props.scrolled && 'bg-black'} transition duration-500 ease-linear mp:px-4 mp:py-4`}>

            {/* Logo */}
            <div className='flex-1 h-max flex justify-start mp:justify-start mp:items-center'>
                <div className='w-max h-[50px] mp:h-full mp:w-[25vw]'>
                    <img src={OstechIcon} alt="ostechIcon.png" className='w-full h-full object-cover'/>
                </div>
            </div>

            {/* Navbar Button
            {window.matchMedia("(min-width: 1024px)").matches &&
                <div className="flex-[4] h-max flex items-center text-2xl gap-20 flex justify-center text-white">
                    <p onClick={navigate('/')}>Home</p>
                </div>
            } */}

            {/* Contact Us Button */}
            <div className='flex-1 h-max flex justify-end'>
                <Button title="CONTACT US" id='wa'/>
            </div>
        </div>
    );
}

export default PortoNav;