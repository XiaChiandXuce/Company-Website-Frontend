import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'; // Fixed path
import styles from './DashboardLayout.module.css';

const DashboardLayout: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className={styles.container}>
            {/* Sidebar Placeholder - will be a separate component later */}
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h2 className={styles.brand}>TYH Client</h2>
                </div>
                <nav className={styles.nav}>
                    <div className={styles.navItemActive}>Dashboard</div>
                    <div className={styles.navItem}>My Projects</div>
                    <div className={styles.navItem}>Messages</div>
                </nav>
            </aside>

            <main className={styles.mainContent}>
                <header className={styles.header}>
                    <h1 className={styles.pageTitle}>Overview</h1>
                    <div className={styles.userMenu} onClick={handleLogout} title="Click to logout">
                        <span className={styles.username}>{user?.name}</span>
                        {user?.avatar && <img src={user.avatar} alt="Avatar" className={styles.avatar} />}
                    </div>
                </header>
                <div className={styles.pageContent}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
