import HttpService from "./HttpService";
import ResponseDto from "./Shared/ResponseDto";
import UpdatePasswordDto from "./Shared/UpdatePasswordDto";
import UpdateProfileDto from "./Shared/UpdateProfileDto";
import UserDto from "./Shared/UserDto";


class UserService {

    private readonly _HttpService: HttpService;
    constructor() {
        this._HttpService = new HttpService("User");

    }

    async getInformation() {
        const response: ResponseDto<UserDto> = (await this._HttpService.Get("", String(localStorage.getItem("JWT"))))?.data;
        return response;
    }

    async updateInformation(updateInformation: UpdateProfileDto) {
        const response: ResponseDto<null> = (await this._HttpService.Put("", updateInformation, String(localStorage.getItem("JWT"))))?.data;
        return response;
    }
    async updatePassword(updatePassword: UpdatePasswordDto) {
        const response: ResponseDto<null> =
            (await this._HttpService.Put("/updatepassword", updatePassword, String(localStorage.getItem("JWT"))))?.data;
        return response;
    }


    async updateProfileImage(ProfileImage: File) {
        const response: ResponseDto<null> = (await this._HttpService.FileService("/ProfileImage", ProfileImage, String(localStorage.getItem("JWT"))))?.data;
        return response;
    }
    async getProfileImage() {
        const response = await this._HttpService.GetFile("/ProfileImage", String(localStorage.getItem("JWT")));
        if (response?.status === 200)
            return response?.data;
        else
            return undefined;
    }
}

const userService = new UserService();
export { userService };