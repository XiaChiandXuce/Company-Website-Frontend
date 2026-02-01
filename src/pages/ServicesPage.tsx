import { PageHeader } from '../components/molecules/PageHeader/PageHeader';
import { Container } from '../components/layout/Container';
import { Card } from '../components/molecules/Card/Card';
import { Button } from '../components/atoms/Button/Button';
import styles from './ServicesPage.module.css';

const servicesList = [
    {
        title: 'Custom Web Application Development',
        description: 'We build robust, scalable, and secure web applications tailored to your specific business processes. From complex enterprise dashboards to customer-facing portals, our solutions are designed to drive efficiency and growth.',
        features: ['React & Next.js Ecosystem', 'Progressive Web Apps (PWA)', 'Real-time Data Processing', 'Cloud-Native Architecture'],
        icon: '💻'
    },
    {
        title: 'Mobile App Solutions',
        description: 'Engage your users wherever they are with high-performance native and cross-platform mobile applications. We deliver seamless experiences across iOS and Android devices.',
        features: ['React Native & Flutter', 'iOS & Android Native', 'App Store Optimization', 'Offline Capabilities'],
        icon: '📱'
    },
    {
        title: 'Enterprise System Integration',
        description: 'Streamline your operations by integrating your disparate systems into a unified ecosystem. We ensure seamless data flow between your CRM, ERP, and bespoke software.',
        features: ['API Design & Development', 'Legacy System Modernization', 'Microservices Architecture', 'Data Synchronization'],
        icon: '🔗'
    },
    {
        title: 'UI/UX Design & Prototyping',
        description: 'User experience is at the heart of everything we do. Our design team creates intuitive, accessible, and visually stunning interfaces that users love to interact with.',
        features: ['User Research & Personas', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing'],
        icon: '🎨'
    }
];

export default function ServicesPage() {
    return (
        <div className={styles.page}>
            <PageHeader
                title="Our Capabilities"
                subtitle="We offer a comprehensive suite of software development services designed to help you navigate the digital landscape and achieve your business goals."
            />

            <section className={styles.servicesSection}>
                <Container>
                    <div className={styles.servicesGrid}>
                        {servicesList.map((service, index) => (
                            <Card key={index} variant="glass" padding="lg" hoverable className={styles.serviceCard}>
                                <div className={styles.iconContainer}>
                                    {service.icon}
                                </div>
                                <div>
                                    <h2 className={styles.title}>{service.title}</h2>
                                    <p className={styles.description}>
                                        {service.description}
                                    </p>

                                    <h4 className={styles.featuresTitle}>Key Features:</h4>
                                    <ul className={styles.featuresList}>
                                        {service.features.map(feature => (
                                            <li key={feature} className={styles.featureItem}>
                                                <span className={styles.bullet}>•</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.actionArea}>
                                    <Button variant="outline">Consult This Service</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className={styles.ctaSection}>
                <Container>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Need a Custom Solution?</h2>
                        <p className={styles.ctaText}>
                            We understand that every business is unique. Contact us today to discuss your specific requirements and how we can tailor our services to meet your needs.
                        </p>
                        <Button size="lg" variant="glow" onClick={() => window.location.href = '/contact'}>Get in Touch</Button>
                    </div>
                </Container>
            </section>
        </div>
    );
}
