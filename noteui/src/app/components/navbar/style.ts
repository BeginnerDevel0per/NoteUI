import { createUseStyles } from 'react-jss';

export const styles = createUseStyles(
    {
        themeSwitch: {
            marginBottom: 15
        },
        navItem: {
            width: "100%",
            height: "50px",
            backgroundColor: (theme: any) => theme.navItemBackgroundColour,
            marginTop: "3px",
            alignItems: "center",
            display: "flex",
            borderRadius: "5px",
            '&:hover': {
                backgroundColor: '#582040',
            }
        },
        navLink: {
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
            fontWeight: "bold",
            paddingLeft: "50px",
            fontSize: "large",
            textDecoration: "none",

        },
        navLinkIcon: {
            marginRight: "10px",
        },
        userInformation: {
            marginTop: "40px",
            marginBottom: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        },
        Title: {
            marginTop: "5px",
        },
        navList: {

        }, Mobile: {
            display: 'none',
        },
        Desktop: {
            display: 'none',
        },
        menuButton: {
            color: (theme: any) => theme.fontColor + "!important",
            cursor: "pointer",
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            width: "100%",
            height: "100%",

        },
        "@media (max-width:1000px)": {
            userInformation: {
                display: "none"
            },
            navButton: {
                display: "none"
            },
            navList: {
                display: "flex",
                width: "100%",
            },
            navItem: {
                width: "25%",
                borderRadius: "0px",
                height: "60px",
            },
            navLink: {
                fontWeight: "normal",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                paddingLeft: "0",
                fontSize: "small",
            },
            navLinkIcon: {
                marginRight: "0",
            }
        }
    }
)