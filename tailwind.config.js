/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#0f131b",
        "surface-dim": "#0f131b",
        "surface-bright": "#353941",
        "surface-container-lowest": "#0a0e15",
        "surface-container-low": "#181c23",
        "surface-container": "#1c2027",
        "surface-container-high": "#262a32",
        "surface-container-highest": "#31353d",
        "surface-variant": "#31353d",
        "surface-tint": "#b4c5ff",
        "on-surface": "#dfe2ed",
        "on-surface-variant": "#c3c6d7",
        "inverse-surface": "#dfe2ed",
        "inverse-on-surface": "#2d3038",
        "outline": "#8d90a0",
        "outline-variant": "#434655",
        "primary": "#b4c5ff",
        "on-primary": "#002a78",
        "primary-container": "#2563eb",
        "on-primary-container": "#eeefff",
        "inverse-primary": "#0053db",
        "secondary": "#ffb95f",
        "on-secondary": "#472a00",
        "secondary-container": "#ee9800",
        "on-secondary-container": "#5b3800",
        "tertiary": "#4edea3",
        "on-tertiary": "#003824",
        "tertiary-container": "#007d55",
        "on-tertiary-container": "#bdffdb",
        "error": "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        "primary-fixed": "#dbe1ff",
        "primary-fixed-dim": "#b4c5ff",
        "on-primary-fixed": "#00174b",
        "on-primary-fixed-variant": "#003ea8",
        "secondary-fixed": "#ffddb8",
        "secondary-fixed-dim": "#ffb95f",
        "on-secondary-fixed": "#2a1700",
        "on-secondary-fixed-variant": "#653e00",
        "tertiary-fixed": "#6ffbbe",
        "tertiary-fixed-dim": "#4edea3",
        "on-tertiary-fixed": "#002113",
        "on-tertiary-fixed-variant": "#005236",
        "background": "#0f131b",
        "on-background": "#dfe2ed"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "sm": "0.25rem",
        "md": "0.5rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1.5rem",
        "full": "9999px"
      },
      spacing: {
        "margin-desktop": "3rem",
        "margin": "1rem",
        "space-xl": "2.5rem",
        "space-lg": "1.5rem",
        "space-md": "1rem",
        "space-sm": "0.5rem",
        "space-xs": "0.25rem",
        "gutter": "1.25rem",
        "gutter-desktop": "2rem"
      },
      fontFamily: {
        "label-code": ["JetBrains Mono", "monospace"],
        "label-code-xs": ["JetBrains Mono", "monospace"],
        "display-hero": ["Inter", "sans-serif"],
        "display-hero-mobile": ["Inter", "sans-serif"],
        "headline-xl": ["Inter", "sans-serif"],
        "headline-xl-mobile": ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"]
      },
      fontSize: {
        "label-code": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.05em",
            "fontWeight": "500"
          }
        ],
        "label-code-xs": [
          "10px",
          {
            "lineHeight": "14px",
            "letterSpacing": "0.08em",
            "fontWeight": "600"
          }
        ],
        "headline-xl": [
          "40px",
          {
            "lineHeight": "48px",
            "letterSpacing": "-0.025em",
            "fontWeight": "600"
          }
        ],
        "headline-xl-mobile": [
          "28px",
          {
            "lineHeight": "34px",
            "letterSpacing": "-0.02em",
            "fontWeight": "600"
          }
        ],
        "headline-lg": [
          "28px",
          {
            "lineHeight": "36px",
            "letterSpacing": "-0.02em",
            "fontWeight": "500"
          }
        ],
        "headline-md": [
          "20px",
          {
            "lineHeight": "28px",
            "letterSpacing": "-0.015em",
            "fontWeight": "500"
          }
        ],
        "body-lg": [
          "16px",
          {
            "lineHeight": "26px",
            "letterSpacing": "-0.01em",
            "fontWeight": "400"
          }
        ],
        "body-md": [
          "14px",
          {
            "lineHeight": "22px",
            "letterSpacing": "-0.005em",
            "fontWeight": "400"
          }
        ],
        "body-sm": [
          "12px",
          {
            "lineHeight": "18px",
            "letterSpacing": "0em",
            "fontWeight": "400"
          }
        ],
        "display-hero": [
          "56px",
          {
            "lineHeight": "64px",
            "letterSpacing": "-0.03em",
            "fontWeight": "600"
          }
        ],
        "display-hero-mobile": [
          "36px",
          {
            "lineHeight": "42px",
            "letterSpacing": "-0.025em",
            "fontWeight": "600"
          }
        ]
      }
    },
  },
  plugins: [],
};
