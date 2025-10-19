import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';
import { UploadReport } from './components/UploadReport';
import { ReportViewer } from './components/ReportViewer';
import { AddVitals } from './components/AddVitals';
import { Timeline } from './components/Timeline';
import { Profile } from './components/Profile';
import { Toaster } from './components/ui/sonner';

type Page = 'landing' | 'login' | 'dashboard' | 'upload' | 'report' | 'vitals' | 'timeline' | 'profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const handleGetStarted = () => {
    setCurrentPage('login');
  };

  const handleLogin = () => {
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentPage('landing');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  return (
    <>
      {currentPage === 'landing' && <LandingPage onGetStarted={handleGetStarted} />}
      {currentPage === 'login' && <LoginPage onLogin={handleLogin} onBack={handleBackToLanding} />}
      {currentPage === 'dashboard' && <Dashboard onNavigate={handleNavigate} />}
      {currentPage === 'upload' && <UploadReport onNavigate={handleNavigate} />}
      {currentPage === 'report' && <ReportViewer onNavigate={handleNavigate} />}
      {currentPage === 'vitals' && <AddVitals onNavigate={handleNavigate} />}
      {currentPage === 'timeline' && <Timeline onNavigate={handleNavigate} />}
      {currentPage === 'profile' && <Profile onNavigate={handleNavigate} onLogout={handleLogout} />}
      <Toaster />
    </>
  );
}
