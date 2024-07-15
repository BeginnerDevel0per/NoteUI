import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
    container: {
        marginLeft: 0,
        marginRight: 0,
        height: "100%"
    },
    JustifyContent: {
        display: "flex",
        justifyContent: "center"
    },
    AlignItems: {
        alignItems: "center",
    },
    "@media(max-width:1000px)": {
        AlignItems: {
            alignItems: "start",
        },
    }
})