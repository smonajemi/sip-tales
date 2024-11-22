import { CSSObject } from '@mui/styled-engine';

export interface ApplyStyles<K extends string> {
  (key: K, styles: CSSObject): CSSObject;
}

/**
 * A utility to style components specifically for dark mode.
 * It assumes the app is only in dark mode and removes multi-color mode support.
 *
 * @example
 * 1. using with `styled`:
 * ```tsx
 *   const Component = styled('div')(({ theme }) => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *       background: '#1c1c1c',
 *       color: '#fff',
 *     }),
 *   ]);
 * ```
 *
 * @example
 * 2. using with `sx` prop:
 * ```tsx
 *   <Box sx={theme => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *        background: '#1c1c1c',
 *        color: '#fff',
 *      }),
 *     ]}
 *   />
 * ```
 */
export default function applyStyles<K extends string>(
  this: {
    palette: { mode: 'dark' };
    vars?: Record<string, any>;
    colorSchemes?: Record<string, any>;
    getColorSchemeSelector?: (scheme: string) => string;
  },
  _key: K,
  styles: CSSObject
): CSSObject {
  // Handle styles when CSS variables are enabled
  if (this.vars) {
    if (!this.colorSchemes?.dark || typeof this.getColorSchemeSelector !== 'function') {
      return {};
    }
    let selector = this.getColorSchemeSelector('dark');
    if (selector === '&') {
      return styles;
    }
    if (selector.includes('data-') || selector.includes('.')) {
      selector = `*:where(${selector.replace(/\s*&$/, '')}) &`;
    }
    return {
      [selector]: styles,
    };
  }

  // Directly apply styles if the mode is 'dark'
  if (this.palette.mode === 'dark') {
    return styles;
  }

  return {};
}
