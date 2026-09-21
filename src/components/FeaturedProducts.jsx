import React, { useState } from 'react';
import { FEATURED_PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export default function FeaturedProducts() {
  const { wishlist, toggleWishlist, addToCart } = useCart();
  const [products, setProducts] = useState(FEATURED_PRODUCTS);
  const [sortBy, setSortBy] = useState('demand');

  const handleColorSelect = (productId, colorName) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, selectedColor: colorName } : p))
    );
  };

  const handleQuickAdd = (product) => {
    addToCart(product, {
      color: product.selectedColor,
      size: product.selectedSize
    });
  };

  return (
    <section className="w-full px-4 md:px-margin-desktop py-space-xl" id="featured-section">
      <div className="max-w-7xl mx-auto space-y-space-lg">
        {/* Section Title & Counter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
          <div>
            <div className="flex items-center gap-space-xs text-label-code-xs font-label-code-xs text-primary uppercase font-bold tracking-wider">
              <span>● DEPLOYMENT READY</span>
              <span>//</span>
              <span>SYSTEM 04 SELECTION</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase font-bold tracking-tight">
              FEATURED LOADOUTS
            </h2>
          </div>
          <div className="flex items-center gap-space-sm text-label-code text-label-code text-on-surface-variant">
            <span>SORT: HIGH DEMAND</span>
            <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
          </div>
        </div>

        {/* 4 High-Conversion Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {products.map((product) => {
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                className="bg-surface-container-low rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:bg-surface-container shadow-md border border-white/[0.06] hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Card Image & Interactive Badges */}
                <div className="relative aspect-square bg-surface-container-lowest overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={product.name}
                    src={product.image}
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                    {product.badge && (
                      <span
                        className={`${
                          product.badgeType === 'primary'
                            ? 'bg-primary-container text-on-primary-container'
                            : product.badgeType === 'amber'
                            ? 'bg-secondary-container text-on-secondary-container flex items-center gap-1'
                            : product.badgeType === 'green'
                            ? 'bg-tertiary-container text-on-tertiary-container'
                            : 'bg-primary-fixed text-on-primary-fixed'
                        } font-label-code-xs text-label-code-xs px-2 py-0.5 rounded font-bold uppercase tracking-wider`}
                      >
                        {product.badgeType === 'amber' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-on-secondary-container animate-ping inline-block"></span>
                        )}
                        {product.badge}
                      </span>
                    )}
                    {product.discountBadge && (
                      <span className="bg-surface-container-highest text-error font-label-code-xs text-label-code-xs px-2 py-0.5 rounded font-bold uppercase border border-error/20">
                        {product.discountBadge}
                      </span>
                    )}
                  </div>

                  {/* Wishlist Heart Button */}
                  <button
                    className={`absolute top-3 right-3 w-8 h-8 rounded-lg bg-surface/80 backdrop-blur-md ${
                      isWishlisted ? 'text-error' : 'text-on-surface-variant hover:text-error'
                    } flex items-center justify-center transition-colors z-10 border border-white/[0.06]`}
                    onClick={() => toggleWishlist(product.id)}
                    type="button"
                    title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                    aria-label="Toggle Wishlist"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {isWishlisted ? 'favorite' : 'favorite_border'}
                    </span>
                  </button>

                  {/* Angle Preview Toggle Pill */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded-full flex gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                  </div>
                </div>

                {/* Card Content / Spec Breakdown */}
                <div className="p-space-md flex flex-col flex-1 justify-between space-y-space-sm">
                  <div>
                    <div className="flex items-center justify-between text-body-sm font-body-sm text-outline mb-1">
                      <span className="font-label-code-xs tracking-wider">{product.category}</span>
                      <div className="flex items-center gap-1 text-secondary">
                        <span className="material-symbols-outlined text-sm leading-none">star</span>
                        <span className="font-label-code-xs text-label-code-xs text-on-surface font-semibold">
                          {product.rating}
                        </span>
                        <span className="text-outline text-label-code-xs font-label-code-xs">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    {/* Pricing */}
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-headline-md text-headline-md text-on-surface font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="font-body-sm text-body-sm text-outline line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Inventory Micro-Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between font-label-code-xs text-label-code-xs">
                      <span className={`${product.textColor} font-bold`}>{product.inventoryText}</span>
                      <span className="text-outline">{product.inventorySubtext}</span>
                    </div>
                    <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`${product.inventoryColor} h-full rounded-full`}
                        style={{ width: `${product.inventoryPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Color Swatches */}
                  <div className="flex items-center gap-2 pt-1">
                    {product.colors.map((c) => {
                      const isSelected = product.selectedColor === c.name;
                      return (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() => handleColorSelect(product.id, c.name)}
                          className={`w-4 h-4 rounded-full ${c.class} ${
                            isSelected ? 'ring-2 ring-primary scale-110' : 'hover:scale-110 opacity-75'
                          } transition-all`}
                          title={c.name}
                          aria-label={`Select ${c.name}`}
                        />
                      );
                    })}
                  </div>

                  {/* Instant Quick Add Button */}
                  <button
                    className="w-full bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface font-label-code text-label-code py-2.5 rounded-lg font-semibold uppercase transition-all duration-150 flex items-center justify-center gap-2 border border-white/[0.06] active:scale-95"
                    onClick={() => handleQuickAdd(product)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-base">shopping_cart</span>
                    <span>+ Quick Add</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
