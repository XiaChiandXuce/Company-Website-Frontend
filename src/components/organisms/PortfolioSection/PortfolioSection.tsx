import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../layout/Container';
import { Button } from '../../atoms/Button/Button';
import styles from './PortfolioSection.module.css';

const projects = [
    {
        title: 'FinTech Dashboard',
        category: 'Web Application',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
        tags: ['React', 'D3.js', 'Node.js'],
    },
    {
        title: 'E-Commerce Platform',
        category: 'Mobile & Web',
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop',
        tags: ['Next.js', 'Stripe', 'Tailwind'],
    },
    {
        title: 'AI Analytics Tool',
        category: 'SaaS Product',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
        tags: ['Python', 'React', 'AWS'],
    },
    {
        title: 'Healthcare Portal',
        category: 'Enterprise System',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop',
        tags: ['TypeScript', 'GraphQL', 'HipAA'],
    },
];

export const PortfolioSection: React.FC = () => {
    return (
        <section className={styles.section} id="portfolio">
            <Container>
                <div className={styles.header}>
                    <div>
                        <h2 className={styles.title}>Selected Works</h2>
                        <p className={styles.subtitle}>
                            A showcase of our most technical and creative challenges solved.
                        </p>
                    </div>
                    <Button variant="outline" rightIcon="→">View All Projects</Button>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.projectCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <img src={project.image} alt={project.title} className={styles.projectImage} />
                            <div className={styles.projectOverlay}>
                                <span className={styles.projectCategory}>{project.category}</span>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <div className={styles.tags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
