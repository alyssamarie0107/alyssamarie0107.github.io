import styles from './Experience.module.css';
import { motion } from 'framer-motion';
import { Nav, Row, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'; 

// animation variants
const experienceVariants = {
  hidden: {
      opacity: 0
  },
  visible: {
      opacity: 1,
      transition: { duration: 1 }
  }
}

// experience section
const Experience = () => {
    return (
      <motion.section
        className={ styles.Experience }
        id="experience"
        variants={ experienceVariants }
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.9 }}>
          
          <div id={ styles.experienceHeading }>
            <p>Where have I worked?</p>
            <h3>Experience <FontAwesomeIcon icon={ faBuilding } id={ styles.faBuilding }/></h3>
          </div>
          
          <div id={ styles.experienceContainer }>
            <Tab.Container defaultActiveKey="first">
              <Row className={ styles.panel }>
                <div className={ styles.pillsCol }>
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
                </div>
                <div className={ styles.contentCol }>
                  <Tab.Content className={ styles.tabContent }>
                    <Tab.Pane eventKey="first">
                      <h5>Code Coach @ theCoderSchool</h5>
                      <p className={ styles.date }>August 2022 - Present</p>
                      <ul>
                        <li>Instruct students K-12 in a 1:1 or 2:1 setting the core fundamentals of object-oriented programming, problem-solving, algorithm design, debugging, and testing through a project-based learning approach in Scratch, Python, or JavaScript.</li>
                        <li>Create lesson plans tailored to each students’ learning style, interests, and level as well as document their progress each session.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h5>Frontend Web Developer Intern @ UCSF</h5>
                      <p className={ styles.date }>January 2022 - January 2023</p>
                      <ul>
                        <li>Actively communicated with application engineers, project managers, and key stakeholders within the DOM to understand the needs of our users and to determine solutions for shipping a product that serves those requirements.</li>
                        <li>Contributed a collapsible side navigation bar with the ability to have nested dropdowns and built other frontend components and features for DOM’s Business Operations page utilizing HTML5, CSS, Bootstrap, JavaScript, and related technologies/tools.</li>
                        <li>Upgraded report generation system to KoolReport, which decreased load time by 30% and cut report development time by 60%.</li>
                        <li>Constructed a KoolReport styling template with custom CSS that contributed to a system-wide report standard.</li>
                        <li>Worked independently to redesign and implement the Manager Notification pages for the Performance Evaluation Portal that greatly improved the user’s workflow.</li>
                        <li>Fulfilled frontend usability enhancement tickets to the Division of Hospital Medicine Balance Sheets, for example, adding a widget that calculates the number of weeks, based on two dates, of unemployment and autofill the corresponding input field.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h5>Web Developer @ GameOVA</h5>
                      <p className={ styles.date }>April 2021 - September 2021</p>
                      <ul>
                        <li>Partnered with UI/UX designer to establish rich interfaces and seamless experiences using Figma.</li>
                        <li>Participated in numerous weekly meetings to share progress and to ensure deadlines were on track to be fulfilled on time.</li>
                        <li>Developed and deployed official website using frontend technologies, which resulted in new clients and 100% client return.</li>
                        <li>View Website: <a target="_blank" rel="noreferrer" href='https://gameovaofficial.com/' id={ styles.gameovaWebLink }>https://gameovaofficial.com/</a></li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <h5>Student Programmer @ IET Data Center</h5>
                      <p className={ styles.date }>December 2019 - April 2021</p>
                      <ul>
                        <li>Transferred multiple existing monitoring systems to LogicMonitor and ensured that each added system was configured properly.</li>
                        <li>Led meetings with primary administrators to ensure satisfaction with the monitoring, alerting, and escalation of their servers.</li>
                        <li>In a timely manner, resolved monitoring enhancement requests within LogicMonitor with programming in Python or Groovy.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <h5>React Web Developer Intern @ CliQ</h5>
                      <p className={ styles.date }>July 2020 - October 2020</p>
                      <ul>
                        <li>Translated 7+ web page designs/wireframes into production ready React.js code by following established industry standards.</li>
                        <li>Delivered 10+ reusable components that made the codebase easier to maintain and gave a more consistent look to the web app.</li>
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Row>
            </Tab.Container>
          </div>
        </motion.section>
    );
}
 
export default Experience;