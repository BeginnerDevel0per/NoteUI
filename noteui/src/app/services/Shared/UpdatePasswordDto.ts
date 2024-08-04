export default class UpdatePasswordDto {

    Password!: string;

    NewPassword!: string;

    NewPasswordAgain!: string;


    constructor(password: string, newPassword: string, newPasswordAgain: string) {
        this.Password = password;
        this.NewPassword = newPassword;
        this.NewPasswordAgain = newPasswordAgain;
    }

}