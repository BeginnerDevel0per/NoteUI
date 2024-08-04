export default class ResponseDto<T> {

    IsSuccess?: boolean;
    Content?: T;
    ErrorMessage?: string
    constructor(model?: T, isSuccess?: boolean, errorMessage?: string) {
        this.IsSuccess = isSuccess;
        this.Content = model;
        this.ErrorMessage = errorMessage;
    }
}