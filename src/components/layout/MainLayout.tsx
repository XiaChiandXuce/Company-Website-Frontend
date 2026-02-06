import { Outlet, Link } from 'react-router-dom';
import { Footer } from '../organisms/Footer/Footer';
import styles from './MainLayout.module.css';

export default function MainLayout() {
    return (
        <div className="layout">
            <header className={styles.header}>
                <div className={styles.logo}>TYH Company</div>
                <nav className={styles.nav}>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login" className={styles.portalLink}>Client Portal</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
