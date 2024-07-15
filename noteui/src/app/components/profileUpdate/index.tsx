import React from 'react'
import { styles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { Button, TextInput } from '../index';
import { useLanguageContext } from '../../context/localization/Localization';
function ProfileUpdate() {
    const { language } = useLanguageContext();
    const classes = styles();
    return (
        <div className={classes.Form}>
            <form >
                <div className={classes.InputGroup}>
                    <label>{language.userName}:</label>
                    <TextInput placeHolder={language.userName} type='text' />
                </div>
                <div className={classes.InputGroup}>
                    <label>{language.email}:</label>
                    <TextInput placeHolder={language.email} type='email' />
                </div>
                <div className={classes.submitButton}>
                    <Button width={120} height={40} fontSize='large' type='submit'>{language.update}</Button>
                </div>
            </form>
            <span><FontAwesomeIcon icon={faCircleQuestion} /> {language.profileInformation}</span>
        </div>
    )
}

export default ProfileUpdate