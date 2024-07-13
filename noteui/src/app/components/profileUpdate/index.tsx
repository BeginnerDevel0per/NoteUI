import React from 'react'
import { styles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { Button, TextInput } from '../index';
function ProfileUpdate() {

    const classes = styles();
    return (
        <div className={classes.Form}>
            <form >
                <div className={classes.InputGroup}>
                    <label>Kullanıcı Adı:</label>
                    <TextInput placeHolder='Kullanıcı Adı' type='text' />
                </div>
                <div className={classes.InputGroup}>
                    <label>E-Posta:</label>
                    <TextInput placeHolder='E-Posta' type='email' />
                </div>
                <div className={classes.submitButton}>
                    <Button width={120} height={40} fontSize='large' type='submit'>Güncelle</Button>
                </div>
            </form>
            <span><FontAwesomeIcon icon={faCircleQuestion} /> Buradan profil bilgilerini değiştirebilirsin...</span>
        </div>
    )
}

export default ProfileUpdate