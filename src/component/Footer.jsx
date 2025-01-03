import { SocialMediaIcon } from "./socialMediaIcon"
function Footer({SocialMedia}) {
    return (
            <footer className="footer text-center bg-body-tertiary">
                <div className="container pt-4">
                    <div className="mb-2">
                        {
                            SocialMedia.map((icon)=> <SocialMediaIcon key={icon.name} icon = {icon}/> )
                        }
                    </div>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color : "var(--text-color-2)"}}>
                    ©My-Portfolio
                    <a className="text-body" href="https://mdbootstrap.com/"> rohitnittawadekar07@gmail.com</a>
                </div>
            </footer>
    )
}

export default Footer