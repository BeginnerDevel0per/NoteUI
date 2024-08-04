import { createUseStyles } from 'react-jss';




export const styles = createUseStyles({
    buttonStyle:
    {
        backgroundColor: "#582040",
        color: "white",
        width: (customButton: any) => customButton.width || 50,
        height: (customButton: any) => customButton.height || 50,
        borderRadius: 5,
        fontSize: (customButton: any) => customButton.fontSize || "normal",
        border: "none",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#582850",
        }
    }

})