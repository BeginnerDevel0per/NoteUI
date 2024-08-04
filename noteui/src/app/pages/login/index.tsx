import React, { useState } from 'react'
import { styles } from './style';
import { Button, TextInput } from '../../components/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { useThemeContext } from '../../context/theme/Theme';
import { login } from '../../services/LoginService';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Form, Formik } from 'formik';
import { LoginValidation } from '../../validations/LoginValidation';
function Login() {
    const navigate = useNavigate();
    const { theme } = useThemeContext();
    const classes = styles(theme);
    const [apiErrorMessage, setapiErrorMessage] = useState("");
    interface _Login {
        UserName: string;
        Password: string;
    }
    const handleSubmit = async (values: _Login) => {
        const response = await login(values.UserName, values.Password);
        if (response.IsSuccess) {
            localStorage.setItem("JWT", String(response.Content?.JWT))
            navigate("/");
        }
        else {
            setapiErrorMessage(String(response.ErrorMessage));
        }
    }
    return (
        <div className={classes.box}>
            <div className={classes.logo}>
                <FontAwesomeIcon icon={faKeyboard} />
                <h6>NoteApp</h6>
            </div>
            <div className={classes.loginForm}>
                <Formik
                    initialValues={{
                        UserName: "",
                        Password: ""
                    }}
                    validationSchema={LoginValidation}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className={classes.inputGroup}>
                                <label>Kullanıcı Adı:</label>
                                <TextInput
                                    name='UserName'
                                    placeHolder='Kullanıcı adını gir'
                                    type='text' />
                            </div>
                            <div className={classes.validationMessage}>
                                <ErrorMessage name="UserName" />
                            </div>
                            <div className={classes.inputGroup}>
                                <label>Şifre:</label>
                                <TextInput
                                    name='Password'
                                    placeHolder='Şifreni gir'
                                    type='password' />
                            </div>
                            <div className={classes.validationMessage}>
                                <ErrorMessage name="Password" />
                            </div>

                            <div className={classes.loginButton}>
                                <Button width={150} height={40} type='submit' >Giriş</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div>
                {apiErrorMessage}
            </div>
            <div className={classes.information}>
                <span>Henüz bir hesabın yok mu?</span><a href='/register'> Buradan kayıt olabilirsin.</a>
            </div>
        </div >
    )
}

export default Login