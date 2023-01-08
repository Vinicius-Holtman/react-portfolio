import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles"

type TokenProps = "dark" | "light"

// color design tokens
export const tokens = (mode: TokenProps) => ({
  ...(mode === 'dark' ? {
    grey: {
      100: "#E1E1E6",
      300: "#C4C4CC",
      400: "#8D8D99",
      500: "#7C7C8A",
      600: "#323238",
      700: "#29292E",
      800: "#202024",
      900: "#121214"
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
      900: "#001b13"
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
    })
})

export const themeSettings = (mode: TokenProps) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode,
      ...(mode === "dark" ? {
        primary: {
          main: colors.green[400],
          light: colors.green[400],
        }, 
        secondary: {
          main: colors.green[500]
        },
        neutral: {
          dark: colors.grey[700],
          main: colors.grey[500],
          light: colors.grey[300]
        },
        background: {
          default: colors.grey[900],
          paper: colors.grey[900]
        }
      } : {
        primary: {
          main: colors.green[300]
        },
        secondary: {
          main: colors.green[500]
        },
        neutral: {
          dark: colors.grey[700],
          main: colors.grey[500],
          light: colors.grey[100]
        },
        background: {
          default: colors.grey[900],
          paper: colors.grey[900]
        }
      })
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 40
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 32
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 24
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","), 
        fontSize: 14
      }
    }
  }
};

// Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => { }
})

export const useMode = () => {
  const [mode, setMode] = useState<TokenProps>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      }
    }),
    [],
  )

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return { theme, colorMode }
}