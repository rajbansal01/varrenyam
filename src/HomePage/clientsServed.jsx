import ClientsImage from '../Assets/clients.png'
import Client1 from '../Assets/client1.png'
import Client2 from '../Assets/client2.png'
import Client3 from '../Assets/client3.png'
import Client4 from '../Assets/client4.png'
import Client5 from '../Assets/client15.png'
import Client6 from '../Assets/client6.png'
import Client7 from '../Assets/client7.png'
import Client8 from '../Assets/client8.png'
import Client9 from '../Assets/client9.png'
import Client10 from '../Assets/client10.png'
import Client11 from '../Assets/client11.png'
import Client12 from '../Assets/client12.png'
import Client13 from '../Assets/client13.png'
import Client14 from '../Assets/client14.png'
import Client15 from '../Assets/client15.png'
function Clients(){
    return (
        <>
        <div className="clients">
            <div className="container">
                <div className="row clients-container d-sm-flex flex-sm-row-reverse">

                <div className="col-lg-7 col-md-6 col-sm-3 order-2 order-sm-1 ">
                    <div className="clients-content">
                            <div className="row row-cols-4">
                        <div className="content">
                        <img src={Client1} alt="" />
                            <p>Wanbury LTD.</p>
                                
                            </div>
                            <div className="content">
                            <img src={Client2} alt="" />
                            <p>Maa mahamaya Industries</p>
                                
                            </div>
                            <div className="content">
                        <img src={Client3} alt="" />
                            <p>Filatex India LTD.</p>
                                
                            </div>
                            <div className="content">
                        <img src={Client4} alt="" />
                            <p>Bhushan Power &Steel LTD.</p>
                                
                            </div>
                            <div className="content">
                        <img src={Client5} alt="" />
                            <p>Uttam Galva Steels LTD.</p>
                                
                            </div>
                            <div className="content">
                        <img src={Client6} alt="" />
                            <p>autolite(India) LTD.</p>
                                
                            </div>
                            <div className="content">
                        <img src={Client7} alt="" />
                            <p>Dhandapani Finance LTD.</p>
                                
                            </div>
                            <div className="content">
                        <img src={Client8} alt="" />
                            <p>Prakash Industries LTD.</p>
                                
                            </div>
                            <div className="content">
                        <img src={Client9} alt="" />
                            <p>Rollatainers Group</p>
                                
                            </div>
                            <div className="content">
                        <img src={Client10} alt="" />
                            <p>Educomp Solutions LTD.</p>
                                
                            </div>
                            <div className="content">
                        <img src={Client11} alt="" />
                            <p>Jyoti Structures Limited LTD.</p>
                                
                            </div>
                            <div className="content">
                        <img src={Client12} alt="" />
                            <p>Prius group of Company</p>
                                
                            </div>
                            <div className="content">
                        <img src={Client13} alt="" />
                            <p>DS Group</p>
                                
                            </div>
                            <div className="content">
                        <img src={Client14} alt="" />
                            <p>Amtek Group</p>
                                
                            </div>
                            <div className="content">
                        <img src={Client15} alt="" />
                            <p>Electrosteel Castings LTD.</p>
                                
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-lg-5 col-md-6 col-sm-3 order-1 order-sm-2">
                <div className="clients-image"> 
                    <h3>Clients <span>We Served</span></h3>
                    <p>Trusted by over 50+ business world wide</p>
                    <img src={ClientsImage} alt="" />
                </div>
                </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Clients