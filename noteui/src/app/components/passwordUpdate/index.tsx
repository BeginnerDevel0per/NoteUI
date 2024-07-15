import React from 'react'
import { styles } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Button, TextInput } from '../index';
import { useLanguageContext } from '../../context/localization/Localization';

function PasswordUpdate() {
    const classes = styles();
    const { language } = useLanguageContext();
    return (
        <div className={classes.Form}>
            <form>
                <div className={classes.InputGroup}>
                    <label>{language.password}:</label>
                    <TextInput placeHolder={language.password} type='password' />
                </div>
                <div className={classes.InputGroup}>
                    <label>{language.newPassword}:</label>
                    <TextInput placeHolder={language.newPassword} type='password' />
                </div>
                <div className={classes.InputGroup}>
                    <label>{language.newPasswordAgain}:</label>
                    <TextInput placeHolder={language.newPasswordAgain} type='password' />
                </div>
                <div className={classes.submitButton}>
                    <Button width={120} height={40} fontSize='large' type='submit'>{language.change}</Button>
                </div>
            </form>
            <span><FontAwesomeIcon icon={faTriangleExclamation} /> {language.passwordInformation}</span>
        </div>
    )
}
export default PasswordUpdate


