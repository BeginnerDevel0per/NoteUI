import { createUseStyles } from 'react-jss';


export const styles = createUseStyles(
    {
        container: {
            display: "flex",
            gap: 10
        }, title: {
            marginBottom: 0,
            paddingBottom: 0,
            "& h4": {
                marginBottom: 2,
                paddingBottom: 0,
            }
        },
        hr: {
            borderRadius: 20,
            border: "1px solid #582040",
            color: "",
            marginTop: 0,
            marginBottom: 10,
            paddingBottom: 0,
        },
        box: {
            padding: 5,
            borderRadius: 5,
            border: "1px solid gray",
            overflow: "hidden",
            overflowY: "auto",
            width: "100%",
            height: 400,
            backgroundColor: (theme: any) => theme.BackgroundColour,
        },
        boxTitle: {
            marginLeft: 30,
        },
        row: {
            width: "100%"
        },
        todo: {
            borderRadius: 5,
            padding: 10,
            backgroundColor: (theme: any) => theme.inputBackgroundColor,
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& span": {
                fontSize: "small",
                margin: 10,
                width: "80%",
            },
            "& button": {
                borderRadius: 50,
            }
        }, buttonGroup: {
            display: "flex",
            gap: 3,
        },
        inputGroup: {
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            gap: 5,
            width: "100%",
            "& input": {
                width: "100%",
                height: 10,
                fontSize: "small"
            }
        }, "@media(max-width:1000px)": {
            container: {
                flexWrap: "wrap",
                paddingBottom: 100,
            }
        }


    }
)