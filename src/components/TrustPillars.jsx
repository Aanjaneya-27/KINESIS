import React from 'react';
import { TRUST_PILLARS } from '../data/products';

export default function TrustPillars() {
  return (
    <section className="w-full px-4 md:px-margin-desktop py-space-xl bg-surface-container-lowest border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {TRUST_PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            className="p-space-md rounded-xl bg-surface-container-low flex flex-col space-y-space-xs border border-white/[0.06] hover:border-white/[0.12] transition-colors"
          >
            <div className={`w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center ${pillar.iconColor} mb-1 border border-white/[0.04]`}>
              <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface font-semibold">
              {pillar.title}
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
