import UserModel from "../Model/UserModel";
import { connection } from "../Data/Connection";

export class UserDatabase {

    private TABLE_NAME = "NOME_TABELAS_USUARIOS"

    signUp = async (newUser: UserModel) => {
        try {

            console.log(newUser)

            await connection("NOME_TABELAS_USUARIOS")
                .insert({
                    id: newUser.getId(),
                    name: newUser.getName(),
                    email: newUser.getEmail(),
                    password: newUser.getPassword(),
                    role: newUser.getRole()
                })



        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectUserByEmail = async (email: string) => {
        try {
            const result = await connection(this.TABLE_NAME)
                .select("*")
                .where({ email })


            return result[0]

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}