import { SectionHeader } from "../component/SectionHeader"
import { ProjectContent } from "../component/ProjectContent"

function Project({myProjects}) {
    return (
        <section id="projectSection">
            <div className="container">
                <div className="row">
                    <div className="col-12 my-lg-5 m-sm-3 m-0 my-2">
                        <SectionHeader sName={"Projects"} color={"dark"} bgColor={"gray"} uderlineWidth={"6rem"} />
                    </div>

                    {
                        myProjects.map((pjt, ind) => <ProjectContent key={ind} data={pjt} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Project
