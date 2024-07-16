import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
    box: {
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        backgroundColor: (theme: any) => theme.BackgroundColour,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 10,
        display: "flex",
        height: "750px",
        width: "500px",
    },
    logo: {
        display: "flex",
        flexDirection: "column",
        color: "",
        alignItems: "center",
        "& svg": {
            fontSize: "90px",
        }, "& h6": {
            margin: 0,
            fontSize: "50px",
        }
    },
    inputGroup: {
        marginTop: 25,
        paddingRight: "25px",
        width: "auto",
    },
    loginForm: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    loginButton: {
        display: "flex",
        justifyContent: "end",
    },
    information: {
        marginTop: 30,
        marginBottom: 80,
        "& a": {
            color: "white",
            textDecoration: "none",
        }
    },
    "@media(max-width:1000px)": {
        box: {
            width: "100%",
            height: "100%",
            borderRadius: 0,
        },
        information: {
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
        },
        inputGroup: {
            marginRight: 30,
            marginLeft: 30,
        },
        loginButton: {
            marginRight: 30,
        }
    }
})