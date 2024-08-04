
export default class UserDto {

    UserName!: string;

    Email!: string;


    ProfileImage!: string;


    constructor(userName: string, email: string, profileImage: string) {
        this.UserName = userName;
        this.Email = email;
        this.ProfileImage = profileImage;
    }
}



