import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
    Input: {
        width: "100%",
        backgroundColor: "rgba(20,20,20)",
        border: "3px solid rgba(45,45,45)",
        color: "white",
        fontSize: "large",
        padding: 10,
        borderRadius: 5,
        "&:focus": {
            border: "3px solid #582040",
            outline: "none",
        },
    },
})