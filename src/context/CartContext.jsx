import React, { createContext, useContext, useState, useMemo } from 'react';
import { INITIAL_CART } from '../data/products';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [currentView, setCurrentView] = useState('storefront'); // 'storefront' | 'checkout' | 'tracking'
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('WINTER20');
  const [appliedPromo, setAppliedPromo] = useState('WINTER20');
  const [discountAmount, setDiscountAmount] = useState(20.00);
  const [wishlist, setWishlist] = useState(['k01-stealth-shell', 'orbit-28l-commuter', 'tech-utility-socks']);
  const [toastMessage, setToastMessage] = useState(null);
  const [orderReference, setOrderReference] = useState('KNX-2025-98842');

  const navigateTo = (view) => {
    setCurrentView(view);
    setIsCartOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const addToCart = (product, options = {}) => {
    const size = options.size || product.selectedSize || 'Standard';
    const color = options.color || product.selectedColor || 'Default';
    const itemKey = `${product.id}-${size}-${color}`;

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => (item.cartKey || `${item.id}-${item.size}-${item.color}`) === itemKey
      );

      if (existingIndex > -1) {
        const nextItems = [...prevItems];
        nextItems[existingIndex] = {
          ...nextItems[existingIndex],
          quantity: nextItems[existingIndex].quantity + 1,
        };
        return nextItems;
      }

      return [
        ...prevItems,
        {
          id: product.id,
          cartKey: itemKey,
          name: product.name,
          price: product.price,
          size: size,
          color: color,
          quantity: 1,
          image: product.image,
        },
      ];
    });

    showToast(`Added ${product.name} to Bag`);
    openCart();
  };

  const removeFromCart = (cartKeyOrId) => {
    setCartItems((prev) =>
      prev.filter((item) => (item.cartKey || item.id) !== cartKeyOrId)
    );
  };

  const updateQuantity = (cartKeyOrId, delta) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if ((item.cartKey || item.id) === cartKeyOrId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const applyPromo = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'WINTER20') {
      setAppliedPromo('WINTER20');
      setDiscountAmount(20.00);
      showToast('Promo code WINTER20 applied (-$20.00)');
      return { success: true, message: 'Code WINTER20 applied (-$20.00)' };
    } else if (cleanCode === 'SYSTEM10') {
      setAppliedPromo('SYSTEM10');
      setDiscountAmount(10.00);
      showToast('Promo code SYSTEM10 applied (-$10.00)');
      return { success: true, message: 'Code SYSTEM10 applied (-$10.00)' };
    } else {
      return { success: false, message: 'Invalid or expired promo code' };
    }
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Added to Wishlist');
        return [...prev, productId];
      }
    });
  };

  // Computations
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const totalItemCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const freeShippingThreshold = 150.00;
  const freeShippingUnlocked = subtotal >= freeShippingThreshold;
  const shippingCost = freeShippingUnlocked || subtotal === 0 ? 0 : 15.00;
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const taxRate = 0.085;
  const taxAmount = subtotal * taxRate;
  const checkoutTotal = Math.max(0, subtotal - (subtotal > 0 ? discountAmount : 0) + shippingCost + taxAmount);
  const finalTotal = Math.max(0, subtotal - (subtotal > 0 ? discountAmount : 0) + shippingCost);

  return (
    <CartContext.Provider
      value={{
        currentView,
        navigateTo,
        orderReference,
        cartItems,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        promoCode,
        setPromoCode,
        appliedPromo,
        discountAmount,
        applyPromo,
        wishlist,
        toggleWishlist,
        subtotal,
        totalItemCount,
        freeShippingUnlocked,
        freeShippingThreshold,
        shippingProgress,
        shippingCost,
        taxRate,
        taxAmount,
        checkoutTotal,
        finalTotal,
        toastMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
