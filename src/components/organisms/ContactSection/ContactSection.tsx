import React, { useState } from 'react';
import { Container } from '../../layout/Container';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { TextArea } from '../../atoms/TextArea/TextArea';
import styles from './ContactSection.module.css';

export const ContactSection: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Message sent!');
        }, 1500);
    };

    return (
        <section className={styles.section} id="contact">
            <Container>
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Let's Start a Conversation</h2>
                        <p className={styles.subtitle}>
                            Ready to transform your business? Tell us about your project or idea, and we'll help you bring it to life.
                        </p>

                        <div className={styles.infoList}>
                            <div className={styles.infoItem}>
                                <div className={styles.icon}>✉️</div>
                                <div>
                                    <h4 className={styles.infoTitle}>Email Us</h4>
                                    <p className={styles.infoText}>hello@tyh-company.com</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.icon}>📍</div>
                                <div>
                                    <h4 className={styles.infoTitle}>Visit Us</h4>
                                    <p className={styles.infoText}>123 Tech District, Innovation City</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className={styles.formCard} onSubmit={handleSubmit}>
                        <div className={styles.formGrid}>
                            <Input label="Name" placeholder="John Doe" required fullWidth />
                            <Input label="Email" type="email" placeholder="john@example.com" required fullWidth />
                        </div>
                        <div className={styles.formGroup}>
                            <Input label="Subject" placeholder="Project Inquiry" required fullWidth />
                        </div>
                        <div className={styles.formGroup}>
                            <TextArea label="Message" placeholder="Tell us about your project..." rows={4} required fullWidth />
                        </div>
                        <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting} style={{ width: '100%' }}>
                            Send Message
                        </Button>
                    </form>
                </div>
            </Container>
        </section>
    );
};
