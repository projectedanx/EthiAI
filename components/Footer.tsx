import React from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

interface FooterProps {
  onNavigate: (view: 'marketplace' | 'profile') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-surface border-t border-slate-700/50">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-3">
          <ShieldCheckIcon className="h-7 w-7 text-brand-text-secondary" />
          <span className="text-xl font-bold text-brand-text-secondary">EthiAI Verify</span>
        </div>
        <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
            <a href="#" className="text-sm text-brand-text-secondary hover:text-brand-primary">About</a>
            <button onClick={() => onNavigate('marketplace')} className="text-sm text-brand-text-secondary hover:text-brand-primary">Marketplace</button>
            <button onClick={() => onNavigate('profile')} className="text-sm text-brand-text-secondary hover:text-brand-primary">My Profile</button>
            <a href="#" className="text-sm text-brand-text-secondary hover:text-brand-primary">Terms of Service</a>
            <a href="#" className="text-sm text-brand-text-secondary hover:text-brand-primary">Privacy Policy</a>
            <a href="#" className="text-sm text-brand-text-secondary hover:text-brand-primary">Contact</a>
        </nav>
        <p className="mt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} EthiAI Verify. All rights reserved. Building a more trustworthy AI ecosystem.
        </p>
      </div>
    </footer>
  );
};
