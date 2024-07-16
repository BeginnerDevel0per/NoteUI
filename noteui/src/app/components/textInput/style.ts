import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
    Input: {
        width: "100%",
        backgroundColor: (theme: any) => theme.inputBackgroundColor,
        border: (theme: any) => theme.inputBorder,
        color: (theme: any) => theme.fontColor,
        fontSize: "large",
        padding: 10,
        borderRadius: 5,
        "&:focus": {
            border: "3px solid #582040",
            outline: "none",
        },
    },
})