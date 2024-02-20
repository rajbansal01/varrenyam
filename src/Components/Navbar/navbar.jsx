import './navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function CustomNavbar(){
    const [opened, setOpened] = useState(false);
  
    const handleOpen = () => setOpened(true);
    const handleClose = () => setOpened(false);
    const location = useLocation();

    const [color, setColor] = useState(''); 

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior:'smooth' });
        }
      }
    // const Close = () => setClick(false);
    function scrollToUpward(color){

        window.scrollTo({ top: 0, behavior: 'smooth' });

         if(color==='Expertise'){
        
            setTimeout(function() {
                //your code to be executed after 1 second
                scrollToSection("exp")
              }, 200);
           
        }
    }
    function handleToggle(color){

        handleClose();
        window.scrollTo({ top: 0, behavior: 'smooth' });
         if(color==='Expertise'){
        
            setTimeout(function() {
                //your code to be executed after 1 second
                scrollToSection("exp")
              }, 200);
           
        }
    }
    
    return (
        <div className="navbar-area">
        <div className="container-fluid d-flex flex-row justify-content-between align-items-center px-4">

            <div className="navbar-brand" style={{ flex: '2%' }}>
                <Link to={"/"}>
                    <img className='navbar-brand-img' alt="" />
                </Link>
            </div>
            <div className="navItems">
                <li ><NavLink className={`links ${location.pathname=== '/'? 'active' : ''}`} to={'/'} onClick={()=> scrollToUpward('Home')} >Home</NavLink></li>
                <li><NavLink className={`links ${location.pathname=== '/about'? 'active' : ''}`} to={'/about'} onClick={()=> scrollToUpward('About us')}>About us</NavLink></li>
                <li><NavLink className={`links ${location.pathname=== '/ourTeam'? 'active' : ''}`} to={'/ourTeam'}  onClick={()=> scrollToUpward('Team')}>Team</NavLink></li>
                
                <li><NavLink  to={'/'}
                // className={`links ${color==='Expertise'? 'active' : ''}`} 
                 onClick={()=>  scrollToUpward("Expertise")}>Expertise</NavLink></li>
                {/* <li><NavLink 
                className={`links ${color==='Contact Us'? 'active' : ''}`} 
                href='#' onClick={()=> setColor('Contact Us')}>Contact Us</NavLink></li> */}
                {/* <li><NavLink 
                className={`links ${color==='Pressroom'? 'active' : ''}`}
                 href='#' onClick={()=> setColor('Pressroom')}>Pressroom</NavLink></li> */}
               {/* <li> <NavLink className={`links ${color==='Book A Free consultant'? 'active' : ''}`} to={'/bookConsultation'} onClick={()=> scrollToUpward('Book A Free consultant')}> <button type="button" class="btn">Book A Free Consultant</button></NavLink></li> */}
            </div>
            <div className="nav-toggler-icon" onClick={handleOpen}>
                <GiHamburgerMenu className='hamIcon' />
            </div>
            <div id='customSidebar' className={opened?"custom-sidebar show":"custom-sidebar"}>
                <div className="close-btn-wrapper">
                    <AiOutlineClose className='close-icon' onClick={handleClose} />
                </div>
                <ul className='sidebar-list'>
                    <li><NavLink to={'/'} onClick={()=>handleToggle("")}>Home</NavLink></li>
                    <li><NavLink to={'/about'} onClick={()=>handleToggle("")}>About us</NavLink></li>
                    <li><NavLink to={'/ourTeam'} onClick={()=>handleToggle("")}>Team</NavLink></li>
                    
                    <li><NavLink to={"/"}  onClick={()=>handleToggle("Expertise")}>Expertise</NavLink></li>
                {/* <li><NavLink to={""}>Investment  Strategy</NavLink></li>
                    
                <li><NavLink to={'/bookConsultation'} onClick={()=> scrollToUpward('Book A Free consultant')}>Pressroom</NavLink></li>
                <li><NavLink to={'/bookConsultation'} onClick={()=> scrollToUpward('Book A Free consultant')}><button type="button" class="btn">Book A Free Consultant</button></NavLink></li> */}
                </ul>
            </div>
        </div>
        </div>
    );
  }

export default CustomNavbar