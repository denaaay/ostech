import Home from "../components/sections/Home";
import Navbar from "../components/sections/Navbar";
import Projects from "../components/sections/Projects";
import Service from "../components/sections/Service";

function Landing(props) {
    return(
        <div className="w-screen h-max">
            <Navbar scrolled={props.scrolled}/>
            <Home />
            <div className="w-screen h-max bg-black flex flex-col justify-start items-center gap-12">
                <Service />
                <Projects />
            </div>
        </div>
    );
}

export default Landing;