import React from 'react';
import type { PublishedAgent } from '../types';
import { ComplianceScore } from './ComplianceScore';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

const MOCK_USER = {
  name: 'Alex Doe',
  avatarUrl: 'https://i.pravatar.cc/150?u=alexdoe',
  memberSince: '2023-01-15',
};

const MOCK_PUBLISHED_AGENTS: PublishedAgent[] = [
  {
    id: 1,
    title: 'SMB Lead Qualifier Bot',
    category: 'Sales',
    complianceScore: 96,
    status: 'Published',
    earnings: {
      total: 1250.50,
      mrr: 245.00,
    },
  },
  {
    id: 3,
    title: 'Content Calendar Generator',
    category: 'Marketing',
    complianceScore: 91,
    status: 'Published',
    earnings: {
      total: 875.00,
      mrr: 175.00,
    },
  },
  {
    id: 5,
    title: 'Automated Code Reviewer',
    category: 'Development',
    complianceScore: 94,
    status: 'In Review',
    earnings: {
      total: 0,
      mrr: 0,
    },
  },
];

const StatCard: React.FC<{ title: string; value: string; }> = ({ title, value }) => (
    <div className="bg-brand-surface p-4 rounded-lg border border-slate-700/50">
        <p className="text-sm text-brand-text-secondary">{title}</p>
        <p className="text-2xl font-bold text-brand-text-primary">{value}</p>
    </div>
);

export const UserProfile = () => {
    const totalEarnings = MOCK_PUBLISHED_AGENTS.reduce((acc, agent) => acc + agent.earnings.total, 0);
    const totalMrr = MOCK_PUBLISHED_AGENTS.reduce((acc, agent) => acc + agent.earnings.mrr, 0);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header className="flex flex-col sm:flex-row items-center gap-6 mb-12">
        <img className="h-24 w-24 rounded-full ring-4 ring-brand-primary/50" src={MOCK_USER.avatarUrl} alt="User avatar" />
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-text-primary">{MOCK_USER.name}</h1>
          <p className="text-brand-text-secondary">Member since {new Date(MOCK_USER.memberSince).toLocaleDateString(undefined, { year: 'numeric', month: 'long' })}</p>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <StatCard title="Total Earnings" value={`$${totalEarnings.toFixed(2)}`} />
          <StatCard title="Monthly Recurring Revenue" value={`$${totalMrr.toFixed(2)}`} />
          <StatCard title="Published Agents" value={MOCK_PUBLISHED_AGENTS.filter(a => a.status === 'Published').length.toString()} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-brand-text-primary mb-6">My Published Agents</h2>
        <div className="bg-brand-surface rounded-lg border border-slate-700/50 overflow-hidden">
            <ul role="list" className="divide-y divide-slate-700/50">
                {MOCK_PUBLISHED_AGENTS.map((agent) => (
                    <li key={agent.id} className="p-4 sm:p-6 hover:bg-slate-800/50 transition-colors">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex-grow">
                                <div className="flex items-center gap-3">
                                    <p className="text-lg font-semibold text-brand-text-primary">{agent.title}</p>
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${agent.status === 'Published' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                                        {agent.status}
                                    </span>
                                </div>
                                <p className="text-sm text-brand-text-secondary">{agent.category}</p>
                            </div>
                            <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-4 sm:gap-8">
                                <div className="text-right">
                                    <p className="text-sm font-medium text-brand-text-primary">${agent.earnings.total.toFixed(2)}</p>
                                    <p className="text-xs text-brand-text-secondary">Total Revenue</p>
                                </div>
                                 <div className="text-center">
                                    <ComplianceScore score={agent.complianceScore} size="sm" />
                                 </div>
                                <button className="px-3 py-1.5 text-sm font-medium rounded-md text-white bg-brand-primary/80 hover:bg-brand-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary focus:ring-offset-brand-surface whitespace-nowrap">
                                    View Report
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      </section>
    </div>
  );
};
