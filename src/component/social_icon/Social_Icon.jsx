
import "./style.css";
import {
    FaGithub,
    FaInstagram,
    FaFacebookF,
    FaLinkedin,
} from "react-icons/fa";

export const Socialicons = ({ socialprofils }) => {
    return (
        <div className="stick_follow_icon">
            <ul>
                {socialprofils.twitter && (
                    <li>
                        <a className="FaInstagram" href={socialprofils.twitter} target="_blank">
                            <FaInstagram />
                        </a>
                    </li>
                )}
                {socialprofils.github && (
                    <li>
                        <a className="FaGithub" href={socialprofils.github} target="_blank">
                            <FaGithub />
                        </a>
                    </li>
                )}
                {socialprofils.facebook && (
                    <li>
                        <a className="FaFacebookF" href={socialprofils.facebook} target="_blank">
                            <FaFacebookF />
                        </a>
                    </li>
                )}
                {socialprofils.linkedin && (
                    <li>
                        <a className="FaLinkedin" href={socialprofils.linkedin} target="_blank">
                            <FaLinkedin />
                        </a>
                    </li>
                )}
            </ul>
            <p className="socialProfileText">Follow Me</p>
        </div>
    );
};
