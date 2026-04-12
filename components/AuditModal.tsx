

import React, { useState, useEffect, useCallback } from 'react';
import { generateComplianceReport } from '../services/geminiService';
import type { ComplianceReport } from '../types';
import { XMarkIcon } from './icons/XMarkIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { DocumentTextIcon } from './icons/DocumentTextIcon';
import { EyeIcon } from './icons/EyeIcon';
import { ScaleIcon } from './icons/ScaleIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { ComplianceScore } from './ComplianceScore';


enum AuditState {
  Idle,
  Loading,
  Success,
  Error,
}

const LoadingIndicator: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex flex-col items-center justify-center text-center p-8">
        <svg className="animate-spin h-12 w-12 text-brand-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="mt-4 text-lg font-medium text-brand-text-primary">{text}</p>
        <p className="text-sm text-brand-text-secondary">Our AI is analyzing your agent against compliance benchmarks...</p>
    </div>
);

const ReportDisplay: React.FC<{ report: ComplianceReport }> = ({ report }) => (
    <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-700">
            <div>
                <h3 className="text-2xl font-bold text-brand-text-primary">Compliance Report</h3>
                <p className="text-brand-text-secondary mt-1">Audit successfully completed.</p>
            </div>
            <div className="text-center">
                 <ComplianceScore score={report.score} size="lg" />
            </div>
        </div>
        <div className="space-y-6 mt-6">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <ScaleIcon className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                    <h4 className="font-semibold text-brand-text-primary">Bias Detection</h4>
                    <p className="text-sm text-brand-text-secondary">{report.biasSummary}</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <EyeIcon className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                    <h4 className="font-semibold text-brand-text-primary">Data Privacy Compliance</h4>
                    <p className="text-sm text-brand-text-secondary">{report.privacySummary}</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <DocumentTextIcon className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                    <h4 className="font-semibold text-brand-text-primary">Intellectual Property Vetting</h4>
                    <p className="text-sm text-brand-text-secondary">{report.ipSummary}</p>
                </div>
            </div>
             <div className="p-4 bg-slate-800/50 rounded-lg">
                <h4 className="font-semibold text-brand-text-primary flex items-center gap-2"><ShieldCheckIcon className="w-5 h-5 text-emerald-400" />Overall Summary</h4>
                <p className="text-sm text-brand-text-secondary mt-1">{report.overallSummary}</p>
            </div>
        </div>
    </div>
);


export const AuditModal: React.FC<{ onClose: () => void; }> = ({ onClose }) => {
    const [description, setDescription] = useState('');
    const [auditState, setAuditState] = useState<AuditState>(AuditState.Idle);
    const [report, setReport] = useState<ComplianceReport | null>(null);

    const handleRunAudit = useCallback(async () => {
        if (!description.trim()) return;
        setAuditState(AuditState.Loading);
        try {
            const result = await generateComplianceReport(description);
            setReport(result);
            setAuditState(AuditState.Success);
        } catch (error) {
            console.error(error);
            setAuditState(AuditState.Error);
        }
    }, [description]);

    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);
    
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
            handleClose();
           }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
    }, [handleClose]);

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in" onClick={handleClose}>
            <div className="bg-brand-surface w-full max-w-2xl rounded-xl shadow-2xl shadow-brand-primary/10 border border-slate-700/50 transform transition-all duration-300 scale-95 animate-slide-up" onClick={(e) => e.stopPropagation()}>
                <div className="relative">
                    <button onClick={handleClose} className="absolute top-4 right-4 text-brand-text-secondary hover:text-brand-text-primary transition-colors">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                    {auditState === AuditState.Idle && (
                        <div className="p-6 sm:p-8">
                            <h3 className="text-2xl font-bold text-brand-text-primary flex items-center gap-2">
                                <SparklesIcon className="w-7 h-7 text-brand-primary" />
                                Create & Audit Your AI Agent
                            </h3>
                            <p className="text-brand-text-secondary mt-2">Describe your AI agent or template below to begin the automated compliance audit.</p>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="e.g., An AI chatbot for a real estate website that answers questions about property listings and schedules viewings."
                                className="mt-4 w-full h-32 p-3 bg-brand-background border border-slate-600 rounded-md focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors"
                            />
                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={handleRunAudit}
                                    disabled={!description.trim()}
                                    className="px-6 py-2.5 font-semibold rounded-md text-white bg-brand-primary hover:bg-brand-secondary disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
                                >
                                    Run Audit
                                </button>
                            </div>
                        </div>
                    )}
                    {auditState === AuditState.Loading && <LoadingIndicator text="Auditing Agent..." />}
                    {auditState === AuditState.Success && report && (
                         <>
                            <ReportDisplay report={report} />
                            <div className="px-6 sm:px-8 py-4 bg-slate-800/50 border-t border-slate-700 rounded-b-xl flex justify-end gap-3">
                                <button onClick={() => setAuditState(AuditState.Idle)} className="px-4 py-2 font-semibold rounded-md text-brand-text-primary bg-brand-surface border border-slate-600 hover:bg-slate-700/50 transition-colors">
                                    Audit Another
                                </button>
                                <button onClick={handleClose} className="px-4 py-2 font-semibold rounded-md text-white bg-brand-primary hover:bg-brand-secondary transition-colors">
                                    Publish to Marketplace
                                </button>
                            </div>
                         </>
                    )}
                    {auditState === AuditState.Error && (
                         <div className="p-8 text-center">
                             <h3 className="text-2xl font-bold text-red-500">Audit Failed</h3>
                             <p className="text-brand-text-secondary mt-2">An unexpected error occurred. Please try again later.</p>
                             <button onClick={() => setAuditState(AuditState.Idle)} className="mt-6 px-4 py-2 font-semibold rounded-md text-white bg-brand-primary hover:bg-brand-secondary transition-colors">
                                Try Again
                            </button>
                         </div>
                    )}
                </div>
            </div>
            {/* Fix: The `jsx` prop is not a standard React prop for the `<style>` tag. Removing it resolves the TypeScript error. This approach is used for in-component styling without requiring a separate CSS file. */}
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-up {
                    from { transform: translateY(20px) scale(0.95); }
                    to { transform: translateY(0) scale(1); }
                }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
                .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
            `}</style>
        </div>
    );
};