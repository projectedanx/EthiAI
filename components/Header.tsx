import React from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { UserCircleIcon } from './icons/UserCircleIcon';

interface HeaderProps {
  onStartCreating: () => void;
  onNavigate: (view: 'marketplace' | 'profile') => void;
  currentView: 'marketplace' | 'profile';
}

export const Header: React.FC<HeaderProps> = ({ onStartCreating, onNavigate, currentView }) => {
  return (
    <header className="bg-brand-surface/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => onNavigate('marketplace')} className="flex items-center space-x-3 cursor-pointer">
            <ShieldCheckIcon className="h-8 w-8 text-brand-primary" />
            <span className="text-2xl font-bold text-brand-text-primary tracking-tight">EthiAI Verify</span>
          </button>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => onNavigate('marketplace')} className={`text-sm font-medium ${currentView === 'marketplace' ? 'text-brand-primary' : 'text-brand-text-secondary'} hover:text-brand-primary transition-colors`}>Marketplace</button>
              <a href="#" className="text-sm font-medium text-brand-text-secondary hover:text-brand-primary transition-colors">For Developers</a>
              <a href="#" className="text-sm font-medium text-brand-text-secondary hover:text-brand-primary transition-colors">About</a>
            </nav>
            <div className="flex items-center space-x-4">
                <button
                    onClick={onStartCreating}
                    className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary focus:ring-offset-brand-background transition-transform transform hover:scale-105"
                >
                    Start Creating
                </button>
                <button onClick={() => onNavigate('profile')} className={`p-1.5 rounded-full ${currentView === 'profile' ? 'bg-brand-primary/20' : 'bg-transparent'} text-brand-text-secondary hover:bg-slate-700/50 hover:text-brand-primary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary focus:ring-offset-brand-background`}>
                    <UserCircleIcon className="h-6 w-6" />
                    <span className="sr-only">View Profile</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
