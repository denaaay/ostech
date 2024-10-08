import React, { useEffect, useRef, useState } from "react";

const Service = React.forwardRef((props, ref) => {
    const divRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);

    useEffect(() => {
        const mobile = window.matchMedia("(max-width: 480px)").matches

        const updateHeight = () => {
            if (divRef.current && !mobile) {
              setDivHeight(divRef.current.clientHeight);
            } else if (mobile) {
                setDivHeight("max-content")
            }
          };
      
          updateHeight();
          window.addEventListener('resize', updateHeight);
      
          return () => {
            window.removeEventListener('resize', updateHeight);
          };
    }, []);

    return(
        <div className="w-full h-max pt-32 flex justify-center mp:pt-16" id={props.id} ref={ref}>
            <div className="w-[75vw] h-max flex flex-col justify-center items-center gap-10 mp:w-[90vw]">
                {/* Service Title */}
                <div className="w-full h-max font-secondaryFont text-[84px] leading-none flex justify-center mp:text-4xl">
                    <p><span className="text-secondaryColor">our</span> service</p>
                </div>

                {/* Service Content */}
                <div className="w-full h-max flex justify-between items-start mp:flex-col mp:gap-10">
                    {/* Service Web Dev */}
                    <div className="flex-1 h-max flex flex-col mp:flex-row mp:gap-6">
                        <div className="w-full h-max flex flex-col justify-center items-center font-secondaryFont text-4xl mp:text-lg mp:items-start mp:w-max">
                            <p>website</p>
                            <p>development</p>
                        </div>

                        <div ref={divRef} className="w-full h-max px-12 py-10 font-primaryFont text-2xl text-justify leading-10 mp:p-0 mp:leading-8 mp:font-thin mp:text-base">
                            <p>We provide modern and responsive website development services. With the latest technology and user-friendly design, we ensure your website performs optimally on various devices, providing a seamless browsing experience for visitors.</p>
                        </div>
                    </div>

                    {/* Service UI/UX */}
                    <div className="flex-1 h-max flex flex-col mp:flex-row mp:gap-6">
                        <div className="w-full h-max flex flex-col justify-center items-center font-secondaryFont text-4xl mp:text-lg mp:items-start mp:w-max">
                            <p>ui/ux</p>
                            <p>design & prototype</p>
                        </div>

                        <div className="w-full px-12 py-10 font-primaryFont text-2xl text-justify leading-10 border-white border-l-[2px] border-r-[2px] mp:border-none mp:p-0 mp:leading-8 mp:font-thin mp:text-base" style={{ height: divHeight }}>
                            <p>We create interface designs that are intuitive and focused on user experience, ensuring every interaction feels easy and enjoyable, while reinforcing your brand identity.</p>
                        </div>
                    </div>

                    {/* Service Mobile Dev */}
                    <div className="flex-1 h-max flex flex-col mp:flex-row mp:gap-6">
                        <div className="w-full h-max flex flex-col justify-center items-center font-secondaryFont text-4xl mp:text-lg mp:items-start mp:w-max">
                            <p>mobile</p>
                            <p>development</p>
                        </div>

                        <div className="w-full h-max px-12 py-10 font-primaryFont text-2xl text-justify leading-10 mp:p-0 mp:leading-8 mp:font-thin mp:text-base">
                            <p>We develop functional and user-friendly mobile applications for Android and iOS platforms. Our focus is on ensuring the app runs smoothly and provides an optimal user experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Service;