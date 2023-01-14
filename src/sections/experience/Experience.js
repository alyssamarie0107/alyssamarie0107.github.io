import styles from './Experience.module.css';
import { motion } from 'framer-motion';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'; 
import VisitBtn from '../../components/buttons/visit/VisitBtn';

const Experience = () => {
    return (
      <motion.section
        className={ styles.Experience } 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0, transition: { duration: 0.3 } }}>
          
          <div className={ styles.experienceHeading }>
            <p>Where have I worked?</p>
            <h3>Experience <FontAwesomeIcon icon={ faBuilding }/></h3>
          </div>
          
          <div className={ styles.experienceContent }>
            <Tab.Container defaultActiveKey="first">
              <Row className={ styles.panel }>
                <Col sm={3}>
                  <Nav variant="pills" className={ styles.pillsContainer }>
                    <Nav.Item>
                      <Nav.Link eventKey="first">theCoderSchool</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">UCSF</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Game OVA</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">IET Data Center</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">CliQ</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h5>Code Coach @ theCoderSchool</h5>
                      <p className={ styles.date }>August 2022 - Present</p>
                      <ul>
                        <li>Instruct kids between the ages of 6-18 Scratch, Python, or JavaScript in 1:1 or 2:1 sessions in person or remote.</li>
                        <li>Demonstrate ability to communicate technical information to technical and non-technical personnel at various levels.</li>
                        <li>Create lesson plans and write detailed reports to track the progress of each student that is then shared with their parent(s).</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h5>Frontend Web Developer Intern @ UCSF</h5>
                      <p className={ styles.date }>January 2022 - January 2023</p>
                      <ul>
                        <li>Worked closely with application engineers, project managers, and key stakeholders within the DOM to understand the needs of our users and ship a product that serves those requirements.</li>
                        <li>Designed and built front-end applications and components for the DOM’s Business Operations site via HTML, CSS, JavaScript, PHP, SQL, and related technologies/tools. </li>
                        <li>Converted reports to KoolReports for faster and easier delivery and applied custom CSS to satisfy user needs improve the styling.</li>
                        <li>Participated in weekly meetings to report my progress and to receive technical guidance from senior application engineers.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h5>Web Developer @ GameOVA</h5>
                      <p className={ styles.date }>April 2021 - September 2021</p>
                      <ul>
                        <li>Collaborated with UI/UX designer to scope out rich interfaces and seamless experiences using Figma.</li>
                        <li>Developed their web application using HTML, CSS, JavaScript, Bootstrap, and GitHub pages to host the site.</li>
                        <li>Launched their official website that consisted of detailed services offered and a way to contact them more efficiently, which resulted in new clients and 100% client return for more services.</li>
                        <div className={ styles.visitBtnsContainer }>
                          <VisitBtn href="https://gameovaofficial.com/">View Website</VisitBtn>
                        </div>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <h5>Student Programmer @ IET Data Center</h5>
                      <p className={ styles.date }>December 2019 - April 2021</p>
                      <ul>
                        <li>Utilized LogicMonitor to track, manage, and optimize the performance of UC Davis IET infrastructure.</li>
                        <li>Led meetings with primary administrators to ensure satisfaction with the monitoring, alerting, and escalation of their systems.</li>
                        <li>Improved monitoring efficiency within LogicMonitor with programming in Python or Groovy.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <h5>React Web Developer Intern @ CliQ</h5>
                      <p className={ styles.date }>July 2020 - October 2020</p>
                      <ul>
                        <li>Translated high level designs/wireframes into production-ready code by following established industry standards.</li>
                        <li>Delivered reusable components that made the codebase easier to maintain and gave a more consistent look to the application.</li>
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </motion.section>
    );
}
 
export default Experience;