import { createUseStyles } from 'react-jss';
interface ButtonProps {
    width?: any,
    height?: any,
    fontSize?: string,
}

export const styles = createUseStyles({
    buttonStyle: (props: ButtonProps) => (
        {
            cursor: "pointer",
            marginTop: 10,
            color: "white",
            width: props.width || 50,
            height: props.height || 50,
            borderRadius: 5,
            fontSize: props.fontSize || "normal",
            backgroundColor: "#582040",
            border: "none",
            "&:hover": {
                backgroundColor: "#582850",
            }
        }
    )
})