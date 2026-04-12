
import React from 'react';
import { ComplianceScore } from './ComplianceScore';
import type { AgentTemplate } from '../types';

interface ItemCardProps {
  agent: AgentTemplate;
}

export const ItemCard: React.FC<ItemCardProps> = ({ agent }) => {
  return (
    <div className="group relative flex flex-col rounded-lg border border-slate-700/50 bg-brand-surface overflow-hidden hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-w-3 aspect-h-2">
        <img className="object-cover w-full h-full" src={agent.imageUrl} alt={agent.title} />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm font-medium text-brand-primary">{agent.category}</p>
                <h3 className="mt-1 text-lg font-semibold text-brand-text-primary group-hover:text-brand-secondary transition-colors">
                    <a href="#">
                        <span className="absolute inset-0" />
                        {agent.title}
                    </a>
                </h3>
                <p className="text-xs text-brand-text-secondary">by {agent.creator}</p>
            </div>
            <ComplianceScore score={agent.complianceScore} size="sm" />
        </div>
        <p className="mt-3 text-sm text-brand-text-secondary flex-grow">{agent.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-xl font-bold text-brand-text-primary">${agent.price}<span className="text-sm font-normal text-brand-text-secondary">/mo</span></p>
          <button className="px-3 py-1.5 text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary focus:ring-offset-brand-surface">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
