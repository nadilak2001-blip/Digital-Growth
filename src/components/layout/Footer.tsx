/**
 * Signal & Scale - Universal Site Footer
 */

import React from 'react';
import {ArrowUpRight, Activity, ShieldCheck, Mail, MapPin, FileText} from 'lucide-react';
import {useRouter} from '../../context/RouterContext';
import {BRAND} from '../../data/contentData';
import {PageRoute} from '../../types';

export const Footer: React.FC = () => {
  const {navigateTo, openAuditModal, openDiscoveryModal, openGaDebug} = useRouter();

  const handleNav = (route: PageRoute) => {
    navigateTo(route);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      {/* Upper strategic conversion strip */}
      <div className="border-b border-slate-900 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-base font-bold text-white tracking-tight">
              Ready to transform your business expertise into measurable digital growth?
            </h3>
            <p className="text-slate-400 text-xs max-w-xl">
              Start with an objective diagnostic audit or schedule a 20-minute preliminary scope evaluation.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => openAuditModal('footer_strip')}
              className="px-4 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Request an SEO Audit
            </button>
            <button
              onClick={openDiscoveryModal}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-colors cursor-pointer"
            >
              Book 20-Min Discovery
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-base tracking-tight">
              <span className="w-2.5 h-2.5 rounded-sm bg-sky-400 transform rotate-45 inline-block" />
              <span>Signal &amp; Scale</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Remote-first B2B digital marketing and SEO consultancy serving Australian micro and small service businesses (1–20 staff).
            </p>
            <div className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-lg text-[11px] text-slate-400 space-y-1">
              <div className="font-semibold text-slate-300">Core Value Proposition</div>
              <div className="italic text-sky-300">"{BRAND.tagline}"</div>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Sydney, NSW · Serving all Australian States &amp; Territories</span>
            </div>
          </div>

          {/* Site Directory */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {[
                {id: 'home' as PageRoute, label: 'Home'},
                {id: 'services' as PageRoute, label: 'Services'},
                {id: 'industries' as PageRoute, label: 'Industry Sectors'},
                {id: 'evidence' as PageRoute, label: 'Evidence & Methodology'},
                {id: 'about' as PageRoute, label: 'About Us'},
                {id: 'insights' as PageRoute, label: 'Insights & Guides'},
                {id: 'contact' as PageRoute, label: 'Contact & Scoping'},
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Core Offerings</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Website &amp; SEO Audits
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  90-Day Strategy Roadmaps
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Marketing Performance Reporting
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('industries')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  IT Support Practice SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('industries')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bookkeeping Practice Growth
                </button>
              </li>
            </ul>
          </div>

          {/* Academic & Verification Assets */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Evaluation &amp; SEO</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={openGaDebug}
                  className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium cursor-pointer"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>GA4 Telemetry Inspector</span>
                </button>
              </li>
              <li>
                <a
                  href="./sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>XML Sitemap</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="./robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>robots.txt</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <div className="pt-2 text-[11px] text-slate-500">
                  Target Deploy Host:<br />
                  <code className="text-[10px] text-slate-400 break-all font-mono">
                    github.io/DMIP_PartB/
                  </code>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and compliance notes */}
        <div className="mt-12 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Signal &amp; Scale Pty Ltd (ABN Placeholder). All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Ethical Digital Marketing</span>
            <span aria-hidden="true">·</span>
            <span>No Unsubstantiated Ranking Promises</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-white transition-colors"
            >
              Privacy &amp; Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
