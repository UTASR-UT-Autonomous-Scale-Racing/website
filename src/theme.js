import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    // Modern, legible stack
    fontFamily: [
      '"Inter Variable"',
      'Inter',
      'system-ui',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'ui-sans-serif',
      'sans-serif'
    ].join(','),
    // Global defaults
    fontSize: 16,                 // base = 16px
    htmlFontSize: 16,
    body1: { lineHeight: 1.65, letterSpacing: '0.01em' },
    body2: { lineHeight: 1.65, letterSpacing: '0.01em' },

    // Headings: tighter tracking + stronger weights (but not “blocky”)
    h1: { fontWeight: 750, letterSpacing: '-0.02em', lineHeight: 1.1 },
    h2: { fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 },
    h3: { fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.18 },
    h4: { fontWeight: 650, letterSpacing: '-0.01em', lineHeight: 1.22 },
    h5: { fontWeight: 600, letterSpacing: '-0.005em', lineHeight: 1.28 },
    h6: { fontWeight: 600, letterSpacing: '-0.005em', lineHeight: 1.32 },

    // Buttons: no uppercase, slightly tighter
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0.02em' },
    // Captions / overlines
    subtitle1: { letterSpacing: '0.01em' },
    subtitle2: { letterSpacing: '0.01em' },
    overline:  { letterSpacing: '0.08em', textTransform: 'uppercase' },
  },

  components: {
    // Global CSS resets & fine-tuning
    MuiCssBaseline: {
      styleOverrides: `
        html { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        body { text-rendering: optimizeLegibility; }
        ::selection { background: rgba(37, 99, 235, 0.18); }
        /* Optional: enable beautiful ligatures/kerning */
        body, button, input, textarea {
          font-feature-settings: "cv02","cv03","cv04","ss01";
          font-variation-settings: "opsz" 14;
        }
        /* Anchor offset for fixed AppBar */
        :root { --appbar-height: 64px; }
        html { scroll-padding-top: var(--appbar-height); }
      `,
    },

    // Make MUI Buttons look more modern out of the box
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingInline: '14px',
          paddingBlock: '8px',
        },
      },
    },

    // Card and Paper subtle rounding for modern feel
    MuiPaper: {
      styleOverrides: { rounded: { borderRadius: 16 } },
    },
  },
});

// Responsive type scaling (sm/md/lg breakpoints)
theme = responsiveFontSizes(theme, {
  breakpoints: ['sm', 'md', 'lg'],
  factor: 2.6,
});

export default theme;
