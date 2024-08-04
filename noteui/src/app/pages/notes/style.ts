import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
    title: {
        marginTop: 50,
        display: "flex",
        justifyContent: "center",
    },
    list: {
        marginLeft: 100,
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        overflowX: "auto",
    },
    link: {
        textDecoration: "none",
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
    iconBox: {
        backgroundColor: (theme: any) => theme.inputBackgroundColor,
        width: "100%",
        height: "40%",
    },
    noteTitle: {

    },
    "@media(max-width:1000px)": {
        title: {
            marginTop: 0,
        },
        list: {
            marginLeft: 0,
            paddingBottom: 100,
            flexDirection: "column",
            justifyContent: "center"
        },
        note: {
            width: "auto",
        }
    }
})