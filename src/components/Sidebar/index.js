import './index.scss'
import { useState } from 'react'
// import LogoS from '../../assets/images/logo-s.png';
// import LogoSubtitle from '../../assets/images/logo_sub.png';
import Logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebook, 
    faGithub, 
    faInstagram, 
    faLinkedin, 
    faSkype, 
    faWhatsapp, 
    faYoutube } from '@fortawesome/free-brands-svg-icons';
import { 
    faEnvelope, 
    faHome, 
    faUser, 
    faSuitcase, 
    faBars, 
    faClose 
    } 
    from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
        <Link 
            className="logo" 
            to="/"
            onClick={() => setShowNav(false)}>
            {/* <img src={LogoS} alt="Logo" /> */}
            {/* <img className="sub-logo" src={LogoSubtitle} alt="Konstantinos" /> */}
            <img className="sub-logo" src={Logo} alt="Konstantinos" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                to="/"
                onClick={() => setShowNav(false)}>    
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink                 
                activeclassname="active" 
                className="about-link" 
                to="/about"
                onClick={() =>setShowNav(false)}>                
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
           <NavLink
                activeclassname="active"
                className="portfolio-link"
                to="/portfolio"  
                onClick={() =>setShowNav(false)}       
                >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
           </NavLink>
            <NavLink                
                activeclassname="active" 
                className="contact-link" 
                to="/contact"
                onClick={() =>setShowNav(false)}
                >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>   
                  <FontAwesomeIcon 
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon'/>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/konstantinos-iakovou-4235a0273/" >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/konstantinosiakovou" >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.instagram.com/konstantinosiakovou/" >
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                </a>
            </li> 
            <li>
                <a target="_blank" rel='noreferrer' href="https://wa.me/306984220422?text=Greetings!%0AI%20would%20like%20you%20to%20create%20a%20website%20for%20me.%0ACan%20we%20schedule%20a%20meeting%20to%20talk%20about%20the%20details%3F" >
                    <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.facebook.com/konstantinosiak/" >
                    <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
                </a>
            </li>  
            <li>
                <a target="_blank" rel='noreferrer' href="skype:live:konstantinosiakovou" >
                    <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
                </a>
            </li>  
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.youtube.com/@Konstantinosiakovou" >
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
                </a>
            </li>         
        </ul>
        <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className='hamburger-icon' />       
    </div>
  )
}

export default Sidebar