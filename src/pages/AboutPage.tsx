/**
 * Signal & Scale - About Page
 *
 * Articulates:
 * - Mission, Vision, and Core Values (Evidence Over Assumptions, Transparency in Scope, etc.)
 * - Why smaller B2B service firms (1-20 staff) benefit from structured consulting vs agency retainers
 * - Ethical marketing commitments (no fabricated ranking guarantees)
 * - 4-Stage Methodology deep-dive
 * - Honest reporting framework: How we measure what matters
 * - Team & Leadership structure with clearly identified editable placeholders
 */

import React from 'react';
import {
  ShieldCheck,
  Target,
  Sparkles,
  Eye,
  CheckCircle2,
  ArrowRight,
  Scale,
  Users,
  Compass,
  FileCheck,
} from 'lucide-react';
import {useRouter} from '../context/RouterContext';
import {BRAND, METHODOLOGY_STAGES} from '../data/contentData';

export const AboutPage: React.FC = () => {
  const {openAuditModal, openDiscoveryModal} = useRouter();

  const coreValues = [
    {
      title: 'Evidence Over Assumptions',
      description:
        'We never make strategic recommendations based on agency hunches or fleeting trends. Every strategy is rooted in technical crawls, buyer search intent, and documented conversion architecture.',
      icon: Scale,
    },
    {
      title: 'Radical Scope Transparency',
      description:
        'No opaque monthly agency retainers or hidden markups. We detail every deliverable, inclusion, and exclusion in plain English before any engagement commences.',
      icon: Eye,
    },
    {
      title: 'Lead Quality Over Raw Volume',
      description:
        'We reject vanity metrics. For Australian B2B service firms, 15 qualified conversations with vetted decision-makers are infinitely more valuable than 10,000 random clicks.',
      icon: Target,
    },
    {
      title: 'Ethical & Algorithm-Safe Practices',
      description:
        'We never guarantee #1 Google rankings or use manipulative black-hat shortcuts. We build durable digital equity following official search engine and web standards.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="pt-12 md:pt-16 border-b border-slate-800/80 pb-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wide">
              <span>About Signal &amp; Scale</span>
              <span aria-hidden="true">·</span>
              <span>Our Philosophy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Evidence-based digital marketing designed for Australian professional practices.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              We founded Signal &amp; Scale to solve a persistent commercial dilemma: small B2B service firms possess world-class professional expertise, but their digital presence makes them look invisible or indistinguishable from commodity competitors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Bento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
            <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              Our Core Mission
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              To transform Australian business expertise into measurable digital growth.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We empower micro and small B2B service practices (1–20 employees) with transparent digital marketing infrastructure. We replace confusing agency retainers with structured diagnostic audits, practical 90-day roadmaps, and honest analytics that focus exclusively on qualified sales pipeline.
            </p>
          </div>

          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
            <div className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">
              Our Industry Vision
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              A B2B marketing standard built on accountability and evidence.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We envision an Australian advisory sector where smaller firms no longer waste capital on unsupported marketing promises. By aligning search demand, conversion architecture, and client intent, small specialist practices can out-convert larger competitors through genuine authority.
            </p>
          </div>
        </div>
      </section>

      {/* Why Smaller B2B Firms Need a Different Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
              Strategic Context
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Why the traditional agency model fails smaller B2B firms
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Generalist digital marketing agencies are built for high-volume B2C e-commerce or large enterprise retainers. When applied to micro and small B2B practices, this model inevitably breaks down:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800/80 space-y-3">
              <div className="text-sm font-bold text-white">The Vanity Metric Trap</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Agencies celebrate total website impressions and keyword ranking counts. But if you are a commercial IT support provider, ranking for "free computer wallpaper" brings zero revenue. What matters is commercial intent.
              </p>
            </div>

            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800/80 space-y-3">
              <div className="text-sm font-bold text-white">The Junior Staff Pass-Off</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                You pitch to a senior agency partner, but once the contract is signed, your B2B technical messaging is handed to a junior copywriter who doesn’t understand complex enterprise procurement or business risk.
              </p>
            </div>

            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800/80 space-y-3">
              <div className="text-sm font-bold text-white">Unclear Commercial ROI</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                40-page PDF reports filled with automated graphs obscure whether marketing actually resulted in signed clients or discovery calls. You are left guessing if the retainer is generating profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
            Our Operating Principles
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            How We Work with Clients
          </h2>
          <p className="text-xs text-slate-400">
            Four non-negotiable standards that govern every client interaction, audit, and strategic deliverable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{val.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{val.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership & Advisory Team Structure (With Clearly Labelled Placeholders) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-slate-900 border border-slate-800 rounded-2xl space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
              Consultancy Structure
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Senior Specialist Led Consulting
            </h2>
            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              In accordance with our strict transparency policy, all engagements are directly scoped and executed by senior practitioners. We do not invent fictional awards or fabricated client logos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-mono text-xs">
                S&amp;S
              </div>
              <div>
                <h3 className="text-base font-bold text-white">[Lead Strategist &amp; Principal]</h3>
                <div className="text-xs text-sky-400 font-mono mt-0.5">Strategy &amp; B2B Positioning</div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Directly conducts client objection extraction interviews, commercial keyword mapping, and 90-day execution roadmaps.
              </p>
              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                [Editable Strategic Lead Placeholder]
              </div>
            </div>

            <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-mono text-xs">
                SEO
              </div>
              <div>
                <h3 className="text-base font-bold text-white">[Senior Technical SEO Analyst]</h3>
                <div className="text-xs text-teal-400 font-mono mt-0.5">Crawlability &amp; Core Web Vitals</div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Performs deep diagnostic codebase crawls, indexing analysis, server latency reviews, and schema markup verification.
              </p>
              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                [Editable Technical Analyst Placeholder]
              </div>
            </div>

            <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-mono text-xs">
                CRO
              </div>
              <div>
                <h3 className="text-base font-bold text-white">[Analytics &amp; Conversion Specialist]</h3>
                <div className="text-xs text-indigo-400 font-mono mt-0.5">GA4 Telemetry &amp; Funnel UX</div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Configures custom Google Analytics 4 tracking triggers, Looker Studio dashboards, and lead qualification forms.
              </p>
              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                [Editable Analytics Specialist Placeholder]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Commitment Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-sky-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-400" />
              <span>Our Formal Ethical Guarantee</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              If an initial diagnostic indicates that digital marketing or SEO is not currently viable for your business model, we will state this transparently and decline the engagement.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openAuditModal('about_ethical_cta')}
              className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Request Diagnostic Scope
            </button>
            <button
              onClick={openDiscoveryModal}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-lg border border-slate-700 transition-colors cursor-pointer"
            >
              Book 20-Min Discovery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
