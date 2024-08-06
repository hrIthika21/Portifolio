import './App.css';
import { useEffect } from 'react';

const Navbar = () => {


    useEffect(() => {
        const hamburgerMenu = document.querySelector(".hamburger-menu");
        const offScreenMenu = document.querySelector(".off-screen-menu");
        const offScreenLinks = document.querySelectorAll(".off-screen-menu a");
        const navbarLinks = document.querySelectorAll('.nav-links a')

        const openMenu = () => {
            hamburgerMenu.classList.toggle('active');
            offScreenMenu.classList.toggle('active');
        };

        const closeMenu = () => {
            hamburgerMenu.classList.remove('active');
            offScreenMenu.classList.remove('active');
        };


        offScreenLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        hamburgerMenu.addEventListener('click', openMenu);

        return () => {
            hamburgerMenu.removeEventListener('click', openMenu);
            offScreenLinks.forEach(link => {
                link.removeEventListener('click', closeMenu);
            });
        };
    }, []);
    

    return ( 
        <div className="navbar">
            <nav className="complete">
                <img src="https://i.pinimg.com/736x/25/ab/92/25ab9231fc501c6a1f9abde2641d8dd2.jpg" alt="background" className="background-img" />
                <div className="nav">
                    <div className="my-portifolio">
                        <h1 className="heading">My Portfolio</h1>
                    </div>
                    <div className="links">
                        <div className="nav-links">
                            <a href="#intro" className="nav-link-1" >Intro</a>
                            <a href="#about" className="nav-link-2">About</a>
                            <a href="#projects" className="nav-link-3" >Projects</a>
                            <a href="#portfolio" className="nav-link-4" >Portfolio</a>
                            <a href="#contact-me" className="nav-link-5" >Contact</a>
                        </div>
                        <div className="hamburger-menu" >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="off-screen-menu">
                            <a href="#intro" className='intro' >Intro</a>
                            <a href="#about" className='about'>About</a>
                            <a href="#projects" className='projects' >Projects</a>
                            <a href="#portfolio" className='portifolio' >Portfolio</a>
                            <a href="#contact-me" className='contact' >Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="intro">
                <img src="src/assets/profile pic.jpeg" className='my_profile'/>
                <div className="my_intro">
                    <h1>HI, I AM</h1>
                    <h3>HRITHIKA</h3>
                    <p>I am 2nd year undergraduate student enrolled in  Aerospace Engneering.</p>
                    <button href="#projects" className='button'>My projects</button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;