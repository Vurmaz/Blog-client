import { createTheme, responsiveFontSizes } from '@mui/material/styles'
export let theme = createTheme({
    palette: {
        primary : {
            main : '#726A95',
        },
        secondary : {
            main: '#f47c7c',
        },
        third: {
          main:'#F4EBC1'
        }
    },
    typography: {
      fontFamily: [
        'Noto Serif',
        'serif',
      ].join(','),
  }
})
theme = responsiveFontSizes(theme)