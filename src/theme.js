import { createTheme } from '@mui/material/styles'

const brand = {
  deep: '#0c4a6e',
  main: '#0e7490',
  light: '#22d3ee',
  muted: '#e0f2fe',
}

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brand.main,
      dark: brand.deep,
      light: brand.light,
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7c3aed',
      light: '#a78bfa',
      dark: '#5b21b6',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f4f8fb',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
    divider: 'rgba(15, 23, 42, 0.08)',
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 22,
          transition: 'transform 160ms ease, box-shadow 200ms ease, background-color 200ms ease',
        },
        containedPrimary: {
          boxShadow: '0 10px 24px rgba(14, 116, 144, 0.28)',
          '&:hover': {
            boxShadow: '0 14px 28px rgba(14, 116, 144, 0.35)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid',
          borderColor: 'rgba(15, 23, 42, 0.06)',
          boxShadow: '0 12px 40px rgba(15, 23, 42, 0.06)',
          transition: 'box-shadow 220ms ease, transform 200ms ease, border-color 200ms ease',
          '&:hover': {
            boxShadow: '0 18px 48px rgba(14, 116, 144, 0.12)',
            transform: 'translateY(-2px)',
            borderColor: 'rgba(14, 116, 144, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          color: '#0f172a',
          borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
          boxShadow: 'none',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
})
