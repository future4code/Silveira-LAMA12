import { UserDatabase } from "../Data/UserDatabase";
import  UserModel  from "../Model/UserModel";
import { Authenticator } from "../Services/Authenticator";
import  {hashManager}  from "../Services/hashManager";
import { IdGenerator } from "../Services/IdGenerator";
import { loginType } from "../Types/LoginTypes";
import { authenticationData, ROLE } from "../Types/UniversalTypes";
import { UserTypes } from "../Types/UserTypes";

export class UserBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private hashManager: hashManager,
        private userDatabase: UserDatabase,
        private authenticator: Authenticator
    ) {}
    signUp = async (user: UserTypes) => {
        try {
            
            const { name, email, password } = user

            if (!name || !email || !password) {
                throw new Error("Porfavor insira um dos dados mencionados no body")
            }

            if (password.length < 6) {
                throw new Error("A senha precisa ter 6 ou mais caracteres!")
            }

            const id = this.idGenerator.generateId()

            const cryptedPassword =  await this.hashManager.hash(password)

            const newUser = new UserModel(name, email, cryptedPassword, ROLE.ADMINISTRADOR, id )
            
            // id, name, email, ROLE.ADMINISTRADOR, cryptedPassword

            await this.userDatabase.signUp(newUser)

            const authenticationId : authenticationData = { role : ROLE.ADMINISTRADOR , id : id}

            const token = this.authenticator.generateToken( authenticationId )

            return token

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    login = async (user: loginType) => {
        try {

            const { email, password } = user

            if ( !email || !password ) {
                throw new Error("Por favor insira um dos dados mencionados no body, nome e senha!")
            }

            const userFromDB = await this.userDatabase.selectUserByEmail(email)

            if (!userFromDB) {
                throw new Error(`E-mail não cadastrado!`)
            }

            const isPasswordCorrect = this.hashManager.compare(password, userFromDB.getPassword())

            if (!isPasswordCorrect) {
                throw new Error(`Senha inválida!`)
            }

            const token = this.authenticator.generateToken({
                
                id: userFromDB.getId(), 
                role : userFromDB.getRole()
            })

            return token

            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}