import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { colorSchemes, typography, shadows, shape } from './hooks/themePrimitives';
import { dataDisplayCustomizations } from './customization/dataDisplay';
import { surfacesCustomizations } from './customization/surfaces'
import { feedbackCustomizations } from './customization/feedback';
import { inputsCustomizations } from './customization/inputs';
import { navigationCustomizations } from './customization/navigation';


interface AppThemeProps {
  children: React.ReactNode;
  /**
   * This is for the docs site. You can ignore it or remove it.
   */
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
}

const AppTheme: React.FC<AppThemeProps> = ({ children, disableCustomTheme, themeComponents }) => {
  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
          cssVariables: {
            colorSchemeSelector: 'data-mui-color-scheme',
            cssVarPrefix: 'template',
          },
          colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
          typography,
          shadows,
          shape,
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...themeComponents,
          },
        });
  }, [disableCustomTheme, themeComponents]);

  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
