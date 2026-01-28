import MemberCard from '../components/MemberCard';
import './Members.css';

const Members = () => {
    // Sample member data - replace with actual data
    const members = [
        {
            id: 1,
            name: 'Sir Aldric',
            title: 'Grand Commander',
            achievements: 47,
            battles: 120,
            avatar: null
        },
        {
            id: 2,
            name: 'Lady Isolde',
            title: 'Master Strategist',
            achievements: 38,
            battles: 95,
            avatar: null
        },
        {
            id: 3,
            name: 'Lord Theron',
            title: 'Champion of the Realm',
            achievements: 52,
            battles: 140,
            avatar: null
        },
        {
            id: 4,
            name: 'Dame Elara',
            title: 'Keeper of Lore',
            achievements: 31,
            battles: 78,
            avatar: null
        },
        {
            id: 5,
            name: 'Sir Gareth',
            title: 'Sword of Justice',
            achievements: 44,
            battles: 110,
            avatar: null
        },
        {
            id: 6,
            name: 'Lady Morgana',
            title: 'Guardian of Secrets',
            achievements: 36,
            battles: 88,
            avatar: null
        }
    ];

    return (
        <div className="members-page">
            <div className="hall-background">
                <img src="/assets/hall_of_legends.png" alt="Hall of Legends" />
                <div className="hall-overlay">
                    <div className="scroll-container">
                        <div className="page-header text-center">
                            <h1 className="animate-fade-in">Hall of Legends</h1>
                            <p className="page-subtitle animate-fade-in">
                                Honor the warriors who stand with the Belmonts
                            </p>
                        </div>

                        <div className="divider-medieval"></div>

                        <div className="members-intro parchment animate-unfurl text-center">
                            <p>
                                Within these hallowed halls, we honor those who have pledged their swords,
                                their wisdom, and their very lives to the Belmont cause. Each name carved
                                in stone represents a legend in the making.
                            </p>
                        </div>

                        <div className="members-grid">
                            {members.map((member) => (
                                <MemberCard key={member.id} member={member} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Members;
