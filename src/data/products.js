export const CATEGORIES = [
  { id: 'all', label: 'All Categories' },
  { id: 'outerwear', label: 'Outerwear' },
  { id: 'bottoms', label: 'Modular Pants' },
  { id: 'midlayers', label: 'Thermal Layers' },
  { id: 'packs', label: 'Everyday Packs' },
  { id: 'accessories', label: 'Accessories' }
];

export const CATEGORY_TILES = [
  {
    id: 'cat-01',
    code: 'CAT // 01',
    name: 'Technical Shells',
    modulesCount: '24 Active Modules',
    badgeColor: 'text-primary',
    hoverColor: 'group-hover:text-primary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzwSYUWJZ_XpyvTOnNXYRZMMRPdbYWP5LFM8DNF6sNLVp-DOz1V5KYQQoXC4zbsSnmiHNtTo9RNvZjezt7oqsKAxHiiUr3ikwDNo6ofwqNt4OYWJHKuXVSVpopX-6zxSRGfRu5W9oFwrh54r0kP-COvoXWWnblCVJmoiykCs60m5ub84E3zFE1pEnMGa1D9HxRQ5XFSEGn60jGi8Y418Hmn1HTMbiIx7dOpEkf_UyKb2etyI7C70q2'
  },
  {
    id: 'cat-02',
    code: 'CAT // 02',
    name: 'Engineered Bottoms',
    modulesCount: '18 Active Modules',
    badgeColor: 'text-secondary',
    hoverColor: 'group-hover:text-secondary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxPXvgRT3NVZLj-rhNsTFtK13P0aRve4DlRBjgQcnl3DTtBcXKxrpUANO55pkKJ8vaAIa-xIz7iWSFTmd_y6FYvLPO_ZwLZ57HG3c-j9Xd5BTclvC7Lgz8oAVY58YUjrCFkQff-pONOPflHQhOwn3Lh-Zll7XhqnI_Qr6gMPYrbo_bATKrjjwerMmjeMhpJN7O2kko4DTyDLvWCWskb_37CTYpQXcgjRKO9VzapC6vgLj_dY-_hQWa'
  },
  {
    id: 'cat-03',
    code: 'CAT // 03',
    name: 'Next-Gen Packs',
    modulesCount: '12 Active Modules',
    badgeColor: 'text-tertiary',
    hoverColor: 'group-hover:text-tertiary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPsUz2UGqDSsGxd7JgTgBzsGHM8Tbc3sU7B0zur7Sm6XA4YTuKmUdQ4rhezwtdzGzkLJKnyrXEuNq-tTyPwWpSbMYRJnqOL2HTpCHJEY3QfeJYD8c_xHNyQJaSajxfAyTeP4IAtm7TCy5adR6-6ggLS_4HF_MorPajSlmZoW9xIFK-XEkiqcK35-7A14hDn3Z867ljKqjeMYM4jSv7q2Lm4dOR3T1NlNpgG-lELNsnHN1cOnv40xcw'
  },
  {
    id: 'cat-04',
    code: 'CAT // 04',
    name: 'Thermal Midlayers',
    modulesCount: '15 Active Modules',
    badgeColor: 'text-primary-fixed',
    hoverColor: 'group-hover:text-primary-fixed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaT_OdDD2Vp1qK78Iwed5uj9zR4Q7P4JW4abbuJvBPDPJ1dY-efx_giSzojpNx9K6nDztUXDobKgL4GhqDhSRwXPimPrvq0jl7DxYd4vMjCuskIUJg9Hvs6GqLnto7Sn0kc0zaIaqdDw4JwJ5z1idSUjRNDxYtDhS8FQ5eXzGsmQJrTYA2EEiaaQqL6T2qdpojCzubik02ppANITjFEc2DUMr8NZTlCRvgZo8VoD31vQrcuq_6iZ5v'
  }
];

