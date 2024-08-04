export default class RegisterDto {
  
     UserName: string;
    
     Email: string;
  
     Password: string;
 
     PasswordAgain: string;

    constructor(usernName: string, email: string, password: string, passwordAgain: string) {
        this.UserName = usernName;
        this.Email = email;
        this.Password = password;
        this.PasswordAgain = passwordAgain;
    }
}