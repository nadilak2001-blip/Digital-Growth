/**
 * Signal & Scale - Interactive 20-Minute Discovery Consultation Scheduler
 */

import React, {useState, useEffect} from 'react';
import {X, Calendar, Clock, CheckCircle, Video, ShieldCheck, Download} from 'lucide-react';
import {useRouter} from '../../context/RouterContext';
import {trackDiscoveryBookingClick, trackContactFormSubmit} from '../../utils/analytics';

export const DiscoveryBookingModal: React.FC = () => {
  const {isDiscoveryModalOpen, closeDiscoveryModal} = useRouter();

  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('10:00 AM (AEST)');
  const [fullName, setFullName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [primaryTopic, setPrimaryTopic] = useState('audit-evaluation');
  const [isBooked, setIsBooked] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isDiscoveryModalOpen) {
      setIsBooked(false);
      setErrors({});
      trackDiscoveryBookingClick('modal_open');
    }
  }, [isDiscoveryModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDiscoveryModalOpen) {
        closeDiscoveryModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDiscoveryModalOpen, closeDiscoveryModal]);

  if (!isDiscoveryModalOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Please enter your name.';
    if (!businessEmail.trim()) {
      newErrors.businessEmail = 'Please enter your business email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessEmail)) {
      newErrors.businessEmail = 'Please provide a valid email.';
    }
    if (!companyName.trim()) newErrors.companyName = 'Please enter your company name.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsBooked(true);
    trackContactFormSubmit('20-Minute Discovery Call', '1-20 staff', primaryTopic);
  };

  const downloadCalendarFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Signal & Scale//B2B Discovery Call//EN
BEGIN:VEVENT
SUMMARY:Signal & Scale: 20-Minute Strategy Discovery (${companyName})
DESCRIPTION:Diagnostic discovery call to examine current digital presence and B2B growth barriers with Signal & Scale.
LOCATION:Google Meet (Link will be sent via confirmation email)
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([icsContent], {type: 'text/calendar;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Signal_Scale_Discovery_${companyName.replace(/\s+/g, '_')}.ics`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="discovery-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm transition-opacity"
    >
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden text-slate-100 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-sky-400 font-medium">
              <span>Low-Pressure Consultation</span>
              <span aria-hidden="true">·</span>
              <span>20 Minutes via Video</span>
            </div>
            <h2 id="discovery-modal-title" className="text-xl font-bold tracking-tight text-white mt-1">
              Book a 20-Minute Discovery Call
            </h2>
          </div>
          <button
            onClick={closeDiscoveryModal}
            aria-label="Close dialog"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {!isBooked ? (
            <form onSubmit={handleBooking} className="space-y-5">
              <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-lg text-xs space-y-2">
                <div className="font-semibold text-white flex items-center gap-2">
                  <Video className="w-4 h-4 text-sky-400" />
                  <span>Call Agenda &amp; Commercial Purpose</span>
                </div>
                <p className="text-slate-300">
                  A high-yield conversation to evaluate your current customer acquisition channels, examine website conversion roadblocks, and determine if an audit or 90-day roadmap is commercially viable for your practice.
                </p>
                <div className="text-slate-400">
                  <span className="text-sky-300">No aggressive sales tactics:</span> If our structured services are not the right fit for your current stage, we will be completely honest and point you in the right direction.
                </div>
              </div>

              {/* Slot Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Select a Preferred Window (AEST)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Tomorrow', 'In 2 Days', 'Next Week'].map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSelectedDate(day)}
                      className={`p-2.5 rounded-lg border text-xs font-medium text-center transition-all cursor-pointer ${
                        selectedDate === day
                          ? 'border-sky-500 bg-sky-950/40 text-white ring-1 ring-sky-500'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 mt-2">
                  {['9:30 AM', '11:00 AM', '2:30 PM'].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(`${time} (AEST)`)}
                      className={`p-2 rounded border text-xs font-medium text-center transition-all cursor-pointer ${
                        selectedTime.includes(time)
                          ? 'border-sky-500 bg-sky-950/40 text-white ring-1 ring-sky-500'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="disc-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="disc-name"
                    type="text"
                    placeholder="e.g. Fiona Chen"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                      errors.fullName ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="disc-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Business Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="disc-email"
                    type="email"
                    placeholder="fiona@chenaccounting.com.au"
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
                <label htmlFor="disc-company" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Firm / Company Name <span className="text-rose-400">*</span>
                </label>
                <input
                  id="disc-company"
                  type="text"
                  placeholder="e.g. Chen &amp; Partners Advisory"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    errors.companyName ? 'border-rose-500' : 'border-slate-800'
                  }`}
                />
                {errors.companyName && <p className="text-xs text-rose-400 mt-1">{errors.companyName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Primary Discussion Focus
                </label>
                <select
                  value={primaryTopic}
                  onChange={(e) => setPrimaryTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="audit-evaluation">Evaluating a Website &amp; SEO Diagnostic Audit</option>
                  <option value="90-day-roadmap">Scoping a 90-Day Content &amp; Conversion Roadmap</option>
                  <option value="measurement-dashboard">Implementing GA4 &amp; Commercial Pipeline Measurement</option>
                  <option value="general-consult">General Strategic Fit Evaluation</option>
                </select>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  type="button"
                  onClick={closeDiscoveryModal}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm rounded-lg transition-colors cursor-pointer"
                >
                  Confirm 20-Minute Discovery Session
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-950/60 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Discovery Call Scheduled</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                  We look forward to meeting with <span className="text-white font-medium">{fullName}</span> from <span className="text-white font-medium">{companyName}</span>. A calendar invitation has been prepared for <span className="text-sky-300">{selectedDate} at {selectedTime}</span>.
                </p>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg text-left text-xs space-y-2 max-w-lg mx-auto">
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Duration: 20 minutes (video call)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Time: {selectedDate}, {selectedTime}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Lead Consultant: Assigned senior B2B digital strategist</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={downloadCalendarFile}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white rounded-lg transition-colors w-full sm:w-auto justify-center cursor-pointer"
                >
                  <Download className="w-4 h-4 text-sky-400" />
                  <span>Add to Calendar (.ics)</span>
                </button>
                <button
                  onClick={closeDiscoveryModal}
                  className="px-6 py-2 bg-sky-500 hover:bg-sky-400 text-xs font-semibold text-slate-950 rounded-lg transition-colors w-full sm:w-auto cursor-pointer"
                >
                  Return to Site
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
