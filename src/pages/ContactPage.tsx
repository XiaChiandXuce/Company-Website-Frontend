import { PageHeader } from '../components/molecules/PageHeader/PageHeader';
import { ContactSection } from '../components/organisms/ContactSection/ContactSection';
import { Container } from '../components/layout/Container';
import { Card } from '../components/molecules/Card/Card';
import styles from './ContactPage.module.css';

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <PageHeader
                title="Get In Touch"
                subtitle="We'd love to hear from you. Whether you have a question about our services, pricing, or just want to say hello, our team is ready to answer all your questions."
            />

            {/* Additional Contact Info Grid */}
            <section className={styles.infoSection}>
                <Container>
                    <div className={styles.infoGrid}>
                        <Card variant="glass" padding="md" className={styles.infoCard}>
                            <div className={styles.icon}>📞</div>
                            <h3 className={styles.title}>Call Us</h3>
                            <p className={styles.text}>+1 (555) 123-4567</p>
                            <p className={styles.subtext}>Mon-Fri, 9am - 6pm EST</p>
                        </Card>

                        <Card variant="glass" padding="md" className={styles.infoCard}>
                            <div className={styles.icon}>💬</div>
                            <h3 className={styles.title}>Chat with Us</h3>
                            <p className={styles.text}>support@tyh-company.com</p>
                            <p className={styles.subtext}>Typical response time: 2 hours</p>
                        </Card>

                        <Card variant="glass" padding="md" className={styles.infoCard}>
                            <div className={styles.icon}>🏢</div>
                            <h3 className={styles.title}>Visit HQ</h3>
                            <p className={styles.text}>123 Tech District</p>
                            <p className={styles.subtext}>Innovation City, ST 12345</p>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* Reuse the Contact Section Form */}
            <ContactSection />
        </div>
    );
}
