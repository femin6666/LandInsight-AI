import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { ResearchHub } from './pages/ResearchHub';
import { EvidenceExplorer } from './pages/EvidenceExplorer';
import { GisExplorer } from './pages/GisExplorer';
import { PolicyAnalytics } from './pages/PolicyAnalytics';
import { PolicySimulator } from './pages/PolicySimulator';
import { ResearchGapDetector } from './pages/ResearchGapDetector';
import { InnovationHub } from './pages/InnovationHub';
import { Settings } from './pages/Settings';
import { Profile } from './pages/Profile';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="research-hub" element={<ResearchHub />} />
            <Route path="evidence-explorer" element={<EvidenceExplorer />} />
            <Route path="gis-explorer" element={<GisExplorer />} />
            <Route path="policy-analytics" element={<PolicyAnalytics />} />
            <Route path="policy-simulator" element={<PolicySimulator />} />
            <Route path="gap-detector" element={<ResearchGapDetector />} />
            <Route path="innovation-hub" element={<InnovationHub />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
