import React from 'react'
import { styles } from './style';
import { useThemeContext } from '../../context/theme/Theme';
import { Field } from 'formik';
interface InputProps {
    name?: string,
    type?: string,
    placeHolder?: string,

}


function TextInput({ name, type, placeHolder }: InputProps) {
    const { theme } = useThemeContext();
    const classes = styles(theme);
    return (
        <Field autoComplete="off" className={classes.Input} type={type} placeholder={placeHolder} name={name} />
    )
}

export default TextInput