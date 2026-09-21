import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';

export default function CheckoutView() {
  const {
    cartItems,
    subtotal,
    discountAmount,
    appliedPromo,
    shippingCost,
    taxAmount,
    checkoutTotal,
    navigateTo,
    orderReference
  } = useCart();

  // Payment Form States
  const [cardNumber, setCardNumber] = useState('4719 3820 1928 8820');
  const [cardHolder, setCardHolder] = useState('MARCUS VANCE');
  const [cardExp, setCardExp] = useState('09/28');
  const [cardCvv, setCardCvv] = useState('839');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [cvvGuideOpen, setCvvGuideOpen] = useState(false);

  // 3DS OTP Modal States
  const [is3DSOpen, setIs3DSOpen] = useState(false);
  const [otpDigits, setOtpDigits] = useState(['8', '4', '2', '9', '1', '']);
  const [otpSecondsLeft, setOtpSecondsLeft] = useState(282); // 04:42
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const [otpResent, setOtpResent] = useState(false);
  const otpInputsRef = useRef([]);

  // Live countdown for OTP expiration
  useEffect(() => {
    if (!is3DSOpen) return;
    const interval = setInterval(() => {
      setOtpSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [is3DSOpen]);

  const formatOtpTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }
    const newDigits = [...otpDigits];
    newDigits[index] = value;
    setOtpDigits(newDigits);

    // Auto-advance to next input
    if (value && index < 5 && otpInputsRef.current[index + 1]) {
      otpInputsRef.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0 && otpInputsRef.current[index - 1]) {
      otpInputsRef.current[index - 1].focus();
    }
  };

  const handleConfirmAuthorization = () => {
    setIsAuthorizing(true);
    setTimeout(() => {
      setIsAuthorizing(false);
      setIs3DSOpen(false);
      navigateTo('tracking');
    }, 1200);
  };

  // Card brand detection
  const cleanNum = cardNumber.replace(/\D/g, '');
  let cardBrand = 'VISA';
  if (cleanNum.startsWith('5') || cleanNum.startsWith('2')) cardBrand = 'MASTERCARD';
  else if (cleanNum.startsWith('3')) cardBrand = 'AMEX';

  const numSegments = [
    cleanNum.slice(0, 4) || '4719',
    cleanNum.slice(4, 8) || '••••',
    cleanNum.slice(8, 12) || '••••',
    cleanNum.slice(12, 16) || '8820'
  ];

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased flex flex-col">
      {/* Fixed Checkout Header */}
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
            <span className="hidden sm:inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded bg-surface-container-high text-outline text-label-code-xs font-label-code-xs uppercase border border-white/[0.04]">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
              SECURE CHECKOUT
            </span>
          </div>

          <div className="flex items-center gap-space-md">
            <div className="hidden md:flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-low text-tertiary border border-white/[0.04]">
              <span className="material-symbols-outlined text-sm leading-none text-tertiary">lock</span>
              <span className="font-label-code-xs text-label-code-xs uppercase tracking-wider text-on-surface-variant">
                256-BIT ENCRYPTED
              </span>
            </div>
            <nav className="flex items-center gap-space-sm">
              <button
                onClick={() => navigateTo('storefront')}
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1 p-1 rounded"
                type="button"
              >
                <span className="material-symbols-outlined text-base leading-none">arrow_back</span>
                Return to Storefront
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full pt-16 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Micro Telemetry Sub-header */}
          <section className="w-full bg-surface-container-lowest px-4 md:px-margin-desktop py-2.5 border-b border-white/[0.04]">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm font-label-code-xs text-label-code-xs">
              <div className="flex items-center gap-space-md flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-tertiary font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
                  ENCRYPTED LINK ACTIVE
                </span>
                <span className="text-outline">/</span>
                <span className="text-on-surface-variant font-label-code">
                  SESSION: <span className="text-on-surface font-bold">{orderReference}-TX</span>
                </span>
                <span className="hidden md:inline text-outline">/</span>
                <span className="hidden md:inline-flex items-center gap-1 text-on-surface-variant">
                  GATEWAY: <span className="text-primary font-bold">US-WEST-PRIMARY (SSL/TLS 1.3)</span>
                </span>
              </div>
              <div className="flex items-center gap-space-sm text-outline">
                <span className="material-symbols-outlined text-sm text-tertiary">verified</span>
                <span>
                  ESTIMATED FULFILLMENT: <strong className="text-on-surface">OCT 28 – OCT 30</strong>
                </span>
              </div>
            </div>
          </section>

          {/* Checkout Grid Container */}
          <section className="w-full px-4 md:px-margin-desktop py-space-xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
              {/* LEFT COLUMN: Flow & Payment Inputs (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-space-lg min-w-0">
                {/* Stepper */}
                <nav aria-label="Checkout Progress" className="w-full bg-surface-container-low rounded-xl p-space-md shadow-sm border border-white/[0.04]">
                  <ol className="grid grid-cols-4 gap-space-sm items-center">
                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-tertiary/15 text-tertiary flex items-center justify-center font-label-code-xs font-semibold">
                          <span className="material-symbols-outlined text-sm leading-none">check</span>
                        </span>
                        <span className="hidden sm:inline font-label-code-xs uppercase text-tertiary font-bold">01 INFO</span>
                      </div>
                      <div className="h-1 w-full bg-tertiary rounded-full"></div>
                    </li>
                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-tertiary/15 text-tertiary flex items-center justify-center font-label-code-xs font-semibold">
                          <span className="material-symbols-outlined text-sm leading-none">check</span>
                        </span>
                        <span className="hidden sm:inline font-label-code-xs uppercase text-tertiary font-bold">02 SHIP</span>
                      </div>
                      <div className="h-1 w-full bg-tertiary rounded-full"></div>
                    </li>
                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary font-label-code-xs flex items-center justify-center shadow-[0_0_12px_rgba(37,99,235,0.45)] font-bold">
                          03
                        </span>
                        <span className="font-label-code-xs uppercase text-primary font-semibold flex items-center gap-1">
                          PAYMENT
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        </span>
                      </div>
                      <div className="h-1 w-full bg-primary-container rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]"></div>
                    </li>
                    <li className="flex flex-col gap-1 opacity-50">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-surface-container-highest text-outline font-label-code-xs flex items-center justify-center">
                          04
                        </span>
                        <span className="hidden sm:inline font-label-code-xs uppercase text-outline font-bold">REVIEW</span>
                      </div>
                      <div className="h-1 w-full bg-surface-container-highest rounded-full"></div>
                    </li>
                  </ol>
                </nav>

                {/* Express 1-Click Authentication Strip */}
                <div className="w-full bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm border border-white/[0.04]">
                  <div className="flex items-center justify-between">
                    <span className="font-label-code-xs text-label-code-xs uppercase text-on-surface-variant flex items-center gap-1.5 font-bold">
                      <span className="material-symbols-outlined text-sm text-secondary">bolt</span>
                      EXPRESS 1-CLICK AUTHENTICATION
                    </span>
                    <span className="font-label-code-xs text-label-code-xs text-outline">FIDO2 / BIOMETRIC READY</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs">
                    <button
                      className="h-11 rounded-lg bg-[#5A31F4] hover:bg-[#4922db] text-white flex items-center justify-center transition-transform active:scale-[0.99] font-body-sm font-semibold shadow-sm"
                      onClick={() => setIs3DSOpen(true)}
                      type="button"
                    >
                      <span className="tracking-wide">shop<span className="text-white/80 font-normal">Pay</span></span>
                    </button>
                    <button
                      className="h-11 rounded-lg bg-surface-container-highest hover:bg-surface-bright text-on-surface flex items-center justify-center gap-1 transition-transform active:scale-[0.99] font-body-sm font-semibold shadow-sm border border-white/[0.04]"
                      onClick={() => setIs3DSOpen(true)}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-base">phone_iphone</span> Pay
                    </button>
                    <button
                      className="h-11 rounded-lg bg-surface-container-highest hover:bg-surface-bright text-on-surface flex items-center justify-center gap-1 transition-transform active:scale-[0.99] font-body-sm font-semibold shadow-sm border border-white/[0.04]"
                      onClick={() => setIs3DSOpen(true)}
                      type="button"
                    >
                      <span className="font-semibold tracking-tight">G</span>Pay
                    </button>
                    <button
                      className="h-11 rounded-lg bg-[#FFC439] hover:bg-[#f0b52b] text-[#003087] flex items-center justify-center transition-transform active:scale-[0.99] font-body-sm font-bold shadow-sm"
                      onClick={() => setIs3DSOpen(true)}
                      type="button"
                    >
                      <span className="italic font-bold tracking-tight">PayPal</span>
                    </button>
                  </div>
                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow bg-surface-container-highest h-px"></div>
                    <span className="flex-shrink mx-3 text-label-code-xs font-label-code-xs text-outline uppercase tracking-wider">
                      Or continue with encrypted payment protocol
                    </span>
                    <div className="flex-grow bg-surface-container-highest h-px"></div>
                  </div>
                </div>

                {/* Confirmed Shipping & Account Telemetry Recap Card */}
                <div className="w-full bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm border border-white/[0.04]">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-base">task_alt</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Transmission Dossier</h2>
                    </div>
                    <span className="font-label-code-xs text-label-code-xs text-tertiary bg-tertiary-container/30 px-2 py-0.5 rounded font-bold border border-tertiary/20">
                      STEPS 01-02 VERIFIED
                    </span>
                  </div>
                  <div className="grid grid-cols-1 divide-y divide-surface-container-highest/60 font-body-sm text-body-sm">
                    <div className="py-2.5 flex items-start justify-between gap-space-sm">
                      <div className="flex items-start gap-3">
                        <span className="text-outline font-label-code-xs text-label-code-xs uppercase w-20 pt-0.5 font-bold">Contact</span>
                        <div>
                          <p className="text-on-surface font-medium">Marcus Vance</p>
                          <p className="text-on-surface-variant text-body-sm font-label-code-xs">marcus.vance@apex-corp.io • +1 (206) 555-0194</p>
                        </div>
                      </div>
                      <span className="font-label-code-xs text-label-code-xs text-primary uppercase font-bold">LOCKED</span>
                    </div>
                    <div className="py-2.5 flex items-start justify-between gap-space-sm">
                      <div className="flex items-start gap-3">
                        <span className="text-outline font-label-code-xs text-label-code-xs uppercase w-20 pt-0.5 font-bold">Ship To</span>
                        <div>
                          <p className="text-on-surface font-medium">Apex Systems Lab — Suite 402</p>
                          <p className="text-on-surface-variant text-body-sm">742 Evergreen Terrace, Seattle WA 98101, United States</p>
                        </div>
                      </div>
                      <span className="font-label-code-xs text-label-code-xs text-primary uppercase font-bold">VERIFIED</span>
                    </div>
                    <div className="py-2.5 flex items-start justify-between gap-space-sm">
                      <div className="flex items-start gap-3">
                        <span className="text-outline font-label-code-xs text-label-code-xs uppercase w-20 pt-0.5 font-bold">Method</span>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-on-surface font-medium">Worldwide Express Priority</span>
                          <span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-code-xs text-label-code-xs uppercase font-bold">
                            COMPLIMENTARY AIR CARGO
                          </span>
                          <span className="text-on-surface-variant font-label-code-xs">(Estimated: 2-3 Business Days)</span>
                        </div>
                      </div>
                      <span className="font-label-code-xs text-label-code-xs text-primary uppercase font-bold">TIER-1</span>
                    </div>
                  </div>
                </div>

                {/* Primary Payment Card Container */}
                <div className="w-full bg-surface-container rounded-xl p-space-lg flex flex-col gap-space-lg shadow-md border border-white/[0.06]">
                  <div className="flex flex-wrap items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-lg">credit_card</span>
                      </div>
                      <div>
                        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold">Payment Protocol</h1>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">All transactions encrypted with end-to-end multi-layer tokens</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container-high text-tertiary font-label-code-xs text-label-code-xs font-semibold border border-tertiary/20">
                      <span className="material-symbols-outlined text-sm">security</span>
                      PCI-DSS LEVEL 1 SPECIFIED
                    </span>
                  </div>

                  {/* Payment Method Option 1: Credit Card */}
                  <div className="rounded-xl bg-surface-container-high p-space-md flex flex-col gap-space-md shadow-sm border border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-3 cursor-pointer select-none">
                        <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-[0_0_8px_rgba(180,197,255,0.5)]">
                          <span className="w-2 h-2 rounded-full bg-on-primary"></span>
                        </span>
                        <span className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 font-bold">
                          Credit / Debit Card
                        </span>
                      </label>
                      <div className="flex items-center gap-1.5 opacity-90">
                        <span className="px-1.5 py-0.5 rounded bg-primary/20 border border-primary text-primary font-label-code-xs text-[10px] font-bold tracking-wider">
                          VISA
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-secondary font-label-code-xs text-[10px] font-bold tracking-wider">
                          MC
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-primary font-label-code-xs text-[10px] font-bold tracking-wider">
                          AMEX
                        </span>
                      </div>
                    </div>

                    {/* Cybernetic HUD Card Graphic */}
                    <div className="relative w-full rounded-xl bg-gradient-to-tr from-[#0a0e15] via-[#141923] to-[#1c2331] border border-[#2a3142] p-4 overflow-hidden shadow-inner flex flex-col justify-between gap-3 group">
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
                      <div className="absolute -left-10 -bottom-10 w-28 h-28 bg-tertiary/10 rounded-full blur-2xl pointer-events-none"></div>

                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-5 rounded bg-secondary-container/40 border border-secondary/40 flex items-center justify-center text-[8px] font-label-code-xs text-secondary font-bold tracking-wider shadow-sm">
                            CHIP
                          </div>
                          <span className="material-symbols-outlined text-outline text-base">contactless</span>
                          <span className="font-label-code-xs text-[10px] text-tertiary bg-tertiary/10 px-1.5 py-0.5 rounded border border-tertiary/20 font-bold">
                            HARDWARE VAULT
                          </span>
                        </div>
                        <div className="px-2.5 py-0.5 rounded bg-primary/20 border border-primary text-primary font-label-code-xs text-xs font-bold tracking-wider">
                          {cardBrand}
                        </div>
                      </div>

                      <div className="relative z-10 py-1">
                        <div className="font-label-code text-base sm:text-lg font-semibold tracking-[0.2em] text-on-surface flex items-center justify-between gap-1 select-none">
                          <span className="text-primary">{numSegments[0]}</span>
                          <span className="text-on-surface-variant">{numSegments[1]}</span>
                          <span className="text-on-surface-variant">{numSegments[2]}</span>
                          <span className="text-on-surface font-bold">{numSegments[3]}</span>
                        </div>
                      </div>

                      <div className="flex items-end justify-between relative z-10 text-label-code-xs border-t border-surface-container-highest/40 pt-2">
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase tracking-widest text-outline">CARDHOLDER</span>
                          <span className="font-label-code text-xs text-on-surface font-semibold tracking-wide uppercase truncate max-w-[200px]">
                            {cardHolder || 'MARCUS VANCE'}
                          </span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-[9px] uppercase tracking-widest text-outline">EXPIRES</span>
                          <span className="font-label-code text-xs text-on-surface font-semibold tracking-wider">
                            {cardExp || '09/28'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="flex flex-col gap-3">
                      <div>
                        <label className="font-label-code-xs text-label-code-xs uppercase text-on-surface-variant flex justify-between items-center mb-1">
                          <span>Card Number *</span>
                          <span className="text-tertiary flex items-center gap-1 font-semibold">
                            <span className="material-symbols-outlined text-xs">vpn_key</span> AES-256 FIELD
                          </span>
                        </label>
                        <input
                          className="w-full h-12 bg-surface-container-lowest text-on-surface font-label-code text-body-md rounded-lg px-4 border border-white/[0.08] focus:border-primary/60 focus:outline-none tracking-wider"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>

                      <div>
                        <label className="font-label-code-xs text-label-code-xs uppercase text-on-surface-variant block mb-1">
                          Cardholder Name *
                        </label>
                        <input
                          className="w-full h-12 bg-surface-container-lowest text-on-surface font-label-code text-body-md rounded-lg px-4 border border-white/[0.08] focus:border-primary/60 focus:outline-none uppercase"
                          value={cardHolder}
                          onChange={(e) => setCardHolder(e.target.value)}
                          placeholder="FULL NAME"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="font-label-code-xs text-label-code-xs uppercase text-on-surface-variant block mb-1">
                            Expiration Date *
                          </label>
                          <input
                            className="w-full h-12 bg-surface-container-lowest text-on-surface font-label-code text-body-md rounded-lg px-4 border border-white/[0.08] focus:border-primary/60 focus:outline-none"
                            value={cardExp}
                            onChange={(e) => setCardExp(e.target.value)}
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="font-label-code-xs text-label-code-xs uppercase text-on-surface-variant block mb-1">
                            Security Key (CVV) *
                          </label>
                          <input
                            className="w-full h-12 bg-surface-container-lowest text-on-surface font-label-code text-body-md rounded-lg px-4 border border-white/[0.08] focus:border-primary/60 focus:outline-none"
                            value={cardCvv}
                            type="password"
                            maxLength={4}
                            onChange={(e) => setCardCvv(e.target.value)}
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                    <button
                      onClick={() => navigateTo('storefront')}
                      className="w-full sm:w-auto font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface flex items-center justify-center gap-2 transition-colors py-2"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-sm">arrow_back</span>
                      Return to Storefront
                    </button>
                    <button
                      onClick={() => setIs3DSOpen(true)}
                      className="w-full sm:w-auto px-space-xl h-14 rounded-xl bg-primary-container hover:bg-blue-600 text-white font-headline-md text-headline-md font-semibold flex items-center justify-center gap-3 transition-all active:scale-[0.99] shadow-[0_0_24px_rgba(37,99,235,0.4)]"
                      type="button"
                    >
                      <span>Review Order &amp; Authorize</span>
                      <span className="font-label-code text-on-primary-container font-bold">
                        (${checkoutTotal.toFixed(2)})
                      </span>
                      <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Order Summary Dossier (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div className="w-full bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-md shadow-sm border border-white/[0.04]">
                  <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-highest/50">
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Order Summary</h3>
                    <span className="font-label-code-xs text-label-code-xs text-outline">{cartItems.length} items</span>
                  </div>

                  {/* Cart Items List */}
                  <div className="space-y-space-sm max-h-72 overflow-y-auto pr-1">
                    {cartItems.map((item) => (
                      <div key={item.cartKey || item.id} className="flex items-center justify-between gap-space-sm py-1">
                        <div className="flex items-center gap-space-sm">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-lg bg-surface-container-lowest object-cover border border-white/[0.06]"
                          />
                          <div>
                            <h4 className="font-body-sm font-semibold text-on-surface text-xs leading-tight">{item.name}</h4>
                            <p className="font-label-code-xs text-[10px] text-outline">
                              Qty: {item.quantity} • {item.size} • {item.color}
                            </p>
                          </div>
                        </div>
                        <span className="font-label-code text-xs font-bold text-on-surface">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Voucher Tag */}
                  {appliedPromo && discountAmount > 0 && (
                    <div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between border border-secondary/20">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-base">local_offer</span>
                        <div className="flex flex-col">
                          <span className="font-label-code text-body-sm font-semibold text-secondary">
                            {appliedPromo} APPLIED
                          </span>
                          <span className="font-label-code-xs text-label-code-xs text-on-surface-variant">
                            Tactical Voucher Initiative
                          </span>
                        </div>
                      </div>
                      <span className="font-label-code text-body-sm font-semibold text-secondary">
                        -${discountAmount.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {/* Breakdown */}
                  <div className="flex flex-col gap-2 pt-space-xs font-body-sm text-body-sm border-t border-surface-container-highest/60">
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span>Item Subtotal</span>
                      <span className="font-label-code text-on-surface">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span className="flex items-center gap-1.5">
                        Worldwide Express Air
                        <span className="px-1.5 py-0.2 rounded bg-tertiary-container/30 text-tertiary font-label-code-xs text-[10px]">
                          TIER 1
                        </span>
                      </span>
                      <span className="font-label-code text-tertiary font-medium">
                        {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    {appliedPromo && discountAmount > 0 && (
                      <div className="flex items-center justify-between text-secondary">
                        <span>Voucher Offset ({appliedPromo})</span>
                        <span className="font-label-code">-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span>Estimated Taxes (WA State 8.5%)</span>
                      <span className="font-label-code text-on-surface">${taxAmount.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Total Due */}
                  <div className="p-space-md rounded-xl bg-surface-container-lowest flex flex-col gap-1 shadow-inner border border-white/[0.04]">
                    <div className="flex items-baseline justify-between">
                      <span className="font-headline-md text-headline-md text-on-surface font-semibold">Total Due</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-label-code-xs text-label-code-xs text-outline">USD</span>
                        <span className="font-headline-xl text-headline-xl font-bold text-primary tracking-tight">
                          ${checkoutTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between font-label-code-xs text-label-code-xs text-outline pt-1 border-t border-surface-container-highest/40">
                      <span>SETTLEMENT PROTOCOL: IMMEDIATE</span>
                      <span>INCLUDES TAX &amp; EXPRESS AIR</span>
                    </div>
                  </div>
                </div>

                {/* Inspection Protocol Panel */}
                <div className="w-full bg-surface-container-lowest rounded-xl p-space-md font-label-code-xs text-label-code-xs text-outline flex flex-col gap-2 shadow-sm border border-white/[0.04]">
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <span>INSPECTION PROTOCOL</span>
                    <span className="text-tertiary font-bold">PASSED / LEVEL 4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>DISPATCH HUB</span>
                    <span className="text-on-surface">KINESIS LOGISTICS NORTHWEST (SEA-09)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>SIGNATURE REQUIRED</span>
                    <span className="text-on-surface font-bold">YES (DIRECT CONCIERGE)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 3DS 2.2 OTP Modal */}
      {is3DSOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e15]/80 backdrop-blur-xl transition-all duration-300">
          <div className="absolute w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-2xl pointer-events-none -top-10"></div>
          <div className="relative w-full max-w-lg rounded-xl bg-[#0d1117] border border-[#232938] shadow-[0_12px_36px_rgba(0,0,0,0.8)] overflow-hidden font-label-code text-on-surface z-10 flex flex-col">
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary-container to-transparent shadow-[0_0_12px_rgba(37,99,235,0.45)]"></div>

            {/* Modal Header */}
            <div className="p-space-md pb-space-sm border-b border-[#232938] bg-surface-container-lowest/70 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-primary/20 border border-primary text-primary font-bold text-label-code-xs tracking-wider">
                    VISA Secure
                  </span>
                  <span className="text-outline text-label-code-xs">/</span>
                  <span className="text-outline font-label-code-xs text-[11px] uppercase tracking-wide">
                    Apex Federal Reserve Node
                  </span>
                </div>
                <button
                  className="w-7 h-7 rounded-lg bg-surface-container hover:bg-surface-container-highest text-outline hover:text-on-surface flex items-center justify-center transition-colors text-base"
                  onClick={() => setIs3DSOpen(false)}
                  type="button"
                >
                  ✕
                </button>
              </div>
              <div className="flex items-center justify-between font-label-code-xs text-[10px]">
                <div className="flex items-center gap-1.5 text-tertiary bg-tertiary-container/30 border border-tertiary/30 px-2 py-0.5 rounded font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                  <span>EMV 3DS 2.2 PROTOCOL ACTIVE</span>
                </div>
                <span className="text-outline">
                  REF: <span className="text-on-surface-variant font-medium">3DS-TX-994182-A</span>
                </span>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-space-md flex flex-col gap-space-md">
              <div className="rounded-lg bg-[#141923] border border-[#2a3142] p-space-sm flex flex-col gap-1.5 font-label-code-xs text-xs">
                <div className="flex justify-between items-center text-outline">
                  <span>MERCHANT</span>
                  <span className="text-on-surface font-medium">Kinesis Tactical Logistics Inc.</span>
                </div>
                <div className="flex justify-between items-center text-outline">
                  <span>CARD CREDENTIAL</span>
                  <span className="text-primary font-medium tracking-wider">Visa ending in •••• 8820</span>
                </div>
                <div className="flex justify-between items-center text-outline">
                  <span>AUTHORIZED CHARGE</span>
                  <span className="text-on-surface font-headline-md font-bold text-sm text-primary">
                    ${checkoutTotal.toFixed(2)} USD
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-on-surface text-body-sm font-medium">
                  <span className="material-symbols-outlined text-sm text-primary">sms</span>
                  <span>One-Time Authorization Passcode</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  A 6-digit one-time cryptographic code was dispatched via encrypted SMS to your registered mobile terminal{' '}
                  <strong className="text-on-surface font-label-code text-xs">(+1 ••• ••• 0194)</strong>.
                </p>
              </div>

              {/* 6-Digit Slots */}
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-6 gap-2">
                  {otpDigits.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => (otpInputsRef.current[idx] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                      className="w-full h-12 text-center font-label-code text-lg font-bold rounded-lg bg-surface-container-lowest border border-primary/50 text-on-surface focus:border-primary focus:ring-0 focus:outline-none transition-all"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between font-label-code-xs text-[11px] pt-1 text-outline">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-xs text-secondary">schedule</span>
                    <span>
                      Expires in: <strong className="text-secondary font-bold">{formatOtpTimer(otpSecondsLeft)}</strong>
                    </span>
                  </div>
                  <button
                    className="text-primary hover:underline uppercase tracking-wider font-semibold"
                    type="button"
                    onClick={() => {
                      setOtpResent(true);
                      setTimeout(() => setOtpResent(false), 3000);
                    }}
                  >
                    {otpResent ? 'DISPATCHED' : 'Resend OTP Code'}
                  </button>
                </div>
              </div>

              {/* Hardware Key Alternative */}
              <div className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer border border-surface-container-highest/40 flex items-center justify-between select-none">
                <div className="flex items-center gap-2 text-label-code-xs text-[11px]">
                  <span className="material-symbols-outlined text-base text-tertiary">fingerprint</span>
                  <span className="text-on-surface-variant">
                    Or verify with <span className="text-on-surface font-semibold">Passkey / FIDO2 Hardware Key</span>
                  </span>
                </div>
                <span className="material-symbols-outlined text-sm text-outline">chevron_right</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-space-md border-t border-[#232938] bg-surface-container-lowest/80 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
              <button
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-[#232938] bg-surface-container hover:bg-surface-container-highest text-outline hover:text-on-surface font-label-code-xs text-xs font-semibold uppercase tracking-wider transition-colors"
                onClick={() => setIs3DSOpen(false)}
                type="button"
              >
                Cancel &amp; Return
              </button>
              <button
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-primary-container hover:bg-blue-600 text-white font-label-code text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(37,99,235,0.45)] transition-all active:scale-[0.99]"
                onClick={handleConfirmAuthorization}
                disabled={isAuthorizing}
                type="button"
              >
                {isAuthorizing ? (
                  <>
                    <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                    <span>AUTHORIZING...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    <span>Confirm Authorization (${checkoutTotal.toFixed(2)})</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
