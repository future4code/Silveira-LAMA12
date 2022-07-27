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
    public getId() {
       return this.id 
    }
    public setId(value: string) {
        this.id = value;
    }
    constructor(
        private name: string = name,
        private email: string = email,
        private password: string = password,
        private role: ROLE = role,
        private id: string = id
    ) { }

    // static toUserModel(user: any): UserModel {
    //     return new UserModel(
    //         user.id,
    //         user.name,
    //         user.email,
    //         user.password,
    //         user.role
    //     )
    // }

}