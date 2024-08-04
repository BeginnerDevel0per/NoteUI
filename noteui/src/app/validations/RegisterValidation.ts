import * as Yup from 'yup';


export const RegisterValidation = Yup.object().shape({
    UserName: Yup
        .string()
        .required('Kullanıcı adı gerekli')
        .min(6, 'Kullanıcı adı en az 3 karakter olmalı'),
    Email: Yup
        .string()
        .email('Geçerli bir e-posta adresi girin')
        .required('E-posta gerekli'),
    Password: Yup
        .string()
        .required("Şifre gerekli"),
    PasswordAgain: Yup
        .string()
        .required("Şifre Tekrar Gerekli")
        .oneOf([Yup.ref('Password')], "Şifreler Uyuşmuyor.")
});