import * as Yup from 'yup';

export const LoginValidation = Yup.object().shape({
    UserName: Yup
        .string()
        .required('Kullanıcı adı gerekli')
        .min(6, 'Kullanıcı adı en az 6 karakter olmalı'),
    Password: Yup
        .string()
        .required("Şifre gerekli"),
});