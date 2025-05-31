
import "./style.css";
import {
    FaGithub,
    FaInstagram,
    FaFacebookF,
    FaLinkedin,
    FaHackerrank
} from "react-icons/fa";

export const Socialicons = ({ socialprofils }) => {
    return (
        <div className="stick_follow_icon">
            <ul>
                {socialprofils.Instagram && (
                    <li>
                        <a className="FaInstagram" href={socialprofils.Instagram} target="_blank">
                            <FaInstagram />
                        </a>
                    </li>
                )}
                {socialprofils.Hackerrank && (
                    <li>
                        <a className="FaHackerrank" href={socialprofils.Hackerrank} target="_blank">
                            <FaHackerrank />
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
