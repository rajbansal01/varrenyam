import Img2 from '../Assets/image2.png'
import Img1 from '../Assets/image1.png'
import expertise1 from '../Assets/expertise1.png'
import expertise3 from '../Assets/expertise3.png'
import expertise4 from '../Assets/expertise4.png'
import expertise5 from '../Assets/expertise5.png'
import expertise6 from '../Assets/expertise6.png'
import expertise7 from '../Assets/expertise7.png'
import expertise8 from '../Assets/expertise8.png'
function Expertise(){
return(
    <div className="expertise pt-5" id='exp'>
        <div className="container">
            <div className="expertise-title">
                <h3>Our Expertise</h3>
            </div>
            <div className="expertise-content">
                <div className="row rows-col-4">

                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={expertise1} alt="" />
                    <span>Restructuring And Debt Solution</span>
                    <p>Assisting lenders to determine option to solve stress via restructuring , sale to Arc, and sale of assets</p>

                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={Img2} alt="" />
                    <span>Sell And Buy Advisory</span>
                    <p>Assisting lenders to find a buyer for 51% + shareholding in the company, non-core assets.</p>

                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={expertise3} alt="" />
                    <span>Funding</span>
                    <p>Funding of distressed asset, acquisitions & turnaround. Project funding, Growth funding</p>

                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={expertise4} alt="" />
                    <span>Asset Specialized & Monitoring</span>
                    <p>Assisting banks in monitoring the account performance and achievement milestones.</p>

                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={expertise5} alt="" />
                    <span>Independent Business Review</span>
                    <p>Assisting lenders to determine viability of business</p>

                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={expertise6} alt="" />
                    <span>Performance Improvement</span>
                    <p>Analysis of operational efficiency & cost reduction program</p>

                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={expertise7} alt="" />
                    <span>Interim Management / ASM</span>
                    <p>Professional management to run the aﬀairs of the company till divested</p>

                    </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={expertise8} alt="" />
                    <span>Insolvency Service & Advisory</span>
                    <p>End to end services in resolving cases under IBC Forensic audit Transaction Audit Serves</p>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Expertise