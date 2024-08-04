import * as Yup from 'yup';


export const UpdateProfileValidation = Yup.object().shape({
    UserName: Yup
        .string()
        .required('Kullanıcı adı gerekli')
        .min(6, 'Kullanıcı adı en az 6 karakter olmalı'),
    Email: Yup
        .string()
        .email('Geçerli bir e-posta adresi girin')
        .required('E-posta gerekli'),
});