import AboutImage from "../Assets/aboutFront.png";
import "../About/about.css";
import WhoAreWe from "../Assets/whoAreWe.png";
import Vision from "../Assets/vision.png";
import Milestones from "../Assets/milestons.png";
import Industry1 from "../Assets/industry1.png";
import Industry2 from "../Assets/industry2.png";
import Industry3 from "../Assets/industry3.png";
import Industry4 from "../Assets/industry4.png";
import Served1 from "../Assets/served1.png";
import Served2 from "../Assets/served2.png";
import Served3 from "../Assets/served3.png";
import Served4 from "../Assets/served4.png";
import Served5 from "../Assets/served5.png";
import Served6 from "../Assets/served6.png";
import Served7 from "../Assets/served7.png";
import Served9 from "../Assets/served9.png";
import Served10 from "../Assets/served10.png";
import Served11 from "../Assets/served11.png";
import Served12 from "../Assets/served12.png";
import Served13 from "../Assets/served13.png";
import Served14 from "../Assets/served14.png";
import Served15 from "../Assets/served15.png";
import Served16 from "../Assets/served16.png";
import Served17 from "../Assets/served17.png";
import Served19 from "../Assets/served19.png";
import Served20 from "../Assets/served20.png";
import Served21 from "../Assets/served21.png";
import Served18 from "../Assets/served18.png";
import Served22 from "../Assets/served22.png";
import Served23 from "../Assets/served23.png";
import Served24 from "../Assets/served24.png";

