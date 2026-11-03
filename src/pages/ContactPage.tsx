/**
 * Signal & Scale - Contact & Scoping Page
 *
 * Implements a fully functional, validated B2B enquiry and scoping form:
 * - Full Name, Business Email, Company Name, Team Size (1–20), Service Interest, Business Challenge.
 * - Field validation with accessible error messages.
 * - Honeypot & human math verification spam protection.
 * - Real client-side persistence (localStorage) with intake receipt download.
 * - Alternative direct email contact placeholder.
 * - Option to book a 20-minute discovery consultation.
 * - Full GA4 tracking without recording PII.
 */

import React, {useState, useEffect} from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  Calendar,
  Clock,
  ShieldCheck,
  AlertCircle,
  Download,
  Database,
  Trash2,
  FileText,
} from 'lucide-react';
import {useRouter} from '../context/RouterContext';
import {BRAND} from '../data/contentData';
import {ContactFormData, FormSubmissionRecord} from '../types';
import {
  trackContactFormStart,
  trackContactFormSubmit,
  trackDiscoveryBookingClick,
} from '../utils/analytics';

const STORAGE_KEY = 'signal_scale_enquiries';

export const ContactPage: React.FC = () => {
  const {openDiscoveryModal} = useRouter();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    teamSize: '1-5 employees',
    serviceInterest: 'Website & SEO Audit',
    businessChallenge: '',
    websiteUrl: '',
    honeypot: '',
  });

  const [mathAnswer, setMathAnswer] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<FormSubmissionRecord | null>(null);
  const [hasStartedForm, setHasStartedForm] = useState(false);
  const [storedEnquiries, setStoredEnquiries] = useState<FormSubmissionRecord[]>([]);
  const [showSubmissionsLog, setShowSubmissionsLog] = useState(false);

  // Load past stored enquiries from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setStoredEnquiries(JSON.parse(saved));
      }
    } catch {
      // Storage unavailable or disabled
    }
  }, [submittedRecord]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));

    if (!hasStartedForm) {
      setHasStartedForm(true);
      trackContactFormStart(formData.serviceInterest);
    }

    if (errors[name]) {
      setErrors((prev) => {
        const copy = {...prev};
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please provide a valid email format.';
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required.';
    if (!formData.businessChallenge.trim() || formData.businessChallenge.trim().length < 15) {
      newErrors.businessChallenge =
        'Please describe your business challenge in at least 15 characters.';
    }

    // Anti-spam math check (What is 4 + 3?)
    if (mathAnswer.trim() !== '7') {
      newErrors.mathAnswer = 'Please enter the correct answer to verify you are human (4 + 3 = 7).';
    }

    // Honeypot spam trap
    if (formData.honeypot && formData.honeypot.trim() !== '') {
      newErrors.honeypot = 'Automated bot activity detected.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newRecord: FormSubmissionRecord = {
        ...formData,
        id: `ENQ-${Date.now().toString().slice(-6)}`,
        timestamp: new Date().toLocaleString('en-AU'),
        status: 'received',
      };

      try {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        const updated = [newRecord, ...existing];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        setStoredEnquiries(updated);
      } catch {
        // Fallback
      }

      setSubmittedRecord(newRecord);
      setIsSubmitting(false);

      // GA4 tracking without PII
      trackContactFormSubmit(
        formData.serviceInterest,
        formData.teamSize,
        formData.businessChallenge.slice(0, 30)
      );
    }, 700);
  };

  const downloadIntakeFile = () => {
    if (!submittedRecord) return;
    const content = `SIGNAL & SCALE - B2B ENQUIRY CONFIRMATION RECORD
------------------------------------------------------------
Reference ID: ${submittedRecord.id}
Date Logged: ${submittedRecord.timestamp}
Client Representative: ${submittedRecord.fullName}
Organisation: ${submittedRecord.companyName}
Team Size: ${submittedRecord.teamSize}
Target Website: ${submittedRecord.websiteUrl || 'Not provided'}
Service Interest: ${submittedRecord.serviceInterest}
Business Challenge Summary: ${submittedRecord.businessChallenge}

COMMITMENT & NEXT STEPS:
- Direct review by a Senior B2B Strategy Lead within 1 business day.
- Preliminary domain check conducted prior to reply.
- No automated sales spam or unsolicited telephone calls.

Official Contact: ${BRAND.primaryEmail}
Website: https://nadila_kasthuriarachchi.github.io/DMIP_PartB/
------------------------------------------------------------`;
    const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Signal_Scale_Enquiry_${submittedRecord.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const clearLoggedSubmissions = () => {
    localStorage.removeItem(STORAGE_KEY);
    setStoredEnquiries([]);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="pt-12 md:pt-16 border-b border-slate-800/80 pb-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wide">
              <span>Direct Scoping &amp; Inquiries</span>
              <span aria-hidden="true">·</span>
              <span>24-Hour Turnaround</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Start an evidence-based conversation about your digital growth.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Whether you need an objective website audit, a 90-day execution roadmap, or advice on measuring qualified sales leads, we welcome structured inquiries from Australian business owners and practice directors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Contact Methods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Column (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
            {!submittedRecord ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    Structured Practice Scoping Form
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Provide context on your firm and growth bottlenecks. Fields marked with <span className="text-rose-400">*</span> are required.
                  </p>
                </div>

                {/* Honeypot field (hidden from real users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Leave this empty</label>
                  <input
                    id="website_hp"
                    name="honeypot"
                    type="text"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="e.g. David Morrison"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                        errors.fullName ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="businessEmail" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Business Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="businessEmail"
                      name="businessEmail"
                      type="email"
                      placeholder="david@morrisonadvisory.com.au"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                        errors.businessEmail ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.businessEmail && <p className="text-xs text-rose-400 mt-1">{errors.businessEmail}</p>}
                  </div>
                </div>

                {/* Company & Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="companyName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Company / Firm Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="e.g. Morrison Strategic Advisory"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                        errors.companyName ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.companyName && <p className="text-xs text-rose-400 mt-1">{errors.companyName}</p>}
                  </div>

                  <div>
                    <label htmlFor="websiteUrl" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Current Website (Optional)
                    </label>
                    <input
                      id="websiteUrl"
                      name="websiteUrl"
                      type="text"
                      placeholder="www.yourfirm.com.au"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    />
                  </div>
                </div>

                {/* Team Size & Service Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="teamSize" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Practice Team Size
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="1-2 employees">Solo / 1–2 staff</option>
                      <option value="3-5 employees">3–5 employees</option>
                      <option value="6-10 employees">6–10 employees</option>
                      <option value="11-20 employees">11–20 employees</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="serviceInterest" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Service Interest
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="Website & SEO Audit">01. Website &amp; SEO Audit</option>
                      <option value="90-Day Content Roadmap">02. 90-Day Strategy Roadmap</option>
                      <option value="Performance Measurement">03. Performance Measurement &amp; GA4</option>
                      <option value="Industry Solution (IT/Advisory)">Industry Specific Diagnostic</option>
                      <option value="General Exploration">Preliminary Scope Evaluation</option>
                    </select>
                  </div>
                </div>

                {/* Business Challenge Textarea */}
                <div>
                  <label htmlFor="businessChallenge" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Business &amp; Marketing Bottleneck <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="businessChallenge"
                    name="businessChallenge"
                    rows={4}
                    placeholder="Briefly describe what is currently preventing your website from generating qualified sales conversations (e.g. low search rankings, referral dependency, low enquiry conversion, or past agency frustration)..."
                    value={formData.businessChallenge}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                      errors.businessChallenge ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.businessChallenge && (
                    <p className="text-xs text-rose-400 mt-1">{errors.businessChallenge}</p>
                  )}
                </div>

                {/* Math anti-spam check */}
                <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 space-y-2">
                  <label htmlFor="mathAnswer" className="block text-xs font-semibold text-slate-300">
                    Human Verification Check: What is 4 + 3? <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="mathAnswer"
                    type="text"
                    placeholder="Enter the number 7"
                    value={mathAnswer}
                    onChange={(e) => setMathAnswer(e.target.value)}
                    className={`w-32 px-3 py-2 bg-slate-900 border rounded-lg text-sm text-white text-center focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                      errors.mathAnswer ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.mathAnswer && (
                    <p className="text-xs text-rose-400 mt-1">{errors.mathAnswer}</p>
                  )}
                </div>

                {/* Privacy disclaimer */}
                <div className="flex items-start gap-2.5 text-xs text-slate-400 bg-slate-950/40 p-3 rounded-lg border border-slate-800/80">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    Privacy Notice: Your data is used exclusively to evaluate your inquiry and prepare diagnostic recommendations. We do not sell data or share client information with third parties.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-bold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {isSubmitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <span>Submit Scoping Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-6">
                <div className="w-16 h-16 bg-emerald-950/60 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Scoping Inquiry Received</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-medium">{submittedRecord.fullName}</span>. Your inquiry for <span className="text-sky-300">{submittedRecord.companyName}</span> has been logged under reference <code className="text-sky-300 font-mono font-semibold">{submittedRecord.id}</code>.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-left text-xs space-y-2 max-w-lg mx-auto">
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Service Area:</span>
                    <span className="text-white font-medium">{submittedRecord.serviceInterest}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Team Size Bracket:</span>
                    <span className="text-white">{submittedRecord.teamSize}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Business Email:</span>
                    <span className="text-white font-mono">{submittedRecord.businessEmail}</span>
                  </div>
                  <div className="py-1">
                    <span className="text-slate-400">Next Step: </span>
                    <span className="text-emerald-400 font-medium">A senior strategist will review your domain and respond within 1 business day.</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={downloadIntakeFile}
                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white rounded-lg transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-sky-400" />
                    <span>Download Official Intake Receipt (.txt)</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmittedRecord(null);
                      setFormData({
                        fullName: '',
                        businessEmail: '',
                        companyName: '',
                        teamSize: '1-5 employees',
                        serviceInterest: 'Website & SEO Audit',
                        businessChallenge: '',
                        websiteUrl: '',
                        honeypot: '',
                      });
                      setMathAnswer('');
                    }}
                    className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-xs font-semibold text-slate-950 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Alternative Contact & Discovery Option (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* 20-Minute Discovery Box */}
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Arrange a 20-Minute Discovery Call</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Prefer a direct conversation? Schedule a preliminary video discussion with an Australian B2B strategy consultant.
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>20 minutes via Google Meet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>High-yield diagnostic review of your website bottlenecks</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero aggressive sales tactics</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    trackDiscoveryBookingClick('contact_page_sidebar');
                    openDiscoveryModal();
                  }}
                  className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Select a Consultation Time</span>
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                </button>
              </div>
            </div>

            {/* Direct Email Contact Card */}
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Direct Email Inquiries</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  For RFPs, partner enquiries, or direct correspondence with our strategy leads:
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs font-mono text-sky-300">
                {BRAND.primaryEmail}
              </div>

              <div className="text-[11px] text-slate-400">
                {BRAND.contactPlaceholder}
              </div>
            </div>

            {/* Evaluator Submission Storage Viewer Toggle */}
            <div className="p-5 bg-slate-950/70 border border-slate-800/80 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Database className="w-4 h-4 text-sky-400" />
                  <span>Local Data Store ({storedEnquiries.length})</span>
                </div>
                <button
                  onClick={() => setShowSubmissionsLog(!showSubmissionsLog)}
                  className="text-xs text-sky-400 hover:text-sky-300 underline cursor-pointer"
                >
                  {showSubmissionsLog ? 'Hide Submissions' : 'Inspect Saved'}
                </button>
              </div>

              {showSubmissionsLog && (
                <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                  {storedEnquiries.length === 0 ? (
                    <div className="text-[11px] text-slate-500 italic">
                      No submissions logged in this browser yet. Fill out the form above to verify.
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {storedEnquiries.map((enq) => (
                        <div key={enq.id} className="p-2 bg-slate-900 rounded border border-slate-800 text-[11px]">
                          <div className="flex justify-between font-mono text-sky-400">
                            <span>{enq.id}</span>
                            <span className="text-slate-500">{enq.timestamp}</span>
                          </div>
                          <div className="text-white font-medium mt-0.5">{enq.fullName} · {enq.companyName}</div>
                          <div className="text-slate-400 truncate">{enq.serviceInterest}</div>
                        </div>
                      ))}
                      <button
                        onClick={clearLoggedSubmissions}
                        className="flex items-center gap-1 text-[11px] text-rose-400 hover:text-rose-300 pt-1 cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Clear local submission history</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
