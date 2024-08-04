import { createUseStyles } from 'react-jss';
import { Theme } from '../../context/theme/Theme';

export const styles = createUseStyles({
    editor: {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: (theme: any) => theme.editorBackgroundColor,
        "& svg": {
            color: "black",
        },
        "& .ce-popover__container": {
            backgroundColor: (theme: any) => theme.BackgroundColour,
            color: (theme: any) => theme.BackgroundColour,
            "& .ce-popover__search": {
                backgroundColor: (theme: any) => theme.inputBackgroundColor,
                "& input": {
                    color: (theme: any) => theme.fontColor,
                },
            },
            "& .ce-popover-item": {
                color: (theme: any) => theme.fontColor,
                "& svg": {
                    color: (theme: any) => theme.fontColor,
                }
            },
            "& .ce-popover-item:hover": {
                backgroundColor: (theme: any) => theme.editorBackgroundColor,
            }
        }
    },
    titleInput: {
        color: (theme: any) => theme.fontColor,
        paddingTop: 50,
        paddingLeft: 125,
        display: "flex",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "xx-large",
        "&:focus": {
            outline: "none",
        },
    },
    container: {
        width: 900,
    }, "@media(max-width:1000px)": {
        container: {
            width: "90%",
        }, editor: {
            marginBottom: 60,
        },
        titleInput: {
            width: "100%",
            paddingLeft: 0,
        }
    }

})