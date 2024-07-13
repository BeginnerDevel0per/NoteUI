import React from 'react'
import { styles } from './style';
interface InputProps {
    name?: string,
    type?: string,
    placeHolder?: string,
}


function TextInput({ name, type, placeHolder }: InputProps) {
    const classes = styles();
    return (
        <input className={classes.Input} type={type} placeholder={placeHolder} name={name} />
    )
}

export default TextInput