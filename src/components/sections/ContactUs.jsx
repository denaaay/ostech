import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = React.forwardRef((props, ref) => {
    const buttonRef = useRef(null);
    const divRef = useRef(null);
    const [buttonWidth, setButtonWidth] = useState(0);
    const [divHeight, setDivHeight] = useState(0);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [interest, setInterest] = useState('');
    const [budget, setBudget] = useState('');
    const [message, setMessage] = useState('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('interest', interest);
    formData.append('budget', budget);
    formData.append('message', message);

    useEffect(() => {
        const updateButtonWidth = () => {
            if (buttonRef.current) {
                setButtonWidth(buttonRef.current.clientWidth);
            }
        };

        const updateDivHeight = () => {
            if (divRef.current) {
                setDivHeight(divRef.current.clientHeight);
            }
        };
      
        updateButtonWidth();
        window.addEventListener('resize', updateButtonWidth);

        updateDivHeight();
        window.addEventListener('resize', updateDivHeight);
        
        return () => {
            window.removeEventListener('resize', updateButtonWidth);
            window.removeEventListener('resize', updateDivHeight);
        };
    }, []);

    async function submitIdea(e) {
        e.preventDefault();

        if (name === '' || email === '') {
            toast.warning('Please Fill All Form', {
                autoClose: 3000,
                closeButton: false,
            })
            return;
        }

        if (interest === '') {
            toast.warning('Please Choose One of Our Services', {
                autoClose: 3000,
                closeButton: false
            })
            return;
        }

        if (budget === '') {
            toast.warning('Please Choose Your Budget', {
                autoClose: 3000,
                closeButton: false
            })
            return;
        }

        try {
            await fetch(
                import.meta.env.VITE_API_APPSCRIPT,{
                    method: 'POST',
                    mode: 'no-cors',
                    body: formData,
                }
            );
            setName('');
            setEmail('');
            setInterest('');
            setBudget('');
            setMessage('');

            toast.success('Success, We Will Send You an Email', {
                autoClose: 3000,
                closeButton: false
            })
        } catch (error) {
            toast.error(error, {
                autoClose: 3000,
                closeButton: false
            })
        }
    }

    const handleInterest = (e) => {
        if (e === 1) {
            setInterest('Web Development');
        } else if (e === 2) {
            setInterest('UI/UX Design');
        } else if (e ===  3) {
            setInterest('App Development');
        }
    }

    const handleBudget = (e) => {
        if (e === 1) {
            setBudget('Under Rp5.000.000')
        } else if (e === 2) {
            setBudget('Rp5.000.000 - Rp10.000.000')
        } else if (e === 3) {
            setBudget('Rp10.000.000+')
        }
    }

    return(
        <div className="w-full h-max pt-32 flex justify-center" id={props.id} ref={ref}>
            <div className="w-[90vw] h-max flex flex-col bg-white rounded-xl">
                {/* Contact Us Title */}
                <div className="w-full h-max rounded-t-xl bg-[#2B2B2B] flex flex-col items-center gap-8 text-white p-10">
                    <p className="font-secondaryFont text-6xl">have a big idea?</p>
                    <p className="font-primaryFont text-4xl">Tell us about it.</p>
                </div>

                {/* Form Input for Contact */}
                <form onSubmit={submitIdea}>
                    <div className="w-full h-max p-10 flex justify-between items-start gap-8">
                        <div className="flex-1 flex flex-col items-start justify-between" style={{ height: divHeight }}>
                            <div className="w-full h-max flex flex-col items-start gap-4">
                                {/* Input Name */}
                                <div className="w-full h-max flex flex-col items-start gap-1 font-primaryFont text-primaryColor text-2xl">
                                    <label>Name & Company</label>
                                    <input type="text" placeholder="Your Name" name="name" value={name} onChange={(e) => {setName(e.target.value)}} className="w-[50%] focus:outline-none text-[#6b6b6b]"/>
                                    <div className="w-[50%] h-[1px] bg-primaryColor"></div>
                                </div>

                                {/* Input Interest */}
                                <div className="w-full h-max flex flex-col items-start gap-2 font-primaryFont text-primaryColor text-2xl">
                                    <p>I'm interest in...</p>
                                    <div className="w-full h-max flex justify-start gap-2">
                                        <div className={`w-max h-max px-6 py-2 rounded-full text-xl font-primaryFont border-[1px] cursor-pointer hover:shadow-lg ${interest === 'Web Development' ? 'bg-primaryColor border-transparent text-white cursor-default' : 'bg-white border-primaryColor text-primaryColor'})`} onClick={() => handleInterest(1)}>Web Development</div>

                                        <div className={`w-max h-max px-6 py-2 rounded-full text-xl font-primaryFont border-[1px] cursor-pointer hover:shadow-lg ${interest === 'UI/UX Design' ? 'bg-primaryColor border-transparent text-white cursor-default' : 'bg-white border-primaryColor text-primaryColor'})`} onClick={() => {handleInterest(2)}}>UI/UX Design</div>
                                    </div>
                                    <div className={`w-max h-max px-6 py-2 rounded-full text-xl font-primaryFont border-[1px] cursor-pointer hover:shadow-lg ${interest === 'App Development' ? 'bg-primaryColor border-transparent text-white cursor-default' : 'bg-white border-primaryColor text-primaryColor'})`} onClick={() => {handleInterest(3)}}>App Development</div>
                                </div>
                            </div>

                            {/* Input Idea */}
                            <div className="w-full h-max flex flex-col items-start gap-1 font-primaryFont text-primaryColor text-2xl">
                                <label>Tell us more about this project</label>
                                <input type="text" name="message" value={message} onChange={(e) => {setMessage(e.target.value)}} className="w-full focus:outline-none font-thin text-[#6b6b6b]" placeholder="Something about your idea"/>
                                <div className="w-full h-[1px] bg-primaryColor"></div>
                            </div>
                        </div>


                        <div ref={divRef} className="flex-1 h-max flex flex-col items-start gap-4">
                            {/* Input Email */}
                            <div className="w-full h-max flex flex-col items-start gap-1 font-primaryFont text-primaryColor text-2xl">
                                <label>Your Email</label>
                                <input type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="w-[50%] focus:outline-none text-[#6b6b6b]" placeholder="dxxxxx@gmail.com"/>
                                <div className="w-[50%] h-[1px] bg-primaryColor"></div>
                            </div>

                            {/* Input Budget */}
                            <div className="w-full h-max flex flex-col items-start gap-2 font-primaryFont text-primaryColor text-2xl">
                                <p>Project Budget (Rupiah)</p>
                                <div className={`w-max h-max px-6 py-2 rounded-full text-xl font-primaryFont border-[1px] cursor-pointer hover:shadow-lg ${budget === 'Under Rp5.000.000' ? 'bg-primaryColor border-transparent text-white cursor-default' : 'bg-white border-primaryColor text-primaryColor'})`} onClick={() => handleBudget(1)}>Under Rp5.000.000</div>

                                <div className={`w-max h-max px-6 py-2 rounded-full text-xl font-primaryFont border-[1px] cursor-pointer hover:shadow-lg ${budget === 'Rp5.000.000 - Rp10.000.000' ? 'bg-primaryColor border-transparent text-white cursor-default' : 'bg-white border-primaryColor text-primaryColor'})`} onClick={() => {handleBudget(2)}}>Rp5.000.000 - Rp10.000.000</div>

                                <div className={`w-max h-max px-6 py-2 rounded-full text-xl font-primaryFont border-[1px] cursor-pointer hover:shadow-lg ${budget === 'Rp10.000.000+' ? 'bg-primaryColor border-transparent text-white cursor-default' : 'bg-white border-primaryColor text-primaryColor'})`} onClick={() => {handleBudget(3)}}>Rp10.000.000+</div>
                            </div>

                            {/* Submit Button */}
                            <div className="w-full h-max flex flex-col items-end font-primaryFont text-primaryColor text-2xl gap-2">
                                <p ref={buttonRef}>SUBMIT YOUR BIG IDEA</p>
                                <button type="submit" className="py-3 flex justify-center rounded-full border-[2px] border-primaryColor bg-secondaryColor text-white hover:bg-white hover:border-secondaryColor hover:text-secondaryColor hover:shadow-lg" style={{ width: buttonWidth }}>Now !</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>  
    );
});

export default ContactUs;