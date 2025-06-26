"use client"

import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    primary: {
      main: "#1586FD",
    },
    secondary: {
      main: "#666f73",
    },
  },
  components: {
    MuiButton: {
        defaultProps: {
            variant: "contained"
        },
        styleOverrides: {
            root: {
                padding: "10px 24px"
            }
        }
    },
    MuiContainer: {
        defaultProps: {
            maxWidth: "lg"
        }
    }
  },
  typography: {
    body1: {
        color: "#081134CC"
    }
  }
});

theme.shadows[1] = "0px 5px 22px lightgray"