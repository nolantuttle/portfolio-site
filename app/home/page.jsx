import Header from '../components/Header';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
export default function HomePage() {
    return (
        <main>
            <Navbar />
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
