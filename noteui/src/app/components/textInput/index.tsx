import React from 'react'
import { styles } from './style';
import { useThemeContext } from '../../context/theme/Theme';
interface InputProps {
    name?: string,
    type?: string,
    placeHolder?: string,
}


function TextInput({ name, type, placeHolder }: InputProps) {
    const { theme } = useThemeContext();
    const classes = styles(theme);
    return (
        <input className={classes.Input} type={type} placeholder={placeHolder} name={name} />
    )
}

export default TextInput