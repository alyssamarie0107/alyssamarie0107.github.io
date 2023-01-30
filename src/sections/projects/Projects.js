import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import { Tab, Tabs } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Project from '../../components/project/Project';
import VisitBtn from '../../components/buttons/visit/VisitBtn';
import Des157A from '../../assets/png/des157.png';
import Pomocon from '../../assets/png/pomocon.png';
import UCDLostFound from '../../assets/png/ucd-lf.png';
import Postcard from '../../assets/png/postcard.png';
import Museum from '../../assets/png/museum.png';
import iApply from '../../assets/png/iapply.png';
import CardBank from '../../assets/png/card-bank.png';
import Threads from '../../assets/png/threads.png';
import Hexapawn from '../../assets/png/hexapawn.png';

// projects section code
const Projects = () => {

    return (
        <motion.section
            className={ styles.Projects } 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            id="projects">

            <div id={ styles.projectsHeading }>
                <p>What have I built?</p>
                <h3>Projects <FontAwesomeIcon icon={ faCode }/></h3>
            </div>

            <Tabs className={ styles.TabsContainer } defaultActiveKey="web">
                {/* web application projects */}
                <Tab eventKey="web" title="Web" className={ styles.TabContainer }>
                    <div className={ styles.projectsContainer }>
                        {/* interactive media design */}
                        <Project
                            src={ Des157A }
                            alt="Des157A"
                            imgStyling="webImg"
                            projectTitle="Interative Media Design Portfolio"
                            projectDescription="Portfolio created for DES 157A: Interactive Media Design II, which was taken at UC Davis in Spring 2021. This course focused on conceptual framework, user experience, visual interface and interaction design."
                            projectViewBtns={
                                <div className={ styles.projectViewBtns }>
                                    <VisitBtn href="https://alyssamarie0107.github.io/des157-portfolio/des157/">View Website</VisitBtn>
                                    <VisitBtn href="https://github.com/alyssamarie0107/des157-portfolio/tree/main/des157">View Code</VisitBtn>
                                </div>
                            }
                        >
                            {/* tech stack */}
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </Project>

                        {/* pomocon */}
                        <Project
                            src={ Pomocon }
                            alt="Pomocon"
                            imgStyling="webImg"
                            projectTitle="Pomocon"
                            projectDescription="Project submission for my first hackathon, HackDavis 2021. The theme of this year was for the betterment of social good. My partner and I created a pomodoro timer to help users differentiate time to work from time to relax in the midst of the COVID-19 pandemic."
                            projectViewBtns={
                                <div className={ styles.projectViewBtns }>
                                    <VisitBtn href="https://alyssamarie0107.github.io/pomocon/">View Website</VisitBtn>
                                    <VisitBtn href="https://github.com/alyssamarie0107/pomocon">View Code</VisitBtn>
                                </div>
                            }
                        >
                            {/* tech stack */}
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                        </Project>

                        {/* ucd lost & found */}
                        <Project
                            src={ UCDLostFound }
                            alt="Lost & Found"
                            imgStyling="webImg"
                            projectTitle="UCD Lost & Found"
                            projectDescription="Final project submission for ECS 162: Web Programming. My team and I successfully implemented a full-stack web app to act as a Lost & Found page for UC Davis. This web app can only be accessed by users with a valid ucdavis.edu email."
                            projectViewBtns={
                                <div className={ styles.projectViewBtns }>
                                    <VisitBtn href="https://metacoders-ucd-lf.glitch.me/">View Website</VisitBtn>
                                    <VisitBtn href="https://github.com/alyssamarie0107/ucd-lf-162">View Code</VisitBtn>
                                </div>
                            }
                        >
                            {/* tech stack */}
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>SQLite3</li>
                        </Project>

                        {/* postcard generator */}
                        <Project
                            src={ Postcard }
                            alt="Postcard Generator"
                            imgStyling="webImg"
                            projectTitle="Postcard Generator"
                            projectDescription="A web app that enables users to create a postcard sharing a moment of their day to their friends, family, and loved ones."
                            projectViewBtns={
                                <div className={ styles.projectViewBtns }>
                                    <VisitBtn href="https://post-tranquil-creator.glitch.me/">View Website</VisitBtn>
                                    <VisitBtn href="https://github.com/alyssamarie0107/post-gen-162-alyssa">View Code</VisitBtn>
                                </div>
                            }
                        >
                            {/* tech stack */}
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </Project>

                        {/* museum exhibit*/}
                        <Project
                            src={ Museum }
                            alt="Museum Exhibit"
                            imgStyling="webImg"
                            projectTitle="Museum Exhibit"
                            projectDescription="The campus exhibit, Manetti Shrum, was closed as part of the campus shut-down in 2020 due to the pandemic. This web app shows current art pieces from exhibit during that time so that people can still get an idea of what was inside of the museum. The header was a countdown to when it would possibly open again."
                            projectViewBtns={
                                <div className={ styles.projectViewBtns }>
                                    <VisitBtn href="https://alyssamarie0107.github.io/museum-162-alyssa/">View Website</VisitBtn>
                                    <VisitBtn href="https://github.com/alyssamarie0107/museum-162-alyssa">View Code</VisitBtn>
                                </div>
                            }
                        >
                            {/* tech stack */}
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </Project>
                    </div>
                </Tab>

                {/* mobile application projects */}
                <Tab eventKey="mobile" title="Mobile" className={ styles.TabContainer }>
                    <div className={ styles.projectsContainer }>
                        {/* iApply */}
                        <Project
                            src={ iApply }
                            alt="iApply"
                            imgStyling="mobileImg"
                            projectTitle="iApply"
                            projectDescription="Final project for ECS 189E: iOS App Development, which was taken in Winter 2021. My team and I created a job application management and preparation tool that eases the burden of tracking job applications so time can be better spent preparing for the opportunity itself."
                            projectViewBtns={
                                <div className={ styles.projectViewBtns }>
                                    <VisitBtn href="https://github.com/ECS189E/project-w21-swifty-as-honey">View Code</VisitBtn>
                                </div>
                            }
                        >
                            {/* tech stack */}
                            <li>Swift</li>
                        </Project>

                        {/* Card Bank */}
                        <Project
                            src={ CardBank }
                            alt="Card Bank"
                            imgStyling="mobileImg"
                            projectTitle="Card Bank"
                            projectDescription="Mobile app also created for ECS 189E: iOS App Development. This app simply served as wallet. It takes in a phone number from the user and sends a verification code to the phone number via text message. The app then prompts the user to enter the code sent to verify identity. Once verified, the user's wallet is displayed visually by a table of accounts and information of each account."
                            projectViewBtns={
                                <div className={ styles.projectViewBtns }>
                                    <VisitBtn href="https://github.com/alyssamarie0107/card-bank-170">View Code</VisitBtn>
                                </div>
                            }
                        >
                            {/* tech stack */}
                            <li>Swift</li>
                        </Project>
                    </div>
                </Tab>

                {/* other projects */}
                <Tab eventKey="other" title="Other" className={ styles.TabContainer }>
                    <div className={ styles.projectsContainer }>
                        {/* user-thread */}
                        <Project
                            src={ Threads }
                            alt="User Thread"
                            imgStyling="otherImg"
                            projectTitle="User-level Thread Library"
                            projectDescription="In this project for ECS 150: Operating Systems, my partner and I implemented a user-level thread library to support multithreading within the same process. As a prerequisite to the thread library we implemented a FIFO container (queue) which we used in subsequent steps. Moreover, we implemented a semaphore for synchronization, and implemented preemption to avoid unwanted uncooperative thread behavior while sharing resources."
                            projectViewBtns={
                                <div className={ styles.projectViewBtns }>
                                    <VisitBtn href="https://github.com/alyssamarie0107/user-thread-lib150">View Code</VisitBtn>
                                </div>
                            }
                        >
                            {/* tech stack */}
                            <li>C</li>
                            <li>Makefile</li>
                        </Project>

                        {/* hexapawn */}
                        <Project
                            src={ Hexapawn }
                            alt="Hexapawn"
                            projectTitle="Hexapawn"
                            imgStyling="otherImg"
                            projectDescription="Project built for ECS 170: Artificial Intelligence that extends the definition of hexapawn to include any similar game involving n white pawns, n black pawns, and a nxn board. The main task was to construct a Python function (and all supporting functions) which takes as input a representation of the state of a hexapawn game, an integer representing the size of the board, an indication as to which player is to move next, and an integer representing the number of moves to look ahead. This function returns as output the best next move that the designated player can make from that given board position."
                            projectViewBtns={
                                <div className={ styles.projectViewBtns }>
                                    <VisitBtn href="https://github.com/alyssamarie0107/user-thread-lib150">View Code</VisitBtn>
                                </div>
                            }
                        >
                            {/* tech stack */}
                            <li>Python</li>
                        </Project>
                    </div>
                </Tab>
            </Tabs>
        </motion.section>
    );
}
 
export default Projects;