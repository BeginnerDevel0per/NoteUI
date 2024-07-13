import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
    container: {
        marginLeft: 50,
        marginRight: 50,
        height:"100%"
    },
    JustifyContent: {
        display: "flex",
        justifyContent: "center"
    },
    AlignItems: {
        alignItems: "center",
    },
    "@media(max-width:1000px)": {
        container: {
            marginTop: 50,
            marginLeft: 5,
            marginRight: 5,
        },
        AlignItems: {
            alignItems: "start",
        },
    }
})