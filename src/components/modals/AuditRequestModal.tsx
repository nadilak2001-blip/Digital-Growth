/**
 * Signal & Scale - Interactive Website & SEO Audit Request Modal
 */

import React, {useState, useEffect} from 'react';
import {X, CheckCircle, ArrowRight, ShieldCheck, Download, Sparkles} from 'lucide-react';
import {useRouter} from '../../context/RouterContext';
import {trackAuditRequestClick, trackContactFormSubmit} from '../../utils/analytics';

export const AuditRequestModal: React.FC = () => {
  const {isAuditModalOpen, closeAuditModal, auditPreselectService} = useRouter();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [industry, setIndustry] = useState('it-support');
  const [primaryChallenge, setPrimaryChallenge] = useState('low-conversions');
  const [contactName, setContactName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAuditModalOpen) {
      setStep(1);
      setErrors({});
      trackAuditRequestClick('modal_open', auditPreselectService || 'general_cta');
    }
  }, [isAuditModalOpen, auditPreselectService]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isAuditModalOpen) {
        closeAuditModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAuditModalOpen, closeAuditModal]);

  if (!isAuditModalOpen) return null;

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!websiteUrl.trim()) {
      newErrors.websiteUrl = 'Please enter your business website URL.';
    } else if (!/^https?:\/\/|^www\.|[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/i.test(websiteUrl)) {
      newErrors.websiteUrl = 'Please enter a valid domain format (e.g., yourcompany.com.au).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!contactName.trim()) newErrors.contactName = 'Please enter your full name.';
    if (!businessEmail.trim()) {
      newErrors.businessEmail = 'Please enter your business email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessEmail)) {
      newErrors.businessEmail = 'Please provide a valid business email.';
    }
    if (!companyName.trim()) newErrors.companyName = 'Please enter your company name.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
      // Track conversion in GA4 without PII
      trackContactFormSubmit('Website & SEO Audit', '1-20 staff', primaryChallenge);
    }, 600);
  };

  const downloadReceipt = () => {
    const content = `SIGNAL & SCALE - SEO AUDIT DIAGNOSTIC INTAKE RECEIPT
------------------------------------------------------------
Target Website: ${websiteUrl}
Industry Sector: ${industry}
Primary Challenge: ${primaryChallenge}
Registered Organization: ${companyName}
Contact Representative: ${contactName}
Date Submitted: ${new Date().toLocaleDateString('en-AU')}
Reference ID: AUD-${Date.now().toString().slice(-6)}

EXPECTED NEXT STEPS:
1. Technical Crawl Diagnostic initiated within 2 business days.
2. In-depth Search Demand and Keyword Gap Analysis.
3. Conversion Architecture & UX Friction Review.
4. Comprehensive Report & Video Walkthrough delivery within 10 business days.

Direct Enquiries: hello@signalscale.com.au
Official Domain: https://nadila_kasthuriarachchi.github.io/DMIP_PartB/
------------------------------------------------------------`;
    const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Signal_Scale_Audit_Intake_${Date.now().toString().slice(-4)}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm transition-opacity"
    >
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-sky-400 font-medium">
              <span>Diagnostic Assessment</span>
              <span aria-hidden="true">·</span>
              <span>Phase {step} of 4</span>
            </div>
            <h2 id="audit-modal-title" className="text-xl font-bold tracking-tight text-white mt-1">
              Request a B2B Website &amp; SEO Audit
            </h2>
          </div>
          <button
            onClick={closeAuditModal}
            aria-label="Close dialog"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-5">
              <p className="text-sm text-slate-300">
                Identify why your Australian B2B service practice isn’t generating predictable, qualified inbound enquiries from your digital presence.
              </p>

              <div>
                <label htmlFor="modal-website" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Your Current Website URL <span className="text-rose-400">*</span>
                </label>
                <input
                  id="modal-website"
                  type="text"
                  placeholder="e.g. www.yourfirm.com.au"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className={`w-full px-4 py-3 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                    errors.websiteUrl ? 'border-rose-500' : 'border-slate-800'
                  }`}
                />
                {errors.websiteUrl && (
                  <p className="text-xs text-rose-400 mt-1.5">{errors.websiteUrl}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Your Industry Sector
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {id: 'it-support', label: 'IT Support & MSPs'},
                    {id: 'bookkeeping', label: 'Bookkeeping & Advisory'},
                    {id: 'professional-advisers', label: 'Professional Advisers'},
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setIndustry(item.id)}
                      className={`px-4 py-3 text-xs font-medium rounded-lg border text-left transition-all ${
                        industry === item.id
                          ? 'border-sky-500 bg-sky-950/40 text-white ring-1 ring-sky-500'
                          : 'border-slate-800 bg-slate-950/50 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm rounded-lg transition-colors cursor-pointer"
                >
                  <span>Continue to Challenge Diagnosis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <p className="text-sm text-slate-300">
                What is the primary bottleneck preventing your digital presence from translating into revenue?
              </p>

              <div className="space-y-3">
                {[
                  {
                    id: 'invisible-google',
                    title: 'Low Organic Visibility on Google',
                    desc: 'Prospective clients search for our services in our city, but only our national competitors appear.',
                  },
                  {
                    id: 'low-conversions',
                    title: 'Traffic Visits but Fails to Enquire',
                    desc: 'We receive visitors, but fewer than 2 qualified inbound enquiries come through each month.',
                  },
                  {
                    id: 'referral-dependent',
                    title: '100% Dependent on Word-of-Mouth',
                    desc: 'Our website acts as an uninspired business card rather than an active client acquisition engine.',
                  },
                  {
                    id: 'unclear-roi',
                    title: 'Unclear Return on Previous Marketing Spend',
                    desc: 'Past marketing agencies delivered confusing metric PDFs without tangible new client pipeline.',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPrimaryChallenge(item.id)}
                    className={`w-full p-4 rounded-lg border text-left transition-all ${
                      primaryChallenge === item.id
                        ? 'border-sky-500 bg-sky-950/40 text-white ring-1 ring-sky-500'
                        : 'border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <div className="text-xs text-slate-400 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>

              <div className="pt-3 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm rounded-lg transition-colors cursor-pointer"
                >
                  <span>Continue to Contact Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-slate-300">
                Where should we deliver your diagnostic evaluation findings?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    placeholder="e.g. David Campbell"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                      errors.contactName ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.contactName && <p className="text-xs text-rose-400 mt-1">{errors.contactName}</p>}
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Business Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    placeholder="david@campbelltech.com.au"
                    value={businessEmail}
                    onChange={(e) => setBusinessEmail(e.target.value)}
                    className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                      errors.businessEmail ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.businessEmail && <p className="text-xs text-rose-400 mt-1">{errors.businessEmail}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="modal-company" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Company Name <span className="text-rose-400">*</span>
                </label>
                <input
                  id="modal-company"
                  type="text"
                  placeholder="e.g. Campbell IT Solutions"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    errors.companyName ? 'border-rose-500' : 'border-slate-800'
                  }`}
                />
                {errors.companyName && <p className="text-xs text-rose-400 mt-1">{errors.companyName}</p>}
              </div>

              <div className="p-3.5 bg-slate-950/60 border border-slate-800/80 rounded-lg text-xs text-slate-400 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Strict Confidentiality: We never share or sell client diagnostic information. No marketing spam or robotic follow-up sequences.
                </span>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-2.5 bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-semibold text-sm rounded-lg transition-colors cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Initiating Diagnostic Crawl...</span>
                  ) : (
                    <>
                      <span>Submit Audit Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-950/60 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Diagnostic Audit Intake Confirmed</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                  We have logged your website <span className="text-sky-400">{websiteUrl}</span> for initial crawl analysis. Our team will review your domain and deliver the comprehensive diagnostic findings within 10 business days.
                </p>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg text-left text-xs space-y-2 max-w-lg mx-auto">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Target Website:</span>
                  <span className="text-white font-mono">{websiteUrl}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Client Representative:</span>
                  <span className="text-white">{contactName} ({companyName})</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Primary Diagnostic Focus:</span>
                  <span className="text-sky-300 capitalize">{primaryChallenge.replace('-', ' ')}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={downloadReceipt}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white rounded-lg transition-colors w-full sm:w-auto justify-center cursor-pointer"
                >
                  <Download className="w-4 h-4 text-sky-400" />
                  <span>Download Intake Receipt (.txt)</span>
                </button>
                <button
                  onClick={closeAuditModal}
                  className="px-6 py-2 bg-sky-500 hover:bg-sky-400 text-xs font-semibold text-slate-950 rounded-lg transition-colors w-full sm:w-auto cursor-pointer"
                >
                  Done &amp; Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
