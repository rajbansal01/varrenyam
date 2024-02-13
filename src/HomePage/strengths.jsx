import Strength_Background from "../Assets/strength_background.png";
import Strength_Front from "../Assets/strength_front.png";
import Img1 from "../Assets/image1.png";
import Img1White from "../Assets/image1_white.png";
import Img1Green from "../Assets/image1Green.png";
import Img3 from "../Assets/img3.png";
function Strengths() {
  return (
    <div className="container str mt-5">
      <div className="row text-center">
        <div className="col-12 heading">
          <h2 className="text-white">Our Strengths</h2>
        </div>
        <div className="col-12 px-5 str-content">
          <p className="mx-5 my-3 text-white"> A leading consulting firm, we specialize in providing strategic solutions, leveraging industry expertise to drive client success and innovation.</p>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div class="card card-white">
            <div class="card-body">
          <img src= {Img1} class="card-img-top text-center" alt="" />
            <h5 class="card-title">Strategic Allaince</h5>
              <p class="card-text ">
              Formed crucial alliances with global business information providers to boost our capabilities.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div class="card card-orange">
            <div class="card-body">
          <img src= {Img1White} class="card-img-top" alt="" />
            <h5 class="card-title text-white">Network & Relation</h5>
              <p class="card-text text-white">
              With a strong network, we foster credible ties with diverse lenders, both conventional and unconventional.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div class="card card-yellow">
            <div class="card-body">
          <img src= {Img1Green} class="card-img-top" alt="" />
            <h5 class="card-title">Experienced Team</h5>
              <p class="card-text">
              Backed by a seasoned team, we ensure expert handling and consistent client satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div class="card card-blue">
            <div class="card-body">
          <img src= {Img3} class="card-img-top" alt="" />
            <h5 class="card-title text-white">Proficient Solution</h5>
              <p class="card-text text-white">
              Specializing in diverse finance challenges, we craft custom solutions for clients' unique needs, be it short-term or strategic.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container"> */}

      {/* <div className="strengths-image"> */}
      {/* <div className="container"> */}
      {/* <img src={Strength_Background} alt="" style={{objectFit:'cover',width:'100%',}} /> */}
      {/* <div className="strength-rightt"> */}
      {/* <div className="strength-right"> */}
        {/* <img src={Img1Green} alt="" /> */}
        {/* <h2>Our Strengths</h2>
        <p>
          A leading consulting firm, we specialize in providing strategic
          solutions, leveraging industry expertise to drive client success and
          innovation.
        </p>
      </div> */}
      {/* </div> */}
      {/* <div className="strength-content col"> */}
      {/* <div className="row rows-col-4"> */}
        {/* <div className="strength-part11"> */}
        {/* <div className="strength-part11 col-lg-3 col-md-3 col-sm-1" style={{position:'absolute',left:'2rem',bottom:'0rem',top:'3rem'}}> */}
        {/* <div className="strength-part11 col-lg-3 col-md-6 col-sm-3">
          <div className="strength-part1">
            <img src={Img1} alt="" />
            <h5>Strategic Allaince</h5>
            <p>
              Formed crucial alliances with global business information
              providers to boost our capabilities.
            </p>
          </div>
        </div> */}
        {/* </div> */}

        {/* <div className="strength-part12 col-lg-3 col-md-6 col-sm-3">
          <div className="strength-part2">
            <img src={Img1White} alt="" />
            <h5>Network & Relation</h5>
            <p>
              With a strong network, we foster credible 0ies with diverse
              lenders, both conventional and unconventional.
            </p>
          </div>
        </div>

        <div className="strength-part13 col-lg-3 col-md-6 col-sm-3">
          <div className="strength-part3">
            <img src={Img3} alt="" />
            <h5>Proficient Solution</h5>
            <p>
              Specializing in diverse finance challenges, we craft custom
              solutions for clients' unique needs, be it short-term or
              strategic.
            </p>
          </div>
        </div>

        <div className="strength-part14 col-lg-3 col-md-6 col-sm-3">
          <div className="strength-part4">
            <img src={Img1Green} alt="" />
            <h5>Experienced Team</h5>
            <p>
              Backed by a seasoned team, we ensure expert handling and
              consistent client satisfaction.
            </p>
          </div>
        </div>
      </div> */}
      {/* </div>
        </div>
      </div>
      </div> */}
    </div>
  );
}
export default Strengths;
