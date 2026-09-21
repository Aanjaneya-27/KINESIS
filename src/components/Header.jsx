import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { wishlist, totalItemCount, subtotal, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { label: 'Men', href: '#categories-section' },
    { label: 'Women', href: '#categories-section' },
    { label: 'Techwear', href: '#featured-section' },
    { label: 'New Arrivals', href: '#featured-section' },
    { label: 'Archive', href: '#bundle-section' },
    { label: 'Sale', href: '#featured-section', isSale: true }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Ticker Bar */}
      <div className="bg-surface-container-lowest text-on-surface-variant text-label-code-xs font-label-code-xs tracking-wider border-b border-surface-container-high/40">
        <div className="w-full px-4 md:px-margin-desktop h-8 flex items-center justify-between">
          <div className="flex items-center gap-space-sm overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-tertiary font-label-code-xs text-label-code-xs shrink-0 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse inline-block"></span>
              LIVE SPEC
            </span>
            <span className="text-on-surface truncate">
              FLASH: FREE WORLDWIDE EXPRESS SHIPPING ON ORDERS OVER $150
            </span>
          </div>
          <div className="flex items-center gap-space-md shrink-0">
            <div className="hidden sm:flex items-center gap-space-xs cursor-pointer hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-sm leading-none">public</span>
              <span className="font-label-code-xs text-label-code-xs uppercase">USD / US</span>
            </div>
            <a
              className="hover:text-on-surface transition-colors font-label-code-xs text-label-code-xs uppercase"
              href="#support"
            >
              Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-surface/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
        <div className="w-full px-4 md:px-margin-desktop h-16 flex items-center justify-between gap-space-md">
          {/* Brand Logo & System Badge */}
          <div className="flex items-center gap-space-md">
            <a className="flex items-center gap-space-sm group" href="#">
              <img
                alt="Kinesis Brand Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WXGH4d2fTNSJ3gXEvlPKyYSXFXqYDFOw3Ztvw68JRVozGVyAl7kIpl6gZdrEqOstyIfOGwzoT16MYlVNEwj8MJAAJ06sJIudbw6u89nD6McDdUHaLttjiSbO3N4QWe8OaE4ZrXO621aZfp75SvMGFEYf7f9JRFQvna9GjEMVBCu5YMQxnCmrCNCmR2Gu6hY0yeZLWravKLx6ZvRO0lbMX6IZwtjHx1QLy2fPZmveMco16PMdimRCeO-A"
              />
              <span className="font-headline-md text-headline-md font-semibold tracking-tight uppercase text-on-surface group-hover:text-primary transition-colors">
                Kinesis
              </span>
            </a>
            <span className="hidden lg:inline-block font-label-code-xs text-label-code-xs uppercase text-outline px-space-xs py-0.5 rounded bg-surface-container-high border border-white/[0.04]">
              SYSTEM 01
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-space-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-space-sm py-1 font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5"
              >
                {link.label}
                {link.isSale && (
                  <span className="bg-error-container text-error text-label-code-xs font-label-code-xs px-1.5 py-0.2 rounded-full uppercase font-bold">
                    Sale
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-space-md">
            {/* Search Input Box */}
            <div className="hidden md:flex items-center bg-surface-container-low px-space-sm py-1.5 rounded-lg w-60 lg:w-64 focus-within:w-72 transition-all border border-white/[0.06]">
              <span className="material-symbols-outlined text-outline text-base mr-2 leading-none">
                search
              </span>
              <input
                className="bg-transparent text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none w-full"
                placeholder="SEARCH SPECS / CODE..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="text-label-code-xs font-label-code-xs bg-surface-container text-on-surface-variant px-1.5 py-0.5 rounded">
                ⌘K
              </span>
            </div>

            {/* Quick Interactive Tooling (Wishlist, Bag, Profile) */}
            <div className="flex items-center gap-space-sm">
              {/* Wishlist Button */}
              <button
                className="relative p-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors border border-white/[0.06]"
                title="View Wishlist"
                type="button"
                onClick={() => {
                  const featuredSec = document.getElementById('featured-section');
                  if (featuredSec) featuredSec.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="material-symbols-outlined text-lg leading-none">
                  favorite
                </span>
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-container text-on-primary-container font-label-code-xs text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button */}
              <button
                className="flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container px-space-sm py-1.5 rounded-lg text-on-surface transition-all border border-white/[0.06] active:scale-95"
                type="button"
                onClick={openCart}
                aria-label="Open Shopping Bag"
              >
                <span className="material-symbols-outlined text-lg leading-none text-primary">
                  shopping_bag
                </span>
                <span className="hidden sm:inline font-label-code-xs text-label-code-xs text-on-surface font-semibold">
                  ${subtotal.toFixed(2)}
                </span>
                <span className="bg-primary-container text-on-primary-container text-label-code-xs font-label-code-xs px-1.5 py-0.5 rounded-full font-bold">
                  {totalItemCount}
                </span>
              </button>

              {/* Profile Avatar */}
              <div className="hidden sm:flex items-center">
                <img
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover border border-white/10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2LI6Yto-UxTaER8ZkGlNzudDsrcYcpj4TIN8zBk2tdS6Uvp1fwxu2hyAGslgLlsWgBsq5Haxeaysh1n4H1Va5Ps8l-aYV87gng-TaSCgsyRrnWcj4kwMwUQqSKHRoWMbS68jKmuc3LzwwMN3gp38TMTzfUvlOZ6i0kg5Ht9YMIDfCUwC0NMVyb-F3yn5lhQZp9Mf9tySLDBqfQ6yf0vXcJLzh9yDpey4XSZLISe5NaVCQI_1w0pKS"
                />
              </div>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                className="xl:hidden p-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle Navigation Menu"
              >
                <span className="material-symbols-outlined text-xl">
                  {mobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface-container-low border-b border-surface-container-high px-4 py-4 space-y-2">
            <div className="flex items-center bg-surface-container px-3 py-2 rounded-lg mb-3">
              <span className="material-symbols-outlined text-outline text-base mr-2">search</span>
              <input
                className="bg-transparent text-body-sm text-on-surface placeholder:text-outline focus:outline-none w-full"
                placeholder="SEARCH SPECS..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded font-body-md text-on-surface hover:bg-surface-container transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.isSale && (
                  <span className="bg-error-container text-error text-label-code-xs font-label-code-xs px-2 py-0.5 rounded-full font-bold">
                    Sale
                  </span>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
