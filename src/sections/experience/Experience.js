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
                      <p className={ styles.date }>August 2022 - April 2023</p>
                      <p>Previously, I had the privilege to serve as a Code Coach at theCoderSchool San Francisco, West Portal branch. In this capacity, I offered personalized instruction to students in a one-on-one or two-on-one setting, either remotely or in-person, on the fundamental principles of object-oriented programming, problem-solving, algorithm design, debugging, and testing, utilizing a project-based learning methodology in languages such as Scratch, Python, or JavaScript.</p>
                      
                      <p>In preparation for each session, I prepared individualized lesson plans based on each student's unique learning style, interests, and skill level. Additionally, upon the conclusion of each session, I meticulously documented each student's progress and sent a comprehensive report to their respective guardian(s).</p>
                      
                      <p>Witnessing my students' knowledge and proficiency in coding expand and observing the joy they exude when overcoming a challenge independently was the most gratifying aspect of this role. I derived immense satisfaction from guiding and inspiring my students as they progressed towards becoming accomplished coders.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <h5>Frontend Web Developer Intern @ UCSF</h5>
                      <p className={ styles.date }>January 2022 - January 2023</p>
                      <p>As a Frontend Web Developer Intern with UCSF, I had the opportunity to collaborate with various key stakeholders within the DOM to understand user needs and determine satisfying shipping solutions. Through this communication, I gained valuable insights into the importance of user-centered design and the impact of effective communication in project management.</p>

                      <p>One of my notable contributions during this internship was building a collapsible side navigation bar with nested submenus, as well as other frontend components and features for the DOM’s Business Operations page using HTML, CSS, Bootstrap, and JavaScript. This helped to improve website navigation and enhance the user experience.</p>

                      <p>I also upgraded the report generation system to KoolReport, which significantly reduced page load time by 30% and report development time by 60%. In addition, I established and constructed a KoolReport styling template with custom CSS that contributed to a system-wide report standard.</p>

                      <p>To further enhance user experience, I added AJAX to the Faculty Availability page to avoid page reload when availability was changed. Additionally, I developed a widget for the Division of Hospital Medicine’s Balance Sheets that automatically calculated the number of weeks of unemployment based on two dates, auto-filling the corresponding input field. This greatly improved the user's efficiency and streamlined the process.</p>

                      <p>
                      Redesigning and building the Manager Notification pages for the Performance Evaluation Portal was particularly rewarding. I leveraged modern web technologies, incorporated user feedback, and streamlined the process to create a more efficient and user-friendly workflow. This experience taught me the importance of attention to detail, empathy for users, and the value of user feedback in project development.</p>

                      <p>
                      Overall, my internship with UCSF provided me with valuable experiences and learning opportunities, including the importance of effective communication, user-centered design, and the power of modern web technologies in enhancing user experience. I am proud of the accomplishments I made and grateful for the skills and knowledge I gained.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <h5>Web Developer @ GameOVA</h5>
                      <p className={ styles.date }>April 2021 - September 2021</p>
                      <p>As a Web Developer at Game Observational Video Analysis, I worked collaboratively with a UI/UX designer to establish rich interfaces and seamless user experiences using Figma. This partnership was vital in ensuring that we provided our clients with an intuitive and visually appealing platform that met their needs and exceeded their expectations.</p>

                      <p>I participated in daily stand-ups and sprint plannings, which allowed me to share my progress and ensure that I was on track to meet the project deadlines. This experience taught me the value of effective communication, accountability, and teamwork in a professional setting.</p>

                      <p>One of my key accomplishments was developing the official website using HTML, CSS, Bootstrap, and JavaScript. I leveraged GitHub Pages to host the site, resulting in new clients and a 100% client return rate. I took great pride in creating a website that provided a seamless user experience while conveying the company's vision and values.</p>

                      <p>Through my experience at Game Observational Video Analysis, I learned the importance of staying up-to-date with industry trends and technologies, as well as the significance of attention to detail in web development. I also discovered how to effectively communicate with team members, clients, and stakeholders to ensure that projects were delivered on time and to the satisfaction of all parties involved.</p>

                      <p>The most rewarding aspect of this role was seeing the positive impact that our work had on our clients. Knowing that our website played a key role in attracting new clients and retaining existing ones was extremely fulfilling. It was satisfying to know that my contributions played a part in the company's growth and success.</p>

                      <p>Overall, my experience at Game Observational Video Analysis provided me with valuable learning opportunities, enhanced my technical skills, and helped me develop a greater appreciation for effective communication and collaboration in a professional setting.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="fourth">
                      <h5>Student Programmer @ IET Data Center</h5>
                      <p className={ styles.date }>December 2019 - April 2021</p>
                      <p>As a Student Programmer with the Information & Educational Technology (IET) Data Center at UC Davis, I had the opportunity to take on several key responsibilities that allowed me to enhance my technical skills and contribute to the success of the team.</p>

                      <p>One of my major achievements in this role was migrating multiple existing monitoring systems to LogicMonitor, a cloud-based monitoring platform. I worked closely with my team to ensure that each system was configured properly and that the migration process went smoothly. This was an important project for our team, as it helped us to better monitor and manage our servers, and provided us with a more streamlined and efficient way of identifying and resolving issues.</p>

                      <p>In addition to this, I also had the opportunity to lead meetings with primary administrators to ensure that they were satisfied with the monitoring, alerting, and escalation of their servers. This was a great opportunity for me to develop my communication and leadership skills, and to gain a better understanding of how our systems were being used and managed across the organization.</p>

                      <p>Finally, I also took on the responsibility of resolving monitoring enhancement requests within LogicMonitor, using my programming skills in Python or Groovy to quickly and effectively address any issues that arose. This was a challenging task, but it was also one of the most rewarding aspects of my role, as it allowed me to apply my technical skills to real-world problems and make a positive impact on our team's operations.</p>

                      <p>Overall, my time as a Student Programmer with IET was a valuable learning experience that taught me a great deal about the importance of teamwork, communication, and problem-solving in a technical environment. I am grateful for the opportunity to have worked with such a talented and dedicated team, and I look forward to applying the skills and knowledge I gained in this role to future endeavors.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <h5>React Web Developer Intern @ CliQ</h5>
                      <p className={ styles.date }>July 2020 - October 2020</p>
                      <p>During my time as a React Web Developer Intern at CliQ, I contributed to improving the codebase by converting existing vanilla components into reusable React.js components. This involved reviewing and refactoring the code to ensure better performance and faster load times for the app.</p>

                      <p>I worked closely with the designers to ensure that their UI/UX designs were accurately translated into high-quality and production-ready React.js code. This required me to carefully review the design requirements and implement them using various React.js libraries and frameworks.</p>

                      <p>Throughout this internship, I gained valuable experience in React.js and improved my collaboration and communication skills while working with designers and other developers. One of the most rewarding aspects of this role was utilizing React.js for web development. As a modern and widely used language, it was exciting to work with this powerful tool to build high-quality and performant user interfaces.</p>
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