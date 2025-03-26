import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CookieBanner from './components/ui/CookieBanner';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Implementando lazy loading para as páginas
const HomePage = lazy(() => import('./pages/HomePage'));
const PlansPage = lazy(() => import('./pages/PlansPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planos" element={<PlansPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/privacidade" element={<PrivacyPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App; 