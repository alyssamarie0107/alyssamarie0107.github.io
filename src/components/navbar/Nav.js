import styles from './Nav.module.css';
import Logo from '../../assets/images/logo.png';
import { Nav, Navbar, Container } from 'react-bootstrap';

/* 
 * if you want react to handle the routing only in the browswer 
 * and to intercept those requests for new pages, replace anchor 
 * tags with Link instead. Note, Link does not use href attribute,
 * but rather uses 'to'.
 * 
 * Instead of Link, using NavLink since it has attributes for active link
*/ 
const MyNav = () => {
    // styling for active link
    // let activeStyle = {
    //     color: "black",
    //     padding: "5px 20px",
    //     border: "1.5px solid black",
    //     background: 'linear-gradient(transparent, transparent) padding-box, linear-gradient(45deg, rgba(17,153,142,1), rgba(56,239,125,1))'
    // };
    
    return (
        <Navbar className={ styles.customNavbar } expand="lg" variant="dark" >
            <Container>

                <Navbar.Brand href="/portfolio/">
                    <img
                    src={ Logo }
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                <Navbar.Collapse className={ styles.navbarCollapse }>
                    {/* home page */}
                    <Nav.Link to="/portfolio/" className={ styles.navBtn }>Home</Nav.Link>

                    {/* about page */}
                    <Nav.Link to="/portfolio/about" className={ styles.navBtn }>About</Nav.Link>

                    {/* skills page */}
                    <Nav.Link to="/portfolio/skills" className={ styles.navBtn }>Skills</Nav.Link>

                    {/* experience page */}
                    <Nav.Link to="/portfolio/experience" className={ styles.navBtn }>Experience</Nav.Link>

                    {/* projects page */}
                    <Nav.Link to="/portfolio/projects" className={ styles.navBtn }>Projects</Nav.Link>

                    {/* contact page */}
                    <Nav.Link to="/portfolio/contact" className={ styles.navBtn }>Contact</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default MyNav;