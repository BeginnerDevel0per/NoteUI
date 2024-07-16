import React from 'react'
import { styles } from './style';
import { Button, TextInput } from '../../components/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { useThemeContext } from '../../context/theme/Theme';
function Login() {
    const { theme } = useThemeContext();
    const classes = styles(theme);
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
                        <label>Şifre:</label>
                        <TextInput placeHolder='Şifreni gir' type='password' />
                    </div>
                    <div className={classes.loginButton}>
                        <Button width={150} height={40} type='submit' >Giriş</Button>
                    </div>
                </form>
            </div>
            <div className={classes.information}>
                <span>Henüz bir hesabın yok mu?</span><a href='/register'> Buradan kayıt olabilirsin.</a>
            </div>
        </div>
    )
}

export default Login