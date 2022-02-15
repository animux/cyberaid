import './Navbar.css';
import logo from '../../assets/cyberaidlogo.png';

const Navbar = () => {

    const openNav = () => {
        document.getElementById('myNav').style.height = '100%';
    }

    const closeNav = () => {
        document.getElementById('myNav').style.height = '0%';
    }

    return (
        <div id="navbarr">

            <div id="myNav" className="overlay">

                <a className="closebtn" onClick={closeNav}>&times;</a>
                <div className="overlay-content">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            
            {/* <span onClick={openNav}>open</span> */}

            <nav className="navbar navbar-expand-lg navbar-light w-100">
			
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <img src={logo} className="nav-img" alt="Cyberaid" width="120px"/>
                    </a>

                    <div className="navbar-icon" onClick={openNav}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>

                </div>
		    </nav>
        </div>

    )
};

export default Navbar;