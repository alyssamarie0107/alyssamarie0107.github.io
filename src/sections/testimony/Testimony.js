import styles from './Testimony.module.css';
import { motion } from 'framer-motion';
import TestimonyCard from '../../components/testimony-card/TestimonyCard';

// testimony section
const Testimony = () => {
    return (
        <motion.section            
        className={ styles.Testimony } 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        id="testimony">
            <div id={ styles.testimonyContainer }>
                <TestimonyCard 
                    testimony="Alyssa was my co-intern at UCSF as a Front-End Web Developer Intern. She was an amazing team member, being able to come up with new ideas, communicate them to the rest of the team, take their feedback, and implement the final product. An example of this was the great work she did redesigning the website's navigation, impressing our clients and team with the improvements in usability it brought. Quick to offer help and work through plans, Alyssa always made sure we were on the same page on where to take the website next. She would be an invaluable asset to any dev team!" 
                    by="Alicia Ramirez" 
                    title="Frontend Web Developer Intern @ UCSF"
                />
                <TestimonyCard 
                    testimony="I met Alyssa in search of a website developer from a friend who speaks highly of her. Upon building our website, she did a phenomenal job communicating, meeting deadlines, and managing her team. She exceeded my expectations with the website as she brought her own creative input to the table. She is a hard-worker who takes pride in her craft and is always looking to improve. I recommend her to any company looking for a creative, dedicated software engineer!" 
                    by="Jason Brown" 
                    title="General Manager @ Game OVA"
                />
            </div>
        </motion.section>
    );
}
 
export default Testimony;