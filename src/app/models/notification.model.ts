export class SnackNotification {
    public text: string;
    public title: string;
    public timeAgo: string;
    public type: string;

    constructor(title: string, text: string, timeAgo: string, type: string) {
        this.text = text;
        this.title = title;
        this.timeAgo = timeAgo;
        this.type = type || '#4e3cfd'
    }

}
