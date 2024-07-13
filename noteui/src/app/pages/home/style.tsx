import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
    title: {
        marginBottom: 0,
        paddingBottom: 0,
    }, hr: {
        border: "3px solid #582040",
        color: "",
        marginBottom: 0,
        paddingBottom: 0,
    },
    list: {
        marginTop: 50,
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
    },
    note: {
        padding: 10,
        height: 250,
        width: 250,
        borderRadius: 5,
        backgroundColor: "black",
        fontSize: "small",
    }, "@media(max-width:1000px)": {
        list: {
            justifyContent: "center"
        },
        note: {
            width: "100%"
        }
    }
})