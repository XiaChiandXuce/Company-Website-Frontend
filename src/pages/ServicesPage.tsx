import { PageHeader } from '../components/molecules/PageHeader/PageHeader';
import { Container } from '../components/layout/Container';
import { Card } from '../components/molecules/Card/Card';
import { Button } from '../components/atoms/Button/Button';

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
        <div className="services-page">
            <PageHeader
                title="Our Capabilities"
                subtitle="We offer a comprehensive suite of software development services designed to help you navigate the digital landscape and achieve your business goals."
            />

            <section style={{ padding: 'var(--spacing-16) 0' }}>
                <Container>
                    <div style={{ display: 'grid', gap: 'var(--spacing-12)' }}>
                        {servicesList.map((service, index) => (
                            <Card key={index} variant="glass" padding="lg" hoverable style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: 'var(--radius-lg)',
                                    background: 'var(--color-surface-hover)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2rem'
                                }}>
                                    {service.icon}
                                </div>
                                <div>
                                    <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--spacing-4)' }}>{service.title}</h2>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1.6, marginBottom: 'var(--spacing-6)' }}>
                                        {service.description}
                                    </p>

                                    <h4 style={{ fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--spacing-3)' }}>Key Features:</h4>
                                    <ul style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                        gap: 'var(--spacing-2)',
                                        listStyle: 'none',
                                        padding: 0
                                    }}>
                                        {service.features.map(feature => (
                                            <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', color: 'var(--color-text-muted)' }}>
                                                <span style={{ color: 'var(--color-primary)' }}>•</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-4)' }}>
                                    <Button variant="outline">Consult This Service</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section style={{ padding: 'var(--spacing-24) 0', background: 'var(--color-surface)' }}>
                <Container>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--spacing-6)' }}>Need a Custom Solution?</h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lg)', marginBottom: 'var(--spacing-8)' }}>
                            We understand that every business is unique. Contact us today to discuss your specific requirements and how we can tailor our services to meet your needs.
                        </p>
                        <Button size="lg" variant="glow" onClick={() => window.location.href = '/contact'}>Get in Touch</Button>
                    </div>
                </Container>
            </section>
        </div>
    );
}

