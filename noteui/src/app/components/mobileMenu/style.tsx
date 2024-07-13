import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
    open: {
        display: "block",
    },
    close: {
        display: "none"
    },
    mobileMenu: {
        height: "100%",
        width: "100%",
    },
    navItem: {
        display: "flex",
        marginTop: 10,
        marginBottom: 10,
        width: "100%",
        height: 40,
    },
    navLink: {
        fontSize: "large",
        display: "flex",
        alignItems: "center",
        paddingLeft: 50,
        width: "100%",
        height: "100%",
        textDecoration: "none",
    },
    navLinkIcon: {
        paddingRight: 10,
    }
})