import { ROLE } from "../Types/UniversalTypes";


export default class UserModel {
    public getRole(): ROLE {
        return this.role;
    }
    public setRole(value: ROLE) {
        this.role = value;
    }
    public getPassword(): string {
        return this.password;
    }
    public setPassword(value: string) {
        this.password = value;
    }
    public getEmail(): string {
        return this.email;
    }
    public setEmail(value: string) {
        this.email = value;
    }
    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }
    constructor(
        private name: string = name,
        private email: string = email,
        private password: string = password,
        private role: ROLE = role
    ) { }

}