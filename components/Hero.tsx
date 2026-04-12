
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

interface HeroProps {
    onStartCreating: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartCreating }) => {
  return (
    <div className="relative overflow-hidden bg-brand-background">
      <div className="absolute inset-0 bg-grid-slate-700/[0.04] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-light to-brand-secondary bg-300% animate-text-shine">
          Build & Discover AI You Can Trust
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-brand-text-secondary">
          A marketplace of ethically vetted AI agents and templates, supercharged with automated compliance verification. Deploy with confidence.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button
             onClick={onStartCreating}
             className="inline-flex items-center gap-x-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-brand-dark bg-brand-primary hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary focus:ring-offset-brand-background transition-transform transform hover:scale-105"
          >
            Create Compliant Agent
            <SparklesIcon className="h-5 w-5" />
          </button>
          <a
            href="#featured"
            className="inline-flex items-center px-6 py-3 border border-slate-700 text-base font-medium rounded-md text-brand-text-primary bg-brand-surface hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 focus:ring-offset-brand-background transition-colors"
          >
            Explore Marketplace
          </a>
        </div>
      </div>
    </div>
  );
};
