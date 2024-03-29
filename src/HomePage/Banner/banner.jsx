import BannerBackgroundImage from "../../Assets/bannerBackgroundImage.png"
import "../Banner/banner.css";
import BannerBorderImage from '../../Assets/bannerBorderImage.png'
import BannerImage from '../../Assets/bannerImage.png'
import {Link} from 'react-router-dom'
// import BannerImage from '../../Assets/bannerImage.svg'

function Banner() {
  return (
    <div className="banner-wrapper-content mb-5">
      <div className="banner-wrapper">
        <div className="container">
          <div className="banner-wrapper-image" style={{position:'relative'}}>
          <img  src={BannerImage} alt="" style={{objectFit:'cover',width:'100%',}} />

          <div className="row">
          <h2 >Welcome to Varrenyam</h2>
          <p>Your Premier Partner in Holistic Financial Solutions</p>
          </div>
          {/* <Link to={'/bookConsultation'}><button type="button" class="btn btn-primary btn-sm" >Book a Consultation</button></Link> */}
          </div>
          </div>
      </div>
          <div className="our-firm" >
          <div className="our-firm-content">
            <div className="container">

            
            <div className="row text-center">
              <div className="col-lg-8 col-md-8">
          <div className="row our-firm-content-parts" style={{position:'relative',bottom:'60%'}}>

         
              <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                <h3>50+</h3>
                <span>Operating Companies</span>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="verticalLine">
                  <h3>1Trillion</h3>
                  <span>Combined Annual Revenues</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-4">
                <div className="verticalLine3">
                  <h3 >15+</h3>
                  <span >Professionals</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-4">
                <div className="verticalLine">
                  <h3>2002</h3>
                  <span> Founded by C.A. M K Khandelwal</span>
                </div>
              </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Banner;
