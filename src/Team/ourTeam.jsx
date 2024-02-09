import AboutImage from '../Assets/aboutFront.png'
import Core1 from '../Assets/core.png'
import Core2 from '../Assets/core2.png'
import Core3 from '../Assets/core3.png'
import Core4 from '../Assets/core4.png'
import Core5 from '../Assets/core5.png'
import Core6 from '../Assets/core6.png'
import Social from '../Assets/socialId.png'
import '../Team/ourTeam.css'
import { Link, NavLink } from 'react-router-dom';
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
                <div className="row core-team my-3">
                    <h1 className='fw-bold mb-5'>Core Team</h1>

                    <div className="col-lg-3 col-md-6 core-team1" onClick={()=>navigate('/core1', { state:  "Mahendrakhandelwal"  }) }>
                        <img className='member' src={Core1} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Mahendra khandelwal </h5>
                        <p className='text-center'>Design, Australia</p>
                        <img src={Social} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 core-team1" onClick={()=>navigate('/core1', { state: "MohitBansal"  }) }>
                        <img className='member' src={Core2} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Mohit Bansal</h5>
                        <p className='text-center'>Design, Australia</p>
                        <img src={Social} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 core-team1" onClick={()=>navigate('/core1', { state: "RaviKantBaheti"  }) }>
                        <img className='member' src={Core3} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Ravi Kant Baheti </h5>
                        <p className='text-center'>Design, Australia</p>
                        <img src={Social} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 core-team1" onClick={()=>navigate('/core1', { state: "AsthaGupta" }) }>
                        <img className='member' src={Core4} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Astha Gupta </h5>
                        <p className='text-center'>Design, Australia</p>
                        <img src={Social} alt="" />
                    </div>
                </div>

                <div className="row advisory-team my-5">
                <h1 className='fw-bold my-5'>Advisory Team</h1>
                <div className="col-lg-3 col-md-6 advisory1" onClick={()=>navigate('/core1', { state:  "MUKESHKUMARJAIN"  }) }>
                        <img className='member' src={Core5} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Mukesh Kumar Jain</h5>
                        <p className='text-center'>Design, Australia</p>
                        <img src={Social} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 advisory1" onClick={()=>navigate('/core1', { state:  "RAKESHKRAWAL"  }) }>
                        <img className='member' src={Core6} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Rakesh K Rawal</h5>
                        <p className='text-center'>Design, Australia</p>
                        <img src={Social} alt="" />
                    </div>
                </div>
        </div>
        </>
    )
}


export default OurTeam