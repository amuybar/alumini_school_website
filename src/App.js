import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SaccoPage from './pages/SaccoPage'; 
import AlumniDirectoryPage from './pages/AlumniDirectoryPage';
import EventManagementPage from './pages/EventManagementPage';
import JobBoardPage from './pages/JobBoardPage';
import NewsAndUpdatesPage from './pages/NewsAndUpdatesPage';
import DonationPlatformPage from './pages/DonationPlatformPage';
import ClassNotesAndForumsPage from './pages/ClassNotesAndForumsPage';
import PhotoAndVideoGalleryPage from './pages/PhotoAndVideoGalleryPage';
import SocialMediaIntegrationPage from './pages/SocialMediaIntegrationPage';
import MembershipManagementPage from './pages/MembershipManagementPage';
import PrivacyControlsPage from './pages/PrivacyControlsPage';
import FeedbackAndSurveysPage from './pages/FeedbackAndSurveysPage';
import './styles/App.css';
import LoginPage from './components/sacco/Dashboard/Auth/Login';
import RegisterPage from './components/sacco/Dashboard/Auth/Register';
import SaccoDashboard from './components/sacco/Dashboard/SaccoManagement/SaccoDashboard';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/sacco" element={<SaccoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/saccodash" element={<SaccoDashboard />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/alumni-directory' element={<AlumniDirectoryPage />} />
          <Route path='/event-management' element={<EventManagementPage />} />
          <Route path='/job-board' element={<JobBoardPage />} />
          <Route path='/news-and-updates' element={<NewsAndUpdatesPage />} />
          <Route path='/donation-platform' element={<DonationPlatformPage />} />
          <Route path='/class-notes-and-forums' element={<ClassNotesAndForumsPage />} />
          <Route path='/photo-and-video-gallery' element={<PhotoAndVideoGalleryPage />} />
          <Route path='/social-media-integration' element={<SocialMediaIntegrationPage />} />
          <Route path='/membership-management' element={<MembershipManagementPage />} />
          <Route path='/privacy-controls' element={<PrivacyControlsPage />} />
          <Route path='/feedback-and-surveys' element={<FeedbackAndSurveysPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
