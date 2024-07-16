import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
    box: {
        display: "flex",
        alignItems: "center",
        gap:5
    },
    switch: {
        position: 'relative',
        display: 'inline-block',
        width: 50,
        height: 22,
    },
    switchInput: {
        opacity: 0,
        width: 0,
        height: 0,
    },
    slider: {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ccc',
        transition: '.4s',
        '&:before': {
            position: 'absolute',
            content: '""',
            height: 15,
            width: 15,
            left: 4,
            bottom: 4,
            backgroundColor: 'white',
            transition: '.4s',
        },
    },
    sliderChecked: {
        backgroundColor: 'rgb(88, 32, 64)',
        '&:before': {
            transform: 'translateX(26px)',
        },
    },
    sliderFocus: {
        boxShadow: '0 0 1px #2196F3',
    },
    sliderRound: {
        borderRadius: 34,
        '&:before': {
            borderRadius: '50%',
        },
    },
});