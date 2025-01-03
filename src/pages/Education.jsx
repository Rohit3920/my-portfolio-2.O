import EducationContent from "../Component/EducationContent"
import { SectionHeader } from '../component/SectionHeader'

const Education = ({education}) => {

    return (
        <section className='Education'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="col-12 my-4">
                            <SectionHeader sName={"Education"} color={" var(--text-color-)"} bgColor={"gray"} uderlineWidth={"8rem"} />
                        </div>
                    </div>
                    <div className='col-12 mb-5'>
                        <div className='row'>
                            {
                                education.map((data, i) => {
                                    return (
                                        <EducationContent key={i} data={data} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
