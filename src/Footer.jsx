
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "./App.css";

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="info_about_me">
                <h1 style={{marginBottom:"3%",textTransform:"uppercase"}}>Contact : 9381471525</h1>
                <h1 style={{marginBottom:"3%"}}>EMAIL : kskhrithika@gmail.com</h1>
                <h1 style={{marginBottom:"3%"}}>ALTERNATIVE EMAIL : hrithika_k@kgpian.iitkgp.ac.in</h1>
            </div>
            <div className="down_navbar">
                <a href="#intro" className="down-nav-link-1" >Intro</a>
                <a href="#about" className="down-nav-link-2">About</a>
                <a href="#projects" className="down-nav-link-3" >Projects</a>
            </div>
            <div className="icons">
                <a href="https://github.com/hrIthika21" className='fa' ><FontAwesomeIcon icon={faGithub} /></a>
                <a href='https://www.instagram.com/hey_hrithika_here/' className='fa'><FontAwesomeIcon icon={faInstagram} /></a>
                <a href='https://www.linkedin.com/in/sri-krishna-hrithika-kotyada-2914732a8/' className='fa'><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
        </div>
     );
}
 
export default Footer;