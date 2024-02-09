import OurRecordsFront from '../Assets/ourRecordsFront.png'
import One from '../Assets/one.png'
import Two from '../Assets/two.png'
import Three from '../Assets/three.png'
function OurRecords(){
    return (
<div className="our_records">
    <div className="container">
        <div className="row">
        <div className="records">
                    <h3>Our Records</h3>
                </div>
        <div className="col-lg-6 col-sm-6 col-md-6">
            <div className="our_recordsImage" style={{position:'relative'}}>
        <img src={OurRecordsFront} alt="" style={{objectFit:'cover',width:'100%',}} />
                

            </div>
        </div>
        <div className="col-lg-6 col-sm-6 col-md-6">
            <div className="our_records_content">
                <div className="row">

                <span>1</span>
                <div className="first">
                    <h3>Raised Fund</h3>
                    <p>Successfully secured Rs 5,000 crore from banks, financial institutions, NBFCs, and private equity to date.</p>
                </div>
                </div>
                <div className="row">

                <span>2</span>
                <div className="first">
                    <h3>Restructured Debt </h3>
                    <p>Restructured debt amounting to INR 1 lakh Cr since VCPL's inception.</p>
                </div>
                </div>
                <div className="row">

                <span>3</span>
                <div className="first">
                    <h3>Average Ticket Services</h3>
                    <p>Maintaining flexibility, VCPL caters to a diverse clientele with an average ticket size ranging from INR 50 Cr to INR 10,000 Cr, serving both SMEs and large corporations.</p>
                </div>
                </div>
            </div>
        </div></div>
    </div>
</div>
    )
}

export default OurRecords