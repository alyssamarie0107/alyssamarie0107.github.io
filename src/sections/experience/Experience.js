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
      transition: {
        delay: 0.8,
        duration: 1 
      }
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
        viewport={{ once: true }}>
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
                      {/* <ul>
                        <li>Instruct students the core fundamentals of programming through a project-based learning approach in Scratch, Python, or JavaScript.</li>
                        <li>Create lesson plans tailored to each students’ learning style, interests, and level as well as document their progress each session.</li>
                      </ul> */}
                      <p>Currently, I have the incredible opportunity to work as a Code Coach at theCoderSchool San Francisco, West Portal branch. I instruct students in a 1:1 or 2:1 setting (remote or in-person) the core fundamentals of object-oriented programming, problem-solving, algorithm design, debugging, and testing through a project-based learning approach in Scratch, Python, or JavaScript. Before each session, I create lesson plans tailored to each students' learning style, interests, and level. Additionally, at the end of each session, I document their progress and send a report to their guardian(s). The most rewarding part of this role is witnessing my students' understanding/knowledge grow and seeing their eyes light up when they solve a problem on their own. I truly enjoy working with my students and shaping them to be great coders.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h5>Frontend Web Developer Intern @ UCSF</h5>
                      <p className={ styles.date }>January 2022 - January 2023</p>
                      <ul>
                        <li>Communicated with various key stakeholders within the DOM to understand user needs and to determine satisfying shipping solutions.</li>
                        <li>Contributed a collapsible side navigation bar with the ability to have nested submenus and built other frontend components and features for the DOM’s Business Operations page utilizing HTML, CSS, Bootstrap, and JavaScript.</li>
                        <li>Upgraded report generation system to KoolReport, which reduced page load time by 30% and report development time by 60%.</li>
                        <li>Established and constructed a KoolReport styling template with custom CSS that contributed to a system-wide report standard.</li>
                        <li>Improved the user’s experience on the Faculty Availability page by adding AJAX to avoid page reload when availability was changed.</li>
                        <li>Added a widget to the Division of Hospital Medicine’s Balance Sheets that calculated the number of weeks, based on two dates, of unemployment and auto filled the corresponding input field so that users no longer had to perform the calculation themselves.</li>
                        <li>Redesigned and built the Manager Notification pages for the Performance Evaluation Portal that greatly improved the user’s workflow. </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h5>Web Developer @ GameOVA</h5>
                      <p className={ styles.date }>April 2021 - September 2021</p>
                      <ul>
                        <li>Partnered with UI/UX designer to establish rich interfaces and seamless experiences using Figma.</li>
                        <li>Participated in stand-ups and sprint plannings to share progress and to ensure deadlines were on track to be fulfilled on time.</li>
                        <li>Developed the official website using HTML, CSS, Bootstrap, and JavaScript and utilized GitHub Pages to host the site, which overall resulted in new clients and 100% client return.</li>
                        <li>View Website: <a target="_blank" rel="noreferrer" href='https://gameovaofficial.com/' id={ styles.gameovaWebLink }>https://gameovaofficial.com/</a></li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <h5>Student Programmer @ IET Data Center</h5>
                      <p className={ styles.date }>December 2019 - April 2021</p>
                      <ul>
                        <li>Migrated multiple existing monitoring systems to LogicMonitor and ensured that each added system was configured properly.</li>
                        <li>Led meetings with primary administrators to ensure satisfaction with the monitoring, alerting, and escalation of their servers.</li>
                        <li>In a timely manner, resolved monitoring enhancement requests within LogicMonitor with programming in Python or Groovy.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <h5>React Web Developer Intern @ CliQ</h5>
                      <p className={ styles.date }>July 2020 - October 2020</p>
                      <ul>
                        <li>Streamlined the codebase by converting various existing vanilla components (HTML, CSS, JavaScript) into reusable React.js components, which overall increased speed and performance of app.</li>
                        <li>Collaborated with designers to translate their UI/UX designs and wireframes into high-quality and production ready React.js code.</li>
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