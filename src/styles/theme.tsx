import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

type TokenProps = "dark" | "light";

// color design tokens
export const tokens = (mode: TokenProps) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#E1E1E6",
          300: "#C4C4CC",
          400: "#8D8D99",
          500: "#7C7C8A",
          600: "#323238",
          700: "#29292E",
          800: "#1C1C21",
          900: "#0D0D10",
        },
        green: {
          100: "#cce7df",
          200: "#99cfbf",
          300: "#66b79f",
          400: "#00B37E",
          500: "#00875f",
          600: "#006c4c",
          700: "#005139",
          800: "#003626",
          900: "#001b13",
        },
      }
    : {
        grey: {
          100: "#121214",
          300: "#202024",
          400: "#29292E",
          500: "#323238",
          600: "#7C7C8A",
          700: "#8D8D99",
          800: "#C4C4CC",
          900: "#E1E1E6",
        },
        green: {
          100: "#001b13",
          200: "#003626",
          300: "#005139",
          400: "#006c4c",
          500: "#00875f",
          600: "#339f7f",
          700: "#66b79f",
          800: "#99cfbf",
          900: "#cce7df",
        },
      }),
});

const font = ["Poppins", "Segoe UI", "sans-serif"].join(",");

export const themeSettings = (mode: TokenProps) => {
  const colors = tokens(mode);
  const isDark = mode === "dark";

  return {
    shape: { borderRadius: 14 },
    palette: {
      mode,
      primary: {
        main: isDark ? colors.green[400] : colors.green[500],
        light: colors.green[300],
        dark: colors.green[500],
      },
      secondary: {
        main: isDark ? colors.green[500] : colors.green[600],
      },
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[300],
      },
      background: {
        default: isDark ? colors.grey[900] : "#F5F5F7",
        paper: isDark ? colors.grey[800] : "#FFFFFF",
      },
      text: {
        primary: isDark ? colors.grey[100] : "#121214",
        secondary: isDark ? colors.grey[400] : "#5C5C66",
      },
      divider: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.10)",
    },
    typography: {
      fontFamily: font,
      fontSize: 13,
      h1: { fontFamily: font, fontSize: 48, fontWeight: 700 },
      h2: { fontFamily: font, fontSize: 38, fontWeight: 700 },
      h3: { fontFamily: font, fontSize: 28, fontWeight: 700 },
      h4: { fontFamily: font, fontSize: 21, fontWeight: 600 },
      h5: { fontFamily: font, fontSize: 17, fontWeight: 500 },
      h6: { fontFamily: font, fontSize: 15, fontWeight: 400 },
      button: { textTransform: "none" as const, fontWeight: 600 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            paddingInline: 20,
            paddingBlock: 9,
            transition: "transform .2s ease, box-shadow .2s ease",
            "&:hover": { transform: "translateY(-2px)" },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            border: `1px solid ${
              isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"
            }`,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 500 },
        },
      },
    },
  };
};

// Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState<TokenProps>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode) as any), [mode]);

  return { theme, colorMode };
};
