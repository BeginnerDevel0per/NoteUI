export default class UpdateNoteDto {

    NoteId: string;

    Content: Object;

    Title: string;

    constructor(noteId: string, content: any, title: string) {
        this.NoteId = noteId;
        this.Content = content;
        this.Title = title;
    }
}