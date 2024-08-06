import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  "@global": {
    body: {
      margin: 0,
    }, "::-webkit-scrollbar": {
      width: "5px",
      height: "5px",
    },
    "::-webkit-scrollbar-track": {
      borderRadius: "5px",
      background: "rgba(50,50,50)"
    },
    "::-webkit-scrollbar-thumb": {
      borderRadius: "5px",
      background: "rgba(80,80,80)",
    }
  },
  mainContainer: {
    color: (theme: any) => theme.fontColor,
    transition: "0.5s ease",
    margin: 0,
    fontFamily: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
    "& a": {
      color: (theme: any) => theme.fontColor,
    },
    "& button": {
      color: "rgb(200,200,200)",
    },
  }
})