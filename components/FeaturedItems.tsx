
import React from 'react';
import { ItemCard } from './ItemCard';
import type { AgentTemplate } from '../types';

const MOCK_AGENTS: AgentTemplate[] = [
  {
    id: 1,
    title: 'SMB Lead Qualifier Bot',
    creator: 'SalesForceAI',
    category: 'Sales',
    description: 'An AI agent that automatically qualifies leads from your website chat, saving you hours.',
    price: 49,
    imageUrl: 'https://picsum.photos/seed/agent1/600/400',
    complianceScore: 96,
  },
  {
    id: 2,
    title: 'Customer Support Responder',
    creator: 'Zendesk Labs',
    category: 'Support',
    description: 'Handles common customer queries instantly, improving satisfaction and freeing up your team.',
    price: 79,
    imageUrl: 'https://picsum.photos/seed/agent2/600/400',
    complianceScore: 98,
  },
  {
    id: 3,
    title: 'Content Calendar Generator',
    creator: 'ContentCo',
    category: 'Marketing',
    description: 'Generates a month of social media content ideas and draft posts based on your industry.',
    price: 35,
    imageUrl: 'https://picsum.photos/seed/agent3/600/400',
    complianceScore: 91,
  },
    {
    id: 4,
    title: 'Financial Report Summarizer',
    creator: 'FinanceWiz',
    category: 'Finance',
    description: 'Analyzes quarterly reports and generates concise, easy-to-understand summaries for stakeholders.',
    price: 99,
    imageUrl: 'https://picsum.photos/seed/agent4/600/400',
    complianceScore: 99,
  },
];

export const FeaturedItems = () => {
  return (
    <section id="featured" className="py-20 sm:py-24 bg-brand-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-text-primary sm:text-4xl">Featured Agents & Templates</h2>
          <p className="mt-4 text-lg text-brand-text-secondary">
            Top-rated, compliant solutions ready for your business.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {MOCK_AGENTS.map((agent) => (
            <ItemCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
};