export const FEATURED_PRODUCTS = [
  {
    id: 'k01-stealth-shell',
    name: 'K-01 Stealth Storm Shell',
    category: 'OUTERWEAR',
    price: 320.00,
    originalPrice: 380.00,
    rating: 4.9,
    reviews: 384,
    badge: 'BEST SELLER',
    badgeType: 'primary',
    discountBadge: 'SAVE 16%',
    inventoryText: 'Only 4 left in M/L',
    inventorySubtext: 'High Velocity',
    inventoryPercentage: 88,
    inventoryColor: 'bg-error',
    textColor: 'text-error',
    colors: [
      { name: 'Obsidian Black', class: 'bg-surface-container-lowest ring-primary' },
      { name: 'Steel Grey', class: 'bg-surface-variant ring-primary' },
      { name: 'Deep Navy', class: 'bg-primary-fixed ring-primary' }
    ],
    selectedColor: 'Obsidian Black',
    selectedSize: 'L',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXor2MSHTlT0h-GTO3cNGWTq_JzmvHxvNWJzv9GSYE5HoxYeOr-6J7emlbDmvzP-4tsmJJW0oxk-fXZwUtuf6490SSfgSGaiudf-rOwJItHsK_Wd5kaU-nAXNVISjcnedzGi0K8rNUuD5RtZQ4LO90Em68ovJjkRpsKzNaaxIOS9xgmW6ii733wzx8bJQzcCunR-x9lSYC2q2ZaGpvZspzc_c5zQlJacJVjNWoDiTvlMBR5gBjBgjp'
  },
  {
    id: 'acro-modular-cargo',
    name: 'Acro Modular Cargo Pant',
    category: 'BOTTOMS',
    price: 185.00,
    originalPrice: 210.00,
    rating: 4.8,
    reviews: 210,
    badge: 'LOW STOCK',
    badgeType: 'amber',
    discountBadge: null,
    inventoryText: 'Only 2 left in batch',
    inventorySubtext: 'Near Depletion',
    inventoryPercentage: 95,
    inventoryColor: 'bg-secondary',
    textColor: 'text-secondary',
    colors: [
      { name: 'Slate Gray', class: 'bg-surface-variant ring-primary' },
      { name: 'Obsidian Black', class: 'bg-surface-container-lowest ring-primary' }
    ],
    selectedColor: 'Slate Gray',
    selectedSize: '32',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5R2mExeJLkEMBtg4Qjzui4wLJTDxt9z7omoeH17RsBHQDX1alrys2V1UMwmBkpjW-PbB7bJPQH_OCMhpaTw1-bR0HVVdGsZbpTJFlkZkkCFZ1TBR0KNFP3waIpko-wK7sI3-SVIyq0sQnch_BTn3WrgoZOcKw0Xx7CGOLxKCODT9w17dmxZFvc-CVL3EskdaTB9tiWSFT8VaJGoQQPB1wxurbdkFNBlmTnrG2AXctx3F6plVG2aYA'
  },
  {
    id: 'aero-grid-half-zip',
    name: 'Aero-Grid Thermal Half-Zip',
    category: 'MIDLAYER',
    price: 140.00,
    originalPrice: null,
    rating: 5.0,
    reviews: 89,
    badge: 'NEW RELEASE',
    badgeType: 'green',
    discountBadge: null,
    inventoryText: 'In Stock',
    inventorySubtext: 'Ready to Ship',
    inventoryPercentage: 40,
    inventoryColor: 'bg-tertiary',
    textColor: 'text-tertiary',
    colors: [
      { name: 'Olive Green', class: 'bg-surface-variant ring-primary' },
      { name: 'Obsidian Black', class: 'bg-surface-container-lowest ring-primary' }
    ],
    selectedColor: 'Olive Green',
    selectedSize: 'M',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAvAwAzgBBWNItqh7VAPN3RLvs02k9hBgCo-MRz23MxjSOMdEy3_KWsKoB1YEL-KilBGNa0rywy8pulHWfNBvlLdeXgxRSMb0l6Oj1E53vcm-iHly5rY6B_F32rVJYZ2rgrIm9UnH-S6bhc5OCAtqRwgykSd7bJGaEnuTQcLWpT5LZny7vxgZewsnQemV9gUcV1Cb6w9f1HkM3sXLEe6hkHO-WY1oPkqfyONu4BASDKHw2k1XrCg9p'
  },
  {
    id: 'orbit-28l-commuter',
    name: 'Orbit 28L Commuter Pack',
    category: 'LOADOUT',
    price: 220.00,
    originalPrice: 260.00,
    rating: 4.9,
    reviews: 142,
    badge: 'LIMITED RUN',
    badgeType: 'fixed',
    discountBadge: null,
    inventoryText: 'Only 7 units remaining',
    inventorySubtext: 'Run 04',
    inventoryPercentage: 78,
    inventoryColor: 'bg-secondary',
    textColor: 'text-secondary',
    colors: [
      { name: 'Obsidian Black', class: 'bg-surface-container-lowest ring-primary' }
    ],
    selectedColor: 'Obsidian Black',
    selectedSize: '28L',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACV1sGJoU06LVsGuyQwAuG6Ahux7SMcc4KuQycgz51I3m1tfEnqdyJBIJY7iUz9S5WCWssVMx9lepzNuTe2PFiwLG3YokRlSxM2KtZ9pHauj1B_ET20Geo9rhKgT4mJZZ5E_0X5irCY0oqoLCCNQjuh1WLc2DuI7cwC0BGOmLBtsvbF9LMR4xztZgIWU2qP2Ts_SQLTfAtZzCrvTYsaU6QzUEbOR125UBrx2BIgvpmF0I0eF53Hqh3'
  }
];

