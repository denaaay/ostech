import Home from "../components/sections/Home";
import Navbar from "../components/sections/Navbar";
import Service from "../components/sections/Service";

function Landing(props) {
    return(
        <div className="w-screen h-max">
            <Navbar scrolled={props.scrolled}/>
            <Home />
            <div className="w-screen h-max bg-black flex justify-center">
                <Service />
            </div>
        </div>
    );
}

export default Landing;