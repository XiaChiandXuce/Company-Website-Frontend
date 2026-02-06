import React from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './DashboardPage.module.css';

const DashboardPage: React.FC = () => {
    const { user } = useAuth();

    return (
        <div>
            <div className={styles.header}>
                <h2 className={styles.welcomeTitle}>Welcome back, {user?.name}</h2>
                <p className={styles.subtitle}>Here&apos;s what&apos;s happening with your projects today.</p>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Active Projects</div>
                    <div className={styles.cardValue}>3</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Pending Actions</div>
                    <div className={styles.cardValue}>1</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Total Investment</div>
                    <div className={styles.cardValue}>$124k</div>
                </div>
            </div>

            <h3 className={styles.sectionTitle}>Recent Activity</h3>
            <div className={styles.card}>
                <ul className={styles.activityList}>
                    <li className={styles.activityItem}>
                        <span>Project &quot;Alpha AI&quot; requirements updated</span>
                        <span className={styles.timestamp}>2h ago</span>
                    </li>
                    <li className={styles.activityItem}>
                        <span>New invoice #INV-2024-001 available</span>
                        <span className={styles.timestamp}>1d ago</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardPage;

