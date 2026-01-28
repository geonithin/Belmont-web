import './HallOfFame.css';

const HallOfFame = () => {
    const pastMembers = [
        {
            id: 1,
            name: 'Lord Cedric the Wise',
            title: 'Founder',
            years: '2015 - 2022',
            legacy: 'Established the foundations of our clan and set the code of honor we follow today.'
        },
        {
            id: 2,
            name: 'Dame Seraphina',
            title: 'First Champion',
            years: '2016 - 2021',
            legacy: 'Won the first great tournament and brought glory to the Belmont name.'
        },
        {
            id: 3,
            name: 'Sir Brennan',
            title: 'Master Blacksmith',
            years: '2017 - 2023',
            legacy: 'Forged the legendary weapons that arm our warriors to this day.'
        }
    ];

    return (
        <div className="hall-of-fame-page">
            <div className="ancestral-hall">
                <div className="hall-mist"></div>

                <div className="scroll-container">
                    <div className="page-header text-center">
                        <h1 className="animate-fade-in">Hall of Fame</h1>
                        <p className="page-subtitle animate-fade-in">
                            Honoring those who came before us
                        </p>
                    </div>

                    <div className="divider-medieval"></div>

                    <div className="fame-intro parchment animate-unfurl text-center">
                        <p>
                            In this sacred hall, we remember the legends who have passed the torch.
                            Though they no longer walk among us, their deeds echo through eternity,
                            inspiring each new generation of Belmonts.
                        </p>
                    </div>

                    <div className="legacy-plaques">
                        {pastMembers.map((member, index) => (
                            <div
                                key={member.id}
                                className="legacy-plaque animate-fade-in"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="plaque-statue">🗿</div>
                                <div className="plaque-content">
                                    <h2 className="legacy-name">{member.name}</h2>
                                    <p className="legacy-title">{member.title}</p>
                                    <p className="legacy-years">{member.years}</p>
                                    <div className="divider-medieval"></div>
                                    <p className="legacy-text">{member.legacy}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="eternal-flame parchment text-center">
                        <div className="flame-icon torch-glow">🔥</div>
                        <h3>The Eternal Flame</h3>
                        <p>
                            This flame burns in perpetual remembrance of all who have served the Belmonts.
                            May their courage light our path forward.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HallOfFame;
