import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-surface-container-lowest mt-space-xl border-t border-white/[0.04]" id="support">
      <div className="w-full px-4 md:px-margin-desktop py-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter-desktop mb-space-xl">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-space-sm mb-space-md">
              <img
                alt="Kinesis Brand Logo"
                className="h-6 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WXGH4d2fTNSJ3gXEvlPKyYSXFXqYDFOw3Ztvw68JRVozGVyAl7kIpl6gZdrEqOstyIfOGwzoT16MYlVNEwj8MJAAJ06sJIudbw6u89nD6McDdUHaLttjiSbO3N4QWe8OaE4ZrXO621aZfp75SvMGFEYf7f9JRFQvna9GjEMVBCu5YMQxnCmrCNCmR2Gu6hY0yeZLWravKLx6ZvRO0lbMX6IZwtjHx1QLy2fPZmveMco16PMdimRCeO-A"
              />
              <span className="font-headline-md text-headline-md font-semibold tracking-tight uppercase text-on-surface">
                KINESIS
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
              Precision engineered technical apparel designed for extreme mobility, atmospheric resilience, and high-performance utility.
            </p>
            <div className="flex items-center gap-space-xs text-label-code-xs font-label-code-xs text-tertiary">
              <span className="material-symbols-outlined text-sm leading-none">verified</span>
              <span>ISO-9001 CERTIFIED CRAFT</span>
            </div>
          </div>

          {/* Column 2: Engineered Cats */}
          <div>
            <h4 className="font-label-code text-label-code uppercase text-on-surface mb-space-md font-semibold tracking-wider">
              ENGINEERED CATS
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <a className="hover:text-on-surface transition-colors" href="#categories-section">
                  Men's Outerwear
                </a>
              </li>
              <li>
                <a className="hover:text-on-surface transition-colors" href="#categories-section">
                  Women's Modules
                </a>
              </li>
              <li>
                <a className="hover:text-on-surface transition-colors" href="#categories-section">
                  Ballistic Cargo Systems
                </a>
              </li>
              <li>
                <a className="hover:text-on-surface transition-colors" href="#categories-section">
                  Hydro-Shield Shells
                </a>
              </li>
              <li>
                <a className="hover:text-on-surface transition-colors" href="#categories-section">
                  Modular Loadouts
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Ops */}
          <div>
            <h4 className="font-label-code text-label-code uppercase text-on-surface mb-space-md font-semibold tracking-wider">
              CLIENT OPS
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <a className="hover:text-on-surface transition-colors" href="#">
                  Tactical Order Tracking
                </a>
              </li>
              <li>
                <a className="hover:text-on-surface transition-colors" href="#">
                  Repairs &amp; Atmospheric Warranty
                </a>
              </li>
              <li>
                <a className="hover:text-on-surface transition-colors" href="#">
                  Global Transit Matrix
                </a>
              </li>
              <li>
                <a className="hover:text-on-surface transition-colors" href="#">
                  Returns &amp; Recalibration
                </a>
              </li>
              <li>
                <a className="hover:text-on-surface transition-colors" href="#">
                  Field Support Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Specifications */}
          <div>
            <h4 className="font-label-code text-label-code uppercase text-on-surface mb-space-md font-semibold tracking-wider">
              SPECIFICATIONS
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <a className="hover:text-on-surface transition-colors" href="#">
                  Gore-Tex Pro Lab Specs
                </a>
              </li>
              <li>
                <a className="hover:text-on-surface transition-colors" href="#">
                  Dyneema Composite Fabrics
                </a>
              </li>
              <li>
                <a className="hover:text-on-surface transition-colors" href="#">
                  Atmospheric Testing Protocol
                </a>
              </li>
              <li>
                <a className="hover:text-on-surface transition-colors" href="#">
                  Circularity &amp; Reclamation
                </a>
              </li>
              <li>
                <a className="hover:text-on-surface transition-colors" href="#">
                  Field R&amp;D Archive
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Transmission Feed */}
          <div className="lg:col-span-1">
            <h4 className="font-label-code text-label-code uppercase text-on-surface mb-space-sm font-semibold tracking-wider">
              TRANSMISSION FEED
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm leading-relaxed">
              Receive technical drop notices and encrypted prototype releases.
            </p>
            {subscribed ? (
              <div className="bg-tertiary-container/20 border border-tertiary/40 rounded-lg p-2.5 text-center">
                <span className="text-tertiary font-label-code-xs text-label-code-xs font-bold uppercase">
                  NODE TRANSMISSION ESTABLISHED
                </span>
              </div>
            ) : (
              <form className="flex flex-col gap-space-xs" onSubmit={handleSubscribe}>
                <div className="flex bg-surface-container-low rounded-lg p-1 border border-white/[0.06]">
                  <input
                    className="bg-transparent px-space-sm py-1.5 text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none w-full"
                    placeholder="NODE@CLIENT.COM"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="bg-primary-container text-on-primary-container px-space-sm py-1.5 rounded text-label-code-xs font-label-code-xs uppercase font-bold hover:bg-blue-600 transition-colors shrink-0"
                    type="submit"
                  >
                    ENGAGE
                  </button>
                </div>
                <span className="text-label-code-xs font-label-code-xs text-outline">
                  ZERO SPAM. STRICT DATA ENCRYPTION.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Strip: Copyright & Gateways */}
        <div className="pt-space-md border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex flex-wrap items-center gap-space-md text-label-code-xs font-label-code-xs text-outline">
            <span>© 2025 KINESIS CORP. ALL RIGHTS RESERVED.</span>
            <a className="hover:text-on-surface transition-colors" href="#">
              PRIVACY PROTOCOL
            </a>
            <a className="hover:text-on-surface transition-colors" href="#">
              TERMS OF DEPLOYMENT
            </a>
            <a className="hover:text-on-surface transition-colors" href="#">
              SECURITY
            </a>
          </div>

          {/* Payment Gateways */}
          <div className="flex flex-wrap items-center gap-space-sm text-label-code-xs font-label-code-xs text-on-surface-variant">
            <span className="px-2 py-1 bg-surface-container-low rounded uppercase border border-white/[0.04]">
              APPLE PAY
            </span>
            <span className="px-2 py-1 bg-surface-container-low rounded uppercase border border-white/[0.04]">
              VISA
            </span>
            <span className="px-2 py-1 bg-surface-container-low rounded uppercase border border-white/[0.04]">
              MASTERCARD
            </span>
            <span className="px-2 py-1 bg-surface-container-low rounded uppercase border border-white/[0.04]">
              AMEX
            </span>
            <span className="px-2 py-1 bg-surface-container-low rounded uppercase border border-white/[0.04]">
              STRIPE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
