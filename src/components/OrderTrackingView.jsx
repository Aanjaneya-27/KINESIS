import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function OrderTrackingView() {
  const { navigateTo, orderReference, cartItems } = useCart();
  const [activeTab, setActiveTab] = useState('vector');
  const [telemetryTime, setTelemetryTime] = useState(1.5);
  const [countdown, setCountdown] = useState({
    hours: 71,
    minutes: 23,
    seconds: 48
  });

  // Countdown timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUnit = (num) => String(num).padStart(2, '0');

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
        <div className="w-full px-4 md:px-margin-desktop h-16 flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <button
              onClick={() => navigateTo('storefront')}
              className="flex items-center gap-space-sm group"
              type="button"
            >
              <img
                alt="Kinesis Brand Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WXGH4d2fTNSJ3gXEvlPKyYSXFXqYDFOw3Ztvw68JRVozGVyAl7kIpl6gZdrEqOstyIfOGwzoT16MYlVNEwj8MJAAJ06sJIudbw6u89nD6McDdUHaLttjiSbO3N4QWe8OaE4ZrXO621aZfp75SvMGFEYf7f9JRFQvna9GjEMVBCu5YMQxnCmrCNCmR2Gu6hY0yeZLWravKLx6ZvRO0lbMX6IZwtjHx1QLy2fPZmveMco16PMdimRCeO-A"
              />
              <span className="font-headline-md text-headline-md font-semibold tracking-tight uppercase text-on-surface group-hover:text-primary transition-colors">
                Kinesis
              </span>
            </button>
            <span className="hidden lg:inline-block font-label-code-xs text-label-code-xs uppercase text-outline px-space-xs py-0.5 rounded bg-surface-container-high border border-white/[0.04]">
              TELEMETRY V4.2
            </span>
          </div>

          <div className="flex items-center gap-space-sm">
            <button
              onClick={() => navigateTo('storefront')}
              className="flex items-center gap-1.5 bg-primary-container hover:bg-blue-600 text-on-primary-container px-3 py-1.5 rounded-lg text-label-code-xs font-label-code-xs uppercase font-semibold transition-all shadow-md shadow-primary-container/20"
              type="button"
            >
              <span className="material-symbols-outlined text-sm">storefront</span>
              Return to Storefront
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full pt-16 bg-surface flex-1">
        <div className="flex flex-col w-full text-on-surface">
          {/* Sub-Header & Live Uplink Status Bar */}
          <section className="w-full bg-surface-container-lowest px-4 md:px-margin-desktop py-space-sm border-b border-white/[0.04]">
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-sm text-label-code-xs font-label-code-xs">
              <div className="flex flex-wrap items-center gap-space-xs text-outline">
                <button
                  onClick={() => navigateTo('storefront')}
                  className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1 font-semibold text-primary"
                  type="button"
                >
                  <span className="material-symbols-outlined text-xs">arrow_back</span>STOREFRONT
                </button>
                <span>/</span>
                <button
                  onClick={() => navigateTo('checkout')}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                  type="button"
                >
                  ORDERS
                </button>
                <span>/</span>
                <span className="text-primary font-bold">{orderReference}</span>
                <span>/</span>
                <span className="text-tertiary font-semibold">LIVE TELEMETRY STREAM</span>
              </div>
              <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant">
                <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded border border-white/[0.04]">
                  <span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
                  <span className="text-on-surface">SATCOM:</span>
                  <span className="text-tertiary font-medium">ORBCOMM-LEO-4 // 99.98% SNR</span>
                </div>
                <div className="hidden sm:flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded border border-white/[0.04]">
                  <span className="material-symbols-outlined text-xs text-primary">satellite_alt</span>
                  <span>GPS FIX: <strong className="text-on-surface">3D LOCK (12 SAT)</strong></span>
                </div>
                <div className="flex items-center gap-1.5 bg-surface-container px-space-sm py-1 rounded text-primary border border-white/[0.04]">
                  <span className="material-symbols-outlined text-xs animate-spin">sync</span>
                  <span>SYNC 1.5s</span>
                </div>
              </div>
            </div>
          </section>

          {/* Hero Overview & Tactical Status Strip */}
          <section className="w-full px-4 md:px-margin-desktop pt-space-lg pb-space-md">
            <div className="bg-surface-container-low p-space-md md:p-space-lg rounded-2xl shadow-xl relative overflow-hidden border border-white/[0.06]">
              <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
              <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-tertiary/5 blur-3xl pointer-events-none"></div>

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
                <div className="space-y-space-xs">
                  <div className="flex flex-wrap items-center gap-space-sm">
                    <span className="bg-surface-container-highest text-primary font-label-code-xs text-label-code-xs px-2 py-1 rounded uppercase tracking-wider font-semibold border border-white/[0.04]">
                      AIR EXPRESS PRIORITY // TIER-1
                    </span>
                    <span className="bg-tertiary-container/30 text-tertiary font-label-code-xs text-label-code-xs px-2 py-1 rounded uppercase tracking-wider font-semibold flex items-center gap-1 border border-tertiary/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                      EN ROUTE
                    </span>
                    <span className="text-outline text-label-code-xs font-label-code-xs">DEST_ID: US-WA-98101</span>
                  </div>

                  <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl tracking-tight text-on-surface pt-1 font-bold">
                    CARGO IN TRANSIT <span className="text-outline font-normal">//</span>{' '}
                    <span className="text-primary-fixed-dim">PHASE 02: STAGED</span>
                  </h1>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-space-xs sm:gap-space-md text-body-sm font-body-sm text-on-surface-variant pt-1">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-base text-primary">trip_origin</span>
                      <span>SEA-09 (Seattle Terminal Hub)</span>
                    </div>
                    <span className="hidden sm:inline text-outline">→</span>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-base text-tertiary">location_on</span>
                      <span className="text-on-surface font-medium">SEA-LABS-402 (Apex Systems Lab, 742 Evergreen Terr)</span>
                    </div>
                  </div>
                </div>

                {/* Telemetry ETA Counter Card */}
                <div className="bg-surface-container p-space-md rounded-xl flex flex-col md:flex-row items-start md:items-center gap-space-md shadow-inner border border-white/[0.04]">
                  <div>
                    <div className="text-label-code-xs font-label-code-xs text-outline uppercase tracking-wider">
                      PROJECTED CONCIERGE DROP
                    </div>
                    <div className="font-headline-md text-headline-md text-on-surface font-bold">OCT 28, 2025</div>
                    <div className="text-label-code text-label-code text-on-surface-variant">
                      14:00 – 17:30 UTC (DIRECT HANDSHAKE)
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest px-space-md py-2.5 rounded-lg border border-white/[0.04]">
                    <div className="text-label-code-xs font-label-code-xs text-primary uppercase font-bold tracking-wider">
                      T-MINUS ESTIMATOR
                    </div>
                    <div className="font-label-code text-label-code text-tertiary font-bold tracking-widest text-lg">
                      {formatUnit(countdown.hours)}H : {formatUnit(countdown.minutes)}M : {formatUnit(countdown.seconds)}S
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="relative z-10 mt-space-md pt-space-sm flex flex-wrap items-center justify-between gap-space-sm text-body-sm font-body-sm border-t border-white/[0.04]">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <button
                    className="flex items-center gap-space-xs bg-surface-container hover:bg-surface-bright text-on-surface px-3 py-1.5 rounded text-label-code-xs font-label-code-xs uppercase transition-all border border-white/[0.04]"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-sm text-tertiary">sensors</span>
                    STREAM: ACTIVE
                  </button>
                  <button
                    className="flex items-center gap-space-xs bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface px-3 py-1.5 rounded text-label-code-xs font-label-code-xs uppercase transition-all border border-white/[0.04]"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-sm">download</span>
                    SENSOR LOG (.CSV)
                  </button>
                </div>
                <div className="text-label-code-xs font-label-code-xs text-outline">
                  PROTOCOL: AES-GCM-256 ENCRYPTED • ZERO-KNOWLEDGE NODE
                </div>
              </div>
            </div>
          </section>

          {/* Core Content Grid: Radar Map + Manifest */}
          <section className="w-full px-4 md:px-margin-desktop py-space-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              {/* Radar Column (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-2xl relative flex flex-col border border-white/[0.06]">
                  {/* Radar Header */}
                  <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-base">radar</span>
                      <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface font-semibold">
                        GEOSPATIAL VECTOR MAP // SECTOR WA-01
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-surface-container px-1 py-0.5 rounded text-label-code-xs font-label-code-xs border border-white/[0.04]">
                      <button
                        onClick={() => setActiveTab('vector')}
                        className={`px-2 py-1 rounded font-semibold ${
                          activeTab === 'vector' ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant'
                        }`}
                      >
                        VECTOR
                      </button>
                      <button
                        onClick={() => setActiveTab('thermal')}
                        className={`px-2 py-1 rounded ${
                          activeTab === 'thermal' ? 'bg-primary-container text-on-primary font-semibold' : 'text-on-surface-variant'
                        }`}
                      >
                        THERMAL
                      </button>
                    </div>
                  </div>

                  {/* Tactical Vector Radar Interface Canvas */}
                  <div className="relative w-full h-80 sm:h-96 rounded-xl bg-surface-container-low overflow-hidden flex items-center justify-center border border-white/[0.04]">
                    {/* Tactical Grid Pattern Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="tactical-grid-react" width="32" height="32" patternUnits="userSpaceOnUse">
                          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#8d90a0" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#tactical-grid-react)" />
                    </svg>

                    {/* Vector Flight Corridor Paths & Nodes */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 380" fill="none">
                      <path d="M 90 280 Q 240 180 340 160 T 520 90" stroke="rgba(37,99,235,0.2)" strokeLinecap="round" strokeWidth="18" />
                      <path d="M 90 280 Q 240 180 340 160 T 520 90" stroke="#2563eb" strokeDasharray="4 4" strokeWidth="2" />
                      <path d="M 90 280 Q 240 180 340 160" stroke="#4edea3" strokeWidth="3" />
                      <circle cx="340" cy="160" r="28" stroke="#4edea3" strokeWidth="1" opacity="0.4" className="animate-ping" />
                      <circle cx="340" cy="160" r="6" fill="#4edea3" />
                      <circle cx="90" cy="280" r="6" fill="#181c23" stroke="#8d90a0" strokeWidth="2" />
                      <circle cx="520" cy="90" r="6" fill="#181c23" stroke="#ffb95f" strokeWidth="2" />
                    </svg>

                    {/* Telemetry Pins */}
                    <div className="absolute left-6 sm:left-14 bottom-14 bg-surface-container/90 backdrop-blur-md px-2 py-1 rounded text-label-code-xs font-label-code-xs text-on-surface-variant pointer-events-none shadow-md border border-white/[0.04]">
                      <span className="text-outline">WP-01:</span> SEA-HUB-09 [DEPARTED]
                    </div>

                    <div className="absolute left-[48%] top-[34%] -translate-x-1/2 -translate-y-full mb-2 bg-surface-container-highest/95 backdrop-blur-md p-2 rounded-lg shadow-2xl pointer-events-none border border-tertiary/30">
                      <div className="flex items-center gap-1.5 text-label-code-xs font-label-code-xs font-bold text-tertiary">
                        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                        ACTIVE TRANSPORTER #KNX-901
                      </div>
                      <div className="text-label-code-xs font-label-code-xs text-on-surface mt-0.5">
                        BOEING FIELD (BFI) APEX CORRIDOR
                      </div>
                    </div>

                    <div className="absolute right-6 sm:right-16 top-12 bg-surface-container/90 backdrop-blur-md px-2 py-1 rounded text-label-code-xs font-label-code-xs text-on-surface pointer-events-none shadow-md border border-white/[0.04]">
                      <span className="text-secondary font-bold">TARGET:</span> LABS-402 (EVERGREEN)
                    </div>
                  </div>

                  {/* Readout Strip */}
                  <div className="mt-space-sm pt-space-xs grid grid-cols-2 sm:grid-cols-4 gap-space-xs text-label-code-xs font-label-code-xs bg-surface-container-low p-space-sm rounded-lg border border-white/[0.04]">
                    <div>
                      <div className="text-outline uppercase">LATITUDE</div>
                      <div className="text-on-surface font-semibold">47.6062° N</div>
                    </div>
                    <div>
                      <div className="text-outline uppercase">LONGITUDE</div>
                      <div className="text-on-surface font-semibold">122.3321° W</div>
                    </div>
                    <div>
                      <div className="text-outline uppercase">ALTITUDE</div>
                      <div className="text-tertiary font-semibold">142 M MSL</div>
                    </div>
                    <div>
                      <div className="text-outline uppercase">GROUND SPEED</div>
                      <div className="text-primary font-semibold">48.2 KTS (TACTICAL)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manifest & Sensors Column (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                {/* Secured Enclave Manifest Card */}
                <div className="bg-surface-container-low rounded-2xl p-space-md shadow-lg border border-white/[0.06]">
                  <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-highest/50">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-base">inventory_2</span>
                      <h2 className="font-headline-md text-headline-md font-bold text-on-surface">SECURED ENCLAVE MANIFEST</h2>
                    </div>
                    <span className="bg-surface-container text-on-surface-variant font-label-code-xs text-label-code-xs px-2 py-0.5 rounded">
                      {cartItems.length} ITEMS
                    </span>
                  </div>

                  <div className="space-y-space-sm pt-space-sm">
                    {cartItems.map((item) => (
                      <div key={item.cartKey || item.id} className="flex items-center justify-between bg-surface-container p-space-sm rounded-xl border border-white/[0.04]">
                        <div className="flex items-center gap-space-sm">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-lg bg-surface-container-lowest object-cover border border-white/[0.04]"
                          />
                          <div>
                            <div className="font-body-sm font-semibold text-on-surface text-xs leading-tight">{item.name}</div>
                            <div className="text-label-code-xs text-[10px] text-outline">
                              SIZE: {item.size} • COLOR: {item.color}
                            </div>
                            <div className="text-label-code-xs text-[10px] text-tertiary mt-0.5 font-semibold">
                              ATMOSPHERIC RE-VERIFIED // SEALED
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-headline-md text-xs font-bold text-on-surface">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          <span className="text-label-code-xs text-[10px] text-outline">QTY: {item.quantity}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sensor Matrix */}
                <div className="bg-surface-container-low rounded-2xl p-space-md shadow-lg border border-white/[0.06] space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-surface-container-highest/50">
                    <span className="font-label-code text-label-code uppercase text-on-surface font-semibold">
                      CONTAINER ATMOSPHERIC SENSORS
                    </span>
                    <span className="text-tertiary text-label-code-xs font-bold">ALL NOMINAL</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-label-code-xs">
                    <div className="p-2.5 rounded-lg bg-surface-container border border-white/[0.04]">
                      <span className="text-outline block">CORE TEMP</span>
                      <span className="text-on-surface font-bold text-sm">18.4°C</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-container border border-white/[0.04]">
                      <span className="text-outline block">HUMIDITY</span>
                      <span className="text-on-surface font-bold text-sm">34% RH</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-container border border-white/[0.04]">
                      <span className="text-outline block">PRESSURE</span>
                      <span className="text-on-surface font-bold text-sm">1013.25 hPa</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-container border border-white/[0.04]">
                      <span className="text-outline block">SHOCK INDEX</span>
                      <span className="text-tertiary font-bold text-sm">0.02 G (ZERO)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
