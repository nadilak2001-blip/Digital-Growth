/**
 * Signal & Scale - Top Navigation Bar
 * Follows the strict 3-zone Top Bar Contract:
 * [Zone 1: Wordmark] — [Zone 2: 7 Single-Line Nav Links] — [Zone 3: 1 Primary Action CTA]
 */

import React, {useState} from 'react';
import {Menu, X, Activity, ArrowRight} from 'lucide-react';
import {useRouter} from '../../context/RouterContext';
import {PageRoute} from '../../types';

export const Navbar: React.FC = () => {
  const {currentRoute, navigateTo, openAuditModal, openGaDebug} = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: {id: PageRoute; label: string}[] = [
    {id: 'home', label: 'Home'},
    {id: 'services', label: 'Services'},
    {id: 'industries', label: 'Industries'},
    {id: 'evidence', label: 'Evidence'},
    {id: 'about', label: 'About'},
    {id: 'insights', label: 'Insights'},
    {id: 'contact', label: 'Contact'},
  ];

  const handleLinkClick = (route: PageRoute) => {
    navigateTo(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element wordmark) */}
        <a
          href="#/home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-sky-400 transition-colors flex items-center gap-2"
          aria-label="Signal & Scale - Home"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-sky-400 transform rotate-45 inline-block" />
          <span>Signal &amp; Scale</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#/${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id);
              }}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                currentRoute === link.id
                  ? 'text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
              {currentRoute === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Quick GA4 debug trigger */}
          <button
            onClick={openGaDebug}
            title="Open GA4 Telemetry Debugger"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-400 hover:text-sky-400 bg-slate-900 border border-slate-800 rounded-md transition-colors cursor-pointer"
          >
            <Activity className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden xl:inline font-mono text-[11px]">GA4 Live</span>
          </button>

          <button
            onClick={() => openAuditModal('header_nav')}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer shadow-sm shadow-sky-500/10"
          >
            <span>Request an Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => openAuditModal('mobile_nav_header')}
            className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-md transition-colors"
          >
            Audit
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-slate-950/98 px-5 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#/${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentRoute === link.id
                    ? 'bg-slate-900 text-sky-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-900/60 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAuditModal('mobile_drawer');
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Request a B2B Website &amp; SEO Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openGaDebug();
              }}
              className="w-full py-2 px-3 text-xs text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-2"
            >
              <Activity className="w-3.5 h-3.5 text-sky-400" />
              <span>Open GA4 Telemetry Inspector</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
