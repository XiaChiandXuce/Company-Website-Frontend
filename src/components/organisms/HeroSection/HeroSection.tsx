import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../atoms/Button/Button';
import { Container } from '../../layout/Container';
import styles from './HeroSection.module.css';
import { useNavigate } from 'react-router-dom';

export const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const, // Custom easing for premium feel
            },
        },
    };

    return (
        <section className={styles.hero}>
            {/* Background Elements */}
            <div className={styles.grid} />
            <div className={`${styles.shape} ${styles.shape1}`} />
            <div className={`${styles.shape} ${styles.shape2}`} />

            <Container>
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 className={styles.title} variants={itemVariants}>
                        Customized Software <br />
                        <span className={styles.textGradient}>Architecture & Design</span>
                    </motion.h1>

                    <motion.p className={styles.subtitle} variants={itemVariants}>
                        We engineer bespoke digital solutions that blend high-performance technology with distinctive, premium aesthetics for forward-thinking enterprises.
                    </motion.p>

                    <motion.div className={styles.actions} variants={itemVariants}>
                        <Button
                            size="lg"
                            variant="glow"
                            onClick={() => navigate('/contact')}
                        >
                            Start Your Project
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => navigate('/services')}
                        >
                            Explore Services
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};
