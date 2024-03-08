import AboutImage from '../Assets/aboutFront.png'
import Core1 from '../Assets/core.png'
import Core2 from '../Assets/core2.png'
import Core3 from '../Assets/core3.png'
import Core4 from '../Assets/core4.png'
import Core5 from '../Assets/core5.png'
import Core6 from '../Assets/core6.png'
import Ravi from '../Assets/ravi.png'
import Social from '../Assets/socialId.png'
import '../Team/ourTeam.css'
import { useNavigate } from "react-router-dom";


function OurTeam(){
    const navigate = useNavigate();
    
    return(
        <>
        <div className="container our-team">
        <div className="our-team-image" >
                    <img className='' src={AboutImage} alt="" style={{objectFit:'cover',}}/>
                    <h4 className='centered'>Our Team And Board Advisory</h4>
                    <div className="team mb-0">
                        <h3 className='text-center mb-0'>Our Team</h3>
                    </div>

                </div>
                <div className="row core-team mt-5">
                    <h2 className='fw-bolder mb-4'>Core Team</h2>

                    <div className="col-lg-3 col-md-6 core-team1 mb-5" onClick={()=>navigate('/core1', { state:  "Mahendrakhandelwal"  }) }>
                        <img className='member' src={Core1} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Mahendra khandelwal </h5>
                        <p className='text-center mb-0'>Managing Director</p>
                        {/* <p className='text-center'>khandelwalmahendar2@gmail.com</p> */}
                        {/* <img src={Social} alt="" /> */}
                    </div>
                    <div className="col-lg-3 col-md-6 core-team1 mb-5" onClick={()=>navigate('/core1', { state: "RaviKantBaheti"  }) }>
                        <img className='member' src={Ravi} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Ravi Kant Baheti </h5>
                        <p className='text-center mb-0'>Partner</p>
                        {/* <p className='text-center'>ravi@varrenyam.com</p> */}
                        {/* <img src={Social} alt="" /> */}
                    </div>
                    <div className="col-lg-3 col-md-6 core-team1 mb-5" onClick={()=>navigate('/core1', { state: "MohitBansal"  }) }>
                        <img className='member' src={Core2} alt="" />
                        <p className='text-center mb-0'>Partner</p>
                        <h5 className='text-center mt-3 mb-0'>Mohit Bansal</h5>
                        {/* <p className='text-center'>itmohitbansal83@gmail.com</p> */}
                        {/* <img src={Social} alt="" /> */}
                    </div>
                    <div className="col-lg-3 col-md-6 core-team1 mb-5" onClick={()=>navigate('/core1', { state: "AsthaGupta" }) }>
                        <img className='member' src={Core4} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Astha Gupta </h5>
                        <p className='text-center mb-0'>Director</p>
                        {/* <p className='text-center'>astha.gupta@varrenyam.com</p> */}
                        {/* <img src={Social} alt="" /> */}
                    </div>
                </div>

                {/* <div className="row advisory-team">
                <h2 className='fw-bolder mb-5'>Advisory Team</h2>
                <div className="col-lg-3 col-md-6 advisory1 mb-5" onClick={()=>navigate('/core1', { state:  "MUKESHKUMARJAIN"  }) }>
                        <img className='member' src={Core5} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Mukesh Kumar Jain</h5>
                        <p className='text-center'>Design, Australia</p>
                        <img src={Social} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 advisory1 mb-5" onClick={()=>navigate('/core1', { state:  "RAKESHKRAWAL"  }) }>
                        <img className='member' src={Core6} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Rakesh K Rawal</h5>
                        <p className='text-center'>Design, Australia</p>
                        <img src={Social} alt="" />
                    </div>
                </div> */}
        </div>
        </>
    )
}


export default OurTeam