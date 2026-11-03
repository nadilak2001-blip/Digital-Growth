/**
 * Signal & Scale - Insights & Educational Resources Page
 *
 * Contains two substantial, original, SEO-optimised guides:
 * 1. "How Australian B2B Service Businesses Can Generate More Qualified Leads Online"
 * 2. "How to Improve Website Conversions for Small Service Businesses"
 *
 * Plus an extensive FAQ knowledge base addressing SEO audits, lead quality,
 * conversion optimization, and marketing measurement.
 */

import React, {useState, useEffect} from 'react';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Share2,
  ChevronRight,
  HelpCircle,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import {useRouter} from '../context/RouterContext';
import {INSIGHT_ARTICLES, FREQUENTLY_ASKED_QUESTIONS} from '../data/contentData';
import {PageRoute} from '../types';

export const InsightsPage: React.FC = () => {
  const {navigateTo, openAuditModal, openDiscoveryModal} = useRouter();
  const [selectedArticleId, setSelectedArticleId] = useState(INSIGHT_ARTICLES[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const activeArticle =
    INSIGHT_ARTICLES.find((a) => a.id === selectedArticleId) || INSIGHT_ARTICLES[0];

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="pt-12 md:pt-16 border-b border-slate-800/80 pb-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wide">
              <span>B2B Growth Knowledge Base</span>
              <span aria-hidden="true">·</span>
              <span>Evidence-Based Research</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Actionable guides on search intent, conversion, and B2B lead generation.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Original, practitioner-grade research written specifically for Australian micro and small professional service firms looking to build an inbound customer acquisition pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* Guide Selector Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {INSIGHT_ARTICLES.map((art) => (
              <button
                key={art.id}
                onClick={() => {
                  setSelectedArticleId(art.id);
                  window.scrollTo({top: 320, behavior: 'smooth'});
                }}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedArticleId === art.id
                    ? 'bg-sky-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {art.category}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-400 hidden lg:flex items-center gap-2 px-3">
            <span>Primary Focus:</span>
            <span className="font-mono text-sky-300">{activeArticle.targetKeyword}</span>
          </div>
        </div>
      </section>

      {/* Main Guide Reading Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Article Main Body (lg:col-span-8) */}
          <article className="lg:col-span-8 space-y-10 bg-slate-900/60 p-6 sm:p-10 rounded-2xl border border-slate-800">
            {/* Metadata Header */}
            <header className="space-y-4 border-b border-slate-800 pb-8">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="text-sky-400 font-semibold">{activeArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{activeArticle.readTime}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>Last Updated: {activeArticle.lastUpdated}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                {activeArticle.title}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed italic bg-slate-950/70 p-4 rounded-lg border border-slate-800">
                {activeArticle.summary}
              </p>
            </header>

            {/* Content Sections */}
            <div className="space-y-12">
              {activeArticle.sections.map((sec) => (
                <section key={sec.id} id={sec.id} className="space-y-4 scroll-mt-28">
                  <h3 className="text-xl font-bold text-white tracking-tight border-b border-slate-800/80 pb-2">
                    {sec.heading}
                  </h3>

                  <div className="space-y-3.5 text-sm text-slate-300 leading-relaxed">
                    {sec.content.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {/* Strategic Action Takeaway */}
                  {sec.actionTakeaway && (
                    <div className="p-4 bg-sky-950/20 border border-sky-800/40 rounded-xl space-y-1 text-xs">
                      <div className="font-semibold text-sky-300 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-400" />
                        <span>Actionable Practitioner Takeaway</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed pl-6">{sec.actionTakeaway}</p>
                    </div>
                  )}

                  {/* Internal Linking to Services */}
                  {sec.internalLink && (
                    <div className="pt-2">
                      <button
                        onClick={() => navigateTo(sec.internalLink!.targetPage, sec.internalLink!.sectionId)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors p-2.5 bg-slate-950 border border-slate-800 rounded-lg cursor-pointer"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                        <span>{sec.internalLink.text}</span>
                      </button>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Guide Footer & CTAs */}
            <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Have questions about applying this framework to your practice?
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share Guide'}</span>
                </button>
                <button
                  onClick={() => openAuditModal('insights_guide_end')}
                  className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Request an SEO Audit
                </button>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar: Table of Contents & Quick Action (lg:col-span-4) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Table of contents */}
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-sky-400" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-2">
                  {activeArticle.sections.map((sec, idx) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block text-xs text-slate-400 hover:text-sky-300 transition-colors py-1 pl-2 border-l border-slate-800 hover:border-sky-400 leading-snug"
                    >
                      {sec.heading}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Consultation card */}
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Complimentary Assessment
                </div>
                <h4 className="text-sm font-bold text-white">
                  Diagnose Your Website’s Search Health
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our comprehensive diagnostic crawls review Core Web Vitals, B2B search intent, and conversion architecture.
                </p>
                <button
                  onClick={() => openAuditModal('insights_sidebar')}
                  className="w-full py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Request a Diagnostic Audit
                </button>
                <button
                  onClick={openDiscoveryModal}
                  className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs rounded-lg border border-slate-700 transition-colors cursor-pointer"
                >
                  Book 20-Min Discovery
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
            Knowledge Base
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-400">
            Detailed answers regarding our consulting model, SEO audits, and B2B lead generation.
          </p>
        </div>

        <div className="space-y-3">
          {FREQUENTLY_ASKED_QUESTIONS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
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
                    <div className="text-[11px] font-mono text-sky-400 mb-1">{faq.category}</div>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