function About() {
  return (
    <>
      <div className="container about">
        {/* <div className="row"> */}
        <div className="about-image" style={{ position: "relative" }}>
          <img
            className=""
            src={AboutImage}
            alt=""
            style={{ objectFit: "cover" }}
          />
          <div className="aboutt-uss mb-0">
            <h3 className="text-center mb-0">About Us</h3>
          </div>
        </div>
        {/* <div className="row row-cols-2 my-4 who-are-we d-flex justify-content-around">
                    <div className="col-lg-5 col-md-5 col-sm-12 ">
                        <h1 className='fw-bold'>Who we are</h1>
                        <p>Established in 2002, Varrenyam Consultants Pvt. Ltd. proudly operates in New Delhi and Mumbai. Our track record speaks volumes as we consistently deliver tangible results and offer committed, implementable solutions to our diverse clientele. With a focus on cost-effective and timely financial support, we boast strong affiliations with top legal firms, TAV Consultants, Valuers, IP Entities, Fund Houses, O&M service providers, and Tech Consultants, fortifying our ability to provide comprehensive and well-rounded services</p>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <img src={WhoAreWe} alt="" />
                    </div>
                </div> */}
        <div className="row who-we-are my-5">
          <div className="col-lg-6">
            <h2 className="fw-bolder">Who we are</h2>
            <p>
              Established in 2002, Varrenyam Consultants Pvt. Ltd. proudly
              operates in New Delhi and Mumbai. Our track record speaks volumes
              as we consistently deliver tangible results and offer committed,
              implementable solutions to our diverse clientele. With a focus on
              cost-effective and timely financial support, we boast strong
              affiliations with top legal firms, TAV Consultants, Valuers, IP
              Entities, Fund Houses, O&M service providers, and Tech
              Consultants, fortifying our ability to provide comprehensive and
              well-rounded services
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img src={WhoAreWe} style={{ width: "90%" }} alt="" />
          </div>
        </div>
        <div className="row vision my-5">
          <div className="col-lg-6 text-center">
            <img src={Vision} alt="" />
          </div>
          <div className="col-lg-6 vision-content">
            <h2 className="fw-bolder">Vision</h2>
            <p>
              To emerge as the premier ‘One Stop Financial Solution Provider’
              specializing in the resolution of distresses assets. Offering
              comprehensive expertise to navigate and optimize financial
              landscape.
            </p>
          </div>
        </div>
        <div className="row milestones my-4">
          <img src={Milestones} alt="" />
        </div>
        <h2 className="my-3 fw-bolder">Milestones</h2>
        <ul>
          <li>
            Successfully navigating the financial landscape, we have completed
            debt restructuring exceeding Rs 1 lakh Cr since our inception under
            the Corporate Debt Restructuring (CDR) scheme.
          </li>
          <li>
            {" "}
            Our dedicated team of Partners and Associates has adeptly resolved
            over 20 significant accounts, including those in the 'dirty dozen,'
            leveraging the Insolvency and Bankruptcy Code (IBC) and addressing
            more than Rs 1 lakh Cr in lenders' dues.
          </li>
          <li>
            Raised over Rs 5000 Cr in debt and equity from lenders and fund
            houses.
          </li>
          <li>
            Our achievements include the successful turnaround of a major steel
            account during the insolvency process, generating an impressive
            EBIDTA of over Rs. 4000 Cr during the Corporate Insolvency
            Resolution Process (CIRP) period.
          </li>
          <li>
            Our unique selling proposition (USP) lies in our ability to operate
            and manage separate corporate debtors as going concerns, resulting
            in turnaround success and delivering higher valuations to
            stakeholders.
          </li>
        </ul>

        <div className="row">
          <h2 className="text-center my-5 fw-bolder">
            Industry Association and Membership
          </h2>
          <div className="container">
            <div className="row row-cols-2 industry">
              {/* <div class="card " > */}
              <img src={Industry1} class="card-img-top" alt="..." />
              {/* </div> */}
              {/* <div class="card" > */}
              <img src={Industry2} class="card-img-top" alt="..." />
              {/* </div> */}
              {/* <div class="card " > */}
              <img src={Industry3} class="card-img-top" alt="..." />
              {/* </div> */}
              {/* <div class="card" > */}
              <img src={Industry4} class="card-img-top" alt="..." />
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="row industry-we-served">
          <h2 className="text-center my-5 fw-bolder">Industry we Served</h2>

          <div className="col-lg-2 col-md-3 col-sm-3 p-0 p-0">
            <div className="served-parts">
              <img className="text-center" src={Served1} alt="" />
              {/* <span>Restructuring And Debt Solution</span> */}
              <p className="text-center py-2">Iron And Steel</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0 p-0">
            <div className="served-parts">
              <img src={Served2} alt="" />
              {/* <span>Sell And Buy Advisory</span> */}
              <p className="text-center py-2">Cement</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served3} alt="" />
              {/* <span>Funding</span> */}
              <p className="text-center py-2">Pharmaceutical</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served4} alt="" />
              {/* <span>Asset Specialized & Monitoring</span> */}
              <p className="text-center py-2">Textile and Infrastructure</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served5} alt="" />
              {/* <span>Independent Business Review</span> */}
              <p className="text-center py-2">Agriculture</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served6} alt="" />
              {/* <span>Performance Improvement</span> */}
              <p className="text-center py-2">Auto Component</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served7} alt="" />
              {/* <span>Interim Management / ASM</span> */}
              <p className="text-center py-2">NBFCs</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served1} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Steel</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served9} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Chemicals</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served10} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Forging</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served11} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Green Energy</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served12} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Food & Beverages</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served13} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Hotel</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served14} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Automobiles</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served23} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Hospitals</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served15} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Papers</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served16} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Power</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts">
              <img src={Served17} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Retail</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts border-bottom-0">
              <img src={Served18} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Micro</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts border-bottom-0">
              <img src={Served24} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Real Estate</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts border-bottom-0">
              <img src={Served19} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Finance</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts border-bottom-0">
              <img src={Served20} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center  py-2">Manufacturing</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts border-bottom-0">
              <img src={Served21} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Packaging</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 p-0">
            <div className="served-parts border-bottom-0">
              <img src={Served22} alt="" />
              {/* <span>Insolvency Service & Advisory</span> */}
              <p className="text-center py-2">Telecom</p>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>

        {/* </div> */}
        {/* </div> */}
      </div>
      <ul></ul>
    </>
  );
}

export default About;
