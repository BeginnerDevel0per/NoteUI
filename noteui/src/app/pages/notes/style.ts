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
    menubtn: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        right: 5,
        top: 5,
        "& :hover": {
            backgroundColor: (theme: any) => theme.BackgroundColour
        },
        "& button": {
            color: (theme: any) => theme.fontColor,
            fontSize: 15,
            borderRadius: 50,
            backgroundColor: "transparent"
        }
    },
    menu: {
        position: "absolute",
        backgroundColor: (theme: any) => theme.bodyBackgroundColor,
        width: 100,
        height: "auto",
        right: 3,
        top: 25,
        borderRadius: 5,
        zIndex: 5,
        "& button": {
            color:(theme: any) => theme.fontColor,
            width: "100%",
            height: 30,
            backgroundColor: "transparent",
            "& svg": {
                paddingRight: 10
            },
            "&:hover": {
                backgroundColor: (theme: any) => theme.BackgroundColour,
            }
        }
    },
    note: {
        position: "relative",
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