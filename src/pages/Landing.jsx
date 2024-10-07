import { act, useEffect, useRef, useState } from "react";
import AboutUs from "../components/sections/AboutUs";
import ContactUs from "../components/sections/ContactUs";
import Footer from "../components/sections/Footer";
import Home from "../components/sections/Home";
import Navbar from "../components/sections/Navbar";
import Projects from "../components/sections/Projects";
import Service from "../components/sections/Service";
import Testimonial from "../components/sections/Testimonial";
import CommingSoon from "../components/additional/CommingSoon";

function Landing(props) {
    const [visibleSections, setVisibleSections] = useState({});

    const homeRef = useRef(null);
    const serviceRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutUsRef = useRef(null);
    const contactUsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {// Log entry untuk debugging
                if (entry.isIntersecting) {
                  setVisibleSections((prev) => {
                    if (Array.isArray(prev)) {
                      return [...new Set([...prev, entry.target.id])];
                    }
                    return [entry.target.id];
                  });
                } else {
                  setVisibleSections((prev) => {
                    if (Array.isArray(prev)) {
                      return prev.filter((id) => id !== entry.target.id);
                    }
                    return prev;
                  });
                }
              });
            },
            { threshold: 0.1 }
          );
      
        const refs = [homeRef, serviceRef, projectsRef, aboutUsRef, contactUsRef];
        refs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });
      
        return () => {
            refs.forEach((ref) => {
              if (ref.current) observer.unobserve(ref.current);
            });
          };
    }, []);
    return(
        <div className="w-screen h-max">
            {window.matchMedia("(min-width: 480px) and (max-width: 1024px)").matches ? 
                <CommingSoon /> :
                <div className="w-screen h-max scroll-smooth">
                    <Navbar scrolled={props.scrolled} visibleSection={visibleSections[0]}/>
                    <Home id='home' ref={homeRef}/>
                    <div className="w-screen h-max bg-black flex flex-col justify-start items-center pb-32 mp:pb-16">
                        <Service id='service' ref={serviceRef}/>
                        <Projects id='projects' ref={projectsRef}/>
                        <AboutUs id='aboutUs' ref={aboutUsRef}/>
                        <Testimonial />
                        <ContactUs id='contactUs' ref={contactUsRef}/>
                    </div>
                    <Footer />
                </div>
            }
        </div>
    );
}

export default Landing;