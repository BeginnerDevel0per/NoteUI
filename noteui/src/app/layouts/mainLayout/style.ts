import { createUseStyles } from 'react-jss';
import BackgroundImage from '../../assets/black-background-with-leaves-vegetation-texture.jpg';


export const styles = createUseStyles({
    Background: {
        position: "fixed",
        backgroundImage: `url(${BackgroundImage})`,
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
        backgroundColor: (theme:any)=>theme.bodyBackgroundColor,
        overflowY: "auto",
    },
    BodyForNavDisable: {
        transition: "0.5s ease",
        right: "0",
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: (theme:any)=>theme.bodyBackgroundColor,
        overflowY: "auto"
    },
    headerForNavActive: {
        transition: "0.5s ease",
        position: "fixed",
        borderRight: "1px solid rgba(65,65,65)",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        backgroundColor:  (theme:any)=>theme.BackgroundColour,
        width: "300px",
        left: "0",
        height: "100%",
    },
    headerForNavDisable: {
        transition: "left 0.5s ease",
        position: "fixed",
        borderRight: "1px solid rgba(65,65,65)",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        backgroundColor:  (theme:any)=>theme.BackgroundColour,
        width: "300px",
        left: "-300px",
        height: "100%",
    },
    navButtonActive: {
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