
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import "./App.css";

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="info_about_me">
                <h1>CONTACT DETAILS</h1>
                <div className="email">
                        <FontAwesomeIcon icon={faEnvelope} />   
                        <p>kskhrithika@gmail.com</p>
                </div>
                <div className="contact">
                    <FontAwesomeIcon icon={faPhone} />
                    <p>9381471525</p>
                </div>
            </div>
            <span className="vertical_line"></span>
            <div className="down_navbar">
                <h1 className='find_your_way'>FIND YOUR WAY</h1>
                <a href="#intro" className="down-nav-link-1" >Intro</a>
                <a href="#about" className="down-nav-link-2">About</a>
                <a href="#skills" className='down-nav-link-3'>Skills</a>
                <a href="#projects" className="down-nav-link-4" >Projects</a>
            </div>
            <div className="icons">
                <a href="https://github.com/hrIthika21" className='fa'  ><FontAwesomeIcon icon={faGithub} /></a>
                <a href='https://www.instagram.com/hey_hrithika_here/' className='fa'style={{marginLeft:"55%"}}><FontAwesomeIcon icon={faInstagram} /></a>
                <a href='https://www.linkedin.com/in/sri-krishna-hrithika-kotyada-2914732a8/' className='fa' style={{marginLeft:"55%"}}><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
        </div>
     );
}
 
export default Footer;