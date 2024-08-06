
import HttpService from "./HttpService";
import NoteDto from "./Shared/NoteDto";
import ResponseDto from "./Shared/ResponseDto";
import UpdateNoteDto from "./Shared/UpdateNoteDto";
import AddNoteImageDto from './Shared/AddNoteImageDto';
import AddNoteDto from "./Shared/AddNoteDto";


class NoteService {

    private readonly _HttpService: HttpService;

    constructor() {
        this._HttpService = new HttpService("Note");

    }
    async AddNote(AddNoteDto: AddNoteDto) {
        const response: ResponseDto<NoteDto> = (await this._HttpService.Post("", AddNoteDto, String(localStorage.getItem("JWT"))))?.data;
        return response;
    }
    async GetById(NoteId: string) {
        const response: ResponseDto<NoteDto> = (await this._HttpService.Get(`/${NoteId}`, String(localStorage.getItem("JWT"))))?.data;
        return response;
    }
    async GetAll() {
        const response: ResponseDto<NoteDto[]> = (await this._HttpService.Get("", String(localStorage.getItem("JWT"))))?.data;
        return response;
    }
    async Update(UpdateNoteDto: UpdateNoteDto) {
        const reponse = await this._HttpService.Put("", UpdateNoteDto, String(localStorage.getItem("JWT")));
    }
    async Remove(NoteId: string) {
        const response: ResponseDto<null> = (await this._HttpService.Delete(`/${NoteId}`, String(localStorage.getItem("JWT"))))?.data;
        return response;
    }
    async AddImage(AddNoteImageDto: AddNoteImageDto) {
        console.log(AddNoteImageDto);
        const response: ResponseDto<null> = (await this._HttpService.FileService("/AddImage", AddNoteImageDto, String(localStorage.getItem("JWT"))))?.data;
        return response;
    }
}
const noteService = new NoteService();
export default noteService;
