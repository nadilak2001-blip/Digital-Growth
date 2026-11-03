/**
 * Signal & Scale - Home Page
 *
 * Implements the primary strategic landing experience:
 * - Compelling Hero Section with Core Value Proposition
 * - Transparent Positioning (Micro & Small Australian B2B Service Firms)
 * - Prominent "Request an SEO Audit" CTA and "Explore Our Services" Button
 * - 4-Stage Methodology (Diagnose, Explain, Evaluate, Prove)
 * - Three Core Offerings preview with direct links
 * - Industry Focus tabs (IT Support, Bookkeeping, Professional Advisers)
 * - Educational Content previews
 * - Relevant FAQ accordion
 * - High-conversion closing section
 */

import React, {useState} from 'react';
import {
  ArrowRight,
  Search,
  Compass,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Building2,
  Server,
  Calculator,
  Briefcase,
  HelpCircle,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import {useRouter} from '../context/RouterContext';
import {
  CORE_SERVICES,
  METHODOLOGY_STAGES,
  INDUSTRY_PROFILES,
  INSIGHT_ARTICLES,
  FREQUENTLY_ASKED_QUESTIONS,
} from '../data/contentData';
import {trackServiceView, trackIndustryView} from '../utils/analytics';

export const HomePage: React.FC = () => {
  const {navigateTo, openAuditModal, openDiscoveryModal} = useRouter();
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const currentInd = INDUSTRY_PROFILES[selectedIndustry];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero Section */}
      <section className="relative pt-12 md:pt-20 lg:pt-28 overflow-hidden">
        {/* Subtle radial glow background */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent pointer-events-none blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Unboxed clean metadata kicker */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-sky-400 tracking-wide uppercase">
              <span>B2B Digital Marketing &amp; SEO Consultancy</span>
              <span aria-hidden="true">·</span>
              <span>Australia-Wide</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
              Transforming business expertise into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                measurable digital growth.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We help Australian micro and small B2B service firms (1–20 staff) capture high-intent commercial buyers through transparent SEO audits, practical 90-day roadmaps, and honest analytics.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openAuditModal('hero_primary')}
                className="w-full sm:w-auto px-6 py-3.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 cursor-pointer"
              >
                <span>Request an SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigateTo('services')}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Unboxed proof markers */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Zero fabricated ranking promises</span>
              </span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span>Prioritising lead quality over vanity traffic</span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span>Tailored for firms with 1–20 employees</span>
            </div>
          </div>

          {/* Hero Visual Card: The Signal & Scale Analytical Interface Preview */}
          <div className="mt-14 max-w-5xl mx-auto rounded-xl border border-slate-800 bg-slate-900/80 p-5 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
                <span className="text-slate-400 font-mono text-[11px]">
                  diagnostic_audit_engine // Australian B2B Service Visibility
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                Evidence-Based Model
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
              <div className="p-4 bg-slate-950/60 rounded-lg border border-slate-800/80">
                <div className="text-xs text-slate-400 mb-1">Search Intent Alignment</div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums">94.2%</div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Targeting commercial buyers searching for specialist advice rather than consumer price shoppers.
                </p>
              </div>

              <div className="p-4 bg-slate-950/60 rounded-lg border border-slate-800/80">
                <div className="text-xs text-slate-400 mb-1">Conversion Architecture</div>
                <div className="text-2xl font-bold font-mono text-sky-400 tabular-nums">3.8x</div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Restructured service pages with proof adjacency, clear methodology, and friction-free inquiry flows.
                </p>
              </div>

              <div className="p-4 bg-slate-950/60 rounded-lg border border-slate-800/80">
                <div className="text-xs text-slate-400 mb-1">Lead Quality Index</div>
                <div className="text-2xl font-bold font-mono text-teal-300 tabular-nums">+142%</div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Filtering out low-budget solicitations to deliver fee-earner ready sales opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Help & The Problem We Solve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
              Market Positioning &amp; Focus
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight leading-tight">
              Built specifically for Australian micro and small service firms.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              If your firm employs 1 to 20 specialists, you operate in a different reality than consumer retailers or venture-backed tech startups. Your expertise is deep, your client relationships are high-value, but your marketing is often intermittent.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              You don’t need an expensive agency retainer producing TikTok videos. You need your website to act as an authoritative commercial front door that turns problem-aware business executives into scheduled discovery conversations.
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('about')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>Read more about our consulting philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Server className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">IT Support &amp; MSPs</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Break free from local break/fix price competition and attract SME business owners seeking proactive cybersecurity and cloud continuity.
              </p>
            </div>

            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Calculator className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">Bookkeeping &amp; Advisory</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Transition from commodity compliance data-entry to recurring monthly cash flow advisory and virtual CFO contracts.
              </p>
            </div>

            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">Professional Advisers</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Management consultants, HR specialists, and governance advisers seeking to establish inbound authority beyond personal networks.
              </p>
            </div>

            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">SME B2B Practices</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Any Australian practice with 1–20 staff whose revenue relies on high-trust, consultative client relationships and multi-thousand dollar contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4-Stage Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
            Our Proprietary Approach
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            The 4-Stage Consulting Methodology
          </h2>
          <p className="text-sm text-slate-400">
            We do not sell black-box marketing magic. Every engagement follows a disciplined, transparent scientific sequence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STAGES.map((stg) => (
            <div
              key={stg.step}
              className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl space-y-4 hover:border-slate-700 transition-colors relative"
            >
              <div className="text-2xl font-bold font-mono text-sky-400">{stg.step}</div>
              <div>
                <h3 className="text-lg font-bold text-white">{stg.name}</h3>
                <div className="text-xs text-sky-300/90 font-medium mt-0.5">{stg.tagline}</div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{stg.description}</p>
              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                <span className="text-slate-400">Deliverable: </span>
                <span className="text-white font-medium">{stg.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Core Services Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
              Structured Engagements
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Three Core Consulting Offerings
            </h2>
          </div>
          <button
            onClick={() => navigateTo('services')}
            className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>View detailed deliverables &amp; exclusions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-sky-500/50 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-sky-400 bg-sky-950/60 px-2.5 py-1 rounded border border-sky-800/40">
                    {srv.number}
                  </span>
                  <span className="text-xs text-slate-400">{srv.timeline}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">{srv.summary}</p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase">Key Deliverables</div>
                  <ul className="space-y-1.5">
                    {srv.deliverables.slice(0, 3).map((del, i) => (
                      <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => {
                    trackServiceView(srv.id, srv.title);
                    navigateTo('services', srv.id);
                  }}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => openAuditModal(srv.id)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white rounded transition-colors cursor-pointer"
                >
                  Request Scope
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Interactive Industry Focus Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
              Industry Tailored Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Differentiated strategies for distinct B2B service sectors
            </h2>
            <p className="text-xs text-slate-400">
              Select your practice category to review sector-specific search intents and conversion opportunities.
            </p>
          </div>

          {/* Interactive tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
            {INDUSTRY_PROFILES.map((ind, idx) => (
              <button
                key={ind.id}
                onClick={() => {
                  setSelectedIndustry(idx);
                  trackIndustryView(ind.id);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedIndustry === idx
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {ind.shortTitle}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-white">{currentInd.name}</h3>
              <p className="text-xs text-sky-300 font-medium">{currentInd.subtitle}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{currentInd.overview}</p>

              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Common Sector Challenges:
                </div>
                <ul className="space-y-1.5">
                  {currentInd.coreChallenges.map((ch, i) => (
                    <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800/80 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Typical High-Intent Search Queries
                </div>
                <div className="space-y-2">
                  {currentInd.searchBehaviours.flatMap((sb) => sb.sampleQueries).slice(0, 3).map((query, i) => (
                    <div
                      key={i}
                      className="p-2.5 bg-slate-900 border border-slate-800 rounded font-mono text-[11px] text-sky-300 flex items-center gap-2"
                    >
                      <Search className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>"{query}"</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-sky-950/20 border border-sky-800/30 rounded text-[11px] text-slate-300 italic">
                  {currentInd.quoteInsight}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => navigateTo('industries', currentInd.id)}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5"
                >
                  <span>Read full industry playbook</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Educational Insights Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
              Educational Resources
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Actionable B2B Marketing Guides
            </h2>
          </div>
          <button
            onClick={() => navigateTo('insights')}
            className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>Explore all resources &amp; research</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INSIGHT_ARTICLES.map((art) => (
            <div
              key={art.id}
              className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-sky-400 font-medium">{art.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{art.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>Updated {art.lastUpdated}</span>
                </div>
                <h3 className="text-lg font-bold text-white hover:text-sky-300 transition-colors">
                  <button
                    onClick={() => navigateTo('insights', art.id)}
                    className="text-left cursor-pointer"
                  >
                    {art.title}
                  </button>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">{art.summary}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => navigateTo('insights', art.id)}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Read complete guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
            Clear Answers
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-400">
            Everything you need to know about our scope, audits, and commercial expectations.
          </p>
        </div>

        <div className="space-y-3">
          {FREQUENTLY_ASKED_QUESTIONS.slice(0, 5).map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-sky-300 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-sky-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Final Conversion Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 border border-slate-800 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
            <span>Take the Next Step</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready for evidence-based digital marketing that delivers qualified client pipeline?
          </h2>

          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Request an objective Website &amp; SEO Audit to uncover visibility roadblocks, or arrange a 20-minute preliminary discovery call with our strategy team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openAuditModal('bottom_cta')}
              className="w-full sm:w-auto px-6 py-3.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 cursor-pointer"
            >
              <span>Request an SEO Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={openDiscoveryModal}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book a 20-Minute Discovery Call</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-400 pt-2">
            No long-term lock-in contracts · Transparent scope · 100% Australian market focus
          </div>
        </div>
      </section>
    </div>
  );
};
