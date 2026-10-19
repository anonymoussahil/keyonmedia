'use client';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { PropsWithChildren, useMemo } from 'react';
import config from '../../config/theme.json';

export default function Providers({ children }: PropsWithChildren) {
  const theme = useMemo(() => createTheme({
    palette: {
      mode: 'light',
      primary: { main: config.colors.orange, dark: config.colors.orangeHover, contrastText: config.colors.white },
      secondary: { main: config.colors.olive, dark: config.colors.sageText, light: config.colors.peach, contrastText: config.colors.white },
      background: { default: config.colors.ivory, paper: config.colors.surface },
      text: { primary: config.colors.charcoal, secondary: config.colors.mutedText },
      divider: config.colors.border,
      success: { main: config.colors.olive },
    },
    shape: { borderRadius: Number.parseInt(config.layout.cardRadius, 10) },
    typography: {
      fontFamily: `'${config.typography.family}', ${config.typography.fallback}`,
      fontSize: Number.parseInt(config.typography.baseSize, 10),
      fontWeightRegular: config.typography.bodyWeight,
      fontWeightMedium:  config.typography.buttonWeight,
      fontWeightBold: config.typography.headingWeight,
      h1: { fontFamily: `'${config.typography.family}', ${config.typography.fallback}`, fontWeight: config.typography.headingWeight, letterSpacing: config.typography.headingLetterSpacing },
      h2: { fontFamily: `'${config.typography.family}', ${config.typography.fallback}`, fontWeight: config.typography.headingWeight, letterSpacing: config.typography.headingLetterSpacing },
      h3: { fontFamily: `'${config.typography.family}', ${config.typography.fallback}`, fontWeight: config.typography.headingWeight, letterSpacing: config.typography.headingLetterSpacing },
      button: { fontFamily: `'${config.typography.family}', ${config.typography.fallback}`, fontWeight: config.typography.buttonWeight, textTransform: 'none' },
    },
    components: {
      MuiButton: { styleOverrides: { root: { borderRadius: config.layout.buttonRadius, padding: '12px 19px', boxShadow: 'none', transition: `transform ${config.motion.hoverDuration} ease, box-shadow ${config.motion.hoverDuration} ease`, '&:hover': { transform: `translateY(${config.motion.hoverLift})`, boxShadow: '0 9px 22px rgba(56,53,51,.13)' } } } },
      MuiCard: { styleOverrides: { root: { backgroundImage: 'none' } } },
    },
  }), []);
  return <ThemeProvider theme={theme}><CssBaseline />{children}</ThemeProvider>;
}
