

import HttpService from './HttpService';
import JWTContent from './Shared/JWTContent';
import ResponseDto from './Shared/ResponseDto';



export const login = async (UserName: string, Password: string) => {
    const httpservice = new HttpService("Login");

    
    const response: ResponseDto<JWTContent> = (await httpservice.Get("/", undefined, { UserName, Password }))?.data;
    return response;
}
