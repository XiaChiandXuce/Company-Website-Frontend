import { PageHeader } from '../components/molecules/PageHeader/PageHeader';
import { ContactSection } from '../components/organisms/ContactSection/ContactSection';
import { Container } from '../components/layout/Container';
import { Card } from '../components/molecules/Card/Card';

export default function ContactPage() {
    return (
        <div className="contact-page">
            <PageHeader
                title="Get In Touch"
                subtitle="We'd love to hear from you. Whether you have a question about our services, pricing, or just want to say hello, our team is ready to answer all your questions."
            />

            {/* Additional Contact Info Grid */}
            <section style={{ backgroundColor: 'var(--color-bg)', paddingBottom: 'var(--spacing-8)' }}>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-8)', marginBottom: 'var(--spacing-12)' }}>
                        <Card variant="glass" padding="md" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-4)' }}>📞</div>
                            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', marginBottom: 'var(--spacing-2)' }}>Call Us</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>+1 (555) 123-4567</p>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>Mon-Fri, 9am - 6pm EST</p>
                        </Card>

                        <Card variant="glass" padding="md" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-4)' }}>💬</div>
                            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', marginBottom: 'var(--spacing-2)' }}>Chat with Us</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>support@tyh-company.com</p>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>Typical response time: 2 hours</p>
                        </Card>

                        <Card variant="glass" padding="md" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-4)' }}>🏢</div>
                            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', marginBottom: 'var(--spacing-2)' }}>Visit HQ</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>123 Tech District</p>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>Innovation City, ST 12345</p>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* Reuse the Contact Section Form */}
            <ContactSection />
        </div>
    );
}

