import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../atoms/Button/Button';
import { useLoginForm } from '../../../hooks/useLoginForm'; // Correct path to hook
import styles from './LoginForm.module.css';

export const LoginForm: React.FC = () => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        displayName,
        setDisplayName,
        isRegister,
        setIsRegister,
        error,
        isLoading,
        handleSubmit
    } = useLoginForm();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
                duration: 0.6
            },
        },
        exit: { opacity: 0 }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 15
            } as const,
        },
    };

    return (
        <motion.div
            className={styles.card}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div className={styles.header} variants={itemVariants}>
                {/* Logo visible only on mobile/narrow screens if parent panel is hidden */}
                <div className={`${styles.logoWrapper} mobile-only`}>
                    <h1 className={styles.logo}>TYH Company</h1>
                </div>
                <h2 className={styles.title}>
                    <span className={styles.textGradient}>
                        {isRegister ? 'Create Account' : 'Client Portal'}
                    </span>
                </h2>
                <p className={styles.subtitle}>
                    {isRegister ? 'Join us to start your project' : 'Sign in to manage your digital projects'}
                </p>
            </motion.div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <AnimatePresence mode="wait">
                    {error ? (
                        <motion.div
                            key="error-message"
                            className={styles.errorMessage}
                            initial={{ opacity: 0, height: 0, scale: 0.9 }}
                            animate={{ opacity: 1, height: 'auto', scale: 1 }}
                            exit={{ opacity: 0, height: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            {error}
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                <AnimatePresence>
                    {isRegister && (
                        <motion.div
                            key="display-name"
                            className={styles.formGroup}
                            variants={itemVariants}
                            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginBottom: 'var(--spacing-6)' }}
                            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        >
                            <label htmlFor="name" className={styles.label}>Full Name</label>
                            <input
                                id="name"
                                type="text"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                className={styles.input}
                                placeholder="John Doe"
                                disabled={isLoading}
                                required={isRegister}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div className={styles.formGroup} variants={itemVariants}>
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        placeholder="name@company.com"
                        disabled={isLoading}
                        required
                    />
                </motion.div>

                <motion.div className={styles.formGroup} variants={itemVariants}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        placeholder={isRegister ? "Create a password" : "••••••••"}
                        disabled={isLoading}
                        required
                        minLength={6}
                    />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Button
                        type="submit"
                        variant="glow"
                        size="lg"
                        isLoading={isLoading}
                        className={styles.submitButton}
                    >
                        {isRegister ? 'Sign Up' : 'Sign In'}
                    </Button>
                </motion.div>
            </form>

            <motion.div className={styles.footer} variants={itemVariants}>
                <div className={styles.toggleContainer}>
                    <p className={styles.toggleText}>
                        {isRegister ? 'Already have an account? ' : "Don't have an account? "}
                        <button
                            onClick={() => setIsRegister(!isRegister)}
                            className={styles.toggleButton}
                        >
                            {isRegister ? 'Sign In' : 'Sign Up'}
                        </button>
                    </p>

                    {!isRegister && (
                        <div className={styles.demoHint}>
                            <p>Demo Access</p>
                            <div className={styles.demoCredentials}>
                                <code>demo</code> / <code>demo123</code>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};
