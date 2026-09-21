import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    promoCode,
    setPromoCode,
    appliedPromo,
    discountAmount,
    applyPromo,
    subtotal,
    totalItemCount,
    freeShippingUnlocked,
    freeShippingThreshold,
    shippingProgress,
    shippingCost,
    finalTotal,
    navigateTo
  } = useCart();

  const [promoInput, setPromoInput] = useState(promoCode);
  const [promoStatus, setPromoStatus] = useState({
    message: appliedPromo ? `Code ${appliedPromo} applied (-$${discountAmount.toFixed(2)})` : '',
    isError: false
  });
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromo(promoInput);
    setPromoStatus({
      message: res.message,
      isError: !res.success
    });
  };

  const handleCheckout = () => {
    navigateTo('checkout');
  };

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-surface-container-lowest/80 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Cart Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[440px] bg-surface-container-low shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col justify-between border-l border-white/[0.08] ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="cart-drawer"
        aria-modal="true"
        role="dialog"
      >
        {/* Drawer Header */}
        <div className="p-space-md bg-surface-container border-b border-surface-container-high flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">shopping_bag</span>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
              Your Bag{' '}
              <span className="text-outline font-normal">
                ({totalItemCount} {totalItemCount === 1 ? 'item' : 'items'})
              </span>
            </h3>
          </div>
          <button
            className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
            onClick={closeCart}
            aria-label="Close Shopping Bag"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Free Shipping Progress Tracker */}
        <div className="p-space-sm bg-surface-container-highest border-b border-white/[0.04] flex flex-col gap-1.5">
          <div className="flex items-center justify-between font-label-code-xs text-label-code-xs">
            {freeShippingUnlocked ? (
              <span className="text-tertiary flex items-center gap-1 font-bold">
                <span className="material-symbols-outlined text-sm">local_shipping</span>
                FREE WORLDWIDE SHIPPING UNLOCKED
              </span>
            ) : (
              <span className="text-secondary flex items-center gap-1 font-bold">
                <span className="material-symbols-outlined text-sm">local_shipping</span>
                ADD ${amountNeededForFreeShipping.toFixed(2)} FOR FREE SHIPPING
              </span>
            )}
            <span className="text-on-surface-variant">
              ${Math.min(subtotal, freeShippingThreshold).toFixed(2)} / ${freeShippingThreshold.toFixed(2)}
            </span>
          </div>
          <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary via-primary-tint to-tertiary h-full rounded-full transition-all duration-500"
              style={{ width: `${shippingProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Scrollable Bag Items List */}
        <div className="flex-1 overflow-y-auto p-space-md space-y-space-md">
          {checkoutComplete ? (
            <div className="bg-tertiary-container/20 border border-tertiary/40 rounded-xl p-space-md text-center space-y-2 my-8">
              <span className="material-symbols-outlined text-tertiary text-4xl">check_circle</span>
              <h4 className="font-headline-md text-headline-md text-on-surface font-bold">Order Confirmed</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Your tactical order has been registered in the deployment queue.
              </p>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <span className="material-symbols-outlined text-outline text-5xl">shopping_cart</span>
              <p className="font-headline-md text-headline-md text-on-surface">Your loadout is empty</p>
              <p className="font-body-sm text-body-sm text-outline">
                Select modules from the directory to initiate loadout.
              </p>
              <button
                onClick={closeCart}
                className="mt-4 bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-code text-label-code uppercase font-semibold hover:bg-blue-600 transition-colors"
              >
                Browse Products
              </button>
            </div>
          ) : (
            cartItems.map((item) => {
              const itemKey = item.cartKey || item.id;
              const itemTotal = item.price * item.quantity;

              return (
                <div
                  key={itemKey}
                  className="flex gap-space-sm bg-surface-container p-space-sm rounded-xl border border-white/[0.04]"
                >
                  <div className="w-20 h-20 rounded-lg bg-surface-container-lowest shrink-0 overflow-hidden border border-white/[0.04]">
                    <img
                      className="w-full h-full object-cover"
                      alt={item.name}
                      src={item.image}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-body-md text-body-md text-on-surface font-semibold">
                          {item.name}
                        </h4>
                        <p className="font-label-code-xs text-label-code-xs text-outline">
                          Size: {item.size} • {item.color}
                        </p>
                      </div>
                      <button
                        className="text-outline hover:text-error transition-colors p-1"
                        onClick={() => removeFromCart(itemKey)}
                        aria-label={`Remove ${item.name}`}
                        title="Remove item"
                      >
                        <span className="material-symbols-outlined text-base">delete</span>
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      {/* Stepper */}
                      <div className="flex items-center bg-surface-container-high rounded-md px-1 border border-white/[0.06]">
                        <button
                          className="px-2 py-0.5 text-on-surface font-bold hover:text-primary transition-colors"
                          onClick={() => updateQuantity(itemKey, -1)}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-2 font-label-code text-label-code text-on-surface font-semibold min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="px-2 py-0.5 text-on-surface font-bold hover:text-primary transition-colors"
                          onClick={() => updateQuantity(itemKey, 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-label-code text-label-code text-on-surface font-bold">
                        ${itemTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/* Promo Code Field */}
          {cartItems.length > 0 && !checkoutComplete && (
            <div className="pt-space-xs">
              <form onSubmit={handleApplyPromo} className="flex gap-space-xs">
                <input
                  className="bg-surface-container text-on-surface px-space-sm py-2 rounded-lg font-label-code text-label-code uppercase flex-1 focus:outline-none focus:ring-1 focus:ring-primary border border-white/[0.06]"
                  placeholder="PROMO CODE"
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                />
                <button
                  className="bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-code text-label-code px-space-md py-2 rounded-lg font-semibold uppercase transition-colors border border-white/[0.06]"
                  type="submit"
                >
                  APPLY
                </button>
              </form>
              {promoStatus.message && (
                <p
                  className={`font-label-code-xs text-label-code-xs mt-1.5 flex items-center gap-1 ${
                    promoStatus.isError ? 'text-error' : 'text-tertiary'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">
                    {promoStatus.isError ? 'error' : 'check'}
                  </span>
                  {promoStatus.message}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Drawer Footer / Checkout Strip */}
        {cartItems.length > 0 && (
          <div className="p-space-md bg-surface-container border-t border-surface-container-high space-y-space-sm">
            <div className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-on-surface font-label-code text-label-code">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-tertiary font-label-code text-label-code">
                <span>Worldwide Express Shipping</span>
                <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              {appliedPromo && discountAmount > 0 && (
                <div className="flex justify-between text-primary font-label-code text-label-code">
                  <span>Seasonal Discount ({appliedPromo})</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-on-surface font-headline-md text-headline-md font-bold pt-2 border-t border-surface-container-highest">
                <span>Estimated Total</span>
                <span className="text-primary">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Primary Checkout Trigger */}
            <button
              className="w-full bg-primary-container hover:bg-blue-600 text-on-primary-container py-3.5 rounded-lg font-headline-md text-headline-md font-semibold uppercase transition-all duration-150 transform active:scale-95 shadow-lg shadow-primary-container/25 flex items-center justify-center gap-2"
              onClick={handleCheckout}
              type="button"
            >
              <span className="material-symbols-outlined text-xl">lock</span>
              <span>Proceed to Checkout • ${finalTotal.toFixed(2)}</span>
            </button>

            {/* Express One-Click Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                className="bg-surface-container-highest hover:bg-surface-bright text-on-surface py-2 rounded-lg font-label-code-xs text-label-code-xs uppercase font-bold flex items-center justify-center gap-1 border border-white/[0.04] transition-colors"
                type="button"
                onClick={handleCheckout}
              >
                <span>Pay Express</span>
              </button>
              <button
                className="bg-surface-container-highest hover:bg-surface-bright text-on-surface py-2 rounded-lg font-label-code-xs text-label-code-xs uppercase font-bold flex items-center justify-center gap-1 border border-white/[0.04] transition-colors"
                type="button"
                onClick={handleCheckout}
              >
                <span>GPay Direct</span>
              </button>
            </div>

            {/* Trust Security Micro-Guarantee */}
            <div className="flex items-center justify-center gap-1.5 text-outline font-label-code-xs text-label-code-xs pt-1">
              <span className="material-symbols-outlined text-sm">security</span>
              <span>Guaranteed 256-bit Secure Atmospheric Checkout</span>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
