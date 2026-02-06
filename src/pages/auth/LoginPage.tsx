import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../components/organisms/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
    return (
        <div className={styles.splitContainer}>
            {/* LEFT: Visual Brand Zone */}
            <div className={styles.visualPanel}>
                <div className={styles.grid} />
                <div className={`${styles.shape} ${styles.shape1}`} />
                <div className={`${styles.shape} ${styles.shape2}`} />

                <div className={styles.brandContent}>
                    <h1 className={styles.brandLogo}>TYH Company</h1>
                    <p className={styles.brandSlogan}>
                        Crafting Digital Excellence for the Future.<br />
                        Welcome to your client hub.
                    </p>
                </div>
            </div>

            {/* RIGHT: Interaction Zone */}
            <div className={styles.formPanel}>
                <Link to="/" className={styles.backLink}>
                    Back to Home
                </Link>

                <div className={styles.formWrapper}>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
