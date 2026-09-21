import React, { useState } from 'react';
import { CATEGORIES, CATEGORY_TILES } from '../data/products';

export default function CategoryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTiles = CATEGORY_TILES.filter((tile) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'outerwear' && tile.id === 'cat-01') return true;
    if (selectedCategory === 'bottoms' && tile.id === 'cat-02') return true;
    if (selectedCategory === 'packs' && tile.id === 'cat-03') return true;
    if (selectedCategory === 'midlayers' && tile.id === 'cat-04') return true;
    return false;
  });

  return (
    <section className="w-full px-4 md:px-margin-desktop py-space-xl bg-surface-container-lowest border-y border-white/[0.04]" id="categories-section">
      <div className="max-w-7xl mx-auto space-y-space-lg">
        {/* Top Section Header & Filter Pills Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-code-xs text-label-code-xs uppercase text-primary tracking-widest block mb-1">
              TACTICAL DIRECTORY
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase font-bold tracking-tight">
              ENGINEERED CATEGORIES
            </h2>
          </div>

          {/* Filter Pills Scrollable */}
          <div className="flex items-center gap-space-xs overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`${
                    isActive
                      ? 'bg-primary-container text-on-primary-container shadow-md shadow-primary-container/20 font-semibold'
                      : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-white/[0.04]'
                  } font-label-code text-label-code px-space-md py-1.5 rounded-full uppercase shrink-0 transition-all duration-150`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Visual Tile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {(filteredTiles.length > 0 ? filteredTiles : CATEGORY_TILES).map((tile) => (
            <a
              key={tile.id}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-surface-container-high flex flex-col justify-end p-space-md transition-all duration-300 border border-white/[0.06] hover:border-primary/40 hover:shadow-xl"
              href="#featured-section"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                alt={tile.name}
                src={tile.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
              <div className="relative z-10 flex flex-col">
                <span className={`font-label-code-xs text-label-code-xs ${tile.badgeColor} uppercase font-bold`}>
                  {tile.code}
                </span>
                <h3 className={`font-headline-lg text-headline-md sm:text-headline-lg text-on-surface font-semibold uppercase ${tile.hoverColor} transition-colors`}>
                  {tile.name}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {tile.modulesCount}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
