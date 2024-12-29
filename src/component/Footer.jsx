import { SocialMediaIcon } from "./socialMediaIcon"
import icon from "../api/socialMedia.json"
function Footer() {
    return (
        <div className="footer">
            <footer className="text-center bg-body-tertiary">
                <div className="container pt-4">
                    <section className="mb-2">
                        {
                            icon.map((icon)=> <SocialMediaIcon key={icon.name} icon = {icon}/> )
                        }
                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    ©My-Portfolio
                    <a className="text-body" href="https://mdbootstrap.com/"> rohitnittawadekar07@gmail.com</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer