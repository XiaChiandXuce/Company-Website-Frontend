import { PageHeader } from '../components/molecules/PageHeader/PageHeader';
import { Container } from '../components/layout/Container';
import { Card } from '../components/molecules/Card/Card';
import { Button } from '../components/atoms/Button/Button';
import styles from './AboutPage.module.css';

export default function AboutPage() {
    return (
        <div className="about-page">
            <PageHeader
                title="About Us"
                subtitle="Driven by innovation, grounded in engineering excellence. We are a team of passionate developers and designers dedicated to building the future."
            />

            {/* Mission Section */}
            <section className={styles.section}>
                <Container>
                    <div className={styles.missionGrid}>
                        <div>
                            <h2 className={styles.missionTitle}>
                                Our Mission
                            </h2>
                            <p className={styles.missionText}>
                                At TYH Company, we believe that software is more than just code; it's the engine of modern business. Our mission is to empower organizations with customized, high-performance digital solutions that solve real-world problems and unlock new opportunities.
                            </p>
                            <p className={styles.missionText}>
                                We combine technical expertise with creative design to deliver products that are not only functional but also beautiful and intuitive to use.
                            </p>
                        </div>
                        <div className={styles.missionImageContainer}>
                            <div className={styles.missionImagePlaceholder}>
                                {/* Decorative placeholder for an image */}
                                <div className={styles.missionGlow} />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Values Section */}
            <section className={styles.valuesSection}>
                <Container>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Core Values</h2>
                        <p className={styles.sectionSubtitle}>The principles that guide our work and culture.</p>
                    </div>

                    <div className={styles.valuesGrid}>
                        {[
                            { title: 'Innovation', icon: '💡', desc: 'We constantly push the boundaries of what is possible.' },
                            { title: 'Quality', icon: '💎', desc: 'We never compromise on the quality of our code or design.' },
                            { title: 'Integrity', icon: '🛡️', desc: 'We build trust through transparency and honest communication.' },
                            { title: 'Collaboration', icon: '🤝', desc: 'We work closely with our clients as true partners.' }
                        ].map((value, i) => (
                            <Card key={i} variant="glass" padding="lg" hoverable className={styles.valueCard}>
                                <div className={styles.valueIcon}>{value.icon}</div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDesc}>{value.desc}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Join Us CTA */}
            <section className={styles.ctaSection}>
                <Container>
                    <Card variant="glass" padding="lg" className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Join Our Team</h2>
                        <p className={styles.ctaText}>
                            We are always looking for talented developers and designers to join our growing team. If you are passionate about technology, we want to hear from you.
                        </p>
                        <Button size="lg" variant="glow">View Open Positions</Button>
                    </Card>
                </Container>
            </section>
        </div>
    );
}
