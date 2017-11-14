export class Task {
    public id: string;
    public name: string;
    public completed: boolean;
    public dueDate: string;

    constructor(id: string, name: string, completed: boolean, dueDate: string) {
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.dueDate = dueDate;
    }

}
