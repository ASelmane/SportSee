import logo from '../assets/logo.svg';
import '../styles/css/header.css';


/**
* A header component with a horizontal navbar.
* @returns A header React Element.
*/
const Header = () => {
    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/">Profil</a></li>
                    <li><a href="/">Réglage</a></li>
                    <li><a href="/">Communauté</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;