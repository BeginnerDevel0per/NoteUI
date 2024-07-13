import React from 'react'
import { Button, TextInput } from '../../components/index';
import { styles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

function Register() {
    const classes = styles();
    return (
        <div className={classes.box}>
            <div className={classes.logo}>
                <FontAwesomeIcon icon={faKeyboard} />
                <h6>NoteApp</h6>
            </div>
            <div className={classes.loginForm}>
                <form>
                    <div className={classes.inputGroup}>
                        <label>Kullanıcı Adı:</label>
                        <TextInput placeHolder='Kullanıcı adını gir' type='text' />
                    </div>
                    <div className={classes.inputGroup}>
                        <label>E-Posta:</label>
                        <TextInput placeHolder='E-postanı gir' type='email' />
                    </div>
                    <div className={classes.inputGroup}>
                        <label>Şifre:</label>
                        <TextInput placeHolder='Şifreni gir' type='password' />
                    </div>
                    <div className={classes.inputGroup}>
                        <label>Şifre Tekrar:</label>
                        <TextInput placeHolder='Şifreni tekrar gir' type='password' />
                    </div>
                    <div className={classes.loginButton}>
                        <Button width={150} height={40} type='submit' >Kayıt Ol</Button>
                    </div>
                </form>
            </div>
            <div className={classes.information}>
                <span>Zaten bir hesabın var mı?</span><a href='/login'> Buradan giriş yapabilirsin.</a>
            </div>
        </div>
    )
}

export default Register