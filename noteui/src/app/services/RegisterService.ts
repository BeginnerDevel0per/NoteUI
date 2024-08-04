import HttpService from "./HttpService";
import RegisterDto from "./Shared/RegisterDto";
import ResponseDto from "./Shared/ResponseDto";



export const UserRegister = async (RegisterDto: RegisterDto) => {
    const httpservice = new HttpService("Register");
    const response: ResponseDto<null> = (await httpservice.Post<RegisterDto>("",RegisterDto))?.data;
    return response;
}