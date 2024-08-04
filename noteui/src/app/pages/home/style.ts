import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
    welcomeText: {
        marginTop: 50,
        display: "flex",
        justifyContent: "center",
    },
    title: {
        marginBottom: 0,
        paddingBottom: 0,
        "& h4": {
            marginBottom: 0,
            paddingBottom: 0,
        }
    },
    hr: {
        borderRadius: 20,
        border: "1px solid #582040",
        color: "",
        marginTop: 0,
        marginBottom: 10,
        paddingBottom: 0,
    },
    list: {
        display: "flex",
        justifyContent: "start",
        flexWrap: "nowrap",
        gap: 10,
        overflowX: "auto",
    },
    link: {
        textDecoration: "none",
    },
    iconBox: {
        backgroundColor: (theme: any) => theme.inputBackgroundColor,
        width: "100%",
        height: "40%",
        "& svg": {

        }
    },
    noteTitle: {

    },
    note: {
        marginBottom: 10,
        height: 150,
        width: 150,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: (theme: any) => theme.BackgroundColour,
        border: (theme: any) => theme.inputBorder,
        fontSize: "small",
        "&:hover": {
            border: "1px solid rgb(88, 32, 64)",
        },
        "& h2": {
            position: "relative",
            top: 40,
            paddingLeft: 15,
            fontSize: 30,
            padding: 0,
            margin: 0
        },
        "& h4": {
            position: "relative",
            display: "-webkit-box",
            top: 15,
            paddingRight: 10,
            paddingLeft: 10,
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "2",
            padding: 0,
            margin: 0
        }
    },
    "@media(max-width:1000px)": {
        title: {
            marginTop: 0,
        },
        note: {
            Width: "100%"
        }
    }
})