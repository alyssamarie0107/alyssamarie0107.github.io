import styles from './Nav.module.css';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/* 
 * if you want react to handle the routing only in the browswer 
 * and to intercept those requests for new pages, replace anchor 
 * tags with Link instead. Note, Link does not use href attribute,
 * but rather uses 'to'.
 * 
 * Instead of Link, using NavLink since it has attributes for active link
*/ 
const Nav = () => {
    // styling for active link
    let activeStyle = {
        color: "black",
        padding: "5px 20px",
        border: "1.5px solid black",
        background: 'linear-gradient(transparent, transparent) padding-box, linear-gradient(45deg, rgba(17,153,142,1), rgba(56,239,125,1))'
    };
    
    return (
        <Navbar className={ styles.customNavbar } expand="lg" variant="dark" >
            <Container>

                <Navbar.Brand href="/">
                    <img
                    src="images/logo.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                <Navbar.Collapse className={ styles.navbarCollapse }>
                    {/* home page */}
                    <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined} className={ styles.navBtn }>Home</NavLink>

                    {/* about page */}
                    <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined} className={ styles.navBtn }>About</NavLink>

                    {/* skills page */}
                    <NavLink to="/skills" style={({ isActive }) => isActive ? activeStyle : undefined} className={ styles.navBtn }>Skills</NavLink>

                    {/* experience page */}
                    <NavLink to="/experience" style={({ isActive }) => isActive ? activeStyle : undefined} className={ styles.navBtn }>Experience</NavLink>

                    {/* projects page */}
                    <NavLink to="/projects" style={({ isActive }) => isActive ? activeStyle : undefined} className={ styles.navBtn }>Projects</NavLink>

                    {/* contact page */}
                    <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined} className={ styles.navBtn }>Contact</NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default Nav;