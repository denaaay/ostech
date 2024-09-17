import Home from "../components/sections/Home";
import Navbar from "../components/sections/Navbar";

function Landing() {
    return(
        <div className="w-screen h-max">
            <Navbar />
            <Home />
        </div>
    );
}

export default Landing;