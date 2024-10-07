import OstechIcon from '../../assets/icon/ostechIcon.png';
import Button from '../additional/Button';
import SidebarButton from '../../assets/icon/sidebarButton.png';

function Navbar(props) {
    return(
        <div className={`w-screen h-max fixed flex justify-between items-center font-primaryFont text-black py-6 px-12 z-50 ${props.scrolled && 'bg-black'} transition duration-500 ease-linear mp:px-4 mp:py-4`}>
            {/* Sidebar Button on Mobile
            {window.matchMedia("(max-width: 480px)").matches && 
                <div className='flex-1 h-max flex justify-start'>
                    <div className='w-max h-[35px]'>
                        <img src={SidebarButton} alt="sidebarButton.png" className='w-full h-full object-cover'/>
                    </div> 
                </div>
            } */}

            {/* Logo */}
            <div className='flex-1 h-max flex justify-start mp:justfify-center'>
                <div className='w-max h-[50px] mp:h-[35px]'>
                    <img src={OstechIcon} alt="ostechIcon.png" className='w-full h-full object-cover'/>
                </div>
            </div>

            {/* Navbar Button */}
            {window.matchMedia("(min-width: 1024px)").matches &&
                <div className="flex-[4] h-max flex items-center text-2xl gap-20 flex justify-center text-white">
                    <a className={`${props.visibleSection === 'home' ? 'opacity-100 cursor-default' : 'opacity-50'} cursor-pointer hover:opacity-100 transition duration-500 decoration-none`} href='#home'>Home</a>
                    <a className={`${props.visibleSection === 'service' ? 'opacity-100 cursor-default' : 'opacity-50'} cursor-pointer hover:opacity-100 transition duration-500 decoration-none`} href='#service'>Service</a>
                    <a className={`${props.visibleSection === 'projects' ? 'opacity-100 cursor-default' : 'opacity-50'} cursor-pointer hover:opacity-100 transition duration-500 decoration-none`} href='#projects'>Projects</a>
                    <a className={`${props.visibleSection === 'aboutUs' ? 'opacity-100 cursor-default' : 'opacity-50'} cursor-pointer hover:opacity-100 transition duration-500 decoration-none`} href='#aboutUs'>About Us</a>
                </div>
            }
            
            {/* Contact Us Button */}
            <div className='flex-1 h-max flex justify-end'>
                <Button title="CONTACT US" id='wa'/>
            </div>
        </div>
    );
}

export default Navbar;