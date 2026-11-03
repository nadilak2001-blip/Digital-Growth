/**
 * Signal & Scale - Services Page
 *
 * Implements the full strategic scope for the three core consulting offerings:
 * 01. Website & SEO Audits
 * 02. 90-Day Content & Conversion Strategy Roadmaps
 * 03. Marketing Performance Measurement & Reporting
 *
 * Details: Purpose, Deliverables, Benefits, Methodology, Inclusions & Exclusions,
 * Interactive Sample Deliverable Inspector, and contextual CTAs.
 */

import React, {useState} from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Calendar,
  FileText,
  Layers,
  BarChart,
  HelpCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import {useRouter} from '../context/RouterContext';
import {CORE_SERVICES} from '../data/contentData';
import {trackServiceView} from '../utils/analytics';

export const ServicesPage: React.FC = () => {
  const {openAuditModal, openDiscoveryModal} = useRouter();
  const [activeSampleModal, setActiveSampleModal] = useState<string | null>(null);

  const sampleDeliverablesData: Record<
    string,
    {
      title: string;
      category: string;
      description: string;
      sections: {name: string; items: string[]}[];
    }
  > = {
    'seo-audits': {
      title: 'Sample Deliverable: Executive Action Matrix & Technical Crawl Report',
      category: 'Website & SEO Audit Deliverable',
      description:
        'A comprehensive 35-page diagnostic assessment delivered in PDF and interactive spreadsheet formats, identifying every technical flaw and search-intent mismatch.',
      sections: [
        {
          name: 'Section 1: Technical Infrastructure & Core Web Vitals',
          items: [
            'Server response times and Time to First Byte (TTFB) benchmarking across Sydney and Melbourne POPs',
            'Mobile crawlability and layout shifts (CLS) on key high-margin service templates',
            'Robots.txt directive evaluation, XML sitemap validation, and canonical tag audits',
            'Structured Data / Schema.org review for LocalBusiness and ProfessionalService entities',
          ],
        },
        {
          name: 'Section 2: B2B Search Demand & Competitor Gaps',
          items: [
            'Keyword mapping of high-intent commercial terms used by Australian corporate buyers',
            'Organic visibility gap analysis against 3 direct local competitor domains',
            'Identification of "striking distance" queries (ranks 11–25) that can be quickly elevated',
          ],
        },
        {
          name: 'Section 3: Conversion Architecture Friction Analysis',
          items: [
            'User journey walkthrough from initial Google landing page to contact form submission',
            'Proof placement and credibility markers analysis on core service pages',
            'Recommended wireframe modifications to eliminate form abandonment',
          ],
        },
      ],
    },
    'strategy-roadmaps': {
      title: 'Sample Deliverable: 90-Day Execution Blueprint & Content Briefs',
      category: 'Strategy Roadmap Deliverable',
      description:
        'A staged 12-week operational plan designed for busy practice owners, breaking down content creation, page redesigns, and lead qualification into manageable bi-weekly sprints.',
      sections: [
        {
          name: 'Sprint 1–2 (Weeks 1–4): High-Intent Authority Foundation',
          items: [
            'Extraction of top 10 buyer objections and commercial risks from fee-earners',
            'Publishing of 2 cornerstone authority guides targeting long-tail decision queries',
            'Re-architecting primary service pages with clear methodology stages and deliverables',
          ],
        },
        {
          name: 'Sprint 3–4 (Weeks 5–8): Conversion Funnel Optimisation',
          items: [
            'Deploying structured qualification fields on inbound contact forms to filter low-budget leads',
            'Creating a low-friction diagnostic lead magnet (e.g. self-assessment checklist)',
            'Implementing social proof adjacency alongside primary call-to-action buttons',
          ],
        },
        {
          name: 'Sprint 5–6 (Weeks 9–12): Internal Linking & Performance Calibration',
          items: [
            'Internal topic cluster linking to pass search equity to commercial service pages',
            'Reviewing initial user engagement data and adjusting content briefs for upcoming quarter',
            'Executive strategy debrief on inbound pipeline velocity and next growth phase',
          ],
        },
      ],
    },
    'performance-measurement': {
      title: 'Sample Deliverable: B2B Executive Looker Studio Dashboard',
      category: 'Performance Measurement Deliverable',
      description:
        'A single-screen commercial reporting dashboard configured in Google Analytics 4 and Looker Studio, tracking the exact metrics that determine business profitability.',
      sections: [
        {
          name: 'Executive Overview Module',
          items: [
            'Total Qualified Sales Inquiries (month-on-month trend vs. baseline target)',
            'Cost per Qualified Inbound Lead across organic and referral acquisition channels',
            'Estimated Pipeline Value generated by organic digital touchpoints',
          ],
        },
        {
          name: 'Channel Attribution & Intent Drilldown',
          items: [
            'Organic search sessions segmented by commercial vs. informational intent',
            'Referral traffic quality and direct brand navigation frequency',
            'High-converting landing page ranking table with engagement dwell times',
          ],
        },
        {
          name: 'Conversion Funnel Diagnostics',
          items: [
            'Drop-off rate between service page visits and enquiry form initiation',
            'Form completion rate and primary reasons selected for enquiry',
            'Mobile vs. desktop conversion efficiency comparison',
          ],
        },
      ],
    },
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="pt-12 md:pt-16 border-b border-slate-800/80 pb-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wide">
              <span>Service Catalogue &amp; Scope</span>
              <span aria-hidden="true">·</span>
              <span>Transparent Deliverables</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Evidence-based digital marketing services designed for B2B outcomes.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              We provide clearly defined, structured engagements that turn your internal professional expertise into predictable digital visibility and qualified client pipeline. No opaque monthly retainers, no speculative guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* Main Core Services Detailed Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {CORE_SERVICES.map((srv, index) => (
          <div
            key={srv.id}
            id={srv.id}
            className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 space-y-8 scroll-mt-24"
          >
            {/* Top row: Number, Title, Tagline */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-slate-800 pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-sky-400 bg-sky-950 px-2.5 py-1 rounded border border-sky-800">
                    SERVICE {srv.number}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>{srv.timeline}</span>
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {srv.title}
                </h2>
                <p className="text-sm text-sky-300/90 font-medium">{srv.tagline}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => openAuditModal(srv.id)}
                  className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Request This Service
                </button>
                <button
                  onClick={openDiscoveryModal}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-lg border border-slate-700 transition-colors cursor-pointer"
                >
                  Book Discovery
                </button>
              </div>
            </div>

            {/* Purpose & Audience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950/60 p-5 rounded-xl border border-slate-800/80 text-xs">
              <div>
                <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-1.5">
                  Strategic Commercial Purpose
                </div>
                <p className="text-slate-300 leading-relaxed">{srv.purpose}</p>
              </div>
              <div>
                <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-1.5">
                  Ideal Practice Profile
                </div>
                <p className="text-slate-300 leading-relaxed">{srv.targetAudience}</p>
              </div>
            </div>

            {/* Deliverables & Tangible Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Deliverables */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sky-400" />
                    <span>Key Concrete Deliverables</span>
                  </h3>
                  <button
                    onClick={() => setActiveSampleModal(srv.id)}
                    className="text-xs text-sky-400 hover:text-sky-300 font-medium underline underline-offset-4 cursor-pointer"
                  >
                    Inspect sample output
                  </button>
                </div>
                <ul className="space-y-2.5">
                  {srv.deliverables.map((item, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2.5 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tangible Business Benefits */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>Commercial Business Benefits</span>
                </h3>
                <ul className="space-y-2.5">
                  {srv.benefits.map((benefit, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2.5 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step-by-Step Methodology */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Consulting Delivery Methodology</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {srv.methodology.map((m, i) => (
                  <div key={i} className="p-4 bg-slate-950 rounded-lg border border-slate-800/80 space-y-1.5">
                    <div className="text-[11px] font-mono font-bold text-sky-400">Step 0{i + 1}</div>
                    <div className="text-xs font-bold text-white">{m.step}</div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparent Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800 text-xs">
              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-2">
                <div className="font-semibold text-emerald-400 flex items-center gap-1.5 text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Included in Scope</span>
                </div>
                <ul className="space-y-1.5 text-slate-300">
                  {srv.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-2">
                <div className="font-semibold text-slate-400 flex items-center gap-1.5 text-xs">
                  <XCircle className="w-4 h-4 text-slate-500" />
                  <span>Explicit Exclusions (Preventing Scope Creep)</span>
                </div>
                <ul className="space-y-1.5 text-slate-400">
                  {srv.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-slate-500">✕</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Interactive 90-Day Roadmap Timeline Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-slate-900 border border-slate-800 rounded-2xl space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
              Execution Cadence
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              How a 90-Day Growth Roadmap Unfolds
            </h2>
            <p className="text-xs text-slate-400 max-w-2xl">
              We sequence digital transformation into three 30-day horizons so your fee-earners can maintain client delivery while building marketing equity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 relative">
              <div className="text-xs font-mono font-bold text-sky-400 mb-1">DAYS 01 – 30</div>
              <h3 className="text-base font-bold text-white mb-2">Horizon 1: Diagnose &amp; Align</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• Conduct full technical crawl &amp; Core Web Vitals audit</li>
                <li>• Interview key fee-earners to document client objections</li>
                <li>• Map high-intent commercial keyword priorities</li>
                <li>• Deliver 90-day execution Kanban board</li>
              </ul>
            </div>

            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 relative">
              <div className="text-xs font-mono font-bold text-teal-400 mb-1">DAYS 31 – 60</div>
              <h3 className="text-base font-bold text-white mb-2">Horizon 2: Conversion Architecture</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• Restructure primary service page wireframes</li>
                <li>• Position proof adjacency and client outcome metrics</li>
                <li>• Deploy qualification intake forms on contact pages</li>
                <li>• Publish 2 core long-tail authority assets</li>
              </ul>
            </div>

            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 relative">
              <div className="text-xs font-mono font-bold text-indigo-400 mb-1">DAYS 61 – 90</div>
              <h3 className="text-base font-bold text-white mb-2">Horizon 3: Measure &amp; Compound</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• Implement GA4 executive Looker Studio dashboard</li>
                <li>• Monitor inbound discovery call conversion velocity</li>
                <li>• Interlink topic clusters for search authority</li>
                <li>• Quarterly review and next quarter scope prioritization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Deliverable Inspector Modal */}
      {activeSampleModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <div className="text-xs text-sky-400 font-semibold uppercase tracking-wider">
                  {sampleDeliverablesData[activeSampleModal]?.category}
                </div>
                <h3 className="text-lg font-bold text-white mt-1">
                  {sampleDeliverablesData[activeSampleModal]?.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveSampleModal(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 py-4 leading-relaxed">
              {sampleDeliverablesData[activeSampleModal]?.description}
            </p>

            <div className="space-y-4">
              {sampleDeliverablesData[activeSampleModal]?.sections.map((sec, idx) => (
                <div key={idx} className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
                  <div className="text-xs font-bold text-white">{sec.name}</div>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {sec.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="text-sky-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="pt-5 mt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setActiveSampleModal(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg transition-colors cursor-pointer"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  const srvId = activeSampleModal;
                  setActiveSampleModal(null);
                  openAuditModal(srvId);
                }}
                className="px-5 py-2 bg-sky-500 hover:bg-sky-400 text-xs font-semibold text-slate-950 rounded-lg transition-colors cursor-pointer"
              >
                Request Detailed Scope
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Conversion Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Unsure which service aligns with your current bottlenecks?</h3>
            <p className="text-xs text-slate-400">
              Schedule an obligation-free 20-minute preliminary diagnostic discovery call with a senior strategist.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openAuditModal('services_bottom')}
              className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Request an SEO Audit
            </button>
            <button
              onClick={openDiscoveryModal}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-lg border border-slate-700 transition-colors cursor-pointer"
            >
              Book Discovery Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
