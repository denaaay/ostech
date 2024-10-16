import CommingSoon from "../components/additional/CommingSoon";
import Portfolio from "../components/sections/Portfolio";
import PortoNav from "../components/sections/PortoNav";

function Portfolios(props) {
    return(
        <div className="w-screen h-max">
            {window.matchMedia("(max-width: 1024px)").matches ?
                <CommingSoon /> :
                <div className="w-screen h-max scroll-smooth">
                    <PortoNav scrolled={props.scrolled}/>
                    <div className="w-screen h-max flex justify-center bg-black py-32">
                        <Portfolio />
                    </div>
                </div>
            }
        </div>
    );
}

export default Portfolios;