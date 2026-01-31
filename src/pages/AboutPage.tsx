import { PageHeader } from '../components/molecules/PageHeader/PageHeader';
import { Container } from '../components/layout/Container';
import { Card } from '../components/molecules/Card/Card';
import { Button } from '../components/atoms/Button/Button';

export default function AboutPage() {
    return (
        <div className="about-page">
            <PageHeader
                title="About Us"
                subtitle="Driven by innovation, grounded in engineering excellence. We are a team of passionate developers and designers dedicated to building the future."
            />

            {/* Mission Section */}
            <section style={{ padding: 'var(--spacing-16) 0' }}>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-16)', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-bold)', marginBottom: 'var(--spacing-6)' }}>
                                Our Mission
                            </h2>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1.6, marginBottom: 'var(--spacing-6)' }}>
                                At TYH Company, we believe that software is more than just code; it's the engine of modern business. Our mission is to empower organizations with customized, high-performance digital solutions that solve real-world problems and unlock new opportunities.
                            </p>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1.6 }}>
                                We combine technical expertise with creative design to deliver products that are not only functional but also beautiful and intuitive to use.
                            </p>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                width: '100%',
                                height: '400px',
                                backgroundColor: 'var(--color-surface-hover)',
                                borderRadius: 'var(--radius-xl)',
                                border: '1px solid var(--color-border)',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                {/* Decorative placeholder for an image */}
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                                    filter: 'blur(40px)',
                                    opacity: 0.5
                                }} />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Values Section */}
            <section style={{ padding: 'var(--spacing-24) 0', background: 'var(--color-surface)' }}>
                <Container>
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
                        <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-bold)', marginBottom: 'var(--spacing-4)' }}>Core Values</h2>
                        <p style={{ color: 'var(--color-text-muted)' }}>The principles that guide our work and culture.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-8)' }}>
                        {[
                            { title: 'Innovation', icon: '💡', desc: 'We constantly push the boundaries of what is possible.' },
                            { title: 'Quality', icon: '💎', desc: 'We never compromise on the quality of our code or design.' },
                            { title: 'Integrity', icon: '🛡️', desc: 'We build trust through transparency and honest communication.' },
                            { title: 'Collaboration', icon: '🤝', desc: 'We work closely with our clients as true partners.' }
                        ].map((value, i) => (
                            <Card key={i} variant="glass" padding="lg" hoverable style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-4)' }}>{value.icon}</div>
                                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--spacing-2)' }}>{value.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)' }}>{value.desc}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Join Us CTA */}
            <section style={{ padding: 'var(--spacing-24) 0' }}>
                <Container>
                    <Card variant="glass" padding="lg" style={{
                        textAlign: 'center',
                        padding: 'var(--spacing-16) var(--spacing-8)',
                        background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.8) 100%)'
                    }}>
                        <h2 style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--spacing-6)' }}>Join Our Team</h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lg)', maxWidth: '600px', margin: '0 auto var(--spacing-8)' }}>
                            We are always looking for talented developers and designers to join our growing team. If you are passionate about technology, we want to hear from you.
                        </p>
                        <Button size="lg" variant="glow">View Open Positions</Button>
                    </Card>
                </Container>
            </section>
        </div>
    );
}

