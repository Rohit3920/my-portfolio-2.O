import "./Profile.css"
import { Typewriters } from "./Typewriters"
import { ProfileIcon } from "./ProfileIcon"
function Profile({ProfileData}) {

    // const {SocialMedia} = props.ProfileData.ProfileData.SocialMedia
    console.log(ProfileData.SocialMedia)

    return (
        <section id="profile">
            <div className="container">
                <div className="row pt-1">
                    <div className="col-12 col-lg-6 order-lg-2">
                        <div className="w-100 h-100">
                            <div id="blob" className="wrapper w-100 h-100">
                                <div className="box">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-lg-1">
                        <div id="profile-content" className="position-relative text-dark text-left pl-5">
                            <p className="text-left mt-0 pt-0 ml-4 m-0 mt-sm-5 pt-sm-4 pt-0">Hello, It`s Me</p>
                            <h2 className="pt-0 pt-lg-2 heading">Rohit Nittawadekar</h2>
                            <h4>And I`m a <Typewriters id="typed-text" className="text-primary" /></h4>
                            <p>This is my official portfolio website to showes all details and work experience for <br />
                                <span className="text-warning">WEB DEVELOPMENT</span>
                            </p>
                            <ul id="social-media">
                            {ProfileData.SocialMedia.map((social) =>
                            <ProfileIcon key={social.name} data = {social}  />
                            )}
                            </ul>
                            <a id="downloadCV" className="btn ml-5 mt-2 btn-danger mb-3 text-light border border-light"
                                href="./Assets/Download-Document/ROHIT-Resume23.pdf" download="Rohit Resume"
                                style={{ fontWeight: "600" }}>Download CV <i className="fa fa-download pl-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Profile