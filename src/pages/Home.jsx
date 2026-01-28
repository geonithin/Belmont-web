import QuillWriter from '../components/QuillWriter';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section - Kingdom Overview */}
            <section className="hero-section">
                <div className="hero-background">
                    <img src="/assets/kingdom_overview.png" alt="Belmont Kingdom" />
                    <div className="hero-overlay">
                        <h1 className="hero-title animate-fade-in">The Belmonts</h1>
                        <p className="hero-subtitle animate-fade-in">Guardians of the Mountain Kingdom</p>
                    </div>
                </div>
            </section>

            {/* Mission Section - Royal Scroll */}
            <section className="mission-section scroll-container">
                <div className="scroll-parchment">
                    <img src="/assets/royal_scroll.png" alt="Royal Scroll" className="scroll-background" />
                    <div className="scroll-content animate-unfurl">
                        <div className="wax-seal animate-seal">B</div>
                        <h2>Our Sacred Mission</h2>
                        <p>
                            In the ancient halls of our mountain fortress, the Belmonts stand united.
                            We are warriors, scholars, and guardians of honor. Through courage and wisdom,
                            we protect our realm and uphold the sacred traditions passed down through generations.
                        </p>
                        <p>
                            Our strength lies not in individual glory, but in the bonds we forge and the
                            legacy we build together. From the highest peaks to the deepest valleys,
                            the Belmont banner flies as a symbol of justice and valor.
                        </p>
                    </div>
                </div>
            </section>

            {/* Motto Section - Quill Writing */}
            <section className="motto-section scroll-container">
                <h2 className="section-title text-center">Our Eternal Motto</h2>
                <QuillWriter
                    text="United in Honor, Forged in Battle, Eternal in Legacy"
                    speed={60}
                />
            </section>

            {/* Call to Action */}
            <section className="cta-section scroll-container text-center">
                <div className="parchment">
                    <h2>Join Our Ranks</h2>
                    <p className="mb-md">
                        The Hall of Legends awaits those brave enough to answer the call.
                        Will you stand with the Belmonts?
                    </p>
                    <button className="btn-medieval">Explore Our Journey</button>
                </div>
            </section>
        </div>
    );
};

export default Home;
