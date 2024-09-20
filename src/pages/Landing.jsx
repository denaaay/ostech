import AboutUs from "../components/sections/AboutUs";
import ContactUs from "../components/sections/ContactUs";
import Footer from "../components/sections/Footer";
import Home from "../components/sections/Home";
import Navbar from "../components/sections/Navbar";
import Projects from "../components/sections/Projects";
import Service from "../components/sections/Service";
import Testimonial from "../components/sections/Testimonial";

function Landing(props) {
    return(
        <div className="w-screen h-max">
            <Navbar scrolled={props.scrolled}/>
            <Home />
            <div className="w-screen h-max bg-black flex flex-col justify-start items-center gap-32 pb-32">
                <Service />
                <Projects />
                <AboutUs />
                <Testimonial />
                <ContactUs />
            </div>
            <Footer />
        </div>
    );
}

export default Landing;