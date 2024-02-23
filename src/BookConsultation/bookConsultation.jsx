import BookConsultationImage from '../Assets/bookConsultation.png'
import '../BookConsultation/bookConsultation.css'
import mail from '../Assets/mail.png'
import contact from '../Assets/contact.png'
import id from '../Assets/id.png'
import socialId from '../Assets/socialId.png'
import { useState } from 'react'

function About(){

   const sendmail=()=>{
    var mail = `mailto:rajbansal999.rb@gmail.com?subject=${payload.subject}&body=name:${payload.name}\n email:${payload.email}\n phone:${payload.phone}\n body:${payload.interestedIn}`;
    return mail.toString();

   }

   const [payload,setPayload] = useState({
    name:"",
    email:"",
    subject:"",
    phone:"",
    interestedIn:""
   });

   const handleChangePayload =(e)=>{
    setPayload({...payload,[e.target.name]:e.target.value})
   }

    return(
        <>
        <div className="container bookConsult">
            
                <div className="bookConsult-image">
                    <img className='my-5 pt-5' src={BookConsultationImage} alt="" />

                </div>
                <div className="row row-cols-2 my-5 bookConsultant-form d-flex justify-content-between">
                <div className="col-lg-5 col-md-6 col-sm-12 py-3 bookConsult-content">
                        
                    <div className="row row-cols-2 my-4 mail align-items-center">
                        <img className='px-0' src={mail} alt="" />
                        <p className='my-0 px-0 text-center'>md@varrenyam.com</p>
                    </div>
                    <div className="row row-cols-2 my-4 mail align-items-center">
                        <img className='px-0' src={contact } alt="" />
                        <p className='my-0 px-0 text-center'>+91 9958302198</p>
                    </div>
                    <div className="row row-cols-2 my-4 mail align-items-center">
                        <img className='px-0' src={id} alt="" />
                        <p className='my-0 px-0 text-center'>khandelwal@varrenyam.net.in</p>
                    </div>
                    {/* <img className='my-3' src={socialId} alt="" /> */}
                    
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 book">
                <form>
                <div class="row row-cols-2 mb-3 align-items-center book-consult-form ">
                    {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                    <input type="Name" class="form-control border-0 border-bottom" name='name' value={payload.name
                    } placeholder="Name" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangePayload}/>

                    <input type="email" class="form-control border-0 border-bottom" placeholder="Email" name='email' value={payload.email
                    } id="exampleInputPassword1" onChange={handleChangePayload} />

                    <input type="subject" class="form-control border-0 border-bottom my-3" name='subject' value={payload.subject
                    } placeholder="Subject" id="exampleInputPassword1" onChange={handleChangePayload}/>

                    <input type="phone" class="form-control border-0 border-bottom my-3" name='phone' value={payload.phone
                    } placeholder="Phone" id="exampleInputPassword1" onChange={handleChangePayload}/>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label text-dark">Hello I am Interested in..</label>
                    <textarea name='interestedIn' value={payload.interestedIn
                    }  class="form-control  border-0 border-bottom my-3"  rows="3"  id="exampleInputPassword1"  onChange={handleChangePayload}/>
                </div>
                <div style={{float:'right'}}>

                <button type="submit" class="btn btn-primary d-flex flex-row-reverse"><a href={sendmail()}>Connect Now</a></button>
                </div>
                </form>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default About