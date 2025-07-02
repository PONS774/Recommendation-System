// NavBar Component
import { Link } from "react-router-dom";
import "./styles/NavBarStyles.css";
import Logo from "./images/cine.png";

const NavBar = ({ isHome }) => {
    
    return (
        <div className="container header">
            <Link to="/ ">
                <img src={Logo} className="logo" alt="Coming soon.." />
            </Link>
            {/* if isHome then the button is the github button else its the home button*/}
            {isHome ? (
                <a href="/" className="header-btn1 bouncy">
                    <i className="fas fa-home"></i> Home
                </a>
            ) : (
                <a
                    href={"https://www.imdb.com/"}
                    target="_blank"
                    rel="noreferrer"
                    className="header-btn1 bouncy"
                >
                    <i className="fa-brands fa-imdb"></i> IMDb
                </a>
            )}
        </div>
    );
};

export default NavBar;
