import { createUseStyles } from 'react-jss';


export const styles = createUseStyles({
    Background: {
        position: "fixed",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        display: "flex",
    },
    BodyForNavActive: {
        transition: "0.5s ease",
        position: "fixed",
        right: "0",
        width: "calc(100% - 300px)",
        height: "100%",
        backgroundColor: (theme: any) => theme.bodyBackgroundColor,
        backdropFilter: "blur(10px)",
        overflowY: "auto",
    },
    BodyForNavDisable: {
        transition: "0.5s ease",
        right: "0",
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: (theme: any) => theme.bodyBackgroundColor,
        backdropFilter: "blur(10px)",
        overflowY: "auto"
    },
    headerForNavActive: {
        zIndex: 50,
        transition: "0.5s ease",
        position: "fixed",
        boxShadow: "dimgray 0px 0px 1px",
        backgroundColor: (theme: any) => theme.BackgroundColour,
        width: "300px",
        left: "0",
        height: "100%",
    },
    headerForNavDisable: {
        transition: "left 0.5s ease",
        position: "fixed",
        borderRight: "2px solid gray",
        backgroundColor: (theme: any) => theme.BackgroundColour,
        width: "300px",
        left: "-300px",
        height: "100%",
    },
    navButtonActive: {
        cursor: "pointer",
        transition: "left 0.5s ease",
        position: "absolute",
        left: "280px",
        top: "50px",
        zIndex: "1000",
        backgroundColor: "#582040",
        color: "whitesmoke",
        fontSize: 15,
        border: "none",
        borderRadius: 50,
        width: 40,
        height: 40
    },
    navButtonDisable: {
        cursor: "pointer",
        transition: "left 0.5s ease",
        position: "absolute",
        left: "0",
        top: "50px",
        zIndex: "1000",
        backgroundColor: "#582040",
        color: "whitesmoke",
        fontSize: 15,
        border: "none",
        borderRadius: 50,
        width: 40,
        height: 40
    },
    "@media (max-width:1000px)": {
        headerForNavActive: {
            bottom: "0",
            width: "100%",
            height: "auto",
            zIndex: "500",
        }, headerForNavDisable: {
            bottom: "0",
            width: "100%",
            height: "auto",
            left: "0",
            zIndex: "500",
        },
        BodyForNavActive: {
            right: "0",
            width: "100%",
            height: "100%",
        }, BodyForNavDisable: {
            right: "0",
            width: "100%",
            height: "100%",
        }, navButtonActive: {
            display: "none"
        }, navButtonDisable: {
            display: "none"
        }
    }
})