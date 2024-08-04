import * as Yup from 'yup';


export const UpdatePasswordValidation = Yup.object().shape({
    Password: Yup
        .string()
        .required('Şifre gerekli.')
        .min(6, 'Şifre en az 6 karakter olmalı.'),
    NewPassword: Yup
        .string()
        .required('Yeni şifre gerekli.')
        .min(6, 'Yeni şifre en az 6 karakter olmalı.'),
    NewPasswordAgain: Yup
        .string()
        .required('Yeni şifre tekrar gerekli.')
        .min(6, 'Yeni şifre en az 6 karakter olmalı.').oneOf([Yup.ref('NewPassword')], "Şifreler Uyuşmuyor."),
});