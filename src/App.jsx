import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import Members from './pages/Members';
import MemberProfile from './pages/MemberProfile';
import HallOfFame from './pages/HallOfFame';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/members" element={<Members />} />
            <Route path="/members/:id" element={<MemberProfile />} />
            <Route path="/hall-of-fame" element={<HallOfFame />} />
          </Routes>
        </main>

        <footer className="medieval-footer">
          <div className="footer-content">
            <div className="wax-seal">B</div>
            <p>© {new Date().getFullYear()} The Belmonts Clan. All rights reserved.</p>
            <p className="footer-motto">United in Honor, Forged in Battle, Eternal in Legacy</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
