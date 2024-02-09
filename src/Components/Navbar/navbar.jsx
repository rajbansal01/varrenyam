import './navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function CustomNavbar(){
    const [opened, setOpened] = useState(false);
  
    const handleOpen = () => setOpened(true);
    const handleClose = () => setOpened(false);

    const [color, setColor] = useState(''); 

    
    // const Close = () => setClick(false);
    function scrollToUpward(color){
        if(color==='Home'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setColor('Home')
        }
        else if(color==='About us'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setColor('About us')
        }
        if(color==='Team'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setColor('Team')
        }
        if(color==='Book A Free consultant'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setColor('Book A Free consultant')
        }
    }
    
    return (
        <div className="navbar-area">
        <div className="container d-flex flex-row justify-content-between align-items-center">

            <div className="navbar-brand" style={{ flex: '2%' }}>
                <Link to={"/"}>
                    <img className='navbar-brand-img' alt="" />
                </Link>
            </div>
            <div className="navItems">
                <li ><NavLink className={`links ${color==='Home'? 'active' : ''}`} to={'/'} onClick={()=> scrollToUpward('Home')} >Home</NavLink></li>
                <li><NavLink className={`links ${color==='About us'? 'active' : ''}`} to={'/about'} onClick={()=> scrollToUpward('About us')}>About us</NavLink></li>
                <li><NavLink className={`links ${color==='Team'? 'active' : ''}`} to={'/ourTeam'} href='#' onClick={()=> scrollToUpward('Team')}>Team</NavLink></li>
                
                <li><NavLink 
                // className={`links ${color==='Expertise'? 'active' : ''}`} 
                href='#' onClick={()=> setColor('Expertise')}>Expertise</NavLink></li>
                <li><NavLink 
                // className={`links ${color==='Contact Us'? 'active' : ''}`} 
                href='#' onClick={()=> setColor('Contact Us')}>Contact Us</NavLink></li>
                <li><NavLink 
                // className={`links ${color==='Pressroom'? 'active' : ''}`}
                 href='#' onClick={()=> setColor('Pressroom')}>Pressroom</NavLink></li>
               <li> <NavLink className={`links ${color==='Book A Free consultant'? 'active' : ''}`} to={'/bookConsultation'} onClick={()=> scrollToUpward('Book A Free consultant')}> <button type="button" class="btn">Book A Free Consultant</button></NavLink></li>
            </div>
            <div className="nav-toggler-icon" onClick={handleOpen}>
                <GiHamburgerMenu className='hamIcon' />
            </div>
            <div id='customSidebar' className={opened?"custom-sidebar show":"custom-sidebar"}>
                <div className="close-btn-wrapper">
                    <AiOutlineClose className='close-icon' onClick={handleClose} />
                </div>
                <ul className='sidebar-list'>
                    <li><NavLink to={'/'} onClick={handleClose}>About us</NavLink></li>
                    <li><NavLink to={'/aboutNew'} onClick={handleClose}>Team</NavLink></li>
                    
                    <li><NavLink to={"/compliances"}>Expertise</NavLink></li>
                <li><NavLink to={"/compliances"}>Investment  Strategy</NavLink></li>
                    
                <li><NavLink to={"/sourcing-partners"}>Pressroom</NavLink></li>
                <button type="button" class="btn">Book A Free Consultant</button>
                </ul>
            </div>
        </div>
        </div>
    );
  }

export default CustomNavbar