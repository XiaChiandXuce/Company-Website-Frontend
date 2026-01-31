import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../layout/Container';
import { Card } from '../../molecules/Card/Card';
import { Button } from '../../atoms/Button/Button';
import styles from './ServiceGrid.module.css';

const services = [
    {
        title: 'Custom Web Applications',
        description: 'Scalable, secure, and high-performance web solutions built with React, Node.js, and modern cloud architecture.',
        icon: '💻', // Placeholder for actual icon component
    },
    {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile experiences that engage users on iOS and Android devices.',
        icon: '📱',
    },
    {
        title: 'Enterprise Software',
        description: 'Complex business process automation, CRM, and ERP solutions tailored to your operational workflows.',
        icon: '🏢',
    },
    {
        title: 'UI/UX Design',
        description: 'User-centric design that blends aesthetics with functionality to create intuitive digital products.',
        icon: '🎨',
    },
    {
        title: 'API Integration',
        description: 'Seamlessly connecting your software ecosystem with third-party services and internal data sources.',
        icon: '🔗',
    },
    {
        title: 'Cloud Infrastructure',
        description: 'DevOps, cloud migration, and serverless architecture design for maximum reliability and scalability.',
        icon: '☁️',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut' as const,
        },
    },
};

export const ServiceGrid: React.FC = () => {
    return (
        <section className={styles.section} id="services">
            <div className={styles.blob} />
            <Container>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        We deliver comprehensive technology solutions designed to propel your business forward.
                    </motion.p>
                </div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card variant="glass" hoverable padding="lg" style={{ height: '100%' }}>
                                <div className={styles.iconWrapper}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.description}</p>
                                <Button variant="ghost" size="sm" rightIcon="→">
                                    Learn More
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};
