export class User {
    id: number;
    username: string;
    token : string;

    constructor(id: number, username: string, token: string) {
        this.id = id;
        this.username = username;
        this.token = token;
    }

    static fromJSON(json: any): User {
        return new User(json.id, json.username, json.token);
    }

}