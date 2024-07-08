import { createUseStyles } from 'react-jss';

export const styles = createUseStyles(
    {
        navItem: {
            width: "100%",
            height: "50px",
            backgroundColor: "rgba(0,0,0,0.3)",
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
        navButton: {
            position: "absolute",
            left: "290px",
            top: "50px",
            zIndex: "500",
        },
        navList: {

        },
        "@media (max-width:700px)": {
            userInformation: {
                display: "none"
            },
            navButton: {
                display: "none"
            }, navList: {
                display: "flex",
            },
            navItem: {
                width: "20%",
                borderRadius: "0px",
                height: "60px",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
            },
            navLink: {
                fontWeight: "normal",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "0",
                fontSize: "small",
                textDecoration: "none",

            },
        }
    }
)