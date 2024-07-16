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
    themeSwitch: {
        display: "flex",
        width: "100%",
        marginRight: 20,
        justifyContent: "end",
        alignItems: "center",
    },
    navItem: {
        display: "flex",
        width: "100%",
        height: 50,
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