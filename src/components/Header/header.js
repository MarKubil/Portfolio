import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"
import image from "../../assets/img/logo.png"
import NavTabs from '../NavBar/NavTabs';



function Header() {
    return (
        <header className="container-fluid">
            
            <div id="logo">
                <div id="outer">
                    <div id="inner">
                        <img className="img-fluid box" id="img" alt="profile" src={image} />
                    </div>
                </div>
            </div>
            <div className="navigation mr-auto">
                <NavTabs />
            </div>

        </header>
    )
};

export default Header;