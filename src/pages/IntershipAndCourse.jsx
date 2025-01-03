import InternshipContent from "../component/InternshipContent";
import { SectionHeader } from "../component/SectionHeader";

function IntershipAndCourse({internshipAndCourse}) {

    return (
        <section className='internship'>
            <div className='container-fluid'>
                <div className='row py-5'>
                    <div className='col-12 pb-5'>
                    <SectionHeader sName ={"Intership & Trainee"} color = {"dark"} bgColor = {"gray"} uderlineWidth={"10rem"} />
                    </div>
                    <div className='col-12 text-center'>
                        {
                            internshipAndCourse.map((data, i) => {
                                return (
                                    <div key={i}>
                                        <InternshipContent data={data} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntershipAndCourse