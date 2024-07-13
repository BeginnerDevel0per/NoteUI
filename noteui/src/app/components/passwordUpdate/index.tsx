import React from 'react'
import { styles } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Button, TextInput } from '../index';

function PasswordUpdate() {
    const classes = styles();
    return (
        <div className={classes.Form}>
            <form>
                <div className={classes.InputGroup}>
                    <label>Şifre:</label>
                    <TextInput placeHolder='Şimdiki Şifre' type='password' />
                </div>
                <div className={classes.InputGroup}>
                    <label>Yeni Şifre:</label>
                    <TextInput placeHolder='Yeni Şifre' type='password' />
                </div>
                <div className={classes.InputGroup}>
                    <label>Yeni Şifre Tekrar:</label>
                    <TextInput placeHolder='Yeni Şifre Tekrar' type='password' />
                </div>
                <div className={classes.submitButton}>
                    <Button width={120} height={40} fontSize='large' type='submit'>Değiştir</Button>
                </div>
            </form>
            <span><FontAwesomeIcon icon={faTriangleExclamation} /> Şifre değişikliği durumunda tüm oturumlar kapatılır...</span>
        </div>
    )
}
export default PasswordUpdate


