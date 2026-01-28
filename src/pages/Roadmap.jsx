import TreasureMap from '../components/TreasureMap';
import './Roadmap.css';

const Roadmap = () => {
    return (
        <div className="roadmap-page">
            <div className="scroll-container">
                <div className="page-header text-center">
                    <h1 className="animate-fade-in">The Journey of Belmonts</h1>
                    <p className="page-subtitle animate-fade-in">
                        Follow the path of our clan through triumphs and trials
                    </p>
                </div>

                <div className="divider-medieval"></div>

                <div className="roadmap-intro parchment animate-unfurl">
                    <p>
                        From humble beginnings in the mountain valleys to the grand fortress that stands today,
                        our journey has been marked by courage, wisdom, and unwavering unity. Each marker on this
                        ancient map represents a pivotal moment in our clan's history.
                    </p>
                    <p className="text-center" style={{ fontStyle: 'italic', marginTop: 'var(--spacing-md)' }}>
                        Click upon the treasure chests to reveal the memories of each milestone.
                    </p>
                </div>

                <TreasureMap />

                <div className="roadmap-footer parchment text-center">
                    <h3>The Path Continues</h3>
                    <p>
                        Our story is far from over. New chapters await as we forge ahead,
                        guided by the wisdom of our ancestors and the strength of our bonds.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
