// import "../CSS/Main.css"


const EducationContent = (props) => {

    const { college, website, feild, board, percentage, passingOfYear, std, logo, status } = props.data
    return (
        <div id='educationContent' className='col-10 border text-center rounded my-3 mx-auto pt-3 pb-2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-2 eduLogo' >
                        <img id='profile-img' className="w-100" src={logo} alt="file not found" />
                    </div>
                    <div className='col-12 col-sm-7 pt-2'>
                        <h5>
                            <a href={website} target="_blank" rel="noreferrer">{college}</a>
                        </h5>
                        <h6>Board of <b>&ldquo;{board}&ldquo;</b></h6>

                    </div>
                    <div className='col-12 col-sm-3'>
                        <p>
                            {passingOfYear == "" ? " " : `Till ${passingOfYear} - `}  {status}<br /> <b>{std}  {feild}</b> <br /> {status == "Parsing" ? " " : `${percentage}%`}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EducationContent
