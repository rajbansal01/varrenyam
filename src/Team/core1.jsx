import { useState,useEffect } from 'react';
import AboutImage from '../Assets/aboutFront.png'
import CoreImage1 from '../Assets/core.png'
import Core2 from '../Assets/core2.png'
import Ravi from '../Assets/ravi.png'
import Core4 from '../Assets/core4.png'
import Core5 from '../Assets/core5.png'
import Core6 from '../Assets/core6.png'
import Social from '../Assets/socialId.png'
import { useLocation, useNavigate } from 'react-router-dom';
import CoreImage from '../Assets/core.png'
function Core1(){
    
    let {state} = useLocation();
   
    const [key, setKey] = useState('');

    useEffect(()=>{
setKey(state)
console.log(state)
    },[state])
    const competencies1=['Restructuring and Resolution Leadership: Led the restructuring and resolution of over 100 large corporations in sectors like Iron and Steel,Stainless Steel, Pharma, Hotels, NBFC, and more.','BRS Practice Leadership: Initiated and spearheaded the Business Recovery Services (BRS) practice at both BDO and PWC,successfully resolving over 20 significant accounts','Insolvency Expertise: Served as a Resolution Professional for 7 high-profile insolvency accounts, including Bhushan Power & Steel Ltd., Uttam Galva Steels Ltd., Educomp Solutions Ltd., and others.']

    const competencies2 =['Strategic Vision: A forward-thinking individual with a strategic mindset, Mr. Bansal has contributed to the growth and success of fintech startups, foreseeing industry trends and aligning business strategies accordingly','Technology Expertise: As an NSIT alumni in IT and with over 12 years of experience, Mr. Bansal is well-versed in technology and software development, providing a strong foundation for driving technological advancements within his ventures.','3 Proven Track Record in Fintech: With a robust background in Fintech, Mr. Bansal has successfully steered ventures and contributed to renowned brands such as Magicbricks, Quara Holding, and Wasalt. His expertise extends across eWallets, Digital Lending Platforms, Real-Estate & Valuation Platforms, Payments, and Home Finance digital products.','Strategic Vision and Industry Insight: Mr. Bansal exhibits strategic vision, consistently aligning businesses with industry trends. His keen insight into the fintech landscape enables him to drive growth and success in the rapidly evolving sector.','Client-Centric Innovation: An innovator at heart, Mr. Bansal has a strong focus on developing client-centric fintech solutions.His commitment to innovation has resulted in cutting-edge products that meet and exceed client expectations in the dynamic fintech market.']

    const competencies3 =['Financial Planning & Analysis Leadership: As the custodian of financial planning & analysis, played a pivotal role in driving long-term improvements in cost savings, profitability, and productivity','Compliance and Regulatory Oversight: Ensured compliance with statutory/regulatory requirements, supporting strategic planning processes, and overseeing corporate-wide restructurings.','Strategic Relationship Building: Established working relationships with key stakeholders, showcasing a focused and goal-driven approach, complemented by excellent commercial sense and problem-solving & analytical skills','Achievements: Raised funding of Rs 100 Crores for a Housing Finance Co., led successful ERP implementations,and formulated MIS reports for enhanced decision-making.','Multifaceted Management: Managed internal/statutory audits, handled fund raising and major capital injection requests,organized board meetings, and engaged with legal matters, demonstrating a multifaceted role','Contributions to Operational Efficiency: Oversaw personnel taxation, developed Mutual Fund Accounting software, interacted with regulatory bodies like SEBI, and implemented automation of MIS reports, resulting in significant time savings.','Commitment to Continuous Improvement: Evident in recorded enhancements in the timeliness of month-end financial reporting and collaborative efforts with senior management to execute strategies and accomplish corporate goals.'] 

    const competencies4 =['Banking Experience: Specialized in restructuring complex debt transactions, managing portfolios of Non-Performing Assets (NPA), and implementing resolution strategies during her tenure at YES Bank Ltd.','Legal Expertise: Involved in recovery through legal actions such as SARFAESI, DRT, and Corporate Insolvency Resolution Process (CIRP), showcasing a comprehensive understanding of legal aspects in financial matters.','Credit Management: Prepared credit proposals, debt serviceability models, and projections, contributing to effective credit management.','Consulting Experience: Engaged in Corporate Restructuring processes at renowned firms like PwC and Duff and Phelps India Limited, actively participating in the CIR process for multiple companies, including EPC, Power, and Steel.','Arbitration and Litigation: Independently handled arbitration, litigation, and analyzed tax implications during the Corporate Insolvency Resolution Process (CIRP) period.','Cash Flow Management: Monitored cash flow and ensured operational continuity, emphasizing the importance of sound financial management.','Mergers & Acquisition: Contributed to Mergers & Acquisition activities, being involved in discussions with promoters and advisors, executing tax due diligences, and analyzing tax and regulatory implications.','Implementation of Restructuring Strategies: Ensured successful implementation of restructuring strategies, demonstrating a proactive and result-oriented approach']

    const competencies5 =['Industry Versatility: Extensive experience covering diverse industries, including Real Estate, Hospitality,Manufacturing, Engineering Advisory, Travel and Tourism, Financial Services, and Infrastructure.','Insolvency Professional Certification: Registered with the Insolvency and Bankruptcy Board of India, bringing specialized skills to navigate complex financial situations.','Successful Case Resolutions:  Demonstrating a track record of success, effectively resolving cases like Telexcell Information Systems Limited and M/s Amrit India Ltd.','Expertise in Liquidation Assignments: Proficient in handling liquidation assignments, successfully managing cases, including M/s Transgulf Frozen Food Containers Private Limited.'
    ]

    const competencies6 =['Leadership Excellence: A seasoned leader with over two decades of experience, bringing excellence to high-paced organizational environments and government ministries.','Strategic Insight:  Demonstrates a strategic approach, utilizing analytical skills and insights to drive organizational improvements and implement best practices.','Problem Resolution: Recognized for resolving complex issues, including debt restructuring disputes, bankruptcy,insolvency disputes, taxation, and recovery disputes.','Technical and Commercial Acumen: Possesses a unique blend of technical and commercial acumen, ensuring a holistic understanding of organizational challenges and opportunities.','Interpersonal Skills: Well-developed interpersonal skills, fostering strong relationships with stakeholders, clients, and colleagues.','Effective Communication: A highly effective communicator, adept at thriving on responsibility and challenges.','Advocacy and Networking: Establishes a robust network with Government, media, key influencers, and contributes to advocacy through corporate affairs management.','Government Expertise: Holds extensive expertise in navigating government ministries, bringing valuable insights into public-sector dynamics.']
    // const names=['Mahendra khandelwal','Mohit']
    return(
        <>
     {   key==='Mahendrakhandelwal'?<CoreData image={CoreImage1} name={'Mahendra khandelwal'} designation={'Managing Director'} mail={'khandelwalmahendar2@gmail.com'} bio={'With an esteemed career spanning more than three decades, Mr. Mahender Khandelwal embarked on his journey as a Chartered Accountant in 1991, evolving into a seasoned senior management and financial professional renowned for his expertise in structuring and financing through diverse debt and equity instruments. His proficiency extends to adeptly managing and orchestrating successful turnarounds for special situations and insolvency scenarios across a wide array of industries. Notably, he has led the restructuring and resolution of over 100 large corporations spanning sectors including Iron and Steel, Stainless Steel, Pharma, Hotels, and NBFCs, showcasing his exceptional leadership in navigating complex financial challenges.\nWith a wealth of experience, Mr. Khandelwal boasts extensive industry expertise, enabling him to effectively navigate intricate regulatory landscapes with finesse. His adeptness in handling regulatory agencies such as RBI, SEBI, GST, CBI, SFIO, and ED underscores his commitment to ensuring compliance and strategic financial governance. Furthermore, his sector-specific acumen spans across diverse domains including Iron and Steel, Pharma, Power and Infrastructure, Auto Component, Textile, Education, Construction, and Real Estate, reflecting his holistic approach towards addressing multifaceted financial complexities with precision and efficiency'} competencies={competencies1}/>:''} 
     {key==='MohitBansal'?<CoreData image={Core2} name={'Mohit Bansal'} designation={'Partner'} mail={'itmohitbansal83@gmail.com'} bio={'With over 12 years of experience in Technology & Software Development, Mr. Mohit Bansal, an NSIT alumni in IT, serves as the Founder & MD at Credhub Technologies & Co-Founder at Phocket Infotech Private Limited. Spearheading a fintech startup specializing in short-term loans, he has contributed to prominent brands like Magicbricks, Quara Holding, and Wasalt. Mohit brings robust expertise in Fintech Products encompassing eWallet, Digital Lending Platform, Real-Estate & Valuation Platform, and Payments & Home Finance digital products.'} competencies={competencies2}/>:''}
     {   key==='RaviKantBaheti'?<CoreData image={Ravi} name={'Ravi Kant Baheti'} designation={'Partner'} mail={'ravi@varrenyam.com'} bio={"With over 25 years in the BFSI sector, Mr. Ravi Kaant Baheti is an accomplished Chartered Accountant, served as CFO, Financial Controller, and Company Secretary across NBFCs, Insurance, HFCs, Merchant Banking, Mutual Funds, Securities Brokerage, and Wealth Management. He excels in financial planning, compliance, strategic relationship-building, and operational efficiency, evidenced by raising substantial funding, leading successful ERP implementations, and streamlining MIS reporting. Ravi's multifaceted management skills encompass audits, fund raising, board meetings, and legal matters. He is committed to continuous improvement, enhancing month-end reporting timeliness, and aligning with senior management to achieve corporate goals."} competencies={competencies3}/>:''}
     {   key==='AsthaGupta'?<CoreData image={Core4} name={'Astha Gupta'} designation={'Director'} mail={'astha.gupta@varrenyam.com'} bio={"Astha Gupta, a seasoned professional with nearly a decade of experience in distressed asset management, corporate restructuring, and mergers & acquisitions, is highly regarded for her expertise in navigating complex financial scenarios. With a strong educational background in Chartered Accountancy, Astha's tenure at Yes Bank involved restructuring complex debt transactions, managing portfolios of Non-Performing Assets (NPA), and implementing resolution strategies. Previously, she held key positions at Kroll and PwC, specializing in corporate restructuring, mergers & acquisitions, and insolvency resolution. Astha's skill set includes preparing credit proposals, conducting sensitivity analysis, overseeing recovery through legal actions, liaising with third-party service providers, negotiating with stakeholders, and ensuring regulatory compliance, all contributing to her track record of achieving favorable outcomes in challenging financial situations."} competencies={competencies4}/>:''}
     {   key==='MUKESHKUMARJAIN'?<CoreData image={Core5} name={'MUKESH KUMAR JAIN'} designation={'PROFESSIONAL PROFILE OVERVIEW'} bio={'With over 32 years of distinguished experience, Mr. Mukesh Kumar Jain serves as the Co-founder and Partner at M/s MKRJ & Co. (Chartered Accountants). His expertise spans Finance, Accounting,Regulatory Compliance, Strategic Planning, Credit Facilities, Debt/Equity Restructuring, and more. Holding credentials as a registered Insolvency Professional, he showcases specialized proficiency in resolving intricate financial matters.'} competencies={competencies5}/>:''}
     {   key==='RAKESHKRAWAL'?<CoreData image={Core6} name={'RAKESH K RAWAL'} designation={'Rakesh K Rawal is a dynamic and result-oriented leader with 27 years of leading expertise in high-paced organizations and multiple ministries within the Government of India. He demonstrates a strategic approach, utilizing keen analysis and insights to drive organizational improvements and implement best practices'} competencies={competencies6}/>:''}

        </>

    )
}

