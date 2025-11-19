export function ProjectContent(props) {
    const { data } = props

    return (
        <div className="col-12 col-md-6 col-sm-6 mx-auto pb-4 mt-4">
            <div id="project" className="p-4 rounded-4 h-100 d-flex flex-column justify-content-between text-white shadow-lg" style={{ backgroundColor: '#d7ebff', border: '1px solid #343a40' }}>
                <div className="text-center">
                    <h3 className="mb-1 text-primary">
                        {data.name}
                    </h3>

                    <span className={`badge mb-3 ${data.responsible ? "bg-success" : "bg-warning text-dark"}`}>
                        {data.responsible ? "responsible" : "not responsible"}
                    </span>

                    <p className="text-dark small mb-3">
                        {data.discription === "" ? "Core technologies used in this project." : data.discription}
                    </p>

                    <div className="mb-4 d-flex flex-wrap justify-content-center">
                        {
                            data.useSkill.map((item, ind) =>
                                <span key={ind}
                                    id="projectSkill"
                                    className={`badge bg-dark text-info border border-info me-2 mb-2 px-4 py-2`}
                                    style={{ fontSize: '0.8rem' }}>
                                    # {item}
                                </span>
                            )
                        }
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-auto pt-2">
                    <a target="_blank"
                        rel="noopener noreferrer"
                        href={data.gitRepo}
                        className="text-decoration-none me-3">
                        <button
                            id="gitRepoBtn"
                            className="btn btn-sm btn-outline-info">
                            <i className="bi bi-github me-1"></i> Repository
                        </button>
                    </a>

                    {
                        data.url !== "" &&
                        <a target="_blank"
                            rel="noopener noreferrer"
                            href={data.url}
                            className="text-decoration-none">
                            <button
                                id="visitSiteBtn"
                                className="btn btn-sm btn-primary">
                                <i className="bi bi-globe me-1"></i> Live Site
                            </button>
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}