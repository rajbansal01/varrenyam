import AboutUsImage from '../Assets/aboutUs.png'
import TickGreen from '../Assets/tickGreen.png'
import TickWhite from '../Assets/tickWhite.png'

function AboutUs(){
    return (
        <div className="about-us">
            <div className="container">
                {/* <h2>About <span>Us</span></h2> */}
            </div>
            <div className="container">
                    <div className="row">
                        <div className="col-lg-4 ">
                        <div className="about-us-image">
                <img src={AboutUsImage} alt="" />
              </div>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <div className="about-us-content">
                                <div className="vision" id="image-container">
                                <div className="row row-cols-2" >
                                {/* <img src={TickGreen} alt="" id="hover-image"/> */}
                                <h3>About Us</h3>
                                </div>
                                <span>Established in 2002, Varrenyam Consultants Pvt. Ltd. proudly operates in New Delhi and Mumbai.
                                    <br />
<span>Our track record speaks volumes as we consistently deliver tangible results and offer committed, implementable solutions to our diverse clientele.</span>

                                </span>
                                <br />
                                <span>With a focus on cost-effective and timely financial support, we boast strong affiliations with top legal firms, TAV Consultants, Valuers, IP Entities, Fund Houses, O&M service providers.....</span>
                                </div>
                                <br />

                                <div className="who-are-we" id="image-container">
                                <div className="row row-cols-2" >
                                {/* <img src={TickGreen} alt="" id="hover-image"/> */}
                                <h3>Vision</h3>
                                </div>
                                <span>To emerge as the premier ‘One Stop Financial Solution Provider' specializing in the resolution of distressed assets.
                                </span>
                                <br />
                                <span>Offering comprehensive expertise to navigate and optimize financial landscapes.</span>
                                </div>

                                
                {/* <button type="button" class="btn">Learn more</button> */}
                                

                            </div>

                        </div>

                    </div>
            </div>
        </div>
    )
}

export default AboutUs;