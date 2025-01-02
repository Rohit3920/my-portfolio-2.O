// import "../CSS/Main.css"

const InternshipContent = (props) => {

    const { company, training, course, startDate, endDate, duration, logoURL } = props.data
    return (
        <div id='InternshipContent' className='row border border-promary rounded my-2'>
            <div className='InternLogo col-12 m-auto ml-lg-4 '>
                <img id='profile-img' className="w-100 m-2 border" src={logoURL} alt="file not found" />
            </div>

            <div className='InternContent col-12'>
                <h3>{company}</h3>
                <h5>{training} in <b>&ldquo;{course}&ldquo;</b></h5>
                <div id='duration'>
                    <h6>{startDate} - {
                        endDate}</h6>
                    <sub>({duration})</sub>
                </div>
            </div>
        </div>
    )
}

export default InternshipContent
