
import React from 'react';
import { PencilSquareIcon } from './icons/PencilSquareIcon';
import { ShieldExclamationIcon } from './icons/ShieldExclamationIcon';
import { RocketLaunchIcon } from './icons/RocketLaunchIcon';

const steps = [
  {
    name: '1. Create & Submit',
    description: 'Use our low-code tools or bring your own AI agent. Submit it to our platform with a simple click.',
    icon: PencilSquareIcon,
  },
  {
    name: '2. Automated Audit',
    description: 'Our AI-powered system performs a comprehensive audit for bias, data privacy, and IP compliance.',
    icon: ShieldExclamationIcon,
  },
  {
    name: '3. Publish & Earn',
    description: 'Receive a transparent compliance report. Once approved, publish to the marketplace and start earning.',
    icon: RocketLaunchIcon,
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 sm:py-24 bg-brand-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-text-primary sm:text-4xl">Ethical AI, Simplified</h2>
          <p className="mt-4 text-lg text-brand-text-secondary max-w-2xl mx-auto">
            Our streamlined process ensures every solution on our marketplace is trustworthy and ready for business.
          </p>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.name} className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary/10 mx-auto ring-8 ring-brand-primary/5">
                <step.icon className="h-8 w-8 text-brand-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-text-primary">{step.name}</h3>
              <p className="mt-2 text-base text-brand-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
