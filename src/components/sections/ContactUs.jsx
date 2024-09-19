import { useEffect, useRef, useState } from "react";

function ContactUs() {
    const buttonRef = useRef(null);
    const divRef = useRef(null);
    const [buttonWidth, setButtonWidth] = useState(0);
    const [divHeight, setDivHeight] = useState(0);

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

    return(
        <div className="w-[90vw] h-max flex flex-col bg-white rounded-xl">
            {/* Contact Us Title */}
            <div className="w-full h-max rounded-t-xl bg-[#2B2B2B] flex flex-col items-center gap-8 text-white p-10">
                <p className="font-secondaryFont text-6xl">have a big idea?</p>
                <p className="font-primaryFont text-4xl">Tell us about it.</p>
            </div>

            {/* Form Input for Contact */}
            <form>
                <div className="w-full h-max p-10 flex justify-between items-start gap-8">
                    <div className="flex-1 flex flex-col items-start justify-between" style={{ height: divHeight }}>
                        <div className="w-full h-max flex flex-col items-start gap-4">
                            {/* Input Name */}
                            <div className="w-full h-max flex flex-col items-start gap-1 font-primaryFont text-primaryColor text-2xl">
                                <label>Name & Company</label>
                                <input type="text" className="w-[50%] focus:outline-none" placeholder="Your Name"/>
                                <div className="w-[50%] h-[1px] bg-primaryColor"></div>
                            </div>

                            {/* Input Interest */}
                            <div className="w-full h-max flex flex-col items-start gap-2 font-primaryFont text-primaryColor text-2xl">
                                <p>I'm interest in...</p>
                                <div className="w-full h-max flex justify-start gap-2">
                                    <div className="w-max h-max px-6 py-2 rounded-full bg-primaryColor text-white text-xl font-primaryFont border-[1px] border-transparent">Web Development</div>

                                    <div className="w-max h-max px-6 py-2 rounded-full bg-white text-primaryColor text-xl font-primaryFont border-[1px] border-primaryColor">UI/UX Design</div>
                                </div>
                                <div className="w-max h-max px-6 py-2 rounded-full bg-white text-primaryColor text-xl font-primaryFont border-[1px] border-primaryColor">App Development</div>
                            </div>
                        </div>

                        {/* Input Idea */}
                        <div className="w-full h-max flex flex-col items-start gap-1 font-primaryFont text-primaryColor text-2xl">
                            <label>Tell us more about this project</label>
                            <input type="text" className="w-[80%] focus:outline-none font-thin" placeholder="Something about your idea"/>
                            <div className="w-[80%] h-[1px] bg-primaryColor"></div>
                        </div>
                    </div>


                    <div ref={divRef} className="flex-1 h-max flex flex-col items-start gap-4">
                        {/* Input Email */}
                        <div className="w-full h-max flex flex-col items-start gap-1 font-primaryFont text-primaryColor text-2xl">
                            <label>Your Email</label>
                            <input type="text" className="w-[50%] focus:outline-none" placeholder="dxxxxx@gmail.com"/>
                            <div className="w-[50%] h-[1px] bg-primaryColor"></div>
                        </div>

                        {/* Input Budget */}
                        <div className="w-full h-max flex flex-col items-start gap-2 font-primaryFont text-primaryColor text-2xl">
                            <p>Project Budget (Rupiah)</p>
                            <div className="w-max h-max px-6 py-2 rounded-full bg-primaryColor text-white text-xl font-primaryFont border-[1px] border-transparent">Under Rp5.000.000</div>
                            <div className="w-max h-max px-6 py-2 rounded-full bg-white text-primaryColor text-xl font-primaryFont border-[1px] border-primaryColor">Rp5.000.000 - Rp10.000.000</div>
                            <div className="w-max h-max px-6 py-2 rounded-full bg-white text-primaryColor text-xl font-primaryFont border-[1px] border-primaryColor">Rp10.000.000+</div>
                        </div>

                        {/* Submit Button */}
                        <div className="w-full h-max flex flex-col items-end font-primaryFont text-primaryColor text-2xl gap-2">
                            <p ref={buttonRef}>SUBMIT YOUR BIG IDEA</p>
                            <button type="submit" className="py-3 flex justify-center rounded-full border-[2px] border-primaryColor bg-secondaryColor text-white" style={{ width: buttonWidth }}>Now !</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>  
    );
}

export default ContactUs;