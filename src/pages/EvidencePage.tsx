/**
 * Signal & Scale - Evidence, Methodology & Sample Reporting Page
 *
 * Implements:
 * - Performance Evaluation Methodology & Honest Analytics Principles
 * - Interactive Sample Reporting Dashboard (prominently labelled as hypothetical demonstration data)
 * - Filtering by Date Range & Channel Attribution
 * - Conversion Funnel Diagnostics
 * - Structured Area for Future Permission-Based Case Studies
 *   (with Baseline, Interventions, Outcomes, Measurement Period, and Limitations)
 * - Strict Ethical Compliance: Zero fabricated testimonials, client logos, or fake case studies.
 */

import React, {useState} from 'react';
import {
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Calendar,
  Filter,
  Layers,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Info,
} from 'lucide-react';
import {useRouter} from '../context/RouterContext';
import {
  DEMO_PERFORMANCE_METRICS,
  HYPOTHETICAL_FUNNEL_DATA,
} from '../data/contentData';

export const EvidencePage: React.FC = () => {
  const {openAuditModal, openDiscoveryModal} = useRouter();
  const [timeRange, setTimeRange] = useState<'30d' | '90d' | 'qtd'>('90d');
  const [selectedChannel, setSelectedChannel] = useState<'all' | 'organic' | 'referral'>('all');

  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="pt-12 md:pt-16 border-b border-slate-800/80 pb-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wide">
              <span>Performance Evaluation Framework</span>
              <span aria-hidden="true">·</span>
              <span>Evidence &amp; Analytics</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Measuring what matters: Qualified pipeline, not vanity impressions.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              We hold digital marketing accountable to commercial business outcomes. Below is an interactive demonstration of our B2B performance reporting framework, alongside our future permission-based case study evaluation standard.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Prominent Hypothetical Data Warning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-amber-950/30 border border-amber-600/40 rounded-xl flex items-start gap-3.5 text-xs text-amber-200">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-semibold text-amber-300 block">
              Ethical Disclosure: Illustrative Demonstration Data
            </strong>
            <p className="leading-relaxed text-amber-200/90">
              The metrics, funnels, and dashboard visualizations displayed on this page represent <strong>hypothetical demonstration data</strong> illustrating how Signal &amp; Scale evaluates client performance. Signal &amp; Scale strictly adheres to professional ethics and does not fabricate client logos, fake case studies, or unverified statistical claims.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Sample Reporting Dashboard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8 shadow-xl">
          {/* Dashboard Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                <BarChart3 className="w-4 h-4" />
                <span>EXECUTIVE LOOKER STUDIO DASHBOARD PREVIEW</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                B2B Practice Lead Generation &amp; Engagement Index
              </h2>
            </div>

            {/* Interactive Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Date Filter */}
              <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-1 text-xs">
                {(['30d', '90d', 'qtd'] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setTimeRange(r)}
                    className={`px-3 py-1.5 rounded font-medium transition-all cursor-pointer ${
                      timeRange === r
                        ? 'bg-sky-500 text-slate-950 font-bold shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {r === '30d' ? 'Last 30 Days' : r === '90d' ? 'Last 90 Days' : 'Quarter-to-Date'}
                  </button>
                ))}
              </div>

              {/* Channel Filter */}
              <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-1 text-xs">
                {(['all', 'organic', 'referral'] as const).map((ch) => (
                  <button
                    key={ch}
                    onClick={() => setSelectedChannel(ch)}
                    className={`px-3 py-1.5 rounded font-medium capitalize transition-all cursor-pointer ${
                      selectedChannel === ch
                        ? 'bg-slate-800 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {ch === 'all' ? 'All Channels' : ch === 'organic' ? 'Organic Search' : 'Referral / Direct'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEMO_PERFORMANCE_METRICS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-3"
              >
                <div className="text-xs text-slate-400">{item.metric}</div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-bold font-mono text-white tabular-nums">
                    {item.currentValue}
                  </span>
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                      item.trend === 'up'
                        ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/40'
                        : 'bg-sky-950/60 text-sky-400 border-sky-800/40'
                    }`}
                  >
                    {item.percentageChange}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/60 flex items-center justify-between">
                  <span>Baseline: {item.previousValue}</span>
                  <span className="italic text-slate-400">{item.benchmark}</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">{item.notes}</p>
              </div>
            ))}
          </div>

          {/* Conversion Funnel Breakdown */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Full-Funnel B2B Conversion Architecture
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                Model: Problem-Aware Search → Commercial Engagement → Discovery
              </span>
            </div>

            <div className="space-y-2.5">
              {HYPOTHETICAL_FUNNEL_DATA.map((stg, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-slate-950 rounded-lg border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="font-semibold text-white">{stg.stage}</div>
                    <div className="text-[11px] text-slate-400">{stg.description}</div>
                  </div>
                  <div className="flex items-center gap-6 shrink-0 font-mono">
                    <span className="text-slate-300 tabular-nums font-bold text-sm">
                      {stg.volume}
                    </span>
                    <span className="text-sky-400 bg-sky-950/50 px-2 py-0.5 rounded border border-sky-800/40 text-[11px]">
                      {stg.conversionRate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology: How We Evaluate Performance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
            Scientific Measurement Principles
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            How Signal &amp; Scale Evaluates Performance
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Our measurement philosophy is governed by three rigorous technical principles designed to isolate cause and effect in B2B customer acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
            <div className="text-xs font-mono font-bold text-sky-400">PRINCIPLE 01</div>
            <h3 className="text-base font-bold text-white">Controlled Baseline Isolation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Before modifying a single title tag or publishing new content, we establish a clean 90-day quantitative baseline of organic impressions, service page engagement, and qualified inbound inquiries.
            </p>
          </div>

          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
            <div className="text-xs font-mono font-bold text-teal-400">PRINCIPLE 02</div>
            <h3 className="text-base font-bold text-white">Multi-Touch Intent Attribution</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              B2B buyers rarely convert on their first visit. We configure Google Analytics 4 to track the journey across multiple touchpoints: from preliminary educational search through to commercial service page evaluation and discovery booking.
            </p>
          </div>

          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
            <div className="text-xs font-mono font-bold text-indigo-400">PRINCIPLE 03</div>
            <h3 className="text-base font-bold text-white">Commercial Qualification Filtering</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We never report a raw form submission as a success metric unless it meets target practice criteria (verified corporate domain, relevant scope, and decision-maker seniority).
            </p>
          </div>
        </div>
      </section>

      {/* Structured Area for Future Permission-Based Case Studies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
              Verification Standards
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
              Future Permission-Based Case Study Framework
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              We do not publish fabricated case studies. All client case studies published by Signal &amp; Scale adhere to the structured verification fields below, published only with explicit written consent and verifiable data sources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
              <div className="font-bold text-white flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-sky-400" />
                <span>Standardized Case Study Template Structure</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <strong className="text-white">1. Practice Profile:</strong> Sector (e.g. IT MSP), employee count, geographic service radius.
                </li>
                <li>
                  <strong className="text-white">2. Baseline Performance:</strong> Pre-engagement search visibility, average monthly qualified inquiries, bounce rate.
                </li>
                <li>
                  <strong className="text-white">3. Strategic Interventions:</strong> Specific technical fixes, content assets deployed, conversion architecture redesigns.
                </li>
                <li>
                  <strong className="text-white">4. Measured Outcomes:</strong> Percentage change in qualified sales conversations and commercial keyword rankings.
                </li>
                <li>
                  <strong className="text-white">5. Measurement Period &amp; Limitations:</strong> Specific evaluation timeframe, external market variables, and known confounding factors.
                </li>
              </ul>
            </div>

            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Client Confidentiality Policy</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Smaller B2B service firms frequently handle sensitive corporate data and competitive proprietary advantages. We respect non-disclosure agreements (NDAs) and never publish identifiable client metrics or trade secrets without formal executive sign-off.
                </p>
              </div>

              <div className="p-3 bg-sky-950/20 border border-sky-800/40 rounded-lg text-slate-300 text-[11px]">
                Interested in participating in our permission-based case study program as an early onboarding client? Inquire during your discovery consultation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Want this level of visibility into your own practice’s digital growth?
            </h3>
            <p className="text-xs text-slate-400">
              Start with a diagnostic audit or schedule a 20-minute scope evaluation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openAuditModal('evidence_bottom')}
              className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Request an Audit
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
