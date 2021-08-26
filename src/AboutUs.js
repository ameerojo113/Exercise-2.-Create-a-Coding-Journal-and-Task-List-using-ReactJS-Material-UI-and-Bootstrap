import found from './Found.png';
import logo from './A2LLOGO.png';
import school from './SChool.jpg';

function AboutUs() {
    return (
        <>
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src={found}
                                alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>July 6, 1999</h4>
                                    <h4 className="subheading">Our Humble Beginnings</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">A2L Middle School was founded.</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={logo}
                                alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>November 8, 2000</h4>
                                    <h4 className="subheading">A school was born</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Bound to teach and educate middle schoolers that would mark the start of A2L
                                        Middle School.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={school}
                                alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>August 24, 2021</h4>
                                    <h4 className="subheading">Transition to Mother School</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">A2L Middle School has now open sister schools such as A2L Middle School Visayas, and A2L Middle School Mindanao.</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                   Enroll
                                    <br />
                                    Now!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
export default AboutUs;