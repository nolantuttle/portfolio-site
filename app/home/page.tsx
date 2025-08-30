' use client';
import SkillsSection from '../../components/SkillsSection';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';

export default function HomePage() {
    return (
        <main>
            <Navbar />
            <Header />
            <About />
            <Services />
            <Work />
        </main>

    );
}
