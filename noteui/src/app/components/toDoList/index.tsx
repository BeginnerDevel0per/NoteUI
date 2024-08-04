import React from 'react'
import { styles } from './style';
import { useThemeContext } from '../../context/theme/Theme';
import TextInput from '../textInput';
import { ErrorMessage, Form, Formik } from 'formik';
import UserDto from '../../services/Shared/UpdateProfileDto';
import Button from '../button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { useLanguageContext } from '../../context/localization/Localization';
interface ToDo {
    todo: string;
}
function ToDoList() {
    const { theme } = useThemeContext();
    const classes = styles(theme);
    const { language } = useLanguageContext();
    const handleSubmit = (todo: ToDo) => {

    };
    return (
        <>
            <div className={classes.title}>
                <h4>{language.yourTaskList}</h4>
            </div>
            <hr className={classes.hr} />
            <div className={classes.container}>
                <div className={classes.box}>
                    <div className={classes.row}>
                        <Formik
                            initialValues={{
                                todo: "",
                            }}
                            validationSchema={null}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, handleSubmit }) => (
                                <Form>
                                    <div className={classes.inputGroup}>
                                        <TextInput
                                            name='todo'
                                            placeHolder='Yeni yapılacak ekle'
                                            type='text' />
                                        <Button width={30} height={30}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></Button>
                                    </div>
                                    <ErrorMessage name="todo" />

                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className={classes.todo}>
                        <div>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem eveniet non doloribus commodi. Fugit </span>
                        </div>
                        <div className={classes.buttonGroup}>
                            <Button width={30} height={30}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></Button>
                            <Button width={30} height={30}><FontAwesomeIcon icon={faX}></FontAwesomeIcon></Button>
                        </div>
                    </div>
                </div>
                <div className={classes.box}>
                    <div className={classes.todo}>
                        <div>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem eveniet non doloribus commodi. Fugit </span>
                        </div>
                        <div className={classes.buttonGroup}>
                            <Button width={30} height={30}><FontAwesomeIcon icon={faX}></FontAwesomeIcon></Button>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default ToDoList;