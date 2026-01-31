import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../layout/Container';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
    return (
        <section className={styles.header}>
            <div className={styles.grid} />
            <Container>
                <div className={styles.content}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {title}
                    </motion.h1>
                    {subtitle && (
                        <motion.p
                            className={styles.subtitle}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </Container>
        </section>
    );
};
