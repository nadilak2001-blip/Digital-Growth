/**
 * Signal & Scale - Primary Application Entry Point
 *
 * Assembles the full, production-grade 7-page B2B Digital Marketing Consultancy website:
 * - Hash and subfolder-safe RouterProvider
 * - Top Bar Contract Navbar
 * - 7 Core Pages: Home, Services, Industries, Evidence, About, Insights, Contact
 * - Interactive Diagnostic Modals (Audit Request, Discovery Booking, GA4 Live Telemetry Inspector)
 * - Complete Footer with directory and XML sitemap links
 */

import React, {useEffect} from 'react';
import {RouterProvider, useRouter} from './context/RouterContext';
import {Navbar} from './components/layout/Navbar';
import {Footer} from './components/layout/Footer';
import {HomePage} from './pages/HomePage';
import {ServicesPage} from './pages/ServicesPage';
import {IndustriesPage} from './pages/IndustriesPage';
import {EvidencePage} from './pages/EvidencePage';
import {AboutPage} from './pages/AboutPage';
import {InsightsPage} from './pages/InsightsPage';
import {ContactPage} from './pages/ContactPage';
import {AuditRequestModal} from './components/modals/AuditRequestModal';
import {DiscoveryBookingModal} from './components/modals/DiscoveryBookingModal';
import {GaDebugDrawer} from './components/modals/GaDebugDrawer';
import {initGA4} from './utils/analytics';

const AppContent: React.FC = () => {
  const {currentRoute} = useRouter();

  useEffect(() => {
    // Initialize official Google Analytics 4 integration safely
    initGA4();
  }, []);

  const renderActivePage = () => {
    switch (currentRoute) {
      case 'services':
        return <ServicesPage />;
      case 'industries':
        return <IndustriesPage />;
      case 'evidence':
        return <EvidencePage />;
      case 'about':
        return <AboutPage />;
      case 'insights':
        return <InsightsPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Strict 3-zone Top Bar Contract */}
      <Navbar />

      {/* Dynamic Page Content */}
      <main className="flex-1 w-full">{renderActivePage()}</main>

      {/* Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <AuditRequestModal />
      <DiscoveryBookingModal />
      <GaDebugDrawer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
