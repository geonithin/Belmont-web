import { useState } from 'react';
import EventModal from './EventModal';
import './TreasureMap.css';

const TreasureMap = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = [
        {
            id: 1,
            title: 'Foundation of the Clan',
            year: '2020',
            description: 'The Belmonts clan was established in the mountain kingdom.',
            position: { top: '20%', left: '15%' },
            images: []
        },
        {
            id: 2,
            title: 'First Great Victory',
            year: '2021',
            description: 'Our warriors achieved their first legendary triumph.',
            position: { top: '40%', left: '35%' },
            images: []
        },
        {
            id: 3,
            title: 'The Grand Alliance',
            year: '2022',
            description: 'United with neighboring clans for a greater cause.',
            position: { top: '60%', left: '55%' },
            images: []
        },
        {
            id: 4,
            title: 'Hall of Legends Built',
            year: '2023',
            description: 'Construction of our sacred hall to honor the greatest warriors.',
            position: { top: '35%', left: '75%' },
            images: []
        }
    ];

    return (
        <>
            <div className="treasure-map-container">
                <img
                    src="/assets/treasure_map.png"
                    alt="Journey Map"
                    className="map-background"
                />

                <div className="map-overlay">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="treasure-chest"
                            style={event.position}
                            onClick={() => setSelectedEvent(event)}
                        >
                            <img
                                src="/assets/treasure_chest.png"
                                alt="Event Marker"
                                className="chest-icon torch-glow"
                            />
                            <div className="chest-label">{event.year}</div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedEvent && (
                <EventModal
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                />
            )}
        </>
    );
};

export default TreasureMap;
