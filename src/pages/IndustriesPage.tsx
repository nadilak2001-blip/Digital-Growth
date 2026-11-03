/**
 * Signal & Scale - Industries & Sector Solutions Page
 *
 * Dedicated deep-dives for:
 * 1. IT Support Providers & MSPs
 * 2. Bookkeeping & Accounting Advisory Practices
 * 3. Professional Advisers (Management, HR, Risk & Compliance)
 *
 * Includes: Sector-specific search intent analysis, high-conversion page wireframes,
 * and an interactive Sector Diagnostic Matcher.
 */

import React, {useState} from 'react';
import {
  Server,
  Calculator,
  Briefcase,
  Search,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import {useRouter} from '../context/RouterContext';
import {INDUSTRY_PROFILES} from '../data/contentData';
import {IndustryKey} from '../types';

export const IndustriesPage: React.FC = () => {
  const {openAuditModal, openDiscoveryModal, navigateTo} = useRouter();
  const [activeSector, setActiveSector] = useState<IndustryKey>('it-support');

  const activeProfile =
    INDUSTRY_PROFILES.find((p) => p.id === activeSector) || INDUSTRY_PROFILES[0];

  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="pt-12 md:pt-16 border-b border-slate-800/80 pb-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wide">
              <span>Industry Focus Areas</span>
              <span aria-hidden="true">·</span>
              <span>Differentiated B2B Strategy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Sector-specific digital presence solutions for Australian service firms.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              An IT support company has fundamentally different search behaviour and buyer journeys than a management consulting advisory. We design tailored architectures matching the reality of your specific commercial buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Sector Navigation Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              id: 'it-support' as IndustryKey,
              title: 'IT Support & MSPs',
              icon: Server,
              tag: 'Break-fix to Managed Services',
            },
            {
              id: 'bookkeeping' as IndustryKey,
              title: 'Bookkeeping Firms',
              icon: Calculator,
              tag: 'Compliance to Cash Flow Advisory',
            },
            {
              id: 'professional-advisers' as IndustryKey,
              title: 'Professional Advisers',
              icon: Briefcase,
              tag: 'Referrals to Inbound Authority',
            },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = activeSector === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSector(item.id)}
                className={`p-6 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? 'border-sky-500 bg-slate-900 shadow-lg shadow-sky-500/10 ring-1 ring-sky-500'
                    : 'border-slate-800 bg-slate-950/60 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{item.tag}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <div className="text-xs text-slate-400 mt-1">
                    Click to review search behavior and conversion architecture.
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Sector Detailed Analysis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900 border border-slate-800 space-y-10">
          {/* Header row */}
          <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                Sector Playbook
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {activeProfile.name}
              </h2>
              <p className="text-sm text-sky-300 font-medium">{activeProfile.subtitle}</p>
              <p className="text-xs text-slate-300 leading-relaxed pt-2">
                {activeProfile.overview}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => openAuditModal(`industry_${activeSector}`)}
                className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Request Sector Audit
              </button>
            </div>
          </div>

          {/* Core Challenges & Commercial Realities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Sector Digital Marketing Challenges</span>
              </h3>
              <ul className="space-y-2.5">
                {activeProfile.coreChallenges.map((ch, i) => (
                  <li key={i} className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-teal-400" />
                <span>High-Yield Conversion Opportunities</span>
              </h3>
              <ul className="space-y-2.5">
                {activeProfile.conversionOpportunities.map((op, i) => (
                  <li key={i} className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{op}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Search Intent Breakdown Table */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Search className="w-4 h-4 text-sky-400" />
              <span>Australian B2B Search Behavior Analysis</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeProfile.searchBehaviours.map((sb, i) => (
                <div key={i} className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-white flex items-center justify-between">
                    <span>{sb.intent} Search Intent</span>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-800/40">
                      High Intent
                    </span>
                  </div>
                  <div className="space-y-2">
                    {sb.sampleQueries.map((query, qIdx) => (
                      <div
                        key={qIdx}
                        className="p-2.5 bg-slate-900 border border-slate-800 rounded font-mono text-xs text-sky-300 flex items-center gap-2"
                      >
                        <Search className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>"{query}"</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Quote & Recommended Services */}
          <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="text-[11px] font-semibold text-slate-400 uppercase">Strategic Insight</div>
              <p className="text-xs text-slate-200 italic leading-relaxed">
                {activeProfile.quoteInsight}
              </p>
            </div>
            <div className="space-y-2 shrink-0 text-right">
              <div className="text-[11px] font-semibold text-slate-400 uppercase">Recommended Engagements</div>
              <div className="flex flex-col gap-1.5 text-xs">
                {activeProfile.recommendedServices.map((rec, i) => (
                  <button
                    key={i}
                    onClick={() => navigateTo('services')}
                    className="text-sky-400 hover:text-sky-300 font-medium flex items-center justify-end gap-1 cursor-pointer"
                  >
                    <span>{rec}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white">Need an industry-aligned evaluation for your practice?</h3>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            We will conduct a tailored diagnostic crawl of your practice website and show you the exact search terms your competitors are winning in your city.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openAuditModal(`industry_bottom_${activeSector}`)}
              className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Request Sector Audit
            </button>
            <button
              onClick={openDiscoveryModal}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-lg border border-slate-700 transition-colors cursor-pointer"
            >
              Book 20-Min Discovery Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
