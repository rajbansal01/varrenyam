import { Link } from "react-router-dom";
import Logo from '../../Assets/varrenyamLogo.png'
import '../Footer/footer.css'
import Phone from '../../Assets/phone.png'
import Map from '../../Assets/map.png'
import Globe from '../../Assets/globe.png'
// import Email from '../../Assets/email.png'
import Email from '../../Assets/email.svg'

function Footer(){

    // const [color, setColor] = useState(); 

    function scrollToUpward(color){
        if(color==='Home'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // setColor('Home')
        }
        else if(color==='About us'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // setColor('About us')
        }
        if(color==='Team'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // setColor('Team')
        }
        if(color==='Book A Free consultant'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // setColor('Book A Free consultant')
        }
    }
    return(
        <footer className="footer-area">
            <div className="container">
                
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link to={"/"}>
                                    {/* <img src={Logo} width={"40%"} alt="Logo black" /> */}
                                </Link>
                            </div>
                            <br />
                                                  </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                        <img src={Logo} style={{width:"60%",paddingBottom:'15px' }}  alt="Logo black" />
                            {/* <ul className="list"> */}
                            <div className="row">

                            {/* <img src={Phone} alt="" />   */}
                                <a className='pe-5' href="#"><Link to={""}>Unlock A Seamless Financial Journey With Our One -Stop Consulting Hub</Link></a>
                            </div>
                            <br />
                            <div className="row row-cols-2 align-items-center">
                                <img src={Phone} alt="" /> 
                                <div className="number">
                                <a href="#"><Link to={""}>+91 9599588308 </Link></a>
                                <a href="#"><Link to={""}>+91 9958302198</Link></a>
                            </div> 
                            </div>
                            <div className="mail row row-cols-2 align-items-center">
                                <img src={Email} alt="" />
                            <a href="#"><Link to={""} className="text-white">md@varrenyam.com</Link></a>
                            </div>
                            

                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Quick Links</h3>
                            <ul className="list">
                                <li><Link to={'/about'} onClick={()=> scrollToUpward('Home')}>About Us</Link></li>
                                {/* <li><Link to={""}>Carrer</Link></li> */}
                                <li><Link to={'/ourTeam'} onClick={()=> scrollToUpward('Team')}>Our Team</Link></li>
                                {/* <li><Link to={""}>Record And Strength</Link></li> */}
                                {/* <li><Link to={""}>Press Room</Link></li> */}
                                <li><Link to={""}>Expertise</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-12">
                        <div className="single-footer-widget">
                            <h3>Contact Us</h3>
                            <ul className="list">
<li>

    <div className="headig d-flex">
        <div className="img mx-3">
            <img src={Map} alt="" />
        </div>
        <div className="text">
            <p>
            Unit no 408, 409, Fourth floor,  Enkay Centre , Wing A, Plot no A, Vanijya Nikunj, Udyog Vihar, PHASE V, Gurgaon 122016  Haryana
            
            </p>
        </div>
    </div>
</li>
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>
                <div className="horizontal-line"><hr /></div>
                <div className="copyright-area">
                <span>Copyright @2024 All rights reserved.</span>
                </div>

            
        </footer>
    )
}

export default Footer