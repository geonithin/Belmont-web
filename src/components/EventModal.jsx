import { useEffect } from 'react';
import './EventModal.css';

const EventModal = ({ event, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content animate-unfurl" onClick={(e) => e.stopPropagation()}>
                <div className="modal-parchment">
                    <div className="wax-seal animate-seal" style={{ position: 'absolute', top: '-20px', right: '20px' }}>
                        B
                    </div>

                    <button className="modal-close" onClick={onClose}>✕</button>

                    <h2 className="modal-title">{event.title}</h2>
                    <p className="modal-year">Year {event.year}</p>

                    <div className="divider-medieval"></div>

                    <p className="modal-description">{event.description}</p>

                    {event.images && event.images.length > 0 && (
                        <div className="modal-gallery">
                            <h3>Memories</h3>
                            <div className="gallery-grid">
                                {event.images.map((img, index) => (
                                    <div key={index} className="gallery-frame">
                                        <img src={img} alt={`Memory ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventModal;
