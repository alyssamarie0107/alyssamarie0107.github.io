import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import { Tab, Tabs } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Project from '../../components/project/Project';
import ViewBtn from '../../components/buttons/view/ViewBtn';
import MadLibs from '../../assets/png/madlibs.png';
import EveryPicture from '../../assets/png/every-pic.png';
import Pomocon from '../../assets/png/pomocon.png';
import UCDLostFound from '../../assets/png/ucd-lf.png';
import Postcard from '../../assets/png/postcard.png';
import Museum from '../../assets/png/museum.png';
import iApply from '../../assets/png/iapply.png';
import CardBank from '../../assets/png/card-bank.png';
import Threads from '../../assets/png/threads.png';
import Hexapawn from '../../assets/png/hexapawn.png';

// animation variants 
const projectsVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.8
        }
    }
} 

// projects section
const Projects = () => {

    return (
        <motion.section
            className={ styles.Projects } 
            id="projects"
            variants={ projectsVariants }
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
                <div id={ styles.projectsHeading }>
                    <p>What have I built?</p>
                    <h3>Projects <FontAwesomeIcon icon={ faCode } id={ styles.faCode }/></h3>
                </div>

                <Tabs className={ styles.TabsContainer } defaultActiveKey="web">
                    {/* web application projects */}
                    <Tab eventKey="web" title="Web" className={ styles.TabContainer }>
                        <div className={ styles.projectsContainer }>
                            {/* madlibs */}
                            <Project
                                src={ MadLibs }
                                alt="Madlibs"
                                imgStyling="webImg"
                                projectTitle="Madlibs"
                                projectDescription=""
                                projectViewBtns={
                                    <div className={ styles.projectViewBtns }>
                                        <ViewBtn href="https://alyssamarie0107.github.io/des157-portfolio/des157/studio1/index.html">View Website</ViewBtn>
                                        <ViewBtn href="https://github.com/alyssamarie0107/des157-portfolio/tree/main/des157/studio1">View Code</ViewBtn>
                                    </div>
                                }>
                                {/* tech stack */}
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </Project>

                            {/* every picture */}
                            <Project
                                src={ EveryPicture }
                                alt="Every Picture"
                                imgStyling="webImg"
                                projectTitle="Every Picture"
                                projectDescription=""
                                projectViewBtns={
                                    <div className={ styles.projectViewBtns }>
                                        <ViewBtn href="https://alyssamarie0107.github.io/des157-portfolio/des157/studio2/index.html">View Website</ViewBtn>
                                        <ViewBtn href="https://github.com/alyssamarie0107/des157-portfolio/tree/main/des157/studio2">View Code</ViewBtn>
                                    </div>
                                }>
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
                                projectDescription="Pomocon is a web application for the HackDavis 2021 hackathon. The theme of the hackathon was 'for the betterment of social good' and Pomocon was designed to help users manage their time more effectively during the Covid-19 pandemic.

                                The main purpose of Pomocon is to help users differentiate their work time from their relaxation time. The application is built using HTML, CSS, JavaScript, and Bootstrap. The pomodoro timer is a popular time management technique that involves breaking work down into 25-minute intervals, followed by short breaks. Pomocon takes this technique and makes it easy for users to follow.

                                The application is user-friendly and responsive, with a clean and modern interface. Users can set the timer for work intervals and breaks, and the application will alert them when it's time to switch. Additionally, Pomocon also provides users with valuable statistics about their productivity. Users can view how many pomodoros they have completed, how much time they spent on work, how long they took breaks, and their work efficiency percentage. These statistics help users to identify areas where they can improve and optimize their time management strategies.

                                Overall, Pomocon is a powerful tool for anyone looking to improve their productivity and manage their time more effectively. With its simple interface, powerful features, and insightful statistics, it's an excellent addition to any time management toolkit."
                                projectViewBtns={
                                    <div className={ styles.projectViewBtns }>
                                        <ViewBtn href="https://alyssamarie0107.github.io/pomocon/">View Website</ViewBtn>
                                        <ViewBtn href="https://github.com/alyssamarie0107/pomocon">View Code</ViewBtn>
                                    </div>
                                }>
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
                                projectDescription="UCD Lost & Found is a full-stack web application designed to serve as a lost and found page for the UC Davis community. The goal of the project is to provide a platform for students, faculty, and staff to post lost and found items, search for lost items, and search through found items. The project was built using HTML, CSS, and JavaScript for the front-end, and Node.js, Express.js, SQL, and SQLite3 for the back-end.
                                
                                One of the key features of the application is its secure login system. Only users with a valid UC Davis email address can access the application, ensuring that only members of the UC Davis community can post or search for lost and found items.

                                The application allows users to search for lost and found items by title, category, and location. Users can also view a map of the campus to see where lost and found items have been reported. When a user finds a lost item, they can create a post describing the item and its location. When a user loses an item, they can create a post describing the item, its location when last seen, and other relevant details. Overall, UCD Lost & Found is a powerful tool for the UC Davis community. With its secure login system and powerful search and filter capabilities, it's an excellent resource for anyone who has lost or found an item on campus."
                                projectViewBtns={
                                    <div className={ styles.projectViewBtns }>
                                        <ViewBtn href="https://metacoders-ucd-lf.glitch.me/">View Website</ViewBtn>
                                        <ViewBtn href="https://github.com/alyssamarie0107/ucd-lf-162">View Code</ViewBtn>
                                    </div>
                                }>
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
                                projectDescription="Postcard Generator is a web application that enables users to create and share personalized postcards with their friends, family, and loved ones. The project was built using HTML, CSS, and JavaScript, and is hosted on glitch.com (NOTE: when visiting, the application will take a moment to load).
                                
                                One of the key features of the Postcard Generator is the ability to customize the design of the postcard that are truly unique and reflect their personal style. Users can upload a photo, which is then added to the postcard as an element and users can choose a background color for their postcard, select a font for their message, and add a custom message to their postcard.
                                
                                Another important feature of the application is its sharing functionality. Once a user has created their postcard, they can generate a link to share it with others. The generated link can be shared through email, social media, or any other preferred communication method. This makes it easy for users to share their postcards with friends and family all around the world.

                                In summary, Postcard Generator is a user-friendly web application that allows users to create and share personalized postcards with their loved ones. With its customization options and easy sharing functionality, it's a fun and convenient way to stay connected with friends and family."
                                projectViewBtns={
                                    <div className={ styles.projectViewBtns }>
                                        <ViewBtn href="https://post-tranquil-creator.glitch.me/">View Website</ViewBtn>
                                        <ViewBtn href="https://github.com/alyssamarie0107/post-gen-162-alyssa">View Code</ViewBtn>
                                    </div>
                                }>
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
                                projectDescription="Museum Exhibit is a web application that showcases the art pieces by Stephen Kaltenbach from the Manetti Shrem museum exhibit at the University of California, Davis. The project was created as a response to the museum's closure in 2020 due to the COVID-19 pandemic. It was built using HTML, CSS, JavaScript, and Bootstrap.

                                The application features an easy-to-navigate interface that displays  some of Stephen Kaltenbach's art pieces from the exhibit using a slideshow component. Users can browse through the artwork and read about each piece. The header of the application features a countdown timer to when the exhibit would possibly open again, creating a sense of anticipation and excitement among users.
                                
                                Overall, Museum Exhibit is a powerful tool for showcasing art and keeping people engaged with the cultural offerings of the university during a challenging time."
                                projectViewBtns={
                                    <div className={ styles.projectViewBtns }>
                                        <ViewBtn href="https://alyssamarie0107.github.io/museum-162-alyssa/">View Website</ViewBtn>
                                        <ViewBtn href="https://github.com/alyssamarie0107/museum-162-alyssa">View Code</ViewBtn>
                                    </div>
                                }>
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
                                projectDescription="iApply is a comprehensive job application management and preparation tool designed to help users streamline the job application process. With iApply, users can easily create and manage applications by adding details such as the company name, application notes, due date, location, job requirements, and posting URL.
                                
                                One of the unique features of iApply is that it allows users to scan their resume and compare it to the job requirements of each company, using OCR and copy and pasting functionalities.
                                
                                The app also includes a To-Do list that can be used to keep track of upcoming deadlines, coding challenges, and interview dates, which is integrated with Apple Calendar for added convenience. With iApply, users can spend less time tracking applications and more time preparing for the opportunities themselves."
                                projectViewBtns={
                                    <div className={ styles.projectViewBtns }>
                                        <ViewBtn href="https://github.com/ECS189E/project-w21-swifty-as-honey">View Code</ViewBtn>
                                    </div>
                                }>
                                {/* tech stack */}
                                <li>Swift</li>
                            </Project>

                            {/* Card Bank */}
                            <Project
                                src={ CardBank }
                                alt="Card Bank"
                                imgStyling="mobileImg"
                                projectTitle="Card Bank"
                                projectDescription="Card Bank is mobile application that was designed as a wallet with an added layer of security through two-factor authentication. The app prompts users to enter their phone number, sends a verification code to the number via text message, and prompts the user to enter the code to verify their identity. Once verified, the user's wallet is displayed visually in a table format with information on each account. The app allows users to manage multiple accounts and keep track of their balances."
                                projectViewBtns={
                                    <div className={ styles.projectViewBtns }>
                                        <ViewBtn href="https://github.com/alyssamarie0107/card-bank-170">View Code</ViewBtn>
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
                                projectDescription="The User-Level Thread Library is a multithreading library implemented in C to enable running multiple threads within the same process. The library includes a FIFO queue, which was implemented as a prerequisite for the thread library. The queue is used to store the thread control blocks and to manage the order of thread execution. Additionally, we implemented a semaphore for synchronization and implemented preemption to avoid unwanted uncooperative thread behavior when sharing resources.

                                This project allowed you to gain a better understanding of the concept of threads and asynchronous programming by implementing a basic user-level thread library for Linux. With this library, you can create multiple threads within a process and have them run concurrently, which can help improve the performance of your programs."
                                projectViewBtns={
                                    <div className={ styles.projectViewBtns }>
                                        <ViewBtn href="https://github.com/alyssamarie0107/user-thread-lib150">View Code</ViewBtn>
                                    </div>
                                }>
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
                                projectDescription="Hexapawn is a Python-based application that extends the classic Hexapawn game to any similar game that involves n white pawns, n black pawns, and an nxn board. The main objective of the project is to construct a Python function along with supporting functions that takes the current state of the board, the size of the board, the player to move next, and the number of moves to look ahead, and returns the best possible move that the player can make from the given board position by using the MiniMax search algorithm."
                                projectViewBtns={
                                    <div className={ styles.projectViewBtns }>
                                        <ViewBtn href="https://github.com/alyssamarie0107/user-thread-lib150">View Code</ViewBtn>
                                    </div>
                                }>
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