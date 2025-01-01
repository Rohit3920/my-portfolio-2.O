/* eslint-disable react/no-unknown-property */
// import skillClr from "../api/ProjectSkillColor.json"
export function ProjectContent(props) {
    const { data } = props

    return (

        <div className="text-center col-12 col-md-6 col-sm-6 mx-auto pb-3 mt-3">
            {
                <div id="project">
                    <h5 className="w-100">{data.name} <small>{ data.responsible ? "( Responsible )":"( Not-responsible )"}</small></h5>
                    <marquee scrollamount="3">{data.discription == "" ? "we have use this technology" : data.discription}</marquee>
                    <div>
                        {
                            data.useSkill.map((item, ind) => <span key={ind}
                                id="projectSkill" className={`btn border mx-1 mb-2 ${item}`}> @ {item}</span>)
                        }
                    </div>
                    <div className="col-12">
                        <a target="_blank"
                            href={data.gitRepo}>
                            <button id="gitRepoBtn">Git Repository</button>
                        </a>
                        {
                            data.url == "" ? <></> : <a target="_blank"
                                href={data.url}>
                                <button id="visitSiteBtn">Visit Us</button>
                            </a>
                        }
                    </div>
                </div>
            }
        </div>
    )
}