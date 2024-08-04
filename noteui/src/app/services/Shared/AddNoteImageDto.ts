export default class AddNoteImageDto {

    NoteId: string;

    File: File;


    constructor(noteId: string, file: File) {
        this.NoteId = noteId;
        this.File = file;
    }
}