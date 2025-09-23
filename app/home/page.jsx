import Header from '../components/Header';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ThemeProvider from '../components/ThemeProvider';


export default function HomePage() {
    return (
        // <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main>
                <Navbar />
                <Header />
                <About />
                { /*<Services /> */}
                <Projects />
                <Contact />
                <Footer />
            </main>
        // </ThemeProvider>
    );
}
