// src/theme.d.ts
import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    vars?: {
      palette: {
        background: {
          default: string;
          paper: string;
        };
        divider: string;
        text: {
          primary: string;
          secondary: string;
        };
        primary: {
          main: string;
          light: string;
          dark: string;
        };
        success: {
          main: string;
          light: string;
          dark: string;
        };
        grey: Record<string, string>;
        defaultChannel: string;  // Added defaultChannel
      };
      shape: {
        borderRadius: number;
      };
      shadows: string[];  // Added shadows
    };
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    vars?: {
      palette?: {
        background?: {
          default?: string;
          paper?: string;
        };
        divider?: string;
        text?: {
          primary?: string;
          secondary?: string;
        };
        primary?: {
          main?: string;
          light?: string;
          dark?: string;
        };
        success?: {
          main?: string;
          light?: string;
          dark?: string;
        };
        grey?: Record<string, string>;
        defaultChannel?: string;  // Added defaultChannel
      };
      shape?: {
        borderRadius?: number;
      };
      shadows?: string[];  // Added shadows
    };
  }
}
