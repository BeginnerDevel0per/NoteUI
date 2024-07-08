import { createUseStyles } from 'react-jss';
import BackgroundImage from '../../Assets/black-background-with-leaves-vegetation-texture.jpg';

export const styles = createUseStyles({
    Background: {
        position: "relative",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        display: "flex",
    },
    Body: {
        position: "relative",
        width: "calc(100% - 300px)",
        height: "100%",
        backgroundColor: "rgba(20,20,20,0.85)",
    },
    Header: {
        borderRight: "1px solid rgba(65,65,65)",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        backgroundColor: "rgba(20,20,20)",
        width: "300px",
    }, "@media (max-width:700px)": {
        Header: {
            position: "fixed",
            bottom: "0",
            width: "100%",
            zIndex: "300",
        },
        Body: {
            width: "100%",
        }
    }

})