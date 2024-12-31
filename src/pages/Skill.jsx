import { SectionHeader } from "../component/SectionHeader"

function Skill() {
    return (
        <section id="skills">
            <div className="container">
                <div className="row">
                    <SectionHeader sName={"Technical Skills"} color={"var(--primary)"} bgColor={"white"} uderlineWidth={"6rem"} />

                    <div className="text-center col-12 col-md-4 mt-3">
                        <h4 style={{ color: " rgb(255, 230, 0)" }}>
                            <ul>
                                <li className="drop-shadow">` C ` <sub><small className="round text-warning">( Lang )</small></sub></li>
                                <li className="drop-shadow">C++</li>
                                <li className="drop-shadow">JAVA</li>
                                <li className="drop-shadow">Python</li>
                                <li className="drop-shadow">C# <sub><small className="round text-danger">(Learning)</small></sub></li>
                            </ul>
                        </h4>
                    </div>
                    <div className="text-center col-12 col-md-4 mt-3">
                        <h4 className="text-light">
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>Bootstrap</li>
                                <li>jQuery</li>
                                <li>React</li>
                            </ul>
                        </h4>
                    </div>
                    <div className="text-center col-12 col-md-4 mt-3">
                        <h4 style={{ color: " rgb(255, 230, 0)" }}>
                            <ul>
                                <li>Git and GitHub</li>
                                <li>Node Js</li>
                                <li>Express <sub><small className="round" style={{ color: "rgb(7, 254, 40)" }}>With Node</small></sub>
                                </li>
                                <li>MongoDB <sub><small className="round" style={{ color: "rgb(7, 254, 40)" }}>With Node</small></sub>
                                </li>
                                <li>MySQL</li>
                                <li>Ms Access </li>
                            </ul>
                        </h4>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Skill
