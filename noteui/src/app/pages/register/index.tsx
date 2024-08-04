import React, { useState } from 'react'
import { Button, TextInput } from '../../components/index';
import { styles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form, ErrorMessage } from 'formik';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { useThemeContext } from '../../context/theme/Theme';
import { UserRegister } from '../../services/RegisterService';
import RegisterDto from '../../services/Shared/RegisterDto';
import { useNavigate } from 'react-router-dom';
import { RegisterValidation } from '../../validations/RegisterValidation';

function Register() {
    const { theme } = useThemeContext();
    const classes = styles(theme);
    const [informationText, setInformationText] = useState("");
    const navigate = useNavigate();



    const handleSubmit = async (values: RegisterDto) => {
        const response = await UserRegister(new RegisterDto(
            values.UserName,
            values.Email,
            values.Password,
            values.PasswordAgain
        ));
        console.log(values);
        if (response.IsSuccess) {
            setInformationText("Kayıt başarılı.Giriş giriş sayfasına yönlendiriliyor...");
            setTimeout(() => navigate("/Login"), 2000);
        }
        else
            setInformationText(String(response.ErrorMessage));
    }
    return (
        <div className={classes.box}>
            <div className={classes.logo}>
                <FontAwesomeIcon icon={faKeyboard} />
                <h6>NoteApp</h6>
            </div>
            <div className={classes.loginForm}>
                <Formik
                    initialValues={
                        {
                            UserName: "",
                            Email: "",
                            Password: "",
                            PasswordAgain: ""
                        }}
                    validationSchema={RegisterValidation}
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
                                <label>E-Posta:</label>
                                <TextInput
                                    name='Email'
                                    placeHolder='E-postanı gir'
                                    type='email' />
                            </div>
                            <div className={classes.validationMessage}>
                                <ErrorMessage name="Email" />
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
                            <div className={classes.inputGroup}>
                                <label>Şifre Tekrar:</label>
                                <TextInput
                                    name='PasswordAgain'
                                    placeHolder='Şifreni tekrar gir'
                                    type='password' />
                            </div>
                            <div className={classes.validationMessage}>
                                <ErrorMessage name="PasswordAgain" />
                            </div>
                            <div className={classes.loginButton}>
                                <Button
                                    width={150} height={40} type="submit" >
                                    Kayıt Ol
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div>
                {informationText}
            </div>
            <div className={classes.information}>
                <span>Zaten bir hesabın var mı?</span><a href='/login'> Buradan giriş yapabilirsin.</a>
            </div>
        </div >
    )
}

export default Register