import React from 'react';

export default function BroadcastRibbon() {
  return (
    <div className="w-full bg-surface-container-lowest py-2.5 px-4 md:px-margin-desktop border-b border-surface-container-high/30">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
          </span>
          <span className="font-label-code text-label-code text-on-surface font-semibold tracking-wider">
            SYSTEM RELEASE 04.2 LIVE NOW
          </span>
          <span className="hidden sm:inline text-outline">•</span>
          <span className="hidden sm:inline font-body-sm text-body-sm text-on-surface-variant">
            Proprietary Storm-Weave membrane batch released for atmospheric utility
          </span>
        </div>
        <div className="flex items-center gap-space-md font-label-code-xs text-label-code-xs">
          <span className="text-secondary bg-surface-container-high px-2 py-0.5 rounded border border-secondary/20 font-bold">
            94% ALLOCATED
          </span>
          <span className="text-outline tracking-wider">
            NEXT DROP: 36H 12M
          </span>
        </div>
      </div>
    </div>
  );
}
