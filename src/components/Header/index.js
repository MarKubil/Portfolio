import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"
import image from "../../assets/img/logo.png"
import NavTabs from '../NavBar/NavTabs';



function Header() {
    return (
        <header className="container-fluid">
            <div className="header">
            <div id="logo">
                <div id="outer">
                    <div id="inner">
                        <img className="img-fluid box" id="img" alt="profile" src={image} />
                    </div>
                </div>
            </div>
            <NavTabs />
            </div>
        </header>
    )
};

export default Header;