import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  "@global": {
    body: {
      margin: 0,
    }
  },
  mainContainer: {
    color: (theme: any) => theme.fontColor,
    transition: "0.5s ease",
    margin: 0,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    "& a": {
      color: (theme: any) => theme.fontColor,
      "&:hover": {
        color: "rgba(200, 200, 200)",
      },
    },
    "& button": {
      color: "rgb(200,200,200)",
    },
  }
})