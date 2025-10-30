import { SectionHeader } from "../component/SectionHeader";

function About() {
    return (
        <section id="about" className="mt-5 pt-3">
            <div className="container">
                <div className="row">
                    <SectionHeader
                        sName={"About"}
                        color={"var(--text-color)"}
                        bgColor={"light"}
                        uderlineWidth={"4rem"}
                    />
                    <div className="col-12">
                        <ul className="content">
                            <li>
                                I’m a passionate <span className="text-warning">React</span> and 
                                <span className="text-danger"> MERN Stack Developer</span>, currently pursuing my 
                                <span className="text-light"> B.Tech in Computer Science and Engineering</span> 
                                from <span className="text-warning">Shivaji University</span>.
                            </li>

                            <li>
                                As an <span className="text-light">Alumni of ICRE, Gargoti</span>, 
                                I have developed a strong foundation in web development and problem-solving, 
                                and I’m eager to apply my knowledge in real-world projects.
                            </li>

                            <li>
                                I am actively seeking new opportunities in 
                                <span className="text-warning"> Web Development</span>, 
                                where I can contribute my skills and continue to grow as a developer.
                            </li>

                            <li>
                                Over the years, I’ve gained practical experience through internships with
                                <span className="text-light"> Labmentix</span>, 
                                <span className="text-warning"> Leosias Technologies</span>, 
                                <span className="text-danger"> Cognifyz Technologies</span>, 
                                <span className="text-light"> OctaNet Software Services</span>, and 
                                <span className="text-warning"> Internship Studio</span>. 
                                These experiences helped me strengthen my technical abilities and teamwork skills.
                            </li>

                            <li>
                                I specialize in building responsive and interactive web applications using 
                                <span className="text-warning"> React.js</span>, 
                                <span className="text-light"> Node.js</span>, 
                                <span className="text-danger"> Express.js</span>, 
                                <span className="text-warning"> MongoDB</span>, and 
                                <span className="text-light"> Tailwind CSS</span>.
                            </li>

                            <li>
                                I am also exploring <span className="text-warning">Artificial Intelligence</span> 
                                and its integration into modern web applications to create smarter, more efficient solutions.
                            </li>

                            <li>
                                I enjoy learning new technologies, improving my coding practices, 
                                and taking on creative challenges. My goal is to craft impactful digital experiences 
                                and grow as a full-stack developer in a dynamic, innovative environment.
                            </li>

                            <li>
                                Let’s connect and build something amazing together!
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
