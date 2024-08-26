import './App.css';
import { useEffect } from 'react';

const Navbar = () => {

    useEffect(() => {
        const hamburgerMenu = document.querySelector(".hamburger-menu");
        const offScreenMenu = document.querySelector(".off-screen-menu");
        const offScreenLinks = document.querySelectorAll(".off-screen-menu a");
        const navbarLinks = document.querySelectorAll('.nav-links a')
        const nav = document.querySelector(".nav");

        const scroll = () => {
            if(window.scrollY<=0){
                nav.classList.remove('scrolled')
            }
            else{
                nav.classList.add('scrolled')
            }
        }

        window.addEventListener('scroll', scroll);

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
            window.removeEventListener('scroll',scroll)
            });
        };
    }, []);
    

    return ( 
        <div className="navbar">
            <nav className="complete">
                <div className="nav_bar">
                    <div className="nav">
                        <div className="my-portifolio">
                            <h1 className="heading">K S K HRITHIKA</h1>
                        </div>
                        <div className="links">
                            <div className="nav-links">
                                <a href="#intro" className="nav-link-1" >Intro</a>
                                <a href="#about" className="nav-link-2">About</a>
                                <a href="#projects" className="nav-link-3" >Projects</a>
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
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="intro">
                <img src="https://e1.pxfuel.com/desktop-wallpaper/263/422/desktop-wallpaper-instagram-profile-for-girls-instagram-dp-girl-thumbnail.jpg" className='my_profile'/>
                <div className="my_intro">
                    <h1>HI, I AM</h1>
                    <h3>HRITHIKA</h3>
                    <p>I am 2nd year undergraduate student enrolled in  Aerospace Engneering.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;