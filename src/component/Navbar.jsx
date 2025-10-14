import Themetoggle from "./themetoggle"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <a className="navbar-brand " style={{ marginLeft: "2rem" }}>My portfolio 2.0</a>
            <span className="order-lg-3 ml-auto mr-3"> <Themetoggle /></span>
            <button className="navbar-toggler order-lg-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fa-solid fa-bars"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#profile-section">Profile <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about-section">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects-section">My Projects</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            More
                        </a >
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#education-section">Education</a>
                            <a className="dropdown-item" href="#internship-course-section">Certificate</a>
                            <a className="dropdown-item" href="#skills-section">Skills</a>
                            <a className="dropdown-item" href="#">Hobies</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#contact-us-section">Contact Us</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar