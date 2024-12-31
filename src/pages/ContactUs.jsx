import { SectionHeader } from "../component/SectionHeader"

function ContactUs() {
    return (
        <section id="contact">
            <div className="container pb-5">
                <div className="row text-center">
                    <div className="head col-12 my-lg-5 m-sm-3 m-0 my-2">
                        {/* <h1>Contact Us</h1> */}
                        <SectionHeader sName={"Contact Us"} color={"white"} bgColor={"gray"} uderlineWidth={"6rem"} />
                    </div>

                    <div className="col-12 col-lg-6 mb-5">
                        <div className=" w-75 border border-dark shadow  m-auto  p-5 text-center hover-shadow">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <h5>Let`s Talk</h5>
                            <strong>
                                +91 <a href="tel:8767100736">8767100736</a>
                            </strong>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 mb-5">
                        <div className=" w-75 border border-dark shadow m-auto p-5 text-center hover-shadow">
                            <i className="fa fa-envelope-open" aria-hidden="true"></i>
                            <h5>Drop a Line</h5>
                            <strong className="text-center">
                            <a
                                    href="mailto:rohitnittawadekar07@gmail.com?subject = Feedback&body = Message">rohitnittawadekar07</a>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactUs