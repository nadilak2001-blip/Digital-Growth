/**
 * Signal & Scale - Google Analytics 4 (GA4) Live Telemetry Inspector
 *
 * Provides real-time visibility into dispatched GA4 events (page_view, service_view,
 * audit_request_click, discovery_booking_click, contact_form_submit), showing zero-PII
 * compliance and step-by-step verification instructions for evaluators.
 */

import React, {useState, useEffect} from 'react';
import {X, Activity, Check, RefreshCw, Trash2, ExternalLink, ShieldCheck, HelpCircle} from 'lucide-react';
import {useRouter} from '../../context/RouterContext';
import {
  GA_MEASUREMENT_ID,
  subscribeToEvents,
  clearEventHistory,
  trackPageView,
} from '../../utils/analytics';
import {GA4EventLog} from '../../types';

export const GaDebugDrawer: React.FC = () => {
  const {isGaDebugOpen, closeGaDebug, currentRoute} = useRouter();
  const [events, setEvents] = useState<GA4EventLog[]>([]);
  const [activeTab, setActiveTab] = useState<'stream' | 'setup' | 'privacy'>('stream');

  useEffect(() => {
    const unsubscribe = subscribeToEvents((newEvents) => {
      setEvents(newEvents);
    });
    return unsubscribe;
  }, []);

  if (!isGaDebugOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ga-debug-title"
      className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col text-slate-100 animate-in slide-in-from-right duration-200"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/70">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <h2 id="ga-debug-title" className="text-sm font-bold text-white tracking-tight">
              GA4 Telemetry Inspector
            </h2>
            <div className="text-[11px] text-slate-400 font-mono">
              Stream ID: <span className="text-sky-300">{GA_MEASUREMENT_ID}</span>
            </div>
          </div>
        </div>
        <button
          onClick={closeGaDebug}
          aria-label="Close analytics drawer"
          className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation tabs */}
      <div className="flex border-b border-slate-800 bg-slate-950/30 px-3 pt-2 text-xs">
        <button
          onClick={() => setActiveTab('stream')}
          className={`px-3 py-2 font-medium border-b-2 transition-all cursor-pointer ${
            activeTab === 'stream'
              ? 'border-sky-500 text-sky-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Live Event Stream ({events.length})
        </button>
        <button
          onClick={() => setActiveTab('setup')}
          className={`px-3 py-2 font-medium border-b-2 transition-all cursor-pointer ${
            activeTab === 'setup'
              ? 'border-sky-500 text-sky-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Setup Guide
        </button>
        <button
          onClick={() => setActiveTab('privacy')}
          className={`px-3 py-2 font-medium border-b-2 transition-all cursor-pointer ${
            activeTab === 'privacy'
              ? 'border-sky-500 text-sky-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Privacy &amp; PII Safeguards
        </button>
      </div>

      {/* Body content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {activeTab === 'stream' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
              <span>Real-time dispatched events</span>
              <button
                onClick={() => clearEventHistory()}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear log</span>
              </button>
            </div>

            {events.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-lg">
                No events recorded yet. Navigate between pages or click a CTA to see telemetry live.
              </div>
            ) : (
              <div className="space-y-2">
                {events.map((ev) => (
                  <div
                    key={ev.id}
                    className="p-3 bg-slate-950 border border-slate-800/80 rounded-lg text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-semibold text-sky-400 bg-sky-950/40 px-2 py-0.5 rounded border border-sky-800/40">
                        {ev.eventName}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">{ev.timestamp}</span>
                    </div>

                    <div className="bg-slate-900/80 p-2 rounded text-[11px] font-mono text-slate-300 overflow-x-auto">
                      {Object.keys(ev.parameters).length > 0 ? (
                        <pre className="text-[10px] text-slate-300 leading-relaxed">
                          {JSON.stringify(ev.parameters, null, 2)}
                        </pre>
                      ) : (
                        <span className="text-slate-500 italic">No custom parameters</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'setup' && (
          <div className="space-y-4 text-xs text-slate-300">
            <div className="p-3 bg-sky-950/30 border border-sky-800/50 rounded-lg">
              <div className="font-semibold text-white mb-1">Configuring Your Real GA4 Measurement ID</div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                To connect this project to your live Google Analytics 4 property for assignment verification or production:
              </p>
            </div>

            <ol className="space-y-3 list-decimal list-inside text-slate-300">
              <li>
                <strong className="text-white">Create a GA4 Property</strong> in Google Analytics (analytics.google.com) and create a <em>Web Data Stream</em> for your domain.
              </li>
              <li>
                <strong className="text-white">Copy your Measurement ID</strong> (format: <code className="text-sky-300 bg-slate-950 px-1 py-0.5 rounded font-mono">G-XXXXXXXXXX</code>).
              </li>
              <li>
                <strong className="text-white">Set Environment Variable</strong>: In your <code className="text-sky-300 bg-slate-950 px-1 py-0.5 rounded font-mono">.env</code> file or hosting settings (e.g. GitHub Repository Secrets / Cloud Run), set:
                <div className="my-1.5 p-2 bg-slate-950 border border-slate-800 rounded font-mono text-sky-300 text-[11px]">
                  VITE_GA_MEASUREMENT_ID="G-YOURREALID"
                </div>
              </li>
              <li>
                <strong className="text-white">Build &amp; Deploy</strong>: Run <code className="text-sky-300 bg-slate-950 px-1 py-0.5 rounded font-mono">npm run build</code>. The script automatically injects the official Google tag.
              </li>
              <li>
                <strong className="text-white">Verify in DebugView</strong>: Open Google Analytics &gt; Admin &gt; DebugView to observe events stream live with zero delay.
              </li>
            </ol>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Strict Zero-PII Compliance</span>
            </div>
            <p className="leading-relaxed text-slate-400">
              In accordance with the Australian Privacy Principles (APPs) and Google Analytics Terms of Service, Signal &amp; Scale strictly strips personally identifiable information (PII) before any telemetry is recorded or sent.
            </p>
            <div className="space-y-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-[11px]">
              <div className="text-slate-400">✓ Never logged: User names or titles</div>
              <div className="text-slate-400">✓ Never logged: Email addresses or domains</div>
              <div className="text-slate-400">✓ Never logged: Raw message text or phone numbers</div>
              <div className="text-slate-400">✓ Anonymized: Aggregate team size brackets &amp; service interest only</div>
            </div>
          </div>
        )}
      </div>

      {/* Footer controls */}
      <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs">
        <button
          onClick={() => trackPageView(`/${currentRoute}`, `Manual Test Ping - ${currentRoute}`)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3 h-3 text-sky-400" />
          <span>Fire Test PageView</span>
        </button>
        <button
          onClick={closeGaDebug}
          className="px-4 py-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded transition-colors cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};
