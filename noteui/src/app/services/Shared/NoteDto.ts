export default class NoteDto {

    NoteId: string;

    Content: string;

    Title: string;

    createDate!: string;

    constructor(noteId: string, content: string, title: string) {
        this.NoteId = noteId;
        this.Content = content;
        this.Title = title;
    }
}