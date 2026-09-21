import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/Header';
import BroadcastRibbon from './components/BroadcastRibbon';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import BentoDealSpotlight from './components/BentoDealSpotlight';
import TrustPillars from './components/TrustPillars';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import CheckoutView from './components/CheckoutView';
import OrderTrackingView from './components/OrderTrackingView';

function ToastNotifier() {
  const { toastMessage } = useCart();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] bg-surface-container-highest/95 backdrop-blur-md text-on-surface px-4 py-2.5 rounded-xl shadow-2xl border border-primary/40 flex items-center gap-2 animate-bounce">
      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
      <span className="font-label-code text-label-code font-semibold">{toastMessage}</span>
    </div>
  );
}

function StorefrontView() {
  return (
    <div className="min-h-screen bg-surface flex flex-col antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Header />
      <main className="w-full pt-24 bg-surface flex-1">
        <div className="flex flex-col w-full overflow-x-hidden">
          <BroadcastRibbon />
          <HeroSection />
          <CategoryGrid />
          <FeaturedProducts />
          <BentoDealSpotlight />
          <TrustPillars />
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

function AppRouter() {
  const { currentView } = useCart();

  return (
    <>
      {currentView === 'storefront' && <StorefrontView />}
      {currentView === 'checkout' && <CheckoutView />}
      {currentView === 'tracking' && <OrderTrackingView />}
      <ToastNotifier />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}
