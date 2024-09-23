import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: `#4e4e4e`,
        secondary: `#070707`,
        tertiary: `#5800ab`,
        quaternary: `#ffffff`,
    },
};

interface DefaultThemeProps {
    children: React.ReactNode;
}
function DefaultTheme({ children }: DefaultThemeProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default DefaultTheme;
