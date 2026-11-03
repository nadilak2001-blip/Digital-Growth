/**
 * Signal & Scale - Router & Application Modal Context
 *
 * Provides hash-resilient client-side routing optimized for GitHub Pages subfolder hosting
 * (/DMIP_PartB/) while automatically synchronizing document titles and dispatching GA4 page views.
 */

import React, {createContext, useContext, useEffect, useState} from 'react';
import {PageRoute} from '../types';
import {trackPageView} from '../utils/analytics';

interface RouterContextType {
  currentRoute: PageRoute;
  navigateTo: (route: PageRoute, targetSectionId?: string) => void;
  openAuditModal: (initialService?: string) => void;
  closeAuditModal: () => void;
  isAuditModalOpen: boolean;
  auditPreselectService?: string;
  openDiscoveryModal: () => void;
  closeDiscoveryModal: () => void;
  isDiscoveryModalOpen: boolean;
  openGaDebug: () => void;
  closeGaDebug: () => void;
  isGaDebugOpen: boolean;
}

const PAGE_TITLES: Record<PageRoute, string> = {
  home: 'Signal & Scale | B2B Digital Marketing & SEO Consultancy Australia',
  services: 'Services & Scope | Website Audits, 90-Day Roadmaps & Reporting',
  industries: 'Industry Solutions | IT Support, Bookkeeping & Advisory Firms',
  evidence: 'Evidence & Methodology | Sample Analytics & Case Study Framework',
  about: 'About Us | Evidence-Based B2B Digital Marketing Philosophy',
  insights: 'Insights & Guides | B2B Lead Generation & Conversion Strategies',
  contact: 'Contact & Discovery | Request an Audit or 20-Min Consultation',
};

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function parseRouteFromLocation(): PageRoute {
  if (typeof window === 'undefined') return 'home';

  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim();
  if (hash) {
    const cleanHash = hash.split('?')[0].split('/')[0];
    if (
      [
        'home',
        'services',
        'industries',
        'evidence',
        'about',
        'insights',
        'contact',
      ].includes(cleanHash)
    ) {
      return cleanHash as PageRoute;
    }
  }

  // Fallback to pathname detection
  const path = window.location.pathname.toLowerCase();
  for (const route of [
    'services',
    'industries',
    'evidence',
    'about',
    'insights',
    'contact',
  ]) {
    if (path.includes(`/${route}`)) {
      return route as PageRoute;
    }
  }

  return 'home';
}

export const RouterProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(
    parseRouteFromLocation
  );
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditPreselectService, setAuditPreselectService] = useState<
    string | undefined
  >();
  const [isDiscoveryModalOpen, setIsDiscoveryModalOpen] = useState(false);
  const [isGaDebugOpen, setIsGaDebugOpen] = useState(false);

  // Sync title and fire GA4 on route change
  useEffect(() => {
    const title = PAGE_TITLES[currentRoute] || PAGE_TITLES.home;
    document.title = title;
    trackPageView(`/${currentRoute === 'home' ? '' : currentRoute}`, title);
  }, [currentRoute]);

  // Listen to browser back/forward and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = parseRouteFromLocation();
      setCurrentRoute(newRoute);
      window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateTo = (route: PageRoute, targetSectionId?: string) => {
    setCurrentRoute(route);
    window.location.hash = `#/${route}`;

    if (targetSectionId) {
      setTimeout(() => {
        const el = document.getElementById(targetSectionId);
        if (el) {
          el.scrollIntoView({behavior: 'smooth', block: 'start'});
        } else {
          window.scrollTo({top: 0, behavior: 'smooth'});
        }
      }, 100);
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

  const openAuditModal = (initialService?: string) => {
    setAuditPreselectService(initialService);
    setIsAuditModalOpen(true);
  };

  const closeAuditModal = () => {
    setIsAuditModalOpen(false);
    setAuditPreselectService(undefined);
  };

  const openDiscoveryModal = () => setIsDiscoveryModalOpen(true);
  const closeDiscoveryModal = () => setIsDiscoveryModalOpen(false);

  const openGaDebug = () => setIsGaDebugOpen(true);
  const closeGaDebug = () => setIsGaDebugOpen(false);

  return (
    <RouterContext.Provider
      value={{
        currentRoute,
        navigateTo,
        openAuditModal,
        closeAuditModal,
        isAuditModalOpen,
        auditPreselectService,
        openDiscoveryModal,
        closeDiscoveryModal,
        isDiscoveryModalOpen,
        openGaDebug,
        closeGaDebug,
        isGaDebugOpen,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}