export const BUNDLE_DEAL = {
  id: 'apex-bundle-01',
  name: 'Apex Cold-Weather Utility Bundle',
  category: 'LIMITED BUNDLE SYSTEM',
  series: 'SERIES ARCHIVE 01',
  price: 445.00,
  originalPrice: 565.00,
  savings: '$120',
  description: 'Complete alpine resilience kit. Includes the K-01 Stealth Storm Shell, Acro Modular Pant, and Orbit 28L Pack in matching matte obsidian stealth livery.',
  specs: [
    'Gore-Tex Pro 3-Layer',
    'Fidlock Closures',
    'Lifetime Warranty'
  ],
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM1aYd0ARt8sc-6_GGMklry19R-qdGxpSmAO9KzS49YbWKipwm8n4NNC9g4CpDs5D1Y1RXbafBFCjrYpbVruIii9SpYnHUXbywlqqGQdwkEYnQPFx-L6UkVHHcoEVTjePB3FoQG4GNxSUHRznoqZPkAmuw0irFM5VsKp2dOcNP1Nc-50XgMk94mUY3NsaMsqvwZOzFMlce9FpwoN8agdAj7gc0NMrgz7qPOS18uXFKEz9Nu3JWOtm0'
};

export const INITIAL_CART = [
  {
    id: 'k01-stealth-shell',
    name: 'K-01 Stealth Storm Shell',
    price: 320.00,
    size: 'L',
    color: 'Obsidian Black',
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwOQDrSGz2DmAFQe8an3sIVahqxjDa2TdM-W1jke0dMrgWZc6b_8BkA_IR-f6zr6E5-RXTSTKq1kpG8hVbB2X5wqZ1I0IukW7Yg3lhycz7I2aD9-Zl63vkR2zH54S8ZPZc7s3SRG7jdjAyYyKygkgw4Ohg4oWXofALczU5QUvbCcNoUUfQjHPJBOpNRC9zpHLQYBdcCL_3QwYebJ3L_MKZCKqVYUDg3RlxLOoYjXCIK8rPMaIrAfRQ'
  },
  {
    id: 'tech-utility-socks',
    name: 'Tech Utility Socks (3-Pack)',
    price: 24.00,
    size: 'One Size',
    color: 'Charcoal',
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6CER2YbGzpdHwjY8opjwlMayrG6_4B4uHX4cHF81TG-ZrQ59kyNSW5RAzRh2Sv3oqGkZZAS9GfDsX8ZuvApfVBeMgVrKTeda3qxhSk98ktVGuY2eJPwAA6g6DTpp6u8cvomvfShkGGuO2aDWbSfFTyxhm9FlGewedl-ynI2d_ydLhCotXdrCcwAkoHZp9yPREuOL1dNmTLr-_BruXHWYafnUKprlQ7k0Sn2iU93l9RMXnvVY_xhoP'
  }
];

export const TRUST_PILLARS = [
  {
    icon: 'flight_takeoff',
    iconColor: 'text-primary',
    title: 'Express Global Delivery',
    description: 'Tracked 2-4 day priority air shipping. Customs cleared and carbon neutralized worldwide.'
  },
  {
    icon: 'lock',
    iconColor: 'text-tertiary',
    title: 'Secure Multi-Gateway',
    description: 'End-to-end 256-bit encrypted transactions via Stripe, Apple Pay, and decentralized tokens.'
  },
  {
    icon: 'published_with_changes',
    iconColor: 'text-secondary',
    title: '30-Day Effortless Returns',
    description: 'Pre-printed return labels included in all packages. Immediate credit upon courier scan.'
  },
  {
    icon: 'headset_mic',
    iconColor: 'text-primary-fixed',
    title: '24/7 Dedicated Concierge',
    description: 'Direct channel to technical garment specialists for sizing, modular compatibility, and care.'
  }
];
