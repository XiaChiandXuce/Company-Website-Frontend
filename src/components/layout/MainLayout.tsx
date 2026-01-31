import { Outlet, Link } from 'react-router-dom';
import { Footer } from '../organisms/Footer/Footer';

export default function MainLayout() {
    return (
        <div className="layout">
            {/* Header Placeholder - To be replaced by proper Header component later */}
            <header style={{
                padding: '1rem 2rem',
                borderBottom: '1px solid var(--color-border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)',
                position: 'sticky',
                top: 0,
                zIndex: 50
            }}>
                <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>TYH Company</div>
                <nav style={{ display: 'flex', gap: '2rem' }}>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
