
import { motion } from 'framer-motion';
import { PageHeader } from '../components/molecules/PageHeader/PageHeader';
import { Container } from '../components/layout/Container';
import styles from './PortfolioPage.module.css';

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
    {
        title: 'Real Estate Virtual Tours',
        category: 'VR / AR',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2673&auto=format&fit=crop',
        tags: ['Three.js', 'WebGL', 'React'],
    },
    {
        title: 'Logistics Tracker',
        category: 'IoT Solution',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop',
        tags: ['MQTT', 'Vue.js', 'Go'],
    }
];

export default function PortfolioPage() {
    return (
        <div className={styles.page}>
            <PageHeader
                title="Our Portfolio"
                subtitle="Explore a selection of our recent work. We take pride in delivering high-quality solutions that solve complex problems for clients across various industries."
            />

            <section className={styles.section}>
                <Container>
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
        </div>
    );
}
