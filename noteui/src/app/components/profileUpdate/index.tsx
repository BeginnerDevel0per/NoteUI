import React, { useEffect, useState } from 'react'
import { styles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { Button, TextInput } from '../index';
import { useLanguageContext } from '../../context/localization/Localization';
import { ErrorMessage, Form, Formik } from 'formik';
import { UpdateProfileValidation } from '../../validations/UpdateProfileValidation';
import UpdateProfileDto from '../../services/Shared/UpdateProfileDto';
import { userService } from '../../services/UserService';
import UserDto from '../../services/Shared/UpdateProfileDto';
function ProfileUpdate() {
    const { language } = useLanguageContext();
    const classes = styles();
    const [responseMessage, setResponseMessage] = useState("");

    //#region ApiResponse
    const [userInformation, setUserInformation] = useState<UserDto>();
    useEffect(() => {
        const apiResponse = async () => {
            const response = await userService.getInformation();
            if (response.IsSuccess)
                setUserInformation(response.Content);
        }
        apiResponse();
    }, [])
    //#endregion


    const handleSubmit = async (values: UpdateProfileDto) => {
        console.log(values);
        const response = await userService.updateInformation(values);
        if (response.IsSuccess) {
            setResponseMessage("Kullanıcı bilgileri değiştirildi.");
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
        else
            setResponseMessage(String(response.ErrorMessage));
    }



    if (!userInformation)
        return <div>Loading...</div>;
    return (
        <div className={classes.Form}>
            <Formik
                initialValues={
                    {
                        UserName: String(userInformation?.UserName),
                        Email: String(userInformation?.Email),
                    }}
                onSubmit={handleSubmit}
                validationSchema={UpdateProfileValidation}
            >
                {({ isSubmitting, values }) => (
                    <Form>
                        <div className={classes.InputGroup}>
                            <label>{language.userName}:</label>
                            <TextInput placeHolder={language.userName} name='UserName' type='text' />
                        </div>
                        <ErrorMessage name='UserName' />
                        <div className={classes.InputGroup}>
                            <label>{language.email}:</label>
                            <TextInput placeHolder={language.email} name='Email' type='email' />
                        </div>
                        <ErrorMessage name='Email' />
                        <div className={classes.submitButton}>
                            <Button width={120} height={40} fontSize='large' type='submit'>{language.update}</Button>
                        </div>
                    </Form>
                )}
            </Formik>
            <span><FontAwesomeIcon icon={faCircleQuestion} /> {language.profileInformation}</span>
            <h6>{responseMessage}</h6>
        </div >
    )
}

export default ProfileUpdate