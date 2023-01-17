import styles from './Testimonial.module.css';

const Testimonial = () => {
    return (
        <section className={ styles.Testimonial }>
            <h1>"</h1>
            <p>
                I met Alyssa in search of a website developer from a friend who speaks highly of her. Upon building our website, she did a phenomenal job communicating, meeting deadlines, and managing her team. She exceeded my expectations with the website as she brought her own creative input to the table. She is a hard-worker who takes pride in her craft and is always looking to improve. I recommend her to any company looking for a creative, dedicated software engineer!
            </p>
            <h5>Jason Brown</h5>
            <span>General Manager at Game OVA</span>
        </section>
    );
}
 
export default Testimonial;