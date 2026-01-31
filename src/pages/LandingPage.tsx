import { HeroSection } from '../components/organisms/HeroSection/HeroSection';
import { ServiceGrid } from '../components/organisms/ServiceGrid/ServiceGrid';
import { PortfolioSection } from '../components/organisms/PortfolioSection/PortfolioSection';
import { ContactSection } from '../components/organisms/ContactSection/ContactSection';

export default function LandingPage() {
    return (
        <div className="landing-page">
            <HeroSection />
            <ServiceGrid />
            <PortfolioSection />
            <ContactSection />
        </div>
    );
}
