import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Kingdom', icon: '🏰' },
    { path: '/roadmap', label: 'Journey', icon: '🗺️' },
    { path: '/members', label: 'Legends', icon: '⚔️' },
    { path: '/hall-of-fame', label: 'Legacy', icon: '🏆' }
  ];
  
  return (
    <nav className="medieval-nav">
      <div className="nav-container">
        <div className="nav-crest">
          <div className="wax-seal">B</div>
          <h3 className="clan-name">Belmonts</h3>
        </div>
        
        <div className="nav-signboards">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`signboard ${location.pathname === item.path ? 'active' : ''}`}
            >
              <div className="signboard-rope"></div>
              <div className="signboard-content">
                <span className="signboard-icon">{item.icon}</span>
                <span className="signboard-text">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
