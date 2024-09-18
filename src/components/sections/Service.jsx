import { useEffect, useRef, useState } from "react";

function Service() {
    const divRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (divRef.current) {
              setDivHeight(divRef.current.clientHeight);
            }
          };
      
          updateHeight();
          window.addEventListener('resize', updateHeight);
      
          return () => {
            window.removeEventListener('resize', updateHeight);
          };
    }, []);

    return(
        <div className="w-[75vw] h-max flex flex-col justify-center items-center gap-10 mt-12">
            {/* Service Title */}
            <div className="w-full h-max font-secondaryFont text-[84px] leading-none flex justify-center">
                <p><span className="text-secondaryColor">our</span> service</p>
            </div>

            {/* Service Content */}
            <div className="w-full h-max flex justify-between items-start">
                {/* Service Web Dev */}
                <div className="flex-1 h-max flex flex-col">
                    <div className="w-full h-max flex flex-col justify-center items-center font-secondaryFont text-4xl">
                        <p>website</p>
                        <p>development</p>
                    </div>

                    <div ref={divRef} className="w-full h-max px-12 py-10 font-primaryFont text-2xl text-justify leading-10">
                        <p>We provide modern and responsive website development services. With the latest technology and user-friendly design, we ensure your website performs optimally on various devices, providing a seamless browsing experience for visitors.</p>
                    </div>
                </div>

                {/* Service UI/UX */}
                <div className="flex-1 h-max flex flex-col">
                    <div className="w-full h-max flex flex-col justify-center items-center font-secondaryFont text-4xl">
                        <p>ui/ux</p>
                        <p>design & prototype</p>
                    </div>

                    <div className="w-full px-12 py-10 font-primaryFont text-2xl text-justify leading-10 border-white border-l-[2px] border-r-[2px]" style={{ height: divHeight }}>
                        <p>We create interface designs that are intuitive and focused on user experience, ensuring every interaction feels easy and enjoyable, while reinforcing your brand identity.</p>
                    </div>
                </div>

                {/* Service Mobile Dev */}
                <div className="flex-1 h-max flex flex-col">
                    <div className="w-full h-max flex flex-col justify-center items-center font-secondaryFont text-4xl">
                        <p>mobile</p>
                        <p>development</p>
                    </div>

                    <div className="w-full h-max px-12 py-10 font-primaryFont text-2xl text-justify leading-10">
                        <p>We develop functional and user-friendly mobile applications for Android and iOS platforms. Our focus is on ensuring the app runs smoothly and provides an optimal user experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;