import React from 'react';
import { Container } from '../../layout/Container';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <span className={styles.logo}>TYH Company</span>
                        <p className={styles.description}>
                            Crafting exceptional digital experiences through customized software solutions.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.linkGroup}>
                            <h4 className={styles.groupTitle}>Services</h4>
                            <a href="#services" className={styles.link}>Web Development</a>
                            <a href="#services" className={styles.link}>Mobile Apps</a>
                            <a href="#services" className={styles.link}>System Design</a>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4 className={styles.groupTitle}>Company</h4>
                            <a href="#about" className={styles.link}>About Us</a>
                            <a href="#portfolio" className={styles.link}>Portfolio</a>
                            <a href="#careers" className={styles.link}>Careers</a>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4 className={styles.groupTitle}>Legal</h4>
                            <a href="/privacy" className={styles.link}>Privacy Policy</a>
                            <a href="/terms" className={styles.link}>Terms of Service</a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} TYH Company. All rights reserved.
                    </div>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink} aria-label="Github">GH</a>
                        <a href="#" className={styles.socialLink} aria-label="Twitter">TW</a>
                        <a href="#" className={styles.socialLink} aria-label="LinkedIn">LI</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
