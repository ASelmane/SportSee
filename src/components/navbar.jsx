import "../styles/css/navbar.css";
import yoga from "../assets/icones/yoga.svg";
import musculation from "../assets/icones/musculation.svg";
import velo from "../assets/icones/velo.svg";
import natation from "../assets/icones/natation.svg";

/**
* A vertical navbar component
* @returns A vertical navbar React Element.
*/
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-l">
                <a href="/">
                    <img src={yoga} alt="yoga" />
                </a>
                <a href="/">
                    <img src={natation} alt="natation" />
                </a>
                <a href="/">
                    <img src={velo} alt="velo" />
                </a>
                <a href="/">
                    <img src={musculation} alt="musculation" />
                </a>
            </div>
            <span>Copiryght, SportSee 2020</span>
        </div>
    );
}

export default Navbar;