import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    vars: {
      palette: {
        background: {
          default: string; // Dark mode background
          paper: string;   // Slightly lighter for cards or modals
        };
        text: {
          primary: string;  // High contrast text
          secondary: string; // Subtle text color
          title: string;    // Special color for titles or headings
        };
        divider: string;     // Divider color for dark mode
        primary: {
          dark: string;     // Core primary color for dark mode
        };
        success: {
          dark: string;     // Success indicator for dark mode
        };
        grey: Record<string, string>; // Greyscale shades for dark mode
        customColor: string;          // Optional custom use
      };
      shape: {
        borderRadius: number; // Component border radius
      };
      shadows: string[];       // Shadows optimized for dark mode
    };
  }

  // Allow configuration using `createTheme`
  interface ThemeOptions {
    vars?: {
      palette?: {
        background?: {
          default?: string;
          paper?: string;
        };
        text?: {
          primary?: string;
          secondary?: string;
          title?: string;
        };
        primary?: {
          dark?: string;
        };
        success?: {
          dark?: string;
        };
        grey?: Record<string, string>;
        customColor?: string;
      };
      shape?: {
        borderRadius?: number;
      };
      shadows?: string[];
    };
  }
}
