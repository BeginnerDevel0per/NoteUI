import { createUseStyles } from 'react-jss';
export const styles = createUseStyles({
   box: {
      width: 850,
      height: 600,
      borderRadius: 10,
      backgroundColor: (theme: any) => theme.BackgroundColour,
      display: "flex",
   },
   settingMenu: {
      backgroundColor: (theme: any) => theme.accountMenuBackgroundColour,
      borderRadius: "10px 0 0 10px",
      width: 300,
      paddingTop: 10,
   },
   settingMenuItem: {
      height: 50,
      '&:hover': {
         backgroundColor: '#582040',
      }
   },
   settingMenuLink: {
      width: "100%",
      height: "100%",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
   },
   settingMenuBody: {
      width: "100%",
      height: "100%",
   },
   information: {
      borderRadius: "0 10px 0 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "120px",
      backgroundColor: (theme: any) => theme.accountInformation,
   },
   userImage: {
      marginRight: 20
   }, userInformation: {
      display: "flex",
      flexDirection: "column",
   },
   variable: {

   },
   languageMenu: {
      marginBottom: 20
   },
   fileInput: {
      marginTop: 10,
      display: "flex",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      fontSize: "small",
      backgroundColor: "#582040",
      width: 150,
      height: 35,
      cursor: "pointer",
      "&:hover": {
         backgroundColor: "#582850",
      }
   }, hidden: {
      display: "none",
   },
   profileImage: {
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      width: 80,
      height: 80,
      objectFit: "cover",
      borderRadius: 50
   },
   "@media(max-width:1000px)": {
      box: {
         width: "100%",
         height: "auto",
         borderRadius: "none",
         display: "flex",
         flexDirection: "column"
      },
      settingMenu: {
         borderRadius: "0 0 0 0",
         width: "100%",
         height: "100%",
         paddingTop: 10,
      },
      settingMenuBody: {
         width: "100%",
         height: "100vh",
      },
      information: {
         borderRadius: "0 0 0 0",
         fontSize: "small",
      },
      variable: {
         marginRight: 30,
         marginLeft: 30
      },
   }
})