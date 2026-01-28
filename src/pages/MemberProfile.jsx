import { useParams, Link } from 'react-router-dom';
import './MemberProfile.css';

const MemberProfile = () => {
    const { id } = useParams();

    // Sample member data - replace with actual data fetching
    const member = {
        id: id,
        name: 'Sir Aldric',
        title: 'Grand Commander',
        achievements: 47,
        battles: 120,
        joinDate: '2020',
        bio: 'A veteran warrior who has led countless campaigns to victory. Known for unwavering courage and tactical brilliance, Sir Aldric embodies the spirit of the Belmonts.',
        specialties: ['Leadership', 'Tactical Warfare', 'Swordsmanship'],
        notableAchievements: [
            'Led the defense of the Northern Pass',
            'Forged the Alliance of Three Kingdoms',
            'Discovered the Ancient Scrolls of Strategy'
        ]
    };

    return (
        <div className="member-profile-page">
            <div className="scroll-container">
                <Link to="/members" className="back-link">
                    ← Return to Hall of Legends
                </Link>

                <div className="profile-dossier">
                    <div className="dossier-background">
                        <div className="wax-seal animate-seal">B</div>

                        <div className="profile-header">
                            <div className="profile-avatar">
                                <div className="avatar-placeholder">⚔️</div>
                            </div>
                            <div className="profile-info">
                                <h1 className="profile-name">{member.name}</h1>
                                <p className="profile-title">{member.title}</p>
                                <p className="profile-join">Joined Year {member.joinDate}</p>
                            </div>
                        </div>

                        <div className="divider-medieval"></div>

                        <div className="profile-stats">
                            <div className="stat-box">
                                <span className="stat-icon">🏆</span>
                                <div>
                                    <div className="stat-value">{member.achievements}</div>
                                    <div className="stat-label">Achievements</div>
                                </div>
                            </div>
                            <div className="stat-box">
                                <span className="stat-icon">⚔️</span>
                                <div>
                                    <div className="stat-value">{member.battles}</div>
                                    <div className="stat-label">Battles</div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-section">
                            <h2>Biography</h2>
                            <p>{member.bio}</p>
                        </div>

                        <div className="profile-section">
                            <h2>Specialties</h2>
                            <div className="specialty-tags">
                                {member.specialties.map((specialty, index) => (
                                    <span key={index} className="specialty-tag">{specialty}</span>
                                ))}
                            </div>
                        </div>

                        <div className="profile-section">
                            <h2>Notable Achievements</h2>
                            <ul className="achievements-list">
                                {member.notableAchievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberProfile;
