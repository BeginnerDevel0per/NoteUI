import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
    selectMenu: {
        position: "relative",
        width: "100%",
        height: "100%",
    },
    select: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "10px",
        position: "relative",
        "& button": {
            color: (theme: any) => theme.fontColor + "!important",
            cursor: "pointer",
            marginLeft: 10,
            fontSize: "large",
            width: "100%",
            height: "100%",
            border: "none",
            backgroundColor: "transparent",
            "& span": {
                marginRight: 10
            }
        }
    },
    optionsActive: {
        display: "auto",
        position: "absolute",
        zIndex: 1500,
        fontSize: "large",
        width: "100%",
        height: "100%",
        bottom: -45,
        "& button": {
            cursor: "pointer",
            width: "100%",
            height: 50,
            border: "none",
            backgroundColor: "black",
            "&:hover": {
                backgroundColor: "rgba(25,25,25)"
            }
        }
    },
    optionsDisable: {
        display: "none",
    }
})