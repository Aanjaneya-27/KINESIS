import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function HeroSection() {
  const { openCart, addToCart } = useCart();
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspotItems = {
    shell: {
      id: 'acro-shield-shell-hero',
      name: 'Acro-Shield Shell',
      price: 280.00,
      category: 'OUTERWEAR MODULE',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXor2MSHTlT0h-GTO3cNGWTq_JzmvHxvNWJzv9GSYE5HoxYeOr-6J7emlbDmvzP-4tsmJJW0oxk-fXZwUtuf6490SSfgSGaiudf-rOwJItHsK_Wd5kaU-nAXNVISjcnedzGi0K8rNUuD5RtZQ4LO90Em68ovJjkRpsKzNaaxIOS9xgmW6ii733wzx8bJQzcCunR-x9lSYC2q2ZaGpvZspzc_c5zQlJacJVjNWoDiTvlMBR5gBjBgjp',
      selectedSize: 'L',
      selectedColor: 'Obsidian Black'
    },
    cargo: {
      id: 'modular-cargo-hero',
      name: 'Modular Cargo Pants',
      price: 165.00,
      category: 'CARGO SYSTEM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5R2mExeJLkEMBtg4Qjzui4wLJTDxt9z7omoeH17RsBHQDX1alrys2V1UMwmBkpjW-PbB7bJPQH_OCMhpaTw1-bR0HVVdGsZbpTJFlkZkkCFZ1TBR0KNFP3waIpko-wK7sI3-SVIyq0sQnch_BTn3WrgoZOcKw0Xx7CGOLxKCODT9w17dmxZFvc-CVL3EskdaTB9tiWSFT8VaJGoQQPB1wxurbdkFNBlmTnrG2AXctx3F6plVG2aYA',
      selectedSize: '32',
      selectedColor: 'Slate Gray'
    }
  };

  const handleHotspotAdd = (item) => {
    addToCart(item);
  };

  return (
    <section className="w-full px-4 md:px-margin-desktop py-space-xl relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
        {/* Left Narrative Engine Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-space-md z-10">
          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="bg-surface-container-high text-primary font-label-code text-label-code px-space-sm py-1 rounded border border-white/[0.06]">
              SYSTEM 04 / WINTER COLLECTION
            </span>
            <span className="font-label-code-xs text-label-code-xs text-tertiary flex items-center gap-1 bg-tertiary/10 px-2 py-0.5 rounded border border-tertiary/20">
              <span className="material-symbols-outlined text-sm">verified_user</span> LAB CERTIFIED 20K
            </span>
          </div>

          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight uppercase leading-none">
            ENGINEERED FOR <br className="hidden sm:inline" />
            <span className="text-primary-container bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-tint to-tertiary">
              EVERYDAY UTILITY.
            </span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Modular, weatherproof outerwear and technical performance essentials crafted with proprietary storm-weave nylon and seam-sealed precision. Designed to adapt seamlessly across extreme cold and urban transit.
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
            <button
              className="bg-primary-container hover:bg-blue-600 text-on-primary-container font-headline-md text-headline-md px-space-lg py-3 rounded-lg font-semibold transition-all duration-150 transform active:scale-95 flex items-center gap-2 shadow-lg shadow-primary-container/25"
              onClick={() => {
                const el = document.getElementById('featured-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              type="button"
            >
              <span>Shop New Drops</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
            <a
              className="bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-md text-headline-md px-space-lg py-3 rounded-lg transition-colors flex items-center gap-2 border border-white/[0.06]"
              href="#categories-section"
            >
              <span>Explore Categories</span>
              <span className="material-symbols-outlined text-lg text-outline">tune</span>
            </a>
          </div>

          {/* Metric Tickers & Social Proof Strip */}
          <div className="pt-space-md grid grid-cols-1 sm:grid-cols-2 gap-space-sm max-w-lg">
            <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-space-sm border border-white/[0.06]">
              <span className="material-symbols-outlined text-secondary text-2xl">star</span>
              <div>
                <div className="font-label-code text-label-code text-on-surface font-bold">4.9 / 5.0 RATING</div>
                <div className="font-body-sm text-body-sm text-outline">3,420+ verified owners</div>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-space-sm border border-white/[0.06]">
              <span className="material-symbols-outlined text-tertiary text-2xl">bolt</span>
              <div>
                <div className="font-label-code text-label-code text-on-surface font-bold">RAPID DISPATCH</div>
                <div className="font-body-sm text-body-sm text-outline">Same-day courier window</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Canvas Column (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden bg-surface-container-low aspect-[4/5] shadow-2xl group border border-white/[0.08]">
            <img
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              alt="Editorial close up of athletic cyber model wearing ultra-matte black technical storm jacket with waterproof taped seams in dark foggy rain-drenched urban Tokyo alley at night"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4oHOWer8sVEhUd1-X0SXehkEWruFyHQr5wYhWu8ZdgbBTlwk2MwLK9Dd5VRDhL9LqUt7lw4p-me2PweIBpKlJOJqI9BuIPr6BOXspJ4uVLnrdI8igGHD2nRU6uMGSdr_Ezhb9uDTnlWtyp_RnY6lyQK7Zm8CapzUlW0S8MorsDSZg4h4I9B-UTgTkh1DbgH-28YbruHulJ6-EjDglHk3x9z9lZdCYE4bXLlXh2QVYEGo3qn5AATk_"
            />

            {/* Ambient Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80 pointer-events-none"></div>

            {/* Interactive Hotspot 1: Storm Shell Jacket */}
            <div className="absolute top-[28%] left-[45%] z-20 group/pin">
              <button
                className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary-container text-on-primary-container hover:scale-110 transition-transform shadow-lg"
                type="button"
                onClick={() => setActiveHotspot(activeHotspot === 'shell' ? null : 'shell')}
                aria-label="View Storm Shell Jacket Spec"
              >
                <span className="w-3 h-3 rounded-full bg-surface animate-ping absolute"></span>
                <span className="material-symbols-outlined text-base">add</span>
              </button>

              <div
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 ${
                  activeHotspot === 'shell' ? 'flex' : 'hidden group-hover/pin:flex'
                } flex-col bg-surface-container-highest/95 backdrop-blur-md p-space-sm rounded-lg shadow-2xl w-52 pointer-events-auto border border-white/10`}
              >
                <span className="font-label-code-xs text-label-code-xs text-primary uppercase font-bold">
                  OUTERWEAR MODULE
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-bold">
                  Acro-Shield Shell
                </span>
                <span className="font-label-code text-label-code text-tertiary font-bold">
                  $280.00
                </span>
                <button
                  className="mt-2 text-center bg-primary text-on-primary font-label-code-xs text-label-code-xs py-1.5 rounded font-bold hover:bg-primary-container hover:text-on-primary-container transition-colors uppercase"
                  onClick={() => handleHotspotAdd(hotspotItems.shell)}
                  type="button"
                >
                  Quick Add
                </button>
              </div>
            </div>

            {/* Interactive Hotspot 2: Modular Cargo Pants */}
            <div className="absolute top-[68%] left-[55%] z-20 group/pin2">
              <button
                className="relative flex items-center justify-center w-8 h-8 rounded-full bg-surface-bright text-on-surface hover:scale-110 transition-transform shadow-lg border border-white/10"
                type="button"
                onClick={() => setActiveHotspot(activeHotspot === 'cargo' ? null : 'cargo')}
                aria-label="View Modular Cargo Pants Spec"
              >
                <span className="w-3 h-3 rounded-full bg-tertiary animate-ping absolute"></span>
                <span className="material-symbols-outlined text-base">add</span>
              </button>

              <div
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 ${
                  activeHotspot === 'cargo' ? 'flex' : 'hidden group-hover/pin2:flex'
                } flex-col bg-surface-container-highest/95 backdrop-blur-md p-space-sm rounded-lg shadow-2xl w-52 pointer-events-auto border border-white/10`}
              >
                <span className="font-label-code-xs text-label-code-xs text-secondary uppercase font-bold">
                  CARGO SYSTEM
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-bold">
                  Modular Cargo Pants
                </span>
                <span className="font-label-code text-label-code text-tertiary font-bold">
                  $165.00
                </span>
                <button
                  className="mt-2 text-center bg-primary text-on-primary font-label-code-xs text-label-code-xs py-1.5 rounded font-bold hover:bg-primary-container hover:text-on-primary-container transition-colors uppercase"
                  onClick={() => handleHotspotAdd(hotspotItems.cargo)}
                  type="button"
                >
                  Quick Add
                </button>
              </div>
            </div>

            {/* Floating Spec Pill Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md p-space-sm rounded-lg flex items-center justify-between border border-white/[0.08]">
              <div className="flex items-center gap-space-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></div>
                <div>
                  <p className="font-label-code text-label-code text-on-surface font-bold uppercase">
                    WEATHERPROOF 20,000MM
                  </p>
                  <p className="font-label-code-xs text-label-code-xs text-outline">
                    DWR Breathable Membrane • Taped Seams
                  </p>
                </div>
              </div>
              <span className="font-label-code-xs text-label-code-xs bg-surface-container-high text-on-surface-variant px-2 py-1 rounded border border-white/[0.04]">
                SPEC 04
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
