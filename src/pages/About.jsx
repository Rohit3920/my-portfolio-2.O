import { SectionHeader } from "../component/SectionHeader"
function About() {
    return (
        <section id="about" className="mt-5 pt-3">
            <div className="container">
                <div className="row">
                    <SectionHeader sName ={"About"} color = {"var(--dark)"} bgColor = {"gray"} uderlineWidth={"4rem"} />
                    <div className="col-12">
                        <ul className="content">
                            <li>I`m in the IT industry since 2019.</li>
                            <li>I have been working on different web technologies to build websites.</li>
                            <li>like eCommerce portals, portfolios, company websites, and much more. Technologies I`m
                                working with are HTML5, CSS3, JavaScript <small>(Basic, Advanced)</small>, Photoshop,
                                Coreldraw, Illustrator, Flash <small>(Basic)</small>.
                            </li>
                            <li>I have been use version control for <span className="text-warning border-bottom">Git</span> &
                                <span className="text-light border-bottom">GitHub.</span>
                            </li>
                            <li>I learn Databases <span className="text-warning border-bottom">MySQL</span> & <span
                                className="text-danger border-bottom">Ms Access</span></li>
                            <li>I like learning Freamworks, libraries as given
                                <ol className="ml-5" type="I">
                                    <li>Bootstrap 4 <small className="text-warning"> (CSS Framework)</small></li>
                                    <li>jquery <small className="text-danger">(JavaScript Framework)</small></li>
                                    <li>React <small className="text-warning">(JavaScript Library)</small></li>
                                    <li>SASS <small className="text-danger">(CSS Pre-processor)</small></li>

                                </ol>
                            </li>
                            <li>I like learning new technologies and using them in real-life projects. I`m a gaming freak.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default About
