import { Link } from 'react-router-dom';
import './MemberCard.css';

const MemberCard = ({ member }) => {
    return (
        <Link to={`/members/${member.id}`} className="member-card">
            <div className="stone-plaque">
                <div className="plaque-content">
                    <div className="member-avatar">
                        {member.avatar ? (
                            <img src={member.avatar} alt={member.name} />
                        ) : (
                            <div className="avatar-placeholder">⚔️</div>
                        )}
                    </div>

                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-title">{member.title}</p>

                    <div className="member-stats">
                        <div className="stat">
                            <span className="stat-icon">🏆</span>
                            <span className="stat-value">{member.achievements || 0}</span>
                        </div>
                        <div className="stat">
                            <span className="stat-icon">⚔️</span>
                            <span className="stat-value">{member.battles || 0}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MemberCard;
