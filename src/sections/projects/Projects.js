import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Tab, Tabs } from 'react-bootstrap';
import ProjectCard from '../../components/project-card/ProjectCard';
import VisitBtn from '../../components/buttons/visit/VisitBtn';

const Projects = () => {
    return (
        <motion.section
            className={ styles.Projects } 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            id="projects">
                
                <div className={ styles.projectsHeading }>
                    <p>What have I built?</p>
                    <h3>Projects <FontAwesomeIcon icon={ faCode }/></h3>
                </div>
                
                <div className={ styles.projectsContent }>
                    {/*  using react-bootstrap's tabs component */}
                    {/* reference: https://react-bootstrap.netlify.app/components/tabs/ */}
                    <Tabs className={ styles.TabsContainer } defaultActiveKey="web" justify>
                        {/* web application projects */}
                        <Tab eventKey="web" title="Web" className={ styles.TabContainer }>
                            <div className={ styles.projectsContainer }>
                                {/* interactive media design */}
                                <ProjectCard title="Interative Media Design II Portfolio">
                                    <p className={ styles.description }>Portfolio created for DES 157A: Interactive Media Design II, which was taken at UC Davis in Spring 2021. This course focused on conceptual framework, user experience, visual interface and interaction design.</p>

                                    <ul className={ styles.projectTechStack }>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                    </ul>

                                    <div className={ styles.visitBtnsContainer }>
                                        <VisitBtn href="https://lysscodes.com/des157-portfolio/des157/">View Website</VisitBtn>
                                        <VisitBtn href="https://github.com/alyssamarie0107/des157-portfolio">View Code</VisitBtn>
                                    </div>
                                </ProjectCard>

                                {/* postcard generator */}
                                <ProjectCard title="Postcard Generator">
                                    <p className={ styles.description }>A web app that enables users to create a postcard sharing a moment of their day to their friends, family, and loved ones.</p>

                                    <ul className={ styles.projectTechStack }>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                    </ul>

                                    <div className={ styles.visitBtnsContainer }>
                                        <VisitBtn href="https://post-tranquil-creator.glitch.me/">View Website</VisitBtn>
                                        <VisitBtn href="https://github.com/alyssamarie0107/post-gen-162-alyssa">View Code</VisitBtn>
                                    </div>
                                </ProjectCard>

                                {/* UCD lost & found */}
                                <ProjectCard title="UCD Lost & Found">
                                    <p className={ styles.description }>Final project submission of ECS 162: Web Programming. My team and I successfully implemented a full-stack web app to act as a Lost & Found page for UC Davis. This web app can only be accessed by users with a valid ucdavis.edu email.</p>

                                    <ul className={ styles.projectTechStack }>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Node.js</li>
                                        <li>Express</li>
                                    </ul>

                                    <div className={ styles.visitBtnsContainer }>
                                        <VisitBtn href="https://metacoders-ucd-lf.glitch.me/">View Website</VisitBtn>
                                        <VisitBtn href="https://github.com/alyssamarie0107/ucd-lf-162">View Code</VisitBtn>
                                    </div>
                                </ProjectCard>

                                {/* pomocon */}
                                <ProjectCard title="Pomocon">
                                    <p className={ styles.description }>Project submission for my first hackathon, HackDavis 2021. The theme of this year was for the betterment of social good. My partner and I created a pomodoro timer to help users differentiate time to work from time to relax in the midst of the COVID-19 pandemic.</p>

                                    <ul className={ styles.projectTechStack }>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Bootstrap</li>
                                    </ul>

                                    <div className={ styles.visitBtnsContainer }>
                                        <VisitBtn href="https://lysscodes.com/pomocon/">View Website</VisitBtn>
                                        <VisitBtn href="https://github.com/alyssamarie0107/pomocon">View Code</VisitBtn>
                                    </div>
                                </ProjectCard>
                            </div>
                        </Tab>

                        {/* mobile application projects */}
                        <Tab eventKey="mobile" title="Mobile" className={ styles.TabContainer }>
                            <div className={ styles.projectsContainer }>
                                {/* iApply */}
                                <ProjectCard title="iApply">
                                    <p className={ styles.description }>Final project for ECS 189E: iOS App Development, which was taken in Winter 2021. My team and I created a job application management and preparation tool that eases the burden of tracking job applications so time can be better spent preparing for the opportunity itself.</p>

                                    <ul className={ styles.projectTechStack }>
                                        <li>Swift</li>
                                    </ul>

                                    <div className={ styles.visitBtnsContainer }>
                                        <VisitBtn href="https://github.com/ECS189E/project-w21-swifty-as-honey">View Code</VisitBtn>
                                    </div>
                                </ProjectCard>

                                {/* card bank */}
                                <ProjectCard title="Card Bank">
                                    <p className={ styles.description }>Mobile app also created for ECS 189E: iOS App Development. This app simply served as wallet. It takes in a phone number from the user and sends a verification code to the phone number via text message. The app then prompts the user to enter the code sent to verify identity. Once verified, the user's wallet is displayed visually by a table of accounts and information of each account.</p>

                                    <ul className={ styles.projectTechStack }>
                                        <li>Swift</li>
                                    </ul>

                                    <div className={ styles.visitBtnsContainer }>
                                        <VisitBtn href="https://github.com/alyssamarie0107/card-bank-170">View Code</VisitBtn>
                                    </div>
                                </ProjectCard>
                            </div>
                        </Tab>

                        {/* other projects */}
                        <Tab eventKey="other" title="Other" className={ styles.TabContainer }>
                            <div className={ styles.projectsContainer }>
                                {/* hexapawn */}
                                <ProjectCard title="Hexapawn">
                                    <p className={ styles.description }>Final project for ECS 189E: iOS App Development, which was taken in Winter 2021. My team and I created a job application management and preparation tool that eases the burden of tracking job applications so time can be better spent preparing for the opportunity itself.</p>

                                    <ul className={ styles.projectTechStack }>
                                        <li>Python</li>
                                    </ul>

                                    <div className={ styles.visitBtnsContainer }>
                                        <VisitBtn href="https://github.com/alyssamarie0107/hexapawn-170">View Code</VisitBtn>
                                    </div>
                                </ProjectCard>

                                {/* web proxy server */}
                                <ProjectCard title="Web Proxy Server">
                                    <p className={ styles.description }>Mobile app also created for ECS 189E: iOS App Development. This app simply served as wallet. It takes in a phone number from the user and sends a verification code to the phone number via text message. The app then prompts the user to enter the code sent to verify identity. Once verified, the user's wallet is displayed visually by a table of accounts and information of each account.</p>

                                    <ul className={ styles.projectTechStack }>
                                        <li>Python</li>
                                    </ul>

                                    <div className={ styles.visitBtnsContainer }>
                                        <VisitBtn href="https://github.com/alyssamarie0107/web-proxy-server">View Code</VisitBtn>
                                    </div>
                                </ProjectCard>

                                {/* user-level thread library */}
                                <ProjectCard title="User-level Thread Library">
                                    <p className={ styles.description }>Mobile app also created for ECS 189E: iOS App Development. This app simply served as wallet. It takes in a phone number from the user and sends a verification code to the phone number via text message. The app then prompts the user to enter the code sent to verify identity. Once verified, the user's wallet is displayed visually by a table of accounts and information of each account.</p>

                                    <ul className={ styles.projectTechStack }>
                                        <li>C</li>
                                    </ul>

                                    <div className={ styles.visitBtnsContainer }>
                                        <VisitBtn href="https://github.com/alyssamarie0107/user-thread-lib150">View Code</VisitBtn>
                                    </div>
                                </ProjectCard>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
        </motion.section>
    );
}
 
export default Projects;