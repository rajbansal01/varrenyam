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
    <div className="expertise">
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
                    <p>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>

                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={Img2} alt="" />
                    <span>Sell And Buy Advisory</span>
                    <p>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>

                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={expertise3} alt="" />
                    <span>Funding</span>
                    <p>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>

                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={expertise4} alt="" />
                    <span>Asset Specialized & Monitoring</span>
                    <p>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>

                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={expertise5} alt="" />
                    <span>Independent Business Review</span>
                    <p>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>

                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={expertise6} alt="" />
                    <span>Performance Improvement</span>
                    <p>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>

                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={expertise7} alt="" />
                    <span>Interim Management / ASM</span>
                    <p>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>

                    </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                    <div className="expertise-parts">
                    <img src={expertise8} alt="" />
                    <span>Insolvency Service & Advisory</span>
                    <p>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Expertise