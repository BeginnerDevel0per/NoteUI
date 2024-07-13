import { createUseStyles } from 'react-jss';


export const styles = createUseStyles({
    Form: {
        marginRight: 100,
        marginLeft: 100
    },
    InputGroup: {
        marginTop: 25,
        marginRight: 25
    },
    submitButton: {
        marginTop: 13,
        display: "flex",
        justifyContent: "end"
    }, "@media(max-width:1000px)": {
        Form: {
            marginRight: 30,
            marginLeft: 30
        }
    }
})