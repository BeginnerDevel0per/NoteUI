import React, { useState } from 'react'
import { styles } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Button, TextInput } from '../index';
import { useLanguageContext } from '../../context/localization/Localization';
import { ErrorMessage, Form, Formik } from 'formik';
import { UpdatePasswordValidation } from '../../validations/UpdatePasswordValidation';
import { userService } from '../../services/UserService';
import UpdatePasswordDto from '../../services/Shared/UpdatePasswordDto';
import { useNavigate } from 'react-router-dom';

function PasswordUpdate() {
    const navigate = useNavigate();
    const classes = styles();
    const { language } = useLanguageContext();
    const [responseMessage, setResponseMessage] = useState("");


    const handleSubmit = async (values: UpdatePasswordDto) => {
        const response = await userService.updatePassword(values);
        if (response.IsSuccess) {
            setTimeout(() => {
                setResponseMessage("Şifre değişikliği başarılı.tüm oturumlardan çıkış yapılacak...");
            }, 3000);
            localStorage.removeItem("JWT");
            navigate("/Login");
        }
        else
            setResponseMessage(String(response.ErrorMessage));
    }
    return (
        <div className={classes.Form}>
            <Formik
                initialValues={
                    {
                        Password: "",
                        NewPassword: "",
                        NewPasswordAgain: ""
                    }}
                validationSchema={UpdatePasswordValidation}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className={classes.InputGroup}>
                            <label>{language.password}:</label>
                            <TextInput name='Password' placeHolder={language.password} type='password' />
                        </div>
                        <ErrorMessage name='Password' />
                        <div className={classes.InputGroup}>
                            <label>{language.newPassword}:</label>
                            <TextInput name='NewPassword' placeHolder={language.newPassword} type='password' />
                        </div>
                        <ErrorMessage name='NewPassword' />
                        <div className={classes.InputGroup}>
                            <label>{language.newPasswordAgain}:</label>
                            <TextInput name='NewPasswordAgain' placeHolder={language.newPasswordAgain} type='password' />
                        </div>
                        <ErrorMessage name='NewPasswordAgain' />
                        <div className={classes.submitButton}>
                            <Button width={120} height={40} fontSize='large' type='submit'>{language.change}</Button>
                        </div>
                    </Form>
                )}

            </Formik>
            <span><FontAwesomeIcon icon={faTriangleExclamation} /> {language.passwordInformation}</span>
            <br></br>
            {responseMessage}
        </div>
    )
}
export default PasswordUpdate


