import styles from './Nav.module.css';
// import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import SocialBtns from '../buttons/social/SocialBtns';

/* 
 * if you want react to handle the routing only in the browswer 
 * and to intercept those requests for new pages, replace anchor 
 * tags with Link instead. Note, Link does not use href attribute,
 * but rather uses 'to'.
 * 
 * Instead of Link from bootstrap, using Link from react-scroll
 * https://www.npmjs.com/package/react-scroll
*/ 
const MyNav = () => {
    // const [colorChange, setColorchange] = useState(false);

    // const changeNavbarColor = () =>{
    //     if(window.scrollY >= 720){
    //       setColorchange(true);
    //     }
    //     else{
    //       setColorchange(false);
    //     }
    //  };

    //  window.addEventListener('scroll', changeNavbarColor);
    return (
        // fixed navbar
        <Navbar
            // className={colorChange ? styles.customNavbar2 : styles.customNavbar }
            className = { styles.customNavbar  }
            expand="lg" 
            variant="dark" 
            fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                <Navbar.Collapse className={ styles.navbarCollapse }>
                    {/* home page */}
                    <Link
                        // className={colorChange ? styles.navBtn2 : styles.navBtn }
                        className = { styles.navBtn   }
                        activeClass={ styles.navBtnActive }
                        to="home" 
                        spy={true} 
                        smooth={true} 
                        offset={-50} 
                        duration={100}>
                        Home
                    </Link>

                    {/* about page */}
                    <Link
                        // className={colorChange ? styles.navBtn2 : styles.navBtn }
                        className = { styles.navBtn }
                        activeClass={ styles.navBtnActive }
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={100}>
                        About
                    </Link>

                    {/* skills page */}
                    <Link
                        // className={colorChange ? styles.navBtn2 : styles.navBtn }
                        className = { styles.navBtn }
                        activeClass={ styles.navBtnActive }
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={100}>
                        Skills
                    </Link>

                    {/* experience page */}
                    <Link 
                        // className={colorChange ? styles.navBtn2 : styles.navBtn }
                        className = { styles.navBtn }
                        activeClass={ styles.navBtnActive }
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={100}>
                        Experience
                    </Link>

                    {/* projects page */}
                    <Link 
                        // className={colorChange ? styles.navBtn2 : styles.navBtn }
                        className = { styles.navBtn   }
                        activeClass={ styles.navBtnActive }
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={100}>
                        Projects
                    </Link>

                    {/* contact page */}
                    <Link 
                        // className={colorChange ? styles.navBtn2 : styles.navBtn }
                        className = { styles.navBtn }
                        activeClass={ styles.navBtnActive }
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={100}>
                        Contact
                    </Link>
                </Navbar.Collapse>
                <SocialBtns/>
            </Container>
        </Navbar>
    );
}
 
export default MyNav;