export default Core1

function CoreData({image,name,designation,mail,bio,competencies}){
    const navigate = useNavigate();

    function scrollToUpward(name){
        if(name==='Mahendra khandelwal'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/core1', { state:  "Mahendrakhandelwal"  })
        }
        else if(name==='Mohit Bansal'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/core1', { state: "MohitBansal"  })
        }
        if(name==='Ravi Kant Baheti'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/core1', { state: "RaviKantBaheti"  })
        }
        if(name==='Astha Gupta'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/core1', { state: "AsthaGupta" })
        }
    }

    return(<>
<div className="container core">
        <div className="core-image">
        <img className='' src={AboutImage} alt="" style={{objectFit:'cover',}}/>
        <h4 className='centered'>Our Team And Board Advisory</h4>
        <div className="team mb-0">
                        <h3 className='text-center mb-0'>Our Team</h3>
                    </div>

                </div>

                <div className="row core-name mt-5">
                    <div className="col-lg-4 mt-3">
                        <img src={image} alt="" />

                    </div>
                    <div className="col-lg-8 mt-2">
                        <h3>{name}</h3>
                        <span className='pt-3'>{designation}</span>
                        <br />
                        {/* <span className='pt-3'>{mail}</span> */}
                        <p className='my-4'>{bio}</p>
                        {/* <img className='social' src={Social} alt="" /> */}
                    </div>
                </div>
                <div className="row biography">
                {/* <h2 className='fw-bolder mt-4'>Short Biography​</h2>
                <h3 className='mt-2 mb-4'>Key Competencies</h3>
                {competencies?.map(function (val, index) {
                    console.log('key',index,'value',val)
                    let [beforehyphen ,afterhyphen] = val?.split(": ")

                return(
                    <>
                        <h5>{beforehyphen}</h5>
                        <p>{afterhyphen}</p>
                    </>
                )
                })
            } */}
              {/* {   name==='Mahendra khandelwal'? <div className="row team-parts">
                <div className="col-lg-6">
                    <div className="part1 mb-4 ">
                        <h4>Industry Experience</h4>
                        <p>Boasting over 13 years of invaluable industry experience, Mr. Khandelwal brings extensive expertise in navigating complex regulatory landscapes.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="part1 mb-4">
                        <h4>Regulatory Mastery</h4>
                        <p>Adept in handling regulatory agencies such as RBI, SEBI, GST, CBI, SFIO, and ED, ensuring compliance and strategic financial governance.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="part1 mb-4">
                        <h4>Sector Expertise</h4>
                        <p>Navigating complexities across sectors such as Iron and Steel, Pharma, Power and Infrastructure, Auto Component, Textile, Education, Construction, and Real Estate.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="part1 mb-4">
                        <h4>Holistic Financial Approach</h4>
                        <p>Dedicated to driving success and achieving optimal financial outcomes in every endeavor.</p>
                    </div>
                </div>
               </div>:''}  */}

                </div>
        </div>

                    <div className="container-fluid members">
        <div className="row">
            <h2 className='text-center fw-bolder mb-4'>Our Team Members</h2>
                    <div className="col-lg-3 col-md-6 core-team1 mb-4" onClick={()=>scrollToUpward('Mahendra khandelwal') } >
                        <img className='member' src={CoreImage} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Mahendra khandelwal </h5>
                        <p className='text-center mb-0'>Managing Director</p>
                        {/* <p className='text-center'>khandelwalmahendar2@gmail.com</p> */}
                        {/* <img src={Social} alt="" /> */}
                    </div>
                    
                    <div className="col-lg-3 col-md-6 core-team1 mb-4" onClick={()=>scrollToUpward('Ravi Kant Baheti') }>
                        <img className='member' src={Ravi} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Ravi Kant Baheti </h5>
                        <p className='text-center mb-0'>Partner</p>
                        {/* <p className='text-center'>ravi@varrenyam.com</p> */}
                        {/* <img src={Social} alt="" /> */}
                    </div>
                    <div className="col-lg-3 col-md-6 core-team1 mb-4" onClick={()=> scrollToUpward('Mohit Bansal')}>
                        <img className='member' src={Core2} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Mohit Bansal</h5>
                        <p className='text-center mb-0'>Partner</p>
                        {/* <p className='text-center'>itmohitbansal83@gmail.com</p> */}
                        {/* <img src={Social} alt="" /> */}
                    </div>
                    <div className="col-lg-3 col-md-6 core-team1 mb-4" onClick={()=> scrollToUpward('Astha Gupta')}>
                        <img className='member' src={Core4} alt="" />
                        <h5 className='text-center mt-3 mb-0'>Astha Gupta </h5>
                        <p className='text-center mb-0'>Director</p>
                        {/* <p className='text-center'>astha.gupta@varrenyam.com </p> */}
                        {/* <img src={Social} alt="" /> */}
                    </div>
                    </div>
                </div>
        </>
    )
}