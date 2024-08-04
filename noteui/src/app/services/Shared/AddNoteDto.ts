

export default class AddNoteDto {

    Content!: string;

    Title!: string;






    constructor(title: string, content: string) {
        this.Title = title;
        this.Content = content;
    }

}