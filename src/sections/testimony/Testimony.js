import styles from './Testimony.module.css';
import { motion } from 'framer-motion';
import TestimonyCard from '../../components/testimony-card/TestimonyCard';

// animation variants
const testimonyContainerVariants = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }
}

// testimony section
const Testimony = () => {
    return (
        <section            
            className={ styles.Testimony }
            id="testimony">
                <motion.div 
                    id={ styles.testimonyContainer }
                    variants={ testimonyContainerVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
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

                        <TestimonyCard
                            testimony="I had the pleasure of having classes with Alyssa while attending UC Davis together. Alyssa is an incredibly talented and dedicated frontend developer and is a great asset to any team. She was able to quickly understand complex problems and develop solutions that were both effective and efficient. She was also a great collaborator, able to communicate her ideas effectively and take on feedback gracefully. I highly recommend Alyssa for any frontend development position and am confident that she would be an excellent addition to any team."
                            by="Alejandro Armas"
                            title="Former Classmate @ UC Davis"
                        />
                </motion.div>
        </section>
    );
}
 
export default Testimony;