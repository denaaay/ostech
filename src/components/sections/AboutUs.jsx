function AboutUs() {
    return(
        <div className="w-[75vw] h-max flex flex-col gap-8">
            {/* About Us */}
            <div className="w-full h-max flex flex-col items-start bg-[#2B2B2B] rounded-xl p-8 gap-8">
                <p className="font-secondaryFont text-white text-5xl">About Us<span className="text-secondaryColor">.</span></p>
                <div className="w-full h-max flex flex-col gap-4 font-primaryFont text-white text-2xl text-justify">
                    <p>At <span className="text-secondaryColor">Orange Sphere Technology</span>, we are a passionate team of IT professionals dedicated to helping businesses thrive in the digital world. Founded by experts in web and mobile development, UI/UX design, and innovative IT solutions, our agency offers a range of services tailored to meet the unique needs of each client.</p>
                    <p>Our mission is to deliver high-quality, scalable, and efficient solutions that enhance your online presence, streamline operations, and drive growth. With a commitment to creativity, technical excellence, and customer satisfaction, we work closely with you to turn ideas into reality, from custom websites and mobile apps to user-centric designs and IT consulting.</p>
                    <p>Driven by innovation and powered by a collaborative spirit, Orange Sphere Technology is here to elevate your digital experience and help your business succeed in today’s competitive market.</p>
                </div>
            </div>

            {/* Additional Info */}
            <div className="w-full h-max flex items-start gap-8">
                {/* Goals */}
                <div className="flex-1 h-max bg-customBgGradient rounded-xl border-white border-[1px] flex flex-col items-center p-8 gap-8">
                    <p className="font-secondaryFont text-white text-5xl">Goals<span className="text-secondaryColor">.</span></p>
                    <p className="font-primaryFont text-white text-2xl text-justify">Our goal is to empower businesses with innovative, tailored IT solutions. We focus on driving growth through expert web and mobile development, while delivering seamless user experiences with cutting-edge UI/UX design. Our commitment is to build lasting client partnerships by consistently delivering high-quality service and ensuring success in every project.</p>
                </div>

                {/* Values */}
                <div className="flex-1 h-max bg-customBgGradient rounded-xl border-white border-[1px] flex flex-col items-center p-8 gap-8">
                    <p className="font-secondaryFont text-white text-5xl">Values<span className="text-secondaryColor">.</span></p>
                    <p className="font-primaryFont text-white text-2xl text-justify">We value <span className="text-secondaryColor">innovation</span> and strive to deliver cutting-edge solutions that drive client success. We are <span className="text-secondaryColor">client-centric</span>, tailoring each project to meet specific needs. With a commitment to <span className="text-secondaryColor">excellence</span>, we ensure the highest quality in every service we provide. Through <span className="text-secondaryColor">collaboration</span>, we build strong partnerships, always grounded in <span className="text-secondaryColor">integrity</span> and trust.</p>
                </div>

                {/* Team */}
                <div className="flex-1 h-max bg-customBgGradient rounded-xl border-white border-[1px] flex flex-col items-center p-8 gap-8">
                    <p className="font-secondaryFont text-white text-5xl">Team<span className="text-secondaryColor">.</span></p>
                    <p className="font-primaryFont text-white text-2xl text-justify">Our team consists of experienced professionals specializing in web and mobile development, as well as UI/UX design. Each member is an expert in their field, bringing a high level of skill and creativity to every project. Together, we collaborate closely to deliver solutions that align with our goals and values, ensuring the highest level of client satisfaction.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;