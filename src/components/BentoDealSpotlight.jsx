import React, { useState, useEffect } from 'react';
import { BUNDLE_DEAL } from '../data/products';
import { useCart } from '../context/CartContext';

export default function BentoDealSpotlight() {
  const { addToCart } = useCart();

  // Dynamic countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 38,
    seconds: 42
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days = Math.max(0, days - 1);
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClaimBundle = () => {
    addToCart({
      id: BUNDLE_DEAL.id,
      name: BUNDLE_DEAL.name,
      price: BUNDLE_DEAL.price,
      selectedSize: 'Complete Set (L/32)',
      selectedColor: 'Obsidian Matte',
      image: BUNDLE_DEAL.image
    });
  };

  const formatUnit = (num) => String(num).padStart(2, '0');

  return (
    <section className="w-full px-4 md:px-margin-desktop py-space-xl" id="bundle-section">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 relative border border-white/[0.08]">
          {/* Ambient Lighting Accent */}
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Left Visual Side (5 Cols) */}
          <div className="lg:col-span-5 relative min-h-[340px] bg-surface-container-lowest">
            <img
              className="w-full h-full object-cover object-center"
              alt="Editorial flatlay kit of high end outdoor techwear"
              src={BUNDLE_DEAL.image}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-container-low hidden lg:block"></div>
            <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container font-label-code text-label-code font-bold px-3 py-1 rounded-lg uppercase shadow-md">
              FLAGSHIP PACK • SAVE {BUNDLE_DEAL.savings}
            </div>
          </div>

          {/* Right Content & Countdown Area (7 Cols) */}
          <div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-between space-y-space-md z-10">
            <div>
              <div className="flex items-center gap-space-sm mb-2">
                <span className="font-label-code-xs text-label-code-xs text-tertiary uppercase font-bold">
                  {BUNDLE_DEAL.category}
                </span>
                <span className="text-outline">•</span>
                <span className="font-label-code-xs text-label-code-xs text-on-surface-variant font-medium">
                  {BUNDLE_DEAL.series}
                </span>
              </div>

              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase font-bold tracking-tight">
                {BUNDLE_DEAL.name}
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl leading-relaxed">
                {BUNDLE_DEAL.description}
              </p>

              {/* Technical Spec Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-md">
                {BUNDLE_DEAL.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-lg">
                      check_circle
                    </span>
                    <span className="font-label-code-xs text-label-code-xs text-on-surface uppercase font-semibold">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Dynamic Countdown Timer Block */}
            <div className="bg-surface-container p-space-md rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-space-md border border-white/[0.06]">
              <div>
                <span className="font-label-code-xs text-label-code-xs text-outline uppercase block mb-1 font-semibold">
                  PROMOTION EXPIRES IN
                </span>
                <div className="flex items-center gap-2">
                  <div className="bg-surface-container-high px-2.5 py-1.5 rounded text-center min-w-[48px] border border-white/[0.04]">
                    <span className="font-label-code text-headline-md font-bold text-on-surface block">
                      {formatUnit(timeLeft.days)}
                    </span>
                    <span className="font-label-code-xs text-[9px] text-outline uppercase font-semibold">
                      Days
                    </span>
                  </div>
                  <span className="font-bold text-outline">:</span>
                  <div className="bg-surface-container-high px-2.5 py-1.5 rounded text-center min-w-[48px] border border-white/[0.04]">
                    <span className="font-label-code text-headline-md font-bold text-on-surface block">
                      {formatUnit(timeLeft.hours)}
                    </span>
                    <span className="font-label-code-xs text-[9px] text-outline uppercase font-semibold">
                      Hours
                    </span>
                  </div>
                  <span className="font-bold text-outline">:</span>
                  <div className="bg-surface-container-high px-2.5 py-1.5 rounded text-center min-w-[48px] border border-white/[0.04]">
                    <span className="font-label-code text-headline-md font-bold text-on-surface block">
                      {formatUnit(timeLeft.minutes)}
                    </span>
                    <span className="font-label-code-xs text-[9px] text-outline uppercase font-semibold">
                      Mins
                    </span>
                  </div>
                  <span className="font-bold text-outline">:</span>
                  <div className="bg-surface-container-high px-2.5 py-1.5 rounded text-center min-w-[48px] border border-white/[0.04]">
                    <span className="font-label-code text-headline-md font-bold text-secondary block">
                      {formatUnit(timeLeft.seconds)}
                    </span>
                    <span className="font-label-code-xs text-[9px] text-outline uppercase font-semibold">
                      Secs
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct CTA Button */}
              <button
                className="bg-primary-container hover:bg-blue-600 text-on-primary-container px-space-lg py-3 rounded-lg font-headline-md text-headline-md font-semibold uppercase transition-all duration-150 transform active:scale-95 shadow-lg shadow-primary-container/25 shrink-0 flex items-center justify-center gap-2"
                onClick={handleClaimBundle}
                type="button"
              >
                <span>Claim Bundle Offer — ${BUNDLE_DEAL.price}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